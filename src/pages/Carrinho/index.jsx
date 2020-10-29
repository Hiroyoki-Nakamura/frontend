import React, { Component } from 'react';
import './styles.css';

import Linha from '../../Components/LinhaPedido';

export default class Carrinho extends Component {
  state = {
    products: [],
    totalPrice: 0,
    minValue: 0
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const products = JSON.parse(localStorage.getItem('cart')) || [];
    this.setState({ products });
    let minValue = 0;
    products.map(product => {
      minValue += product.desconto_produto
    });

    this.setState({ totalPrice: minValue, minValue })
  }

  setTotalPriceCart = price => {
    const newTotalPrice = (parseFloat(this.state.totalPrice) + parseFloat(price)).toFixed(2);
    if (newTotalPrice >= this.state.minValue) {
      this.setState({ totalPrice: newTotalPrice });
    }
  }

  hasLogged = () => {
    const client = JSON.parse(localStorage.getItem('client'));
    const response = client == null ? 'login' : 'checkout';
    return response;
  }

  removeItem = productId => {
    const products = this.state.products;
    let productsRemoved = []
    products.forEach((product, key) => {
      if (productId != key) {
        productsRemoved.push(product);
      }
    });
    localStorage.setItem('cart', JSON.stringify(productsRemoved));
    this.getProducts();
  }

  render() {
    return (
      <>
        <div className="container" id="">
          <div className="row">
            <div className="col-12 mt-1 mb-4">

              <h2 className="center corvalor">Carrinho</h2>

              <div className="container" id="topo">
                <div className="row">

                  <div className="col-12 pb-5">

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

                </div>
              </div>

              <div>

                <div className="container" id="carrinho">
                  {this.state.products.map((product, key) => {
                    return (
                      <Linha
                        key={key}
                        chave={key}
                        cart={this.setTotalPriceCart}
                        removeItem={this.removeItem}
                        render={product} />
                    );
                  })}
                </div>

              </div>

              <div className="container col-12 base">
                <div className="row">

                  <div className="col-12">

                    <label className="corvalor">Valor Total</label>
                    <input className="valortotal" disabled value={'R$ ' + `${this.state.totalPrice}`.replace('.', ',')} />

                    <div className="row">
                      <div className="col-1" id="voltar">
                        <a href="#/"><button type="button" className="btn btn-secondary botao" id="botao">Voltar</button></a>
                      </div>

                      <div className="col-2">
                        <a href={'#/' + this.hasLogged()}><button type="button" className="btn btn-success btn-md btn-block botao"
                          id="botao">Confirmar</button></a>
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
