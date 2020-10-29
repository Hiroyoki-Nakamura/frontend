import React, { Component } from 'react';
import { Link } from 'react-router';

import './styles.css';

export default class Product extends Component {
  state = {
    valor: '',
    desconto: ''
  }

  componentDidMount() {
    this.valores();
  }

  valores = () => {
    const valor = `${this.props.value}`.replace('.', ',');
    const desconto = `${this.props.valueOff}`.replace('.', ',');

    this.setState({ valor, desconto });
  }

  render() {
    return (
      <div className="col-12 col-sm-6 col-md-3">
        <div className="center product">
          <div className="image-product center">
            <img
              src={this.props.image} />
          </div>
          <div className="header-product">
            <h1 className="header-product">{this.props.name}</h1>
          </div>
          <div className="price-product"><label className="price-line">R$ {this.state.valor}</label> <label>R$ {this.state.desconto}</label></div>
          <div>
            <Link to='/produto' onClick={this.props.click} className="buy-product">comprar</Link>
          </div>
        </div>
      </div>
    );
  }
}