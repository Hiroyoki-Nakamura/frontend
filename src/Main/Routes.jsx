import React, { Component } from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Cadastro from '../pages/Cadastro';
import Carrinho from '../pages/Carrinho';
import Categoria from '../pages/Categoria';
import Checkout from '../pages/Checkout';
import Contato from '../pages/Contato';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Pedido from '../pages/Pedido';
import Perfil from '../pages/Perfil'
import Produto from '../pages/Produto';
import Sucesso from '../pages/SucessoCompras';

export default class Routes extends Component {
  state = {
    product: '',
    products: [],
    banners: []
  }

  select = product => {
    this.setState({ product: { ...product} });
  }

  getProduct = () => {
    return this.state.product;
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/cadastro' component={Cadastro} />
        <Route path='/carrinho' component={Carrinho} />
        <Route path='/categoria' component={Categoria} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/contato' component={Contato} />
        <Route path='/' component={Home} render={this.select} />
        <Route path='/login' component={Login} />
        <Route path='/pedido' component={Pedido} />
        <Route path='/perfil' component={Perfil} />
        <Route path='/produto' component={Produto} render={this.getProduct} />
        <Route path='/sucesso' component={Sucesso} />
        <Redirect from='*' to='/' />
      </Router>
    );

  }
} 
