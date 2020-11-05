import React, { Component } from 'react';
import './styles.css';

import API from '../../Services/api';

// import Endereco from '../Endereco'

const BEFORE = {
  showHideForm: false,
  page: 'cartao',
  enderecos: [],
  cartoes_credito: {
    nome_titular: '',
    cpf_titular: '',
    numero_cartao: '',
  },
  tipo_pagamentos: {
    boleto: 'boleto',
    cartao_credito: 'cartao_credito'
  }
}

export default class Checkout extends Component {

  state = { ...BEFORE };

  componentDidMount() {
    this.getEndereco();
  }

  showPage = () => {

  }

  getEndereco = async () => {
    const client = JSON.parse(localStorage.getItem('client'));
    const enderecos = await API.get(`/endereco/buscar/${client.id}`);

    this.setState({ enderecos: [...enderecos.data] });
  }

  // postCards = async () => {
  //   await API.post('/cartaoCredito/adicionarCartao', {
  //     nome_titular: this.nome_titular,
  //     numero_cartao: this.numero_cartao
  //   });
  // };

  onChange = (event) => {
    const a = (event.target.value);
    const b = (event.target.id);

    switch (b) {
      case 'nome_titular':
        this.setState({ nome_titular: a });
        break;
      case 'numero_cartao':
        this.setState({ numero_cartao: a });
        break;
      case 'cpf_titular':
        this.setState({ cpf_titular: a });
        break;
      default:
        break;
    }
  }

  renderPay = event => {
    this.setState({ page: event.target.value });
  }

  showPay = () => {
    const page = this.state.page;
    const card =
      <>
        <form id="formulariocartao">

          <label>Nº do cartão </label>
          <input type="text-area" className="form-control text-center" id='numero_cartao' placeholder="0000-0000-0000-0000" onChange={this.onChange} value={this.state.numero_cartao} />

          <label>Nome no cartão</label>
          <input type="text-area" className='form-control text-center' id='nome_titular' placeholder="NOME ESCRITO NO CARTÃO" onChange={this.onChange} value={this.state.nome_titular} />

          <label>Validade</label> <input type="text-area" className='form-control  text-center' id='validade_cartao' placeholder="mês/ano" onChange={this.onChange} value={this.state.validade_cartao} />

          <label>CVV</label>
          <input type="text-area" className='form-control text-center' maxLength='3' placeholder="000" />

          <label>Quantidade de Parcelas</label>
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
        </form>

        <div className='center icon_payMethods'>
          <img className=" img " src="/img/visa.png " width="40px " height="40px" />
          <img className="img " src="/img/master.png " width="40px " height="40px " />
          <img className="img " src="/img/boleto.png " width="40px " height="40px " />
        </div>
      </>

    const billet =
      <>
        <label htmlFor="boleto_nome">Nome:</label>
        <input type="text" id='boleto_nome' className='form-control text-center'/>
        <label htmlFor="boleto_cpf">CPF:</label>
        <input type="text" id='boleto_cpf' className='form-control text-center'/>
      </>

    switch (page) {
      case 'cartao':
        return card;
      case 'boleto':
        return billet;
      default:
    }
  }

  render() {
    return (

      <div>

        <div className="flex-container my-5 py-3 col-12">

          <div className="ede col-4">
            <h3>Endereço de Entrega</h3>
            <label className="ed"> Endereço cadastrado: </label>
            <select className=".select_endereco custom-select" id="enderecos" >
              {this.state.enderecos.map(address => {
                const addressComplete = `${address.cep} - ${address.rua},${address.numero} - ${address.bairro} - ${address.cd_uf}`;
                return <option key={address.id} value={address.id}>{addressComplete}</option>
              })}

            </select>
            <div className='center'>

              <a className="btn btn-primary btn-lg active mt-5 radius" role="button" aria-pressed="true" >Entregar em outro Endereço</a>
            </div>

          </div>

          <div className="modopg col-4">
            <h3>Forma de Pagamento</h3>

            <div>
              <input type="radio" name="tipo_pagamento" value="boleto" onChange={this.renderPay} className="radio" id="tipo_pagamento_boleto" aria-label="Radio button for following text input" />
              <label htmlFor='tipo_pagamento_boleto'>Boleto</label>
            </div>
            <div>
              <input type="radio" name="tipo_pagamento" value="cartao" onChange={this.renderPay} id="tipo_pagamento_cartao" aria-label="Radio button for following text input" defaultChecked />
              <label htmlFor='tipo_pagamento_cartao'>Cartão de crédito</label>
            </div>

            { this.showPay() }

          </div>

          <div className="confirmadados col-4">
            <h3>Confirmar Dados</h3>

            <div>
              <label>Valor Frete:</label>
              <input type="text-area " className='form-control text-center' placeholder="R$ 000,00 " />
              <label>Valor Total:</label>
              <input type="text-area " className='form-control text-center' placeholder="R$ 000,00 " />
              <div className="d-flex justify-content-center mt-5">
                <a href="../html/index.html" className="col btn btcc radius">Continuar</a>
                <a href="../html/sucesso_compra.html" className="col btn btn-success btfc align-items-center radius" onClick={this.postCards}><label>Comprar</label></a>
              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }

}