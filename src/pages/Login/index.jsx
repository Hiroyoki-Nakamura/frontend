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
    const spin = document.querySelector('.load');
    spin.classList.remove('none');
    over.classList.remove('none');

    const logged = await API.post('/cliente/login', {
      email: this.state.login,
      senha: this.state.senha,
    });

    if (logged.status != 202) {
      this.myAlert('Opps!', logged.data, 'danger');
    } else {
      this.myAlert('Login', 'Logado com sucesso', 'success');
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
        <div className="load center none">
          <div className="spin"></div>
          <div className="loader">Carregando</div>
        </div>
        {this.state.alert.title != '' && this.state.alert.content != '' && this.state.alert.style != '' ? <Alert title={`${this.state.alert.title}`} content={`${this.state.alert.content}`} style={`${this.state.alert.style}`} reset={this.resetForAlert} /> : ''}
        <div className="col-12">
          <div className="col-12 mt-5 mb-5">
            <h1 className="center">Login</h1>
            <div className="row">
              <div className="col-12 col-md-5">
                <div id="container1">
                  <div className="form-group text-login">Email</div>
                  <div className="form-group center">
                    <input type="text" className="text-center form-control w-75" placeholder="email" id="login" onChange={this.onChange} value={this.state.login} />
                  </div>
                  <div className="form-group text-login">Senha</div>
                  <div className="form-group center">
                    <input type="password" className="text-center form-control w-75" placeholder="digite sua senha" id="senha-conf" onChange={this.onChange} value={this.state.senha} />
                    <div className='eye_icon' type='button' onClick={() => this.Showpassword()}></div>
                  </div>

                  <div className="form-group">
                    <div className="btn btn-success text-uppercase w-75 py-3" onClick={() => this.postLogin()}>fazer Login</div>
                  </div>
                  <div className="form-group">
                    <a >Esqueci minha senha</a>
                  </div>
                </div>
              </div>

              <div className='col-2 col-sm-2 col-md-2 col-lg-2 center imgtaca'/>

              <div className="col-12 col-md-5">
                <div className='center' id='container2'>
                  <div>
                    <div className="form-group">
                      <label htmlFor="" className="text-login">Ou então cadastre-se</label>
                    </div>
                    <div className="form-group">
                      <div className="btn btn-success text-uppercase w-100 py-3"><a href="#/cadastro">Ir para cadastro</a></div>
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
