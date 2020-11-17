import React, { Component } from 'react';

import API from '../../Services/api';

export default class Categoria extends Component {
  
  setCategory = async () => {
    const id = this.props.category;
    const Products = await API.get(`/produto/bucarCategoria/${id}`);
    localStorage.setItem('category', JSON.stringify([ ...Products.data ]));
    const ref = window.location.href;
    if (!ref.includes('#/categoria')) {
      window.location.href = '#/categoria';
    } else {
      window.location.reload();
    }
  }

  render() {
    return (
      <li>
        <a className="dropdown-item" onClick={this.setCategory}>{this.props.value}</a>
      </li>
      
    )
  }
}