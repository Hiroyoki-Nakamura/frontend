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
          </div>
        </div>

        <div className="row">
          <div className="container col-12">
            <div className="row">

              <div className="col-12">
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
