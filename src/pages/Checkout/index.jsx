import React, { Component } from 'react';
import './styles.css';

import API from '../../Services/api';

const BEFORE = {
  ufs: [],
  pageAdress: 'novoEndereco',
  price: '',
  showHideForm: false,
  client: '',
  page: 'cartao',
  enderecos: [],
  rua: '',
  bairro: '',
  complemento: '',
  referencia: '',
  numero: '',
  cep: '',
  uf: '',
  nome_titular: '',
  cpf_titular: '',
  numero_cartao: '',
  address: 0,
  cvv: '',
}

export default class Checkout extends Component {
  state = { ...BEFORE };

  componentDidMount() {
    this.initialization();
  }

  initialization = async () => {
    const client = JSON.parse(localStorage.getItem('client'));
    const ufs = await API.get('/uf');
    const enderecos = await API.get(`/endereco/buscar/${client.id}`);
    const cartSettings = await JSON.parse(localStorage.getItem('cartSettings'));

    const price = `${cartSettings.totalPrice}`.replace('.', ',');

    this.setState({
      enderecos: [...enderecos.data],
      price: price,
      address: enderecos.data[0].id,
      ufs: [...ufs.data]
    });
  } 

  getEndereco = async () => {
    const client = JSON.parse(localStorage.getItem('client'));
    const enderecos = await API.get(`/endereco/buscar/${client.id}`);
    this.setState({
      enderecos: [...enderecos.data],
      address: enderecos.data[0].id
    });
  }

  getUfs = async () => {
    const ufs = await API.get('/uf');
    this.setState({ ufs: [...ufs.data] });
  }

  postEnderecos = async () => {
    const client = JSON.parse(localStorage.getItem('client'))
    const sendObject = await API.post('/endereco/salvar', {
      rua: this.state.rua,
      bairro: this.state.bairro,
      complemento: this.state.complemento,
      referencia: this.state.referencia,
      numero: this.state.numero,
      cep: this.state.cep,
      cd_uf: this.state.uf,
      cd_cliente: client.id
    });

    if (sendObject.status == 201) {
      alert(sendObject.data);
      this.setState({ pageAdress: 'novoEndereco' });
      this.getEndereco();
    } else {
      alert(sendObject.data);
    }
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
      frete: '35',
      valor_total: parseFloat(this.state.price.replace(',', '.'))
    };

    const sendOrder = await API.post('/pedido/criar', objSend);

    if (sendOrder.status == 201) {
      alert('pedido criado com sucesso!');

      // localStorage.removeItem('cart');
      // localStorage.removeItem('cartSettings');
      // window.location.href = '#/pedido';
    } else {
      alert(sendOrder.data);
    }

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
      case 'rua':
        this.setState({ rua: value })
        break;
      case 'numero':
        this.setState({ numero: value })
        break;
      case 'bairro':
        this.setState({ bairro: value })
        break;
      case 'complemento':
        this.setState({ complemento: value })
        break;
      case 'referencia':
        this.setState({ referencia: value })
        break;
      case 'cep':
        this.setState({ cep: value })
        break;
      case 'uf':
        this.setState({ uf: value })
        break;
      default:
        break;
    }
  };

  renderAdress = event => {
    this.setState({ pageAdress: event.target.id });
  }

  showAdress = () => {
    const pageAdress = this.state.pageAdress;
    const Adress =
      <>
        <h3 className='w-100 text-center'>Endereço de Entrega</h3>
        <div className='d-flex justify-content-center align-items-center h-75'>
          <div className="h-auto">
            <label className='w-100 text-center'> Endereço cadastrado: </label>
            <select className="custom-select radius" onChange={this.onChange} id="endereco_entrega" >
              {this.state.enderecos.map(address => {
                const addressComplete = `${address.cep} - ${address.rua},${address.numero} - ${address.bairro} - ${address.cd_uf}`;
                return <option key={address.id} value={address.id}>{addressComplete}</option>
              })}

            </select>
            <div className='center'>

              <a className="btn btn-primary btn-lg active mt-5 radius" aria-pressed="true" id="endereco" value="endereco" onClick={this.renderAdress} >Entregar em outro Endereço</a>
            </div>
          </div>
        </div>
      </>

    const newAdress =
      <>
        <h3 className='w-100 text-center'>Endereço de Entrega</h3>

        <div className='w-100 height-new-address overflow-auto'>

          <div className="form-group">
            <label className='w-100 text-center'>Rua</label>
            <input type="text" className="form-control text-center" id="rua" placeholder="Rua" onChange={this.onChange} value={this.state.rua} />
          </div>

          <div className="form-group">
            <label className='w-100 text-center'>Número</label>
            <input type="text" className="form-control text-center" id="numero" placeholder="Nº" onChange={this.onChange} value={this.state.numero} />
          </div>

          <div className="form-group">
            <label className='w-100 text-center'>Bairro</label>
            <input type="text" className="form-control radius text-center" id="bairro" placeholder="Bairro" onChange={this.onChange} value={this.state.bairro} />
          </div>

          <div className="form-group">
            <label className='w-100 text-center'>Complemento</label>
            <input type="text" className="form-control text-center" id="complemento" placeholder="Complemento" onChange={this.onChange} value={this.state.complemento} />
          </div>

          <div className="form-group">
            <label className='w-100 text-center'>Referência</label>
            <input type="text" className="form-control text-center" id="referencia" placeholder="Referência" onChange={this.onChange} value={this.state.referencia} />
          </div>

          <div className="form-group">
            <label className='w-100 text-center'>UF</label>
            <select className="custom-select form-control text-center radius" id="uf" onChange={this.onChange}>
              {this.state.ufs.map(uf => {
                return <option key={uf.id} value={uf.id}>{uf.ds_uf}</option>
              })}
            </select>
          </div>

          <div className="form-group">
            <label className='w-100 text-center'>CEP</label>
            <input type="CEP" className="form-control text-center" id="cep" placeholder="00000-000" onChange={this.onChange} value={this.state.cep} />
          </div>

          <div className="center">
            <a className="btn btn-primary radius mx-2" id="novoEndereco" aria-pressed="true" onClick={this.renderAdress} value="novoEndereco">Voltar</a>
            <a className="btn  btn-success mx-2 radius " id="salvar" aria-pressed="true" onClick={this.postEnderecos} >Salvar</a>
          </div>

        </div>
      </>

    switch (pageAdress) {
      case 'endereco':
        return newAdress;
      case 'novoEndereco':
        return Adress;
      default:

    }
  }

  renderPay = event => {
    this.setState({ page: event.target.value });
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
  }

  render() {
    return (
      <>
        <div className="row my-5 py-3 center flex-container radius">

          <div className="col-12 col-md-4">
            <div className='radius content-enter px-2 py-2 w-100'>

              {this.showAdress()}

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
                  <input type="text" className='form-control text-center' readOnly value='R$ 35,00' />
                  <label>Valor Total:</label>
                  <input type="text-area " className='form-control text-center' readOnly value={'R$ ' + this.state.price} />
                  <div className="d-flex justify-content-center mt-5">
                    <a href="../html/index.html" className="col btn btcc radius mx-1">Continuar</a>
                    <a className="col btn btn-success align-items-center radius mx-1" onClick={this.postCards}><label>Comprar</label></a>
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
