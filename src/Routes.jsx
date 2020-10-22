import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';


import Cadastro from './pages/Cadastro';
import Carrinho from './pages/Carrinho';
import Categoria from './pages/Categoria';
import Checkout from './pages/Checkout/Checkout';
import Contato from './pages/Contato';
import Index from './pages/Index';
import Login from './pages/Login';
import Pedido from './pages/Pedido';
import Perfil from './pages/Perfil'
import Produto from './pages/Produto';
import Sucesso from './pages/SucessoCompra';


export default props => (
    <Router history={hashHistory}>
        <Route path='/cadastro' component={Cadastro}/>
        <Route path='/carrinho' component={Carrinho}/>
        <Route path='/categoria' component={Categoria}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/contato' component={Contato}/>
        <Route path='/index' component={Index}/>
        <Route path='/login' component={Login}/>
        <Route path='/pedido' component={Pedido}/>
        <Route path='/perfil' component={Perfil}/>
        <Route path='/produto' component={Produto}/>
        <Route path='/sucesso' component={Sucesso}/>
        <Redirect from='*' to='/checkout'/>
    </Router>
);
