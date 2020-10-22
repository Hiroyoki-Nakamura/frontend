import React from 'react';
import './header.css';

export default props => (
  <header className="Header">
  <div className="center logo">
    <div className="center logotipo"></div>
    <div className="acoes center">
      <div className="center">
        <div className="logoUser btn btn_login"></div> login
      </div>
      <div className="center">
        <div className="logoCar btn btn_cart"></div>carrinho 
      </div>
    </div>
  </div>
</header>
)