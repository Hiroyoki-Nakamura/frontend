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
      <header className="Header central">
        <div className="center row logo">
          <a href="#/"> <div id='logolink' className="center logotipo col-12 col-sm-6 col-md-6 col-lg-6" ></div> </a>
          <div className="icons acoes center col-12 col-sm-6 col-md-6 col-lg-6">
              <If test={this.state.client === ''}>
                <a className='logoUser' href="#/login"><div className="btn btn_login"></div></a>
                <a href="#/pedido">
                  <div className="center">{this.state.client.nome}</div>
                  <div className="btn btn_login"></div>
                </a>
              </If>
              <If test={!(this.state.client === '')}>        
                <a className='center' href="#/pedido"><div className="logoUser btn btn_login"></div><div className='testando'>{this.state.client.nome}</div></a>
              </If>
              <a href="#/carrinho"><div className="logoCar btn btn_cart"></div></a>
          </div>
        </div>
      </header>
    );
  }
}