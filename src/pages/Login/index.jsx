import React, { Component } from 'react';
import './styles.css';

import API from '../../Services/api'

export default class Login extends Component {

  constructor() {
    super()

    this.state = {
      login: "",
      senha: ""
    }
  }

  componentDidMount() {
    const client = JSON.parse(localStorage.getItem('client'));
    if (client != null) {
      window.location.href = '/';
    }
  }

  onChange = (event) => {
    const valor = (event.target.value)
    const verificar = (event.target.id)

    switch (verificar) {
      case 'login':
        this.setState({ login: valor })
        break;
      default:
        this.setState({ senha: valor })
    }
  }

  postLogin = async () => {
    console.log(this.state.login, this.state.senha)
    const logged = await API.post('/cliente/login', {
      email: this.state.login,
      senha: this.state.senha,
    });

    localStorage.setItem('client', JSON.stringify(...logged.data));
    window.location.href = '/';
  }

  render() {
    return (
      <div className="col-12">
        <form className="col-12 mt-5 mb-5" id="formulario">
          <h1 className="center">Login</h1>
          <div className="row">
            <div className="col-5">
              <div id="container1">
                <div className="form-group">Login</div>
                <div className="form-group">
                  <input type="text" className="text-center" placeholder="email" id="login" onChange={this.onChange} value={this.state.login} />
                </div>
                <div className="form-group">Senha</div>
                <div className="form-group">
                  <input type="password" className="text-center" placeholder="digite sua senha" id="senha-conf" onChange={this.onChange} value={this.state.senha} />
                </div>
                <div className="form-group">
                  <div className="btn btn-success" onClick={() => this.postLogin()} >Login</div>
                </div>
                <div className="form-group">
                  <a href="forgotPassword.html">Esqueci minha senha</a>
                </div>
              </div>

            </div>
            <div className='col-2 center'>
              <img className="w-100 h-50" src='img/taca.png' />
            </div>

            <div className="col-5"  >
              <div className='center' id='container2'>
                <div>
                  <div className="form-group">
                    <label htmlFor="">Ou então cadastre-se</label>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-success"><a href="#/cadastro">Ir para cadastro</a></button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </form>
      </div>
    );
  }
}
