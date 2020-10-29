import React, { Component } from 'react';
import './styles.css';
import api from '../../Services/api'

export default class Login extends Component{

  constructor() {
    super()

    this.state= {
      login: "",
      senha: ""
    }
  }

  onChange = (event) => {
    const valor= (event.target.value)
    console.log (valor)
    this.setState ({login: valor})

    const verificar= (event.target.id)
    console.log (verificar)

    switch (verificar) {
      case 'login-conf':
        this.setState ({login: valor})
      break;
      default:
        this.setState ({senha: valor})
    }
    }


  postLogin = () => {
      api.post('/cliente/login', {
        email: this.state.login,
        senha: this.state.senha,
       }
      )
  }


  render(){
    return(
      <div className="col-12">
      <form className="col-12 mt-5 mb-5" id="formulario">
        <h1 className="center">Login</h1>
        <div className="row">
          <div className="col-5">
            <div id="container1">
              <div className="form-group">Login</div>
              <div className="form-group">
                <input type="text" placeholder="username" id= "login-conf" onChange={this.onChange} value={this.state.login} style={{ textAlign: + 'center' }} />
              </div>
              <div className="form-group">Senha</div>
              <div className="form-group">
                <input type="password" placeholder="digite sua senha" id= "senha-conf" onChange={this.onChange} value={this.state.senha} style={{ textAlign: + 'center' }} />
              </div>
              <div className="form-group">
                <button className="btn btn-success" onclick >Login</button>
              </div>
              <div className="form-group">
                <a href="forgotPassword.html">Esqueci minha senha</a>
              </div>
            </div>
  
          </div>
          <div className='col-2 center'>
            <img className="w-100 h-50" src='img/taca_uvas.png' />
          </div>
  
          <div className="col-5"  >
            <div className='center' id='container2'>
              <form>
                <div className="form-group">
                  <label for="">Ou então cadastre-se</label>
                </div>
                <div className="form-group">
                  <button className="btn btn-success" type="submit" ><a href="#/cadastro">Ir para cadastro</a></button>
                </div>
              </form>
            </div>
  
          </div>
        </div>
      </form>
    </div>

    );
  }
}
