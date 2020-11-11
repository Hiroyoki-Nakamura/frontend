import React, { Component } from 'react';

const BEFORE = {
  page: '',
  nome_titular: '',
  cpf_titular: '',
  numero_cartao: '',
  cvv: ''
}

export default class Pagamento extends Component {
  state = { ...BEFORE };

  onChange = (event) => {
    const value = (event.target.value);
    const id = (event.target.id);

    console.log(id, value, 'do componente de pagamento');

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
      default:
        break;
    }
  };

  renderPay = event => {
    this.setState({ page: event.target.value });
    this.props.Pay(event.target.value);
  };

  showPay = () => {
    const page = this.state.page;
    const card =
      <>
        <div className='mt-2'>
          <label className='w-100 text-center'>Nº do cartão </label>
          <input className="form-control text-center" id='numero_cartao' placeholder="0000-0000-0000-0000" onChange={this.onChange} value={this.state.numero_cartao} />

          <label className='w-100 text-center'>Nome no cartão</label>
          <input className='form-control text-center' id='nome_titular' placeholder="NOME ESCRITO NO CARTÃO" onChange={this.onChange} value={this.state.nome_titular} />

          <label className='w-100 text-center'>Validade</label>
          <input className='form-control text-center' id='validade_cartao' placeholder="mês/ano" onChange={this.onChange} value={this.state.validade_cartao} />

          <label className='w-100 text-center'>CVV</label>
          <input id="cvv" className='form-control text-center' onChange={this.onChange} maxLength='3' placeholder="000" />

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

          <div className='center'>
            <img className="img " src="/img/visa.png " width="40px " height="40px" />
            <img className="img " src="/img/master.png " width="40px " height="40px " />
            <img className="img " src="/img/boleto.png " width="40px " height="40px " />
          </div>
        </div>
      </>

    const billet =
      <>
        <div className='w-100 h-auto'>
        </div>
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

        <div className='d-flex justify-content-center align-items-center h-75'>
          <div className="d-flex justify-content-center align-items-center w-100">
            {this.showPay()}
          </div>
        </div>
      </>
    );
  }
}
