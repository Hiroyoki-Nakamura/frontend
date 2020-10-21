import React from 'react';
import './header.css';

export default props => (
  <header className="Header">
  <div className="center logo">
    <div className="center logotipo"></div>
    <div className="acoes center">
      <div className="center">
        <div className="logoUser"></div>login
      </div>
      <div className="center">
        <div className="logoCar"></div> carrinho
      </div>
    </div>
  </div>
</header>
)