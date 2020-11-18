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
          <div className="icons acoes center pull-right col-12 col-sm-6 col-md-6 col-lg-6">
              <If test={this.state.client === ''}>
                <a href="#/login"><div className="logoUser btn btn_login"></div></a>
                <div className='text_user'>Login</div>
              </If>
              <If test={!(this.state.client === '')}>        
                <a href="#/pedido">{this.state.client.nome}<div className="logoUser btn btn_login"></div></a>
              </If>
              <a href="#/carrinho"><div className="logoCar btn btn_cart"></div></a>
          </div>
        </div>
      </header>
    );
  }
}