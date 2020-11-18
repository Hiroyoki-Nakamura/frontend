import React, { Component } from 'react';
import './styles.css';

const BEFORE = {
  amount: 1,
  priceUnique: 0,
  priceTotal: 0,
  product: '',
  key: ''
}

export default class Linha extends Component {
  state = { ...BEFORE };

  componentDidMount() {
    this.initialization();
  }

  initialization = () => {
    const product = this.props.render;
    this.setState({
      priceTotal: (product.desconto_produto * this.props.amount).toFixed(2),
      priceUnique: product.desconto_produto.toFixed(2),
      product,
      amount: this.props.amount,
      key: this.props.chave
    });
  }

  plus = () => {
    this.setState({
      amount: this.state.amount + 1,
      priceTotal: ((this.state.priceUnique * (this.state.amount + 1)).toFixed(2))
    });
    this.props.cart(this.state.priceUnique, this.state.key, this.state.amount+1);
  }

  minus = () => {
    if (this.state.amount != 1) {
      this.setState({
        amount: this.state.amount - 1,
        priceTotal: ((this.state.priceUnique * (this.state.amount - 1)).toFixed(2))
      });
      this.props.cart(-this.state.priceUnique, this.state.key, this.state.amount-1);
    }
  }

  render() {
    return (
      <>
        <div className="row">

          <div className="col-1">
            <div className="center">
              <div className="card-body">
                <img className="imagem" src={this.state.product.ds_imagem} />
              </div>
            </div>
          </div>

          <div className="col-3 center mt-2" id="nomeProduto">
            <h5>{this.state.product.nome_produto}</h5>
          </div>

          <div className="col-2 center mt-3">
            <label htmlFor="">R$ {`${this.state.priceUnique}`.replace('.', ',')}</label>
          </div>

          <div className="col-lg-2 col-md-2 col-2 mt-2">
            <br />
            <div className="input-group center">
              <button className='btn btn-light' type="button" onClick={this.minus}>-</button>
              <input type="text" id="quantity" name="quantity" readOnly
                className="text-center quantity" value={this.state.amount} />
              <button className='btn btn-light' type="button" onClick={this.plus}>+</button>
            </div>

          </div>
          <div className="col-2 center mt-3">
            <label htmlFor="">R$ {`${this.state.priceTotal}`.replace('.', ',')}</label>
          </div>

          <div className="col-2 center">
            <button className='btn btn_remove_cart icon_remove_cart' onClick={() => this.props.removeItem(this.props.chave)} id={this.props.chave}>
            <div htmlFor={this.props.chave}>
            </div>
            </button>
          </div>

        </div>
        <hr />
      </>
    );
  }
}
