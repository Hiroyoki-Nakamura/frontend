import React, { Component } from "react";

import Alert from '../../Components/Alert';
import API from "../../Services/api";

const BEFORE = {
  token: "",
  type: " ",
  password: "",
  confirmPassword: "",
  oldPassword: "",
  alert: {
    title: '',
    content: '',
    style: ''
  }
};

export default class extends Component {
  state = { ...BEFORE };

  componentDidMount() {
    this.getToken();
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

  getToken = async () => {
    const url_string = await window.location.href;
    const url = new URL(url_string);
    const url_gets = url.hash.split("?");

    if (url_gets.length > 1) {
      const url_search = url_gets[1].split("&");
      const token = url_search[0].replace("token=", "");
      const type = url_search[1].replace("type=", "");
      this.setState({ token, type });
      // } else {
      // window.location.href = '#/';
    }
  }

  validatePassword = () => {
    let send = true;
    if (this.state.type == 'alter') {
      if (this.state.oldPassword == '') {
        send = false;
        this.myAlert('Preencha os Campos!', 'Senha Atual', 'danger');
      }
    }

    if (this.state.password == '' || this.state.confirmPassword == '') {
      send = false;
      this.myAlert('Preencha os Campos!', 'Nova Senha e Confirmar Senha', 'danger');
    }

    if (this.state.password != this.state.confirmPassword) {
      send = false;
      this.myAlert(
        'As senhas no coenciden!',
        'Por favor reveja os campos senha e confirmar senha',
        'danger'
      );
    }

    if (send == true) {
      this.sendAterPassword();
    }
  }

  sendAterPassword = async () => {
    const over = document.querySelector('.overlay');
    const spin = document.querySelector('.load');

    over.classList.remove('none');
    spin.classList.remove('none');

    let objSendAlterPassword = {
      token: this.state.token,
      typeReset: this.state.type,
      newPassword: this.state.password
    }

    if (this.state.type == 'alter') {
      objSendAlterPassword = { ...objSendAlterPassword, oldPassword: this.state.oldPassword };
    }

    const response = await API.post('/alterPassword', objSendAlterPassword);

    if (response.status == 202) {
      this.myAlert(
        'Nova Senha',
        response.data,
        'success'
      );
    } else {
      this.myAlert(
        'Nova Senha',
        response.data,
        'danger'
      );
    }

    over.classList.add('none');
    spin.classList.add('none');
  }

  onChange = event => {
    const id = event.target.id;
    const value = event.target.value;

    switch (id) {
      case 'oldPassword':
        this.setState({ oldPassword: value });
        break;
      case 'newPassword':
        this.setState({ password: value });
        break;
      case 'confirmPassword':
        this.setState({ confirmPassword: value });
        break;
      default:
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

        <div className="center">
          <div className="my-5 py-5">
            <h3 className="center">Alteração da Senha</h3>

            {this.state.type == 'alter' ? <div className="form-group center d-flex flex-column">
              <label htmlFor="" className="col-form-label">Senha Atual:</label>
              <input type="password" id="oldPassword" value={this.state.oldPassword} onChange={this.onChange} />
            </div> : ''}

            <div className="form-group center d-flex flex-column">
              <label>Nova Senha: </label>
              <input type="password" id="newPassword" value={this.state.password} onChange={this.onChange} />
            </div>
            <div className="form-group center d-flex flex-column">
              <label htmlFor="">Confirmar Nova Senha: </label>
              <input type="password" id="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange} />
            </div>
            <div className="center">
              <div className="btn btn-success" onClick={this.validatePassword}>Alterar senha</div>
            </div>
          </div>
        </div>

        <div className='overlay none'></div>
      </>
    );
  }
}
