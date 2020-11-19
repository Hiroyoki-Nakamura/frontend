import React, { Component } from 'react';

import './styles.css'

import API from '../../Services/api';
import Moment from 'moment';

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
      let date = ''
      if (order.created_at != null) {
        date = order.created_at.slice(0, 10);
        while (date.includes('-')) {
          date = date.replace('-', '/');
        }
      }

      return (
        <>
          <div className="row">
            <div className="col-12 d-flex justify-content-around" id="labels" >
              <label className="text-center" style={{ width: '120px' }}>{order.id}</label>
              <label className="text-center" style={{ width: '120px' }}>R$ {`${parseFloat(order.valor_total).toFixed(2)}`.replace('.', ',')}</label>
              <label className="text-center" style={{ width: '120px' }}>{Moment(date).format('DD-MM-YYYY')}</label>
              <label className="text-center" style={{ width: '120px' }}>{order.cd_status_pedido}</label>
            </div>
          </div>
        </>
      );
    });

    let date = this.state.client.created_at;
    if (this.state.client.created_at != null) {
      date = date.slice(0, 10);
      while (date.includes('-')) {
        date = date.replace('-', '/');
      }
    }

    const profile = () => (
      <>
        <div className='d-flex h-100 justify-content-center align-content-center'>
          <div className=' pt-4'>
            <div className="row">
              <div className='form-group col-12 col-lg-6'>
                <label className='col-12 col-lg-6 col-form-label'>Nome:</label>
                <input className='form-control col-12 text-center cliente_info' type="text" readOnly value={this.state.client.nome} />
              </div>
              <div className='form-group col-6 col-lg-6'>
                <label className='col-12 col-lg-6 col-form-label'>CPF:</label>
                <input className='form-control col-12 text-center' type="text" readOnly value={this.state.client.cpf} />
              </div>
              <div className='form-group col-6 col-lg-6'>
                <label className='col-sm-6 col-form-label'>RG:</label>
                <input className='form-control col-12 text-center' type="text" readOnly value={this.state.client.rg} />
              </div>
              <div className='form-group col-12 col-lg-6'>
                <label className='col-sm-6 col-form-label'>E-mail:</label>
                <input className='form-control col-12 text-center' type="text" readOnly value={this.state.client.email} />
              </div>
              <div className='form-group col-6 col-lg-6'>
                <label className='col-6 col-form-label'>Genero:</label>
                <input className='form-control col-10 text-center' type="text" readOnly value={this.state.client.genero} />
              </div>
              <div className='form-group col-6 col-lg-6'>
                <label className='col-12 col-form-label'>Data de Nascimento:</label>
                <input className='form-control col-12 col-lg-6 text-center' type="date" readOnly value={this.state.client.data_de_nascimento} />
              </div>
              <div className='form-group col-12 col-lg-6'>
                <label className='col-sm-6 col-form-label'>Cliente desde:</label>
                <input className='form-control col-6 text-center' type="date-time" readOnly value={Moment(this.state.client.created_at).format('DD-MM-YYYY')} />
              </div>
              <div className='form-group col-12 col-lg-6'>
                <div className='col-sm-6 col-form-label'>Alterar minha senha</div>
                <div className="col-sm-6 btn btn-dark">Alterar</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

    const addresses = this.state.address.map(address => (
      <>
        <div className='d-flex h-100 justify-content-center align-content-center tester'>
          <div className='mt-5 pt-4'>
            <div className="row">
              <div className="col-12 col-md-6 form-group d-flex">
                <label className='col-sm-4 col-form-label'>CEP:</label>
                <input className='form-control col-6 text-center' type="text" readOnly value={address.cep} />
              </div>
              <div className="col-12 col-md-6 form-group d-flex">
                <label className='col-sm-4 col-form-label'>Bairro:</label>
                <input className='form-control col-6 text-center' type="text" readOnly value={address.bairro} />
              </div>
              <div className="col-12 col-md-6 form-group d-flex">
                <label className='col-sm-4 col-form-label'>Rua:</label>
                <input className='form-control col-6 text-center' type="text" readOnly value={address.rua} />
              </div>
              <div className="col-12 col-md-6 form-group d-flex">
                <label className='col-sm-4 col-form-label'>Complemento:</label>
                <input className='form-control col-6 text-center' type="text" readOnly value={address.complemento} />
              </div>
              <div className="col-12 col-md-6 form-group d-flex">
                <label className='col-sm-4 col-form-label'>Número:</label>
                <input className='form-control col-6 text-center' type="text" readOnly value={`${address.numero}`} />
              </div>
              <div className="col-12 col-md-6 form-group d-flex">
                <label className='col-sm-4 col-form-label'>Estado:</label>
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
      case 'Cadastro':
        return profile();
      default:
        alert('Pagina não encontrada');
    }
  }

  changePage = event => {
    this.setState({ page: event.target.id });
  }

  render() {
    return (
      <>
        <div className="container mt-2" >
          <div className="row">
            <div className="col-12">
              <h1 className="center py-2 titulos"> {this.state.page == 'Cadastro' ? 'Meu' : 'Meus'} {this.state.page}</h1>

              <div className="container mb-2" id="topo1">
                <div className="row">
                  <div className="col-12">

                    <div className="row">
                      <div className="col-3"></div>
                      <div className="col-9 d-flex justify-content-around table_legends">
                        {this.state.page == 'Pedidos' ? <>
                          <label className="text-center" style={{ width: '120px' }}>Número</label>
                          <label className="text-center" style={{ width: '120px' }}>Valor</label>
                          <label className="text-center" style={{ width: '120px' }}>Data</label>
                          <label className="text-center" style={{ width: '120px' }}>Status</label>
                        </> : <label style={{ color: '#fff' }}>a</label>}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-3 pl-5 overflow-hidden text-decoration-none" id="menu_lat">
                    <li id='Cadastro' onClick={this.changePage}>
                      <span className="li-dash" id='Cadastro' onClick={this.changePage}>Meu Cadastro</span>
                    </li>

                    <li id='Pedidos' onClick={this.changePage}>
                      <span id='Pedidos' onClick={this.changePage} className="li-dash">Meus Pedidos</span>
                    </li>

                    <li id='Endereços' onClick={this.changePage}>
                      <span id='Endereços' onClick={this.changePage} className="li-dash">Meus endereços</span>
                    </li>

                    <li onClick={this.logout}>
                      <span onClick={this.logout} className="li-dash">Logout</span>
                    </li>

                  </div>

                  <div className="col-9" id="pedido" style={{ overflowY: "scroll", overflowX: "hidden" }}>
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