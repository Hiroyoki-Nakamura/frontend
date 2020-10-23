import React from 'react';
import './styles.css';

export default props => (
  <>
    <br />
    <div className="row">
      <div className="col-12 center" id="labels">
        <label>{props.numeroPedido}</label>
        <label>R$ {props.valor}</label>
        <label>{props.data}</label>
        <label>{props.status}</label>
      </div>
    </div>
  </>
);
