import React, { Component } from 'react';
import './styles.css';

import API from '../../Services/api';

import $ from 'jquery';
import mask from 'jquery-mask-plugin';

const BEFORE = {
  page: 'cartao',
  nome_titular: '',
  numero_cartao: '',
  cvv: '',
  validade_cartao: '',
  pageCard: 'old',
  cartao: 0,
  cards: [],
  client: ''
}

export default class Pagamento extends Component {
  state = { ...BEFORE };

  componentDidMount() {
    if (this.state.pageCard == "old") {
      this.listCards();
    }
  }

  postCards = async () => {
    this.props.startLoading();

    const client = JSON.parse(localStorage.getItem('client'));

    const objSend = {
      nome_titular: this.state.nome_titular,
      numero_cartao: this.state.numero_cartao,
      cd_cliente: client.id
    }

    const response = await API.post('/cartao/adicionar', objSend);

    let switchPageCard = false;
    if (response.status == 201) {
      switchPageCard = true;
      this.props.alertas('Cartão', response.data, 'success');
    } else {
      this.props.alertas('Opps!', response.data, 'danger');
    }

    if (switchPageCard == true) {
      this.setState({ pageCard: 'new' })
    }

    this.props.stopLoading();
  };

  listCards = async () => {
    this.props.startLoading();

    const client = JSON.parse(localStorage.getItem('client'));
    const cards = await API.get(`/cartao/listar/${client.id}`);

    let alter = false;
    if (cards.data == 'não encontramos cartões para esse usuario') {

      this.props.alertas('opss!', cards.data, 'danger');
      this.setState({ client });
      alter = true;

    } else {
      this.setState({ cards: [...cards.data] });
      this.props.card(cards.data[0].id);
    }

    this.props.stopLoading();

    if (alter == true) {
      this.setState({ pageCard: 'new' });
    }
  };

  clearCardForm = () => {
    this.setState({
      nome_titular: '',
      numero_cartao: '',
      cvv: '',
      validade_cartao: ''
    });
  }

  onChange = event => {
    const id = event.target.id;
    const value = event.target.value;

    $('#numero_cartao').mask('0000-0000-0000-0000');
    $('#validade_cartao').mask('00/00')

    switch (id) {
      case 'nome_titular':
        this.setState({ nome_titular: value });
        break;
      case 'numero_cartao':
        this.setState({ numero_cartao: value });
        break;
      case 'cvv':
        this.setState({ cvv: value });
        break;
      case 'validade_cartao':
        this.setState({ validade_cartao: value })
        break;
      case 'pageCard':
        const alter = event.target.getAttribute('value');
        if (alter == 'old') {
          this.listCards();
        }
        this.setState({ pageCard: alter });
        break;
      default:
        break;
    }
  };

  alertCard = event => {
    const value = event.target.value;
    if (value != '') {
      this.props.card(value);
    }
  }

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
              <input id="cvv" className='form-control text-center' value={this.state.cvv} onChange={this.onChange} maxLength='3' placeholder="000" />
            </div>
          </div>
        </div>

        {/* <label className='w-100 text-center'>Quantidade de Parcelas</label>
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
        </select> */}

        <div className='container row col-12 my-1'>
          <div className='col-6 my-1 center'>
            <div className='btn btn-primary ' id='pageCard' value='old' onClick={this.onChange}>
              Escolher Cartão
            </div>
          </div>
          <div className='col-6 my-1'>
            <div className='btn btn-secondary btcc' onClick={this.clearCardForm}>limpar</div>
          </div>
          <div className='col-12 center my-1'>
            <div className='btn btn-success radius' onClick={this.postCards}>
              salvar cartão
            </div>
          </div>
        </div>

        {/* <div className='center'>
          <img className="img " src="/img/visa.png " width="40px " height="40px" />
          <img className="img " src="/img/master.png " width="40px " height="40px " />
          <img className="img " src="/img/boleto.png " width="40px " height="40px " />
        </div> */}
      </>

    const cards =
      <>
        <div className='listCard marginTopListCard'>
          <label className='w-100 text-center'>Cartões cadastrados: </label>

          <select className="custom-select radius" onChange={this.alertCard} id="cartao_credito">
            {this.state.cards.map(card => {
              const numberCard = card.numero_cartao.substr(0, 4);
              const text = `${card.nome_titular} - ${numberCard}`;
              return (
                <option value={card.id}>
                  {text}
                </option>
              );
            })}
          </select>

          <div className="w-100 center mt-2">
            <div className='btn btn-primary' id='pageCard' value='new' onClick={this.onChange}>usar outro cartão</div>
          </div>
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
        {this.showCards()}
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
      </>
    );
  }
}
