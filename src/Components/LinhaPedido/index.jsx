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
    this.inicialization();
  }

  inicialization = () => {
    const product = this.props.render;
    this.setState({
      priceTotal: product.desconto_produto,
      priceUnique: product.desconto_produto,
      product
    });
  }

  plus = () => {
    this.setState({
      amount: this.state.amount + 1,
      priceTotal: (this.state.priceUnique * (this.state.amount + 1))
    });
    this.props.cart(this.state.priceUnique);
  }

  minus = () => {
    if (this.state.amount > 1) {
      this.setState({
        amount: this.state.amount - 1,
        priceTotal: (this.state.priceUnique * (this.state.amount - 1))
      });
    }
    this.props.cart(-this.state.priceUnique);
  }

  total = event => {
    const amount = event.target.value;
    if (amount >= 1) {
      this.setState({
        amount,
        priceTotal: (this.state.priceUnique * amount)
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
        <br />
        <div className="row">

          <div className="col-1">
            <div className="center">
              <div className="card-body">
                <img className="imagem" src={this.state.product.ds_imagem} />
              </div>
            </div>
          </div>

          <div className="col-3" id="nomeProduto">
            <h5>{this.state.product.nome_produto}</h5>
          </div>

          <div className="col-2 center">
            <label htmlFor="">{`${this.state.priceUnique}`.replace('.', ',')}</label>
          </div>

          <div className="col-2">
            <br />
            <div className="input-group">
              <button className='btn btn-danger' type="button" onClick={this.minus}>-</button>
              <input type="text" id="quantity" name="quantity"
                className="form-control input-number" onChange={this.total} value={this.state.amount} />
              <button className='btn btn-success' type="button" onClick={this.plus}>+</button>
            </div>

          </div>
          <div className="col-2 center">
            <label htmlFor="">{`${this.state.priceTotal}`.replace('.', ',')}</label>
          </div>

          <div className="col-2 center">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">

              </label>
            </div>
          </div>

        </div>
      </>
    );
  }
}
