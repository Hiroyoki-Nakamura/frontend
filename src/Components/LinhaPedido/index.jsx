import React, { Component } from 'react';
import './styles.css';

const BEFORE = {
  amount: 1,
  priceUnique: 0,
  priceTotal: 0,
  product: ''
}

export default class Linha extends Component {
  state = { ...BEFORE };

  componentDidMount() {
    this.initialization();
  }

  initialization = () => {
    const product = this.props.render;
    this.setState({
      priceTotal: product.desconto_produto.toFixed(2),
      priceUnique: product.desconto_produto.toFixed(2),
      product
    });
  }

  plus = () => {
    this.setState({
      amount: this.state.amount + 1,
      priceTotal: ((this.state.priceUnique * (this.state.amount + 1)).toFixed(2))
    });
    this.props.cart(this.state.priceUnique);
  }

  minus = () => {
    if (this.state.amount > 1) {
      this.setState({
        amount: this.state.amount - 1,
        priceTotal: ((this.state.priceUnique * (this.state.amount - 1)).toFixed(2))
      });
    }
    this.props.cart(-this.state.priceUnique);
  }

  total = event => {
    const amount = event.target.value;
    if (amount >= 1) {
      this.setState({
        amount,
        priceTotal: (this.state.priceUnique * amount).toFixed(2)
      });
    } else {
      this.setState({ amount: 1 });
    }
  }

  sendTotalPrice = () => {
    this.props.cart(this.state.priceTotal);
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
            <label htmlFor="">{`${this.state.priceUnique}`.replace('.', ',')}</label>
          </div>

          <div className="col-lg-2 col-md-2 col-2 mt-2">
            <br />
            <div className="input-group">
              <button className='btn btn-danger' type="button" onClick={this.minus}>-</button>
              <input type="text" id="quantity" name="quantity"
                className="form-control input-number" onChange={this.total} value={this.state.amount} />
              <button className='btn btn-success' type="button" onClick={this.plus}>+</button>
            </div>

          </div>
          <div className="col-2 center mt-3">
            <label htmlFor="">{`${this.state.priceTotal}`.replace('.', ',')}</label>
          </div>

          <div className="col-2 center">
            <button className='btn btn-outline-danger btn_remove_cart icon_remove_cart' onClick={() => this.props.removeItem(this.props.chave)} id={this.props.chave}>
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
