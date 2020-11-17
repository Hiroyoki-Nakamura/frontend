import React, { Component } from 'react';

import API from '../../Services/api';

const BEFORE = {
  ufs: [],
  pageAdress: 'novoEndereco',
  enderecos: [],
  rua: '',
  bairro: '',
  complemento: '',
  referencia: '',
  cep: '',
  uf: ''
}

export default class Endereco extends Component {

  state = { ...BEFORE };

  componentDidMount() {
    this.initialization();
  }

  initialization = async () => {
    this.props.startLoading();

    const client = JSON.parse(localStorage.getItem('client'));
    const ufs = await API.get('/uf');
    const enderecos = await API.get(`/endereco/buscar/${client.id}`);

    this.setState({
      enderecos: [...enderecos.data],
      address: enderecos.data[0].id,
      ufs: [...ufs.data]
    });

    this.props.stopLoading();
  };

  postEndereco = async () => {
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
      this.setState({ ...BEFORE, ufs: this.state.ufs, enderecos: this.state.enderecos });
      this.props.alertas('novo Endereço', sendObject.data, 'success');
    }
    this.initialization();

  };

  onChange = (event) => {
    const value = (event.target.value);
    const id = (event.target.id);

    switch (id) {
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
  };

  showAdress = () => {
    const pageAdress = this.state.pageAdress;
    const Adress =
      <>
        <h3 className='w-100 text-center'>Endereço de Entrega</h3>
        <div className='d-flex justify-content-center align-items-center h-75'>
          <div className="h-auto">

            <label className='w-100 text-center'> Endereço cadastrado: </label>
            <select className="custom-select radius" onChange={this.props.onChange} id="endereco_entrega" >
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

          <div className="container">
            <div className="row">
              <div className="col-12 form-group">
                <label className='w-100 text-center mb-0'>Rua</label>
                <input type="text" className="form-control text-center" id="rua" placeholder="Rua" onChange={this.onChange} value={this.state.rua} />
              </div>
              <div className="col-4 form-group">
                <label className='w-100 text-center mb-0'>Número</label>
                <input type="text" className="form-control text-center" id="numero" placeholder="Nº" onChange={this.onChange} value={this.state.numero} />
              </div>
              <div className="col-8">
                <div className="form-group">
                  <label className='w-100 text-center mb-0'>Bairro</label>
                  <input type="text" className="form-control radius text-center" id="bairro" placeholder="Bairro" onChange={this.onChange} value={this.state.bairro} />
                </div>
              </div>
              <div className="col-8">
                <div className="form-group">
                  <label className='w-100 text-center mb-0'>Complemento</label>
                  <input type="text" className="form-control text-center" id="complemento" placeholder="Complemento" onChange={this.onChange} value={this.state.complemento} />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label className='w-100 text-center mb-0'>UF</label>
                  <select className="custom-select form-control text-center radius" id="uf" onChange={this.onChange}>
                    {this.state.ufs.map(uf => {
                      return <option key={uf.id} value={uf.id}>{uf.ds_uf}</option>
                    })}
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label className='w-100 text-center mb-0'>CEP</label>
                  <input type="CEP" className="form-control text-center" id="cep" placeholder="00000-000" onChange={this.onChange} value={this.state.cep} />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label className='w-100 text-center mb-0'>Referência</label>
                  <input type="text" className="form-control text-center" id="referencia" placeholder="Referência" onChange={this.onChange} value={this.state.referencia} />
                </div>
              </div>
            </div>
          </div>

          <div className="center">
            <a className="btn btn-primary radius mx-2" id="novoEndereco" aria-pressed="true" onClick={this.renderAdress} value="novoEndereco">Voltar</a>
            <a className="btn  btn-success mx-2 radius " id="salvar" aria-pressed="true" onClick={this.postEndereco} >Salvar</a>
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
  };

  render() {
    return (
      <>
        {this.showAdress()}
      </>
    );
  }
}
