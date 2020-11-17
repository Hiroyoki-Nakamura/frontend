import React, { Component } from 'react';
import './styles.css';

import API from '../../Services/api'

import Alert from '../../Components/Alert';

const BEFORE = {
  login: "",
  senha: "",
  alert: {
    title: '',
    content: '',
    style: ''
  }
}

export default class Login extends Component {
  state = { ...BEFORE };

  componentDidMount() {
    const client = JSON.parse(localStorage.getItem('client'));
    if (client != null) {
      window.location.href = '#/pedido';
    }
  }

  myAlert = (title, content, style) => {
    let showAlert;
    if (title != undefined && content != undefined && style != undefined) {
      showAlert = true;
    } else {
      showAlert = false;
    }

    if (showAlert) {
      this.setState({ alert: { title, content, style } });
    }
  };

  resetForAlert = () => {
    this.setState({ alert: { title: '', content: '', style: '' } });
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

  Showpassword(){
    let pass = document.getElementById("senha-conf")
    if(pass.type === "password"){
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }

  postLogin = async () => {
    const over = document.querySelector('.overlay');
    const spin = document.querySelector('.load-cadastro');
    spin.classList.remove('none');
    over.classList.remove('none');

    const logged = await API.post('/cliente/login', {
      email: this.state.login,
      senha: this.state.senha,
    });

    if (logged.status != 202) {
      this.myAlert('Opps!', logged.data, 'a');
    } else {
      this.myAlert('Login', 'Logado com sucesso', 'a');
    }

    spin.classList.add('none');
    over.classList.add('none');

    
    if (logged.status == 202) {
      localStorage.setItem('client', JSON.stringify(...logged.data));
      window.location.href = '#/pedido';
    }
  }

  render() {
    return (
      <>
        <div className="load-cadastro center none">
          <div className="spin"></div>
          <div className="loader">Carregando</div>
        </div>
        {this.state.alert.title != '' && this.state.alert.content != '' && this.state.alert.style != '' ? <Alert title={`${this.state.alert.title}`} content={`${this.state.alert.content}`} style={`${this.state.alert.style}`} reset={this.resetForAlert} /> : ''}
        <div className="col-12">
          <div className="col-12 mt-5 mb-5" id="formulario">
            <h1 className="center">Login</h1>
            <div className="row">
              <div className="col-5">
                <div id="container1">
                  
                  <div className="form-group">Login</div>
                  <div className="form-group center col-12">
                    <input type="text" className="text-center form-control w-75" placeholder="email" id="login" onChange={this.onChange} value={this.state.login} />
                  </div>

                  <div className="form-group">Senha</div>
                  <div className="form-group center col-12">
                    <input className="text-center form-control w-75" type="password" placeholder="digite sua senha" id="senha-conf" onChange={this.onChange} value={this.state.senha} />
                    <div className='eye_icon' type='button' onClick={() => this.Showpassword()}></div>
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
                      <div className="btn btn-success"><a href="#/cadastro">Ir para cadastro</a></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='overlay none'></div>
      </>
    );
  }
}
