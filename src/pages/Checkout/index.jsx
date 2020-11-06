import React from 'react';
import './styles.css';
import API from '../../Services/api';

export default class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      // showHideForm: false,
      pageAdress: 'novoEndereco',
      enderecos: [
        // rua: '',
        // bairro: '',
        // complemento: '',
        // referencia: '',
        // numero: '',
        // cep: '',
        // uf: ''
      ]
      
      ,
      cartoes_credito: {
        nome_titular: '',
        cpf_titular: '',
        numero_cartao: '',
      },
      tipo_pagamentos: {
        boleto: 'boleto',
        cartao_credito: 'cartao_credito'
      },
      ufs: []
    };
    // this.hideComponent = this.hideComponent.bind(this);
  }

  componentDidMount() {
    this.getEndereco();

  }

  showPage = () => {

  }

  getEndereco = async () => {


    const client = JSON.parse(localStorage.getItem('client'))
    const enderecos = await API.get('/endereco/buscar/' + client.id)

    this.setState({ enderecos: [...enderecos.data] });
    console.log(client.id)
  }

  componentDidMount() {
    this.getUfs();
  }

  getUfs = async () => {
    const ufs = await API.get('/uf');
    this.setState({ ufs: [...ufs.data] });
  }

  postCards = async () => {
    await API.post('/cartaoCredito/adicionarCartao', {
      nome_titular: this.nome_titular,
      numero_cartao: this.numero_cartao
    });

  };

  onChange = (event) => {
    const value = (event.target.value);
    const id = (event.target.id);


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
        this.setState({ referencia: value})
        break;
      case 'cep':
        this.setState({ cep: value })
        break;
      case 'uf':
        this.setState({ uf: value })           
      default:
        break;

    }

  }

  renderAdress = event => {
    this.setState({ pageAdress: event.target.id });
    console.log(event.target.id)
  }

  showAdress = () => {
    const pageAdress = this.state.pageAdress;
    const Adress =
      <>

        <label className="ed"> Endereço cadastrado: </label>
        <select className=".select_endereco custom-select" id="enderecos" onClick={this.onChange} >
          <option>Endereco Cliente</option>
          {this.state.enderecos.map(enderecos => {
            return <option key={enderecos.id} value={enderecos.id} >{enderecos.bairro}</option>
          })}

        </select>
        
        <div className="btn btnl btn-primary btn-lg active" id="endereco"  value ="endereco" aria-pressed="true" onClick={this.renderAdress} >Entregar em outro Endereço</div>

      </>
    const newAdress =
      <>
        
        <h2>Endereço</h2>

        
        <form className='container1 '>

          <div className='col-12'>
            <div className='row'>

              <div className="container col-6">
                <div className="form-group">

                  
                  <label for="exampleInputEmail1">Rua</label>
                  <input type="text" className="form-control" id="rua" placeholder="Rua" onChange={this.onChange} value={this.state.enderecos[this.state.rua]} />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Bairro</label>
                  <input type="text" className="form-control" id="bairro" placeholder="Bairro" onChange={this.onChange} value={this.state.enderecos[this.state.bairro]} /></div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Complemento</label>
                  <input type="text" className="form-control" id="complemento" placeholder="Complemento" onChange={this.onChange} value={this.state.enderecos[this.state.complemento]} /></div>

                <br></br>
              </div>

              <div className="container col-6">
                <br></br>
                <div className="form-group">
                  <label for="exampleInputPassword1">Referência</label>
                  <input type="text" className="form-control" id="referencia" placeholder="Referência" onChange={this.onChange} value={this.state.enderecos[this.state.referencia]} /></div>
                <div className="row">
                  <div className="col-4">


                    <label >Número</label>
                    <input type="text" className="form-control" id="numero" placeholder="Nº" onChange={this.onChange} value={this.state.enderecos[this.state.numero]} /></div>
                  <div className="form-row align-items-center mb-2">

                    <div className="col-auto my-1">
                      <label className="mr-sm-2" >UF</label>
                      <select className="custom-select mr-sm-2" id="uf" onClick={this.onChange}>
                        {this.state.ufs.map(uf => {
                          return <option key={uf.id} value={uf.id} >{uf.ds_uf}</option>
                        })}

                      </select>

                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label  >  CEP</label>
                    <input type="CEP" className="form-control" id="cep" placeholder="00000-000" onChange={this.onChange} value={this.state.enderecos[this.state.cep]} /></div>
                </div>
              </div>

            </div>
            <a className="btn btnl btn-primary btn-lg active" id="novoEndereco" aria-pressed="true" onClick={this.renderAdress} value="novoEndereco">Salvar</a>

          </div>

        </form>


        
       
      </>
    switch (pageAdress) {
      case 'endereco':
        return newAdress;
      case 'novoEndereco':
        return Adress;
        default:
      
    }
  }
  render() {
    return (
      <div className="flex-container cima col-12">
        <div className="ede col-4">
          <h3>Endereço de Entrega</h3>
          
          {this.showAdress()}
          
          <div className='center'>
</div>
          
        </div>
        <div className="modopg col-4">
          <h3>Forma de Pagamento</h3>
          <input type="radio" name="radiof" value="boleto" className="radio" id="radio" aria-label="Radio button for following text input" />
          <label>Boleto</label>
          <br />
          <input type="radio" name="radioc" value="cartao" id="radioc" aria-label="Radio button for following text input" />
          <label>Cartão de crédito</label>
          <br />
           
          <div className='center icon_payMethods'>
            <img className=" img " src="/img/visa.png " width="40px " height="40px" />
            <img className="img " src="/img/master.png " width="40px " height="40px " />
            <img className="img " src="/img/boleto.png " width="40px " height="40px " />
          </div>
        </div>
        <div className="confirmadados col-4">
          <h3>Confirmar Dados</h3>
         
         

          <div>
            <label>Valor Total:</label>
            <br />
            <input type="text-area " className='input_valorTotal'/*style="border-radius: 10px; width: 2 00px; "*/ placeholder="R$ 000,00 " />
            <br />
            <a href="../html/index.html"><button type="button" className="btn btn-success btcc ">Continuar Comprando</button></a>
            <a href="../html/sucesso_compra.html"><button type="button " className="btn btn-success btfc " onClick={this.postCards}>Finalizar Compra</button></a>
          </div>
        </div>
      </div>
    )
  }
}
