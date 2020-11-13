import React, { Component } from 'react';
import './styles.css';

import API from '../../Services/api';

const BEFORE = {
  name: '',
  email: '',
  subject: '',
  message: ''
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

  sendEmail = async () => {

    const sendObject = { ...this.state };    
    const response = await API.post('/sac', sendObject);
    alert('Mensagem enviada!')
    this.setState({name: ''});
    this.setState({email: ''});
    this.setState({subject: ''});
    this.setState({message: ''});

    // console.log(response);
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}
