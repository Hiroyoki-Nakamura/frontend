import React, { Component } from 'react';
import './styles.css';

import API from '../../Services/api';

const BEFORE = {
  page: 'cartao',
  nome_titular: '',
  cpf_titular: '',
  numero_cartao: '',
  cvv: '',
  pageCard: 'new',
  cartao: 0,
  cards: [],
  client: ''
}

export default class Pagamento extends Component {
  state = { ...BEFORE };

  postCards = async () => {
    // await API.post('/cartaoCredito/adicionarCartao', {
    //   nome_titular: this.nome_titular,
    //   numero_cartao: this.numero_cartao
    // });
  };

  listCards = async () => {
    const over = document.querySelector('.overlay');
    over.classList.remove('none');
    const client = JSON.parse(localStorage.getItem('client'));
    const cards = await API.get(`/cartao/listar/${client.id}`);

    if (cards.data == 'não encontramos cartões para esse usuario') {
      this.props.alertas('opss!', cards.data, 'a');
      this.setState({ client });
    } else {
      this.setState({ cards: [...cards.data] });
    }
    
    const spin = document.querySelector('.load');
    spin.classList.add('none');
    over.classList.add('none');
    this.setState({ pageCard: 'new' });
  };

  onChange = event => {
    const value = event.target.getAttribute('value');
    const id = event.target.getAttribute('id');

    switch (id) {
      case 'nome_titular':
        this.setState({ nome_titular: event.target.value });
        break;
      case 'numero_cartao':
        this.setState({ numero_cartao: event.target.value });
        break;
      case 'cpf_titular':
        this.setState({ cpf_titular: value });
        break;
      case 'cvv':
        this.setState({ cvv: value });
        break;
      case 'pageCard':
        if (value == 'old') {
          this.listCards();
        }
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
          <div className='col-6 my-1 center'>
            <div className='btn btn-primary radius' id='pageCard' value='old' onClick={this.onChange}>
              voltar
            </div>
          </div>
          <div className='col-6 my-1'>
            <div className='btn btn-secondary radius' > limpar</div>
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
        <div className="load center">
          <div className="spin"></div>
          <div className="loader">Carregando</div>
        </div>

        <label className='w-100 text-center'>Cartões cadastrados: </label>

        <select className="custom-select radius" id="">
          {this.state.cards.map(card => {
            return (
              <div>

              </div>
            );
          })}
        </select>
        <div className="w-100 center mt-2">
          <div className='btn btn-primary radius' id='pageCard' value='new' onClick={this.onChange}>usar outro cartão</div>
        </div>

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
      <div>
        {/* <div className={this.state.pageCard == 'new' ? 'mt-5' : ''}> */}
          {this.showCards()}
        {/* </div> */}
      </div>

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

        <h3 className='w-100 text-center'>Forma de Pagamento</h3>

        <div className="d-flex justify-content-center align-items-center">
          <input type="radio" name="tipo_pagamento" value="boleto" onChange={this.renderPay} className="radio" id="tipo_pagamento_boleto" aria-label="Radio button for following text input" />
          <label htmlFor='tipo_pagamento_boleto' className="form-check-label">Boleto</label>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <input type="radio" name="tipo_pagamento" value="cartao" onChange={this.renderPay} id="tipo_pagamento_cartao" aria-label="Radio button for following text input" defaultChecked />
          <label htmlFor='tipo_pagamento_cartao' className="form-check-label">Cartão de crédito</label>
        </div>
        {this.showPay()}
      
        <div className='overlay none'></div>
      </>
    );
  }
}
