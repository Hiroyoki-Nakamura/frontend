import React from 'react';

import './styles.css';

export default props => (
  <div className="col-6 col-md-3">
    <div className="center product">
      <div className="image-product">
        <img
          src="../img/Chivas-12-anos (3).png" alt="Chivas 12 anos" />
      </div>
      <div className="header-product">
        <h1 className="header-product">{props.name}</h1>
      </div>
      <div className="price-product"><label className="price-line">R$ {props.value}</label> <label>R$ {props.valueOff}</label></div>
      <div>
        <button className="buy-product">comprar</button>
      </div>
    </div>
  </div>
);