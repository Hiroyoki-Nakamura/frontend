import React, { Component } from 'react';

import API from '../../Services/api';

import Alert from '../../Components/Alert';

const BEFORE = {
  page: 'cartao',
  nome_titular: '',
  cpf_titular: '',
  numero_cartao: '',
  cvv: '',
  pageCard: 'new',
  cartao: 0,
  cards: [],
  showAlert: false
}

export default class Pagamento extends Component {
  state = { ...BEFORE };

  componentDidMount() {
    this.listCards();
  }

  postCards = async () => {
    // await API.post('/cartaoCredito/adicionarCartao', {
    //   nome_titular: this.nome_titular,
    //   numero_cartao: this.numero_cartao
    // });
  };

  myAlert = (title, content, style) => {
    const showAlert = this.state.showAlert;

    if (title != undefined && content != undefined && style != undefined) {
      console.log(showAlert);
      switch (showAlert) {
        case true:
          return <Alert title={`${title}`} content={`${content}`} style={`${style}`} />;
        default:
      }
    } else {
      return <></>;
    }
  }

  listCards = async () => {
    const client = JSON.parse(localStorage.getItem('client'));
    const cards = await API.get(`/cartao/listar/${client.id}`);

    await this.setState({ showAlert: true });

    this.myAlert('teste', cards.data, 'danger');
  };

  onChange = event => {
    const value = event.target.getAttribute('value');
    const id = event.target.getAttribute('id');

    switch (id) {
      case 'nome_titular':
        this.setState({ nome_titular: value });
        break;
      case 'numero_cartao':
        this.setState({ numero_cartao: value });
        break;
      case 'cpf_titular':
        this.setState({ cpf_titular: value });
        break;
      case 'cvv':
        this.setState({ cvv: value });
        break;
      case 'pageCard':
        this.setState({ pageCard: value });
      default:
        break;
    }
  };

  renderPay = event => {
    this.setState({ page: event.target.value });
    this.props.Pay(event.target.value);
  };

  showCards = () => {
    const page = this.state.pageCard;

    const newCard =
      <>
        <label className='w-100 text-center'>Nº do cartão </label>
        <input className="form-control text-center" id='numero_cartao' placeholder="0000-0000-0000-0000" onChange={this.onChange} value={this.state.numero_cartao} />

        <label className='w-100 text-center'>Nome no cartão</label>
        <input className='form-control text-center' id='nome_titular' placeholder="NOME ESCRITO NO CARTÃO" onChange={this.onChange} value={this.state.nome_titular} />

        <div className="container">
          <div className="row">
            <div className="col-6">
              <label className='w-100 text-center'>Validade</label>
              <input className='form-control text-center' id='validade_cartao' placeholder="mês/ano" onChange={this.onChange} value={this.state.validade_cartao} />
            </div>
            <div className="col-6">
              <label className='w-100 text-center'>CVV</label>
              <input id="cvv" className='form-control text-center' onChange={this.onChange} maxLength='3' placeholder="000" />
            </div>
          </div>
        </div>

        <label className='w-100 text-center'>Quantidade de Parcelas</label>
        <select className="custom-select form-control" id="inputGroupSelect02">
          <option>1x sem juros</option>
          <option>2x sem juros</option>
          <option>3x sem juros</option>
          <option>4x sem juros</option>
          <option>5x sem juros</option>
          <option>6x sem juros</option>
          <option>7x sem juros</option>
          <option>8x sem juros</option>
          <option>9x sem juros</option>
          <option>10x sem juros</option>
        </select>

        <div className='container row col-12 my-1'>
          <div className='col-8 my-1 center'>
            <div className='btn btn-primary radius' id='pageCard' value='old' onClick={this.onChange}>
              selecionar cartão
            </div>
          </div>
          <div className='col-4 my-1'>
            <div className='btn btn-secondary radius'> limpar</div>
          </div>
          <div className='col-12 center my-1'>
            <div className='btn btn-success radius'>
              salvar cartão
            </div>
          </div>
        </div>

        <div className='center'>
          <img className="img " src="/img/visa.png " width="40px " height="40px" />
          <img className="img " src="/img/master.png " width="40px " height="40px " />
          <img className="img " src="/img/boleto.png " width="40px " height="40px " />
        </div>
      </>

    const cards =
      <>
        <label className='w-100 text-center'>Cartões cadastrados: </label>
        <select className="custom-select radius" id="">
          {this.state.cards.map(card => {
            return (
              <div>

              </div>
            );
          })}
        </select>

        <div className='btn btn-primary radius' id='pageCard' value='new' onClick={this.onChange}>usar outro cartão</div>
      </>

    switch (page) {
      case 'new':
        return newCard;
      case 'old':
        return cards;
      default:
        break;
    }
  };

  showPay = () => {
    const page = this.state.page;
    const card =
      <>
        <div className=''>
          {this.showCards()}
        </div>
      </>

    const billet =
      <>
        <div className='w-100 h-auto'></div>
      </>

    switch (page) {
      case 'cartao':
        return card;
      case 'boleto':
        return billet;
      default:
    }
  };

  render() {
    return (
      <>
        {this.myAlert()}
        <h3 className='w-100 text-center'>Forma de Pagamento</h3>

        <div className="d-flex justify-content-center align-items-center">
          <input type="radio" name="tipo_pagamento" value="boleto" onChange={this.renderPay} className="radio" id="tipo_pagamento_boleto" aria-label="Radio button for following text input" />
          <label htmlFor='tipo_pagamento_boleto' className="form-check-label">Boleto</label>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <input type="radio" name="tipo_pagamento" value="cartao" onChange={this.renderPay} id="tipo_pagamento_cartao" aria-label="Radio button for following text input" defaultChecked />
          <label htmlFor='tipo_pagamento_cartao' className="form-check-label">Cartão de crédito</label>
        </div>

        <div className='d-flex justify-content-center align-items-center h-75'>
          <div className="d-flex justify-content-center align-items-center w-100">
            {this.showPay()}
          </div>
        </div>
      </>
    );
  }
}
