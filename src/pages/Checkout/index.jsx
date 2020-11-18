import React, { Component } from 'react';
import './styles.css';

import Address from '../../Components/Endereco';
import Payment from '../../Components/Pagamento';
import Alert from '../../Components/Alert';

import API from '../../Services/api';

const BEFORE = {
  price: '',
  client: '',
  payment: 'cartao',
  address: 0,
  alert: {
    title: '',
    content: '',
    style: ''
  },
  card: ''
}

export default class Checkout extends Component {
  state = { ...BEFORE };

  componentDidMount() {
    this.initialization();
  }

  initialization = async () => {
    const client = await JSON.parse(localStorage.getItem('client'));
    const enderecos = await API.get(`/endereco/buscar/${client.id}`);
    const cartSettings = await JSON.parse(localStorage.getItem('cartSettings'));

    const price = `${cartSettings.totalPrice}`.replace('.', ',');

    this.setState({
      enderecos: [...enderecos.data],
      price: price,
      address: enderecos.data[0].id
    });
  };

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
  }

  resetForAlert = () => {
    this.setState({ alert: { title: '', content: '', style: '' } });
  }

  startLoading = () => {
    const over = document.querySelector('.overlay');
    const spin = document.querySelector('.load');

    spin.classList.remove('none');
    over.classList.remove('none');
  }

  stopLoading = () => {
    const over = document.querySelector('.overlay');
    const spin = document.querySelector('.load');

    spin.classList.add('none');
    over.classList.add('none');
  }

  onChange = (event) => {
    const value = (event.target.value);
    const id = (event.target.id);

    switch (id) {
      case 'endereco_entrega':
        this.setState({ address: value });
        break;
      default:
        break;
    }
  };

  postOrder = async () => {
    this.startLoading();

    const client = JSON.parse(localStorage.getItem('client'));
    const cart = await JSON.parse(localStorage.getItem('cart'));

    let dados_pagamento;
    if (this.state.payment == 'boleto') {
      dados_pagamento = {
        ds_boleto: parseInt(Math.random() * 1000000000000000)
      }
    } else {
      dados_pagamento = {
        id_cartao: this.state.card
      }
    }

    const typePayment = (this.state.payment == 'boleto' ? 1 : 2);

    const objSend = {
      cliente: client.id,
      endereco_entrega: this.state.address,
      tipo_pagamento: typePayment,
      dados_pagamento: { ...dados_pagamento },
      produtos: [...cart],
      frete: '35',
      valor_total: parseFloat(this.state.price.replace(',', '.'))
    };

    const sendOrder = await API.post('/pedido/criar', objSend);

    if (sendOrder.status == 201) {
      this.myAlert('novo Pedido', sendOrder.data, 'success');
    } else {
      this.myAlert('Opps!', sendOrder.data, 'danger');
    }

    this.stopLoading();

    if (sendOrder.status == 201) {
      localStorage.removeItem('cart');
      localStorage.removeItem('cartSettings');
      window.location.href = '#/pedido';
    }
  };

  Payment = payment => {
    this.setState({ payment });
    console.log(this.state.payment)
  };

  switchCard = card => {
    this.setState({ card });
  }

  render() {
    return (
      <>
        <div className="load center none">
          <div className="spin"></div>
          <div className="loader">Carregando</div>
        </div>
        {this.state.alert.title != '' && this.state.alert.content != '' && this.state.alert.style != '' ? <Alert title={`${this.state.alert.title}`} content={`${this.state.alert.content}`} style={`${this.state.alert.style}`} reset={this.resetForAlert} /> : ''}
        <div className="row my-5 py-3 center flex-container radius">
          <div className="col-12 col-md-4">
            <div className='radius step-checkout content-enter px-2 py-2 w-100'>
              <Address onChange={this.onChange} alertas={this.myAlert} startLoading={this.startLoading} stopLoading={this.stopLoading} />
            </div>
          </div>
          <div className="col-12 col-md-4 my-2">
            <div className='radius step-checkout content-enter px-2 py-2'>
              <Payment Pay={this.Payment} startLoading={this.startLoading} stopLoading={this.stopLoading} card={this.switchCard} onChange={this.onChange} alertas={this.myAlert} />
            </div>
          </div>
          <div className=" col-12 col-md-4">
            <div className='radius step-checkout content-enter px-2 py-2'>

              <h3 className='w-100 text-center'>Confirmar Dados</h3>
              <div className='d-flex justify-content-center align-items-center h-75'>
                <div>
                  <div className="d-flex flex-column">
                    <label>Frete: </label>
                    <label type="text" className='text-center'> R$ 35,00</label>
                  </div>
                  <div className="d-flex flex-column">
                    <label>Valor Total: </label>
                    <label type="text-area " className='text-center'> R$ {this.state.price} </label>
                  </div>

                  <div className="d-flex justify-content-center mt-3 btn-review">
                    <a href="../html/index.html" className="col-12 btn btcc">Voltar para produtos </a>
                    <a className="col-12 btn btn-success btn-finalizar align-items-center mt-3" onClick={this.postOrder}>Finalizar compra</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="overlay none"></div>
      </>
    );
  };
}
