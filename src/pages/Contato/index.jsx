import React, { Component } from 'react';
import './styles.css';

import API from '../../Services/api';

import Alert from '../../Components/Alert';

const BEFORE = {
  name: '',
  email: '',
  subject: '',
  message: '',
  alert: {
    title: '',
    content: '',
    style: ''
  }
};

export default class Contato extends Component {
  state = { ...BEFORE };

  changeState = event => {
    const id = event.target.id;
    const value = event.target.value;

    switch (id) {
      case 'name':
        this.setState({ name: value });
        break;
      case 'email':
        this.setState({ email: value });
        break;
      case 'subject':
        this.setState({ subject: value });
        break;
      case 'message':
        this.setState({ message: value });
        break;
      default:
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

  sendEmail = async () => {
    const over = document.querySelector('.overlay');
    const spin = document.querySelector('.load');

    spin.classList.remove('none');
    over.classList.remove('none');

    const sendObject = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };

    const response = await API.post('/sac', sendObject);

    if (response.status == 202) {
      this.myAlert('SAC!', response.data, 'success');
      this.setState({ name: '', email: '', subject: '', message: '' });
    } else {
      this.myAlert('Opps!', response.data, 'danger');
    }

    spin.classList.add('none');
    over.classList.add('none');

    if (response.status == 202) {
      window.location.href = '#/';
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
          <div className="col-md-12 col-sm-12 col-12 py-2 pb-4 my-5 bg-secondary radius">

            <div className="col-12">
              <div className="titleContato">
                <h1 className='center top_text'>Central de Atendimento</h1>
                <h3 className='center second_text'>Fale conosco!</h3>
              </div>
            </div>

            <div className="col-12">
              <div className="row py-3 bg-light radius">

                <div className="col-12">
                  <label htmlFor="exampleInputPassword1">Nome Completo</label>
                  <input type="text" className="form-control text-center" placeholder="Digite seu nome" id='name' value={this.state.name} onChange={this.changeState} />
                </div>

                <div className="col-12">
                  <label htmlFor="">Email</label>
                  <input type="email" className="form-control text-center" placeholder='Digite seu email' id='email' value={this.state.email} onChange={this.changeState} />
                </div>

                <div className="col-12">
                  <label htmlFor="exampleInputPassword1">Assunto</label>
                  <input type="text" className="form-control text-center" placeholder="Digite o assunto" id='subject' value={this.state.subject} onChange={this.changeState} />
                </div>

                <div className="col-12 form-group">
                  <label htmlFor="exampleFormControlTextarea1">Comentário</label>
                  <textarea className="form-control text-center" id="message" placeholder='Digite sua mensagem' onChange={this.changeState} value={this.state.message} rows="3"></textarea>
                </div>

                <div className="col-12">
                  <p> Iremos retornar sua resposta para o seu e-mail.</p>
                  <div className="center">
                    <div type="submit" className="btn btcc radius py-2 px-4" id="" onClick={this.sendEmail}>Enviar</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className="overlay none"></div>
      </>
    );
  }
}
