import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';


import Cadastro from './pages/Cadastro/Cadastro';
import Carrinho from './pages/Carrinho/Index';
import Categoria from './pages/Categoria/Index';
import Checkout from './pages/Checkout/Index';
import Contato from './pages/Contato/Index';
import Index from './pages/Index/Index';
import Login from './pages/Login/Index';
import Pedido from './pages/Pedido/Index';
import Perfil from './pages/Perfil/Index'
import Produto from './pages/Produto/Index';
import Sucesso from './pages/SucessoCompras/Index';


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
