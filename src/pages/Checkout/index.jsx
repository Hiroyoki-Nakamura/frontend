import React, { Component } from 'react';
import './styles.css';

import API from '../../Services/api';

// import Endereco from '../Endereco'

const BEFORE = {
  price: '',
  showHideForm: false,
  client: '',
  page: 'cartao',
  enderecos: [],
  nome_titular: '',
  cpf_titular: '',
  numero_cartao: '',
  address: 0,
  cvv: '',
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
    const cartSettings = await JSON.parse(localStorage.getItem('cartSettings'));

    const price = `${cartSettings.totalPrice}`.replace('.', ',');

    this.setState({
      enderecos: [...enderecos.data],
      price: price,
      address: enderecos.data[0].id
    });
  }

  postCards = async () => {
    // await API.post('/cartaoCredito/adicionarCartao', {
    //   nome_titular: this.nome_titular,
    //   numero_cartao: this.numero_cartao
    // });

    const client = JSON.parse(localStorage.getItem('client'));
    const cart = await JSON.parse(localStorage.getItem('cart'));

    let dados_pagamento;
    if (this.state.page == 'boleto') {
      dados_pagamento = {
        ds_boleto: parseInt(Math.random() * 1000000000000000)
      }
    } else {
      dados_pagamento = {
        id_cartão: client.id
      }
    }

    const objSend = {
      cliente: client.id,
      endereco_entrega: this.state.address,
      tipo_pagamento: (this.state.page == 'boleto' ? 1 : 2),
      dados_pagamento,
      produtos: [...cart],
      valor_total: parseFloat(this.state.price.replace(',', '.'))
    };

    const sendOrder = await API.post('/pedido/criar', objSend);

    console.log(sendOrder);

    // alert(sendOrder );
    
    // localStorage.removeItem('cart');
    // localStorage.removeItem('cartSettings');
    // window.location.href = '/';
  };

  onChange = (event) => {
    const value = (event.target.value);
    const id = (event.target.id);

    console.log(value, id);

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
      case 'boleto_nome':
        this.setState({ nome_titular: value });
        break;
      case 'boleto_cpf':
        this.setState({ cpf_titular: value });
        break;
      case 'endereco_entrega':
        this.setState({ address: value });
        break;
      default:
        break;
    }
  };

  renderPay = event => {
    this.setState({ page: event.target.value });
  };

  showPay = () => {
    const page = this.state.page;
    const card =
      <>
        <form className='mt-2'>
          <label className='w-100 text-center'>Nº do cartão </label>
          <input type="text-area" className="form-control text-center" id='numero_cartao' placeholder="0000-0000-0000-0000" onChange={this.onChange} value={this.state.numero_cartao} />

          <label className='w-100 text-center'>Nome no cartão</label>
          <input type="text-area" className='form-control text-center' id='nome_titular' placeholder="NOME ESCRITO NO CARTÃO" onChange={this.onChange} value={this.state.nome_titular} />

          <label className='w-100 text-center'>Validade</label> <input type="text-area" className='form-control text-center' id='validade_cartao' placeholder="mês/ano" onChange={this.onChange} value={this.state.validade_cartao} />

          <label className='w-100 text-center'>CVV</label>
          <input type="text-area"
            id="cvv" className='form-control text-center'
            onChange={this.onChange} maxLength='3' placeholder="000" />

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
        </form>
      </>

    const billet =
      <>
        <div className='w-100 h-auto'>
          {/* <label className='w-100 text-center' htmlFor="boleto_nome">Nome:</label>
          <input type="text" id='boleto_nome' className='form-control text-center' onChange={this.onChange} />
          <label className='w-100 text-center' htmlFor="boleto_cpf">CPF:</label>
          <input type="text" id='boleto_cpf' className='form-control text-center' onChange={this.onChange} /> */}
        </div>
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

      <>

        <div className="row my-5 py-3 center flex-container radius">

          <div className="col-12 col-md-4">
            <div className='radius content-enter px-2 py-2 w-100'>
              <h3 className='w-100 text-center'>Endereço de Entrega</h3>
              <div className='d-flex justify-content-center align-items-center h-75'>
                <div className="h-auto">
                  <label className='w-100 text-center'> Endereço cadastrado: </label>
                  <select className="custom-select radius" onClick={this.onChange} id="endereco_entrega" >
                    {this.state.enderecos.map(address => {
                      const addressComplete = `${address.cep} - ${address.rua},${address.numero} - ${address.bairro} - ${address.cd_uf}`;
                      return <option key={address.id} value={address.id}>{addressComplete}</option>
                    })}

                  </select>
                  <div className='center'>

                    <a className="btn btn-primary btn-lg active mt-5 radius" role="button" aria-pressed="true" >Entregar em outro Endereço</a>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div className="col-12 col-md-4 my-2">
            <div className='radius content-enter px-2 py-2'>
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
            </div>

          </div>

          <div className=" col-12 col-md-4">

            <div className='radius content-enter px-2 py-2'>
              <h3 className='w-100 text-center'>Confirmar Dados</h3>
              <div className='d-flex justify-content-center align-items-center h-75'>
                <div>
                  <label>Frete: </label>
                  <input type="text" className='form-control text-center' readOnly value='R$ 35,00'/>
                  <label>Valor Total:</label>
                  <input type="text-area " className='form-control text-center' readOnly value={'R$ ' + this.state.price} />
                  <div className="d-flex justify-content-center mt-5">
                    <a href="../html/index.html" className="col btn btcc radius">Continuar</a>
                    <a className="col btn btn-success align-items-center radius" onClick={this.postCards}><label>Comprar</label></a>
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