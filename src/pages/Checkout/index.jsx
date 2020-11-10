import React, { Component } from 'react';
import './styles.css';
import API from '../../Services/api';
import Endereco from '../Endereco'

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
  constructor() {
    super();
    this.state = {
      showHideForm: false,
      page: 'endereco',
      enderecos: []
      ,
      cartoes_credito:{
      nome_titular: '',
      cpf_titular: '',
      numero_cartao: '',
      },
      tipo_pagamentos:{
      boleto: 'boleto',
      cartao_credito:'cartao_credito'
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

renderPay = event => {
  this.setState({ page: event.target.value });
}

showPay = () => {
  const page = this.state.page;
  const endereco =
  <>
    
    <label className="ed"> Endereço cadastrado: </label>
          <select className=".select_endereco custom-select" id="enderecos" >
          <option>Endereco Cliente</option>
          {this.state.enderecos.map( enderecos => {
                          return <option key={enderecos.id} value={enderecos.id} >{enderecos.rua + ' , ' + enderecos.numero + ' , '  + enderecos.bairro}</option>
                        })}
            
          </select>
          
        
  </>

  const novoEndereco =
  <>
    <br></br>
        <h2>Endereço</h2>

        <br></br>
        <form className='container1 '>

          <div className='col-12'>
            <div className='row'>

              <div className="container col-6">
                <div className="form-group">

                  <br></br>
                  <label for="exampleInputEmail1">Rua</label>
                  <input type="text" className="form-control" id="rua" placeholder="Rua" onChange={this.onChange} value={this.state.enderecos[this.state.rua]} />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Bairro</label>
                  <input type="text" className="form-control" id="bairro" placeholder="Bairro" onChange={this.onChange} value={this.state.enderecos[this.state.bairro]}/></div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Complemento</label>
                  <input type="text" className="form-control" id="complemento" placeholder="Complemento" onChange={this.onChange} value={this.state.enderecos[this.state.complemento]}/></div>

                <br></br>
              </div>

              <div className="container col-6">
                <br></br>
                <div className="form-group">
                  <label for="exampleInputPassword1">Referência</label>
                  <input type="text" className="form-control" id="referencia" placeholder="Referência" onChange={this.onChange} value={this.state.enderecos[this.state.referencia]}/></div>
                <div className="row">
                  <div className="col-4">


                    <label >Número</label>
                    <input type="text" className="form-control" id="numero" placeholder="Nº" onChange={this.onChange} value={this.state.enderecos[this.state.numero]}/></div>
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
            <a  className="btn btnl btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.renderPay} value="novoEndereco">Entregar em outro Endereço</a>
            
          </div>
          
        </form>
        

        <br></br>
        <br></br>
  </>

  switch (page) {
    case 'novoEndereco':
    return endereco;
    case 'endereco':
    return novoEndereco;
    default:  
  }
}

render(){

      return(

        
      <div className="flex-container cima col-12">
       <div className="ede col-4">
          <h3>Endereço de Entrega</h3>
        
          { this.showPay ()}

          <div className='center'>

          <a  className="btn btnl btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.renderPay} value="endereco">Entregar em outro Endereço</a>
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
           
        </div>
          
        <div className="modopg col-4">
          <h3>Forma de Pagamento</h3>
          <input type="radio" name="radiof" value="boleto" className="radio" id="radio" aria-label="Radio button for following text input" />
          <label>Boleto</label>
          <br />
          <input type="radio" name="radioc" value="cartao" id="radioc" aria-label="Radio button for following text input" />
          <label>Cartão de crédito</label>
          <br />
          <form id="formulariocartao">
            <label>Nº do cartão </label>
            <input type="text-area" className="input_nCartao" id='numero_cartao' placeholder="0000-0000-0000-0000" onChange={this.onChange} value={this.state.numero_cartao}/>
            <label>Nome no cartão</label>
            <input type="text-area" className='.input_nomeCartao' id='nome_titular' placeholder="NOME ESCRITO NO CARTÃO" onChange={this.onChange} value={this.state.nome_titular}/>
            <br />
            <label>Validade</label><br /><input type="text-area" className='input_valCartao' id='validade_cartao' placeholder="mês/ano" onChange={this.onChange} value={this.state.validade_cartao}/>
            <br />
            <label>CVV</label>
            <br />
            <input type="text-area" className='input_cvvCartao' placeholder="000" />
            <br />
            <label>Quantidade de Parcelas</label>
            <br />
            <select className="custom-select select_parcelamento" id="inputGroupSelect02">
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
          <br />

          <div className='center icon_payMethods'>
          <img className=" img " src="/img/visa.png " width="40px " height="40px" />
          <img className="img " src="/img/master.png " width="40px " height="40px " />
          <img className="img " src="/img/boleto.png " width="40px " height="40px " />
          </div>
        </div>

        <div className="confirmadados col-4">
          <h3>Confirmar Dados</h3>
          <label>Entrega:</label>
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

          <div className="input-group mb-3 ">
            <select className="custom-select select_confirmaEndEntrega " id="inputGroupSelect01 ">
              <option selected>Endereço cadastrado no sistema</option>
              <option value="1 ">R. numero um, nº1, cep: 00000-00</option>
            </select>
          </div>
          <label>Forma de Pagamento:</label>
          <div className="input-group mb-3 ">
            <select className="custom-select select_confirmaMetPagamento" id="inputGroupSelect01 ">
              <option selected>Opção Selecionada</option>
              <option value="1 ">Cartão de crédito</option>
              <option value="1 ">Boleto</option>
            </select>
          </div>

          <div>
            <label>Valor Frete:</label>
            <br />
            <input type="text-area " className='input_frete' /*style="border-radius: 10px; width: 200px; "*/ placeholder="R$ 000,00 " />
            <br />
            <br />
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
        </tdiv>
        </div>
        </div>
        </div>
        
      </>

      );
  }

}