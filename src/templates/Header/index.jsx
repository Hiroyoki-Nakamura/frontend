import React, { Component } from 'react';
import './styles.css';

import If from './if';

const BEFORE = {
  client: ''
}

export default class Header extends Component {
  state = { ...BEFORE }

  componentDidMount() {
    const client = JSON.parse(localStorage.getItem('client'));
    if (client != null) {
      this.setState({ client });
    }
  }

  render() {
    return (
      <header className="Header">
        <div className="center logo row">
          <a href="#/"><div className="center logotipo col-6 sm-6"></div></a>
          <div className="icons acoes center">
            <div className="center">
              <If test={this.state.client === ''}>
                <a href="#/login">Login<div className="logoUser btn btn_login"></div></a>
              </If>
              <If test={!(this.state.client === '')}>
                <a href="#/pedido">{this.state.client.nome}<div className="logoUser btn btn_login"></div></a>
              </If>

              <a href="#/carrinho"><div className="logoCar btn btn_cart"></div></a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}