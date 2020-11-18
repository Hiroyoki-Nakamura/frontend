import React, { Component } from 'react';
import './styles.css';

import Linha from '../../Components/LinhaPedido';

const BEFORE = {
  products: [],
  totalPrice: 0,
  minValue: 0,
  cart: ''
}

export default class Carrinho extends Component {
  state = { ...BEFORE };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const products = JSON.parse(localStorage.getItem('cart')) || [];
    let minValue = 0;
    let totalPrice = 0;

    await products.forEach(product => {
      const amount = product.quantidade == null ? 1 : product.quantidade;
      product.quantidade = amount;
      minValue += product.desconto_produto;
      totalPrice += (product.desconto_produto * amount);
      product.valor = (product.desconto_produto * amount);
    })

    minValue = minValue.toFixed(2);
    totalPrice = totalPrice.toFixed(2);

    localStorage.setItem('cartSettings', JSON.stringify({
      totalPrice: totalPrice
    }));
    localStorage.setItem('cart', JSON.stringify([...products]));

    await this.setState({
      totalPrice,
      minValue,
      products
    });

    this.renderCart();
  }

  setTotalPriceCart = (price, keyAccess, amount) => {
    const newTotalPrice = parseFloat(parseFloat(this.state.totalPrice) +
      parseFloat(price)).toFixed(2);
    const minValue = parseFloat(this.state.minValue).toFixed(2);

    if (parseInt(newTotalPrice) >= parseInt(minValue)) {
      const products = this.state.products;
      products.forEach((product, key) => {
        if (keyAccess == key) {
          product.quantidade = amount;
        }
      });

      localStorage.setItem('cartSettings', JSON.stringify({
        totalPrice: newTotalPrice
      }));
      localStorage.setItem('cart', JSON.stringify([...products]));

      this.setState({ products, totalPrice: newTotalPrice });
    }
  }

  hasLogged = () => {
    const client = JSON.parse(localStorage.getItem('client'));
    const response = client == null ? 'login' : 'checkout';
    const redirect = this.state.totalPrice > 0 ? 'checkout' : '';

    if (response == 'checkout') {
      return redirect;
    } else {
      return response;
    }
  }

  removeItem = async productId => {
    const products = this.state.products;
    let productsRemoved = []
    await products.forEach((product, key) => {
      if (productId != key) {
        productsRemoved.push(product);
      }
    });
    await localStorage.setItem('cart', JSON.stringify(productsRemoved));
    window.location.reload();
  }

  renderCart = async () => {
    const cart = this.state.products.map((product, key) => (
      <Linha
        key={key}
        chave={key}
        amount={product.quantidade}
        cart={this.setTotalPriceCart}
        removeItem={this.removeItem}
        render={product} />
    ));
    this.setState({ cart });
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <div className="row">
            <div className="col-12 my-1">
              <h2 className="center">Carrinho</h2>
            </div>


            <div className="col-12 container" id="topo">
              <div className="row">

                <div className="col-4">
                  <h4 className="center">Produto</h4>
                </div>

                <div className="col-2">
                  <h4 className="center">Vlr Unidade</h4>
                </div>

                <div className="col-2">
                  <h4 className="center">Quantidade</h4>
                </div>

                <div className="col-2">
                  <h4 className="center">Subtotal</h4>
                </div>

                <div className="col-2">
                  <h4 className="center">Remover</h4>
                </div>

              </div>
            </div>




            <div className="col-12 carrinho">

              {this.state.cart}

            </div>



            <div className="container col-12 base">
              <div className="row">

                <div className="col-12">

                  <div className='float-right w-25'>

                    <div className='row'>
                      <div className="col-12 d-flex justify-content-between">
                        <label className="valortotal">Valor Total</label>
                        <label className="price"> R$ {`${this.state.totalPrice}`.replace('.', ',')}</label>
                      </div>
                    </div>


                    <div className="d-flex flex-column-reverse">

                      <a href="#/"><button type="button" className="btn btn-dark btcc radius mt-3 w-100">Continuar comprando</button></a>

                      <a href={'#/' + this.hasLogged()}><button type="button" className="btn btn-success btn-md btn-block radius text-uppercase py-3">Finalizar Compra</button></a>

                      <div className="col-2">
                      </div>
                    </div>
                  </div>


                </div>

              </div>
            </div>

          </div>
        </div>

      </>
    );
  }
}
