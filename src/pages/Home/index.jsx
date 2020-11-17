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
    this.setProducts();
  }

  productSelected = product => {
    this.props.route.render(product);
  }

  setProducts = async () => {
    const localProducts = JSON.parse(localStorage.getItem('products'));
    const localBanners = JSON.parse(localStorage.getItem('banners'));

    const products = await API.get('/produto/listar');

    if (localProducts == null || localBanners == null
      || products.data.length != localProducts.length) {

      if (localBanners == null) {
        const banners = await API.get('/imagens/Banner');

        localStorage.setItem('banners', JSON.stringify([...banners.data]));

        this.setState({ banners: [...banners.data] });
      }

      // console.log(products)
      localStorage.setItem('products', JSON.stringify([...products.data]));

      this.setState({
        products: [...products.data]
      });

    } else {
      this.setState({
        banners: localBanners,
        products: localProducts
      });
    }
  }

  render() {
    return (
      <>
        <div className="mt-2">

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

        </div>
      </>
    );
  }
} 