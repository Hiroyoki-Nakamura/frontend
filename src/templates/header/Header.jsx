import React from 'react';
import './header.css';

export default props => (
  <header className="Header">
  <div className="center logo">
    <div className="center logotipo"></div>
    <div className="acoes center">
      <div className="center">
        <a href="#/login"><div className="logoUser btn btn_login"></div></a>
      </div>
      <div className="center">
        <a href="#/carrinho">
          <div className="logoCar btn btn_cart"></div> 
          </a>
          
      </div>
    </div>
  </div>
</header>
)