import React, { Component } from 'react';
import './styles.css';

export default class extends Component {
  click = () => {

    localStorage.setItem('getProductId', this.props.product.id);

    const verify = window.location.href;

    if (verify.includes('produto')) {

      window.location.reload();

    } else {
      window.location.href = '#/produto';

      this.props.hide();
    }
  }

  render() {
    return (
      <>
        <div className="product-complet" onClick={this.click}>
          <div className="product-image" onClick={this.click}>
            <img onClick={this.click} src={this.props.product.ds_imagem} />
          </div>
          <div className="product-name" onClick={this.click}>{this.props.product.nome_produto}</div>
        </div>
      </>
    );
  }
}