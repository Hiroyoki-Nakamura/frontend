import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';


import Cadastro from './pages/Cadastro/Cadastro';
import Carrinho from './pages/Carrinho/Carrinho';
import Categoria from './pages/Categoria/Categoria';
import Checkout from './pages/Checkout/Checkout';
import Contato from './pages/Contato/Contato';
import Index from './pages/Index/Index';
import Login from './pages/Login/Login';
import Pedido from './pages/Pedido/Pedido';
import Perfil from './pages/Perfil/Perfil';
import Produto from './pages/Produto/Produto';
import Sucesso from './pages/SucessoCompra/SucessoCompra';


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
        <Redirect from='*' to='/sucesso'/>
    </Router>
);
