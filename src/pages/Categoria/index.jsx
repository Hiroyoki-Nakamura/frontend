import React, { Component } from 'react';
import './styles.css';

import API from '../../Services/api';

import $ from 'jquery';

import Banners from '../../Components/Banners';
import Product from '../../Components/Produto';

const BEFORE = {
  banners: [],
  products: []
}

export default class Categorias extends Component {
  state = { ...BEFORE }

  componentDidMount() {
    $('.carousel').carousel()
    this.setProducts();
  }

  productSelected = product => {
    this.props.route.render(product);
  }

  setProducts = async () => {
    const localProducts = localStorage.getItem('category');
    const localBanners = localStorage.getItem('banners');

    if (localProducts == null || localBanners == null) {
      const products = await API.get('/produto/listar');
      const banners = await API.get('/imagens/Banner');

      localStorage.setItem('category', JSON.stringify([...products.data]));
      localStorage.setItem('banners', JSON.stringify([...banners.data]));

      this.setState({
        banners: [...banners.data],
        products: [...products.data]
      });
    } else {
      this.setState({
        banners: JSON.parse(localBanners),
        products: JSON.parse(localProducts)
      });
    }
  }

  render() {
    return (
      <>
        <div className='mt-2'>
          <Banners images={this.state.banners} />
        </div>

        <div className="products">
          <div className="header-products center">
            <h2 className="center">Bebidas</h2>
            <select className="hp2" name="order_by" id="orderby">
              <option value="maior-menor">Maior - Menor $</option>
              <option value="menor-maior">Menor - Maior $</option>
              <option value="maior-menor">A - Z</option>
              <option value="maior-menor">Z - A</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="container col-12">
            <div className="row">

              <div className="col-3">
                <div className="col-12 filter">
                  <div className="filter-products">Filtros </div>
                  <div className="sublin"> Valores</div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="100_500" />
                    <label className="form-check-label" for="100_500">R$100-R$500</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="500_800" />
                    <label className="form-check-label" for="500_800">R$500-R$800</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="800_1000" />
                    <label className="form-check-label" for="800_1000">R$800-R$1000</label>
                  </div>
                  <div className="sublin">Tipo</div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="tinto" />
                    <label className="form-check-label" for="tinto">Tinto</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="rose" />
                    <label className="form-check-label" for="rose">Rose</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Outros" />
                    <label className="form-check-label" for="Outros">Outros</label>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="row">
                  {this.state.products.map(product => {
                    return (
                      <Product key={product.id}
                        name={product.nome_produto} value={product.valor_produto} valueOff={product.desconto_produto} image={product.ds_imagem} click={() => this.productSelected(product)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
