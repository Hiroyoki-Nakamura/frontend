import React, { Component } from 'react';
import './styles.css'

import API from '../../Services/api';

const BEFORE = {
  client: '',
  orders: [],
  address: [],
  page: 'Pedidos'
}

export default class Pedido extends Component {
  state = { ...BEFORE }

  componentDidMount() {
    const client = JSON.parse(localStorage.getItem('client'));
    if (client != null) {
      this.setState({ client });
    } else {
      window.location.href = '/';
    }
    this.getAll();
  }

  getAll = async () => {
    const client = JSON.parse(localStorage.getItem('client'));
    const id = client.id;

    const orders = (await API.get(`/pedido/listar/${id}`)).data || [];
    const address = (await API.get(`/endereco/buscar/${id}`)).data || [];

    this.setState({ orders, address, client });
  }

  logout = () => {
    localStorage.removeItem('client');
    localStorage.removeItem('cart');
    window.location.href = '/';
  }

  setPage = () => {
    const page = this.state.page;

    const orders = this.state.orders.map(order => {
      let date = order.created_at.slice(0, 10);
      while (date.includes('-')) {
        console.log(date);
        date = date.replace('-', '/');
      }

      return (
        <>
          <div className="row">
            <div className="col-12 d-flex justify-content-around" id="labels">
              <label className="text-center" style={{width: '120px' }}>{order.id}</label>
              <label className="text-center" style={{width: '120px' }}>R$ {order.valor_total.toFixed(2)}</label>
              <label className="text-center" style={{width: '120px' }}>{date}</label>
              <label className="text-center" style={{width: '120px' }}>{order.cd_status_pedido}</label>
            </div>
          </div>
          <hr  />
        </>
      );
    });

    const profile = () => (
        <div className='d-flex h-100 justify-content-center align-content-center'>
          <div className='mt-5 pt-4'>
            <div className="row">
              <div className='form-group'>
                <label className='col-sm-2 col-form-label'>Nome:</label>
                <input className='form-control col-4 text-center' type="text" readOnly value={this.state.client.nome} />
              </div>
              <div className='form-group'>
                <label className='col-sm-2 col-form-label'>CPF:</label>
                <input className='form-control col-4 text-center' type="text" readOnly value={this.state.client.cpf} />
              </div>
              <div className='form-group'>

              </div>
            </div>
          </div>
        </div>
      );


    const addresses = this.state.address.map(address => (
      <>
        <div className='d-flex h-100 justify-content-center align-content-center'>
          <div className='mt-5 pt-4'>
            <div className="row">
              <div className="col-6 form-group d-flex">
                <label className='col-sm-2 col-form-label'>CEP:</label>
                <input className='form-control col-4 text-center' type="text" readOnly value={address.cep} />
              </div>
              <div className="col-6 form-group d-flex">
                <label className='col-sm-3 col-form-label'>Bairro:</label>
                <input className='form-control col-5 text-center' type="text" readOnly value={address.bairro} />
              </div>
              <div className="col-6 form-group d-flex">
                <label className='col-sm-4 col-form-label'>Logradouro:</label>
                <input className='form-control col-8 text-center' type="text" readOnly value={address.rua} />
              </div>
              <div className="col-6 form-group d-flex">
                <label className='col-sm-3 col-form-label'>Número:</label>
                <input className='form-control col-4 text-center' type="text" readOnly value={`${address.numero}`} />
              </div>
              <div className="col-6 form-group d-flex">
                <label className='col-sm-3 col-form-label'>Estado:</label>
                <input className='form-control col-4 text-center' type="text" readOnly value={address.cd_uf} />
              </div>
            </div>
          </div>
        </div>
      </>
    ));

    switch (page) {
      case 'Pedidos':
        return orders;
      case 'Endereços':
        return addresses;
      default:
        return profile();
    }
  }

  changePage = event => {
    this.setState({ page: event.target.id });
  }

  render() {
    return (
      <>
        <div className="container mt-2" id="principal">
          <div className="row">
            <div className="col-12">
              <h1 className="center py-2"> {this.state.page == 'Cadastro' ? 'Meu' : 'Meus'} {this.state.page}</h1>

              <div className="container" id="topo">
                <div className="row">
                  <div className="col-12">

                    <div className="row">
                      <div className="col-3"></div>
                      <div className="col-9 pb-4 mb-4 d-flex justify-content-around" id="labels">
                        {this.state.page == 'Pedidos' ? <>
                          <label className="text-center" style={{ width: '120px' }}>Numero Pedido</label>
                          <label className="text-center" style={{ width: '120px' }}>Vlr Pedido</label>
                          <label className="text-center" style={{ width: '120px' }}>Data Pedido</label>
                          <label className="text-center" style={{ width: '120px' }}>Status</label>
                        </> : <label style={{ color: '#660033' }}>a</label>}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-3 pl-5 overflow-hidden" id="menu_lat">
                    <li id='Cadastro' onClick={this.changePage}>Meu Cadastro</li>
                    <hr />
                    <li id='Pedidos' onClick={this.changePage}>Meus Pedidos</li>
                    <hr />
                    <li id='Endereços' onClick={this.changePage}>Endereco</li>
                    <hr />
                    <li onClick={this.logout}>Logout</li>
                    <hr />
                  </div>

                  <div className="col-9" id="pedido">

                    {this.setPage()}

                  </div>
                </div>
              </div>

              <div className="container" id="base">
                <div className="row">
                  <div className="col-12">

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