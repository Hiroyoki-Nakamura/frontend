import React from 'react';
import './styles.css';

import API from '../../Services/api';

import $ from 'jquery';

import Banners from '../../Components/Banners';
import Product from '../../Components/Produto';

const BEFORE = {
  banners: [],
  products: []
}

export default class Home extends React.Component {
  state = { ...BEFORE }

  componentDidMount() {
    $('.carousel').carousel()
    this.getProdutos();
  }

  getProdutos = async () => {
    const products = await API.get('/produto/listar');
    const banners = await API.get('/imagens/Banner');

    this.setState({
      banners: [...banners.data],
      products: [...products.data]
    });
  }

  productSelected = product => {
    this.props.route.render(product);
    console.log( this.props);
  }

  render() {
    return (
      <>
        <div className="col-12 mt-3">
          <section>

            <Banners
              images={this.state.banners}
            />

            <div className="products">

              <div className="header-products">
                <h2>Bebidas</h2>
              </div>

              <div className="container">
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
          </section>
        </div>
      </>
    );
  }
} 