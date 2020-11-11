import React, { Component } from 'react';
import './styles.css';

import Address from '../../Components/Endereco';
import Payment from '../../Components/Pagamento';

import API from '../../Services/api';

const BEFORE = {
  price: '',
  client: '',
  page: 'cartao',
  address: 0,
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
  }

  postCards = async () => {
    // await API.post('/cartaoCredito/adicionarCartao', {
    //   nome_titular: this.nome_titular,
    //   numero_cartao: this.numero_cartao
    // });
  };

  onChange = (event) => {
    const value = (event.target.value);
    const id = (event.target.id);

    console.log(id, value);

    switch (id) {
      case 'endereco_entrega':
        this.setState({ address: value });
        break;
      default:
        break;
    }
  };

  postOrder = async () => {
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
  }

  renderPay = page => {
    this.setState({ page });
  };

  render() {
    return (
      <>
        <div className="row my-5 py-3 center flex-container radius">

          <div className="col-12 col-md-4">
            <div className='radius content-enter px-2 py-2 w-100'>
              <Address onChange={this.onChange} />
            </div>
          </div>

          <div className="col-12 col-md-4 my-2">
            <div className='radius content-enter px-2 py-2'>
              <Payment Pay={this.renderPay} onChange={this.onChange} />
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
                    <a className="col btn btn-success align-items-center radius mx-1" onClick={this.postOrder}><label>Comprar</label></a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </>
    );
  };
}
