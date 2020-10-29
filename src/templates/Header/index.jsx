import React from 'react';
import './styles.css';

export default props => (
  <header className="Header">
  <div className="center logo row">
    <a href="#/home"><div className="center logotipo col-6 sm-6"></div></a>
    <div className="icons acoes center">
      <div className="center">
        <a href="#/login">Login<div className="logoUser btn btn_login"></div></a>
        <a href="#/carrinho"><div className="logoCar btn btn_cart"></div></a>
      </div>
    </div>
  </div>
</header>
)