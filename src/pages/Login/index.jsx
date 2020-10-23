import React, { Component } from 'react';
import './styles.css';

export default class Login extends Component {
  state = {
    login: ''
  }

  chageText = event => {
    console.log(event.target.value);
  }

  render() {
    return (
      <form className="col-12 form-group" id="formulario">
        <h1 className="center">Login</h1>
        <div className="row">
          <div className="col-4" id="container1">
            <div className="form-group">Login</div>
            <div className="form-group">
              <input type="text" value={this.state.login} placeholder="username" style={{ textAlign: + 'center' }} onChange={this.chageText} />
            </div>
            <div className="form-group">Senha</div>
            <div className="form-group">
              <input type="password" placeholder="digite sua senha" style={{ textAlign: + 'center' }} />
            </div>
            <div className="form-group">
              <button className="btn btn-success">Login</button>
            </div>
            <a href="forgotPassword.html">Esqueci minha senha</a>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img className="imagem_centro" src='./img/taca_uvas.png' />
          </div>

          <div className="col-4 center" id="container2" >
            <form action="">
              <div className="form-group">
                <label for="">Ou então cadastre-se</label>
              </div>
              <div className="form-group">
                <button className="btn btn-success" type="submit" ><a href="#/cadastro">Ir para cadastro</a></button>
              </div>
            </form>
          </div>
          
        </div>
      </form>

    );
  }
} 