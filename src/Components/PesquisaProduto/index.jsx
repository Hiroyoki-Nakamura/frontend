import { Form } from "formik";
import React, { Component } from 'react';
import './styles.css';

export default class extends Component {
  click = () => {
    // alert('clicou')
    localStorage.setItem('getProductId', this.props.product.id);
    window.location.href = '#/produto'
  }

  render() {
    return (
      <>
        <div className="center product-complet" onClick={this.click}>
          <div className="product-image" onClick={this.click}>
            <img onClick={this.click} src={this.props.product.ds_imagem} />
          </div>
          <div className="product-name" onClick={this.click}>{this.props.product.nome_produto}</div>
        </div>
      </>
    );
  }
}