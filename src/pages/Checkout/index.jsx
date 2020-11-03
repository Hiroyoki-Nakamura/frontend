import React, { Component } from 'react';
import './styles.css';
import API from '../../Services/api';
import Endereco from '../Endereco'



export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      endereco:[],
      showHideForm: false,
      cartoes_credito:{
      nome_titular: '',
      cpf_titular: '',
      numero_cartao: '',
      },
      tipo_pagamentos:{
      boleto: 'boleto',
      cartao_credito:'cartao_credito'
      }
    };
    this.hideComponent = this.hideComponent.bind(this);
  }  

  hideComponent(endereco) {
    console.log(endereco);
    switch (endereco) {
      case "showHideEndereco":
        this.setState({ showHideEndereco: !this.state.showHideEndereco });
        break;
      default:
        
    }
  }

  componentDidMount() {
    this.getEndereco();
  }

  getEndereco = async () => {
    const endereco = await API.get('/endereco/listar');
    this.setState({ endereco: [...endereco.data] })
  }




  postCards = async () => {
      await API.post('/cartaoCredito/adicionarCartao',{
      nome_titular: this.nome_titular,
      numero_cartao: this.numero_cartao
    });

  };

  onChange = (event) => {
    const a = (event.target.value);
    const b = (event.target.id);

    console.log(a)
  
    switch (b) {
    case 'nome_titular':
    this.setState({nome_titular: a});
    break;
    case 'numero_cartao':
    this.setState({numero_cartao: a});
    break;
    case 'cpf_titular':
    this.setState({cpf_titular: a});
    break;  
    default:

  }

}



  render() {
    const { showHideEndereco } = this.state;
    return (

      <div>{showHideEndereco && <Endereco />}
      
      <div className="flex-container cima col-12">

        <div className="ede col-4">
          <h3>Endereço de Entrega</h3>
          <label className="ed">Endereço cadastrado: </label>
          <select className=".select_endereco custom-select" id="inputGroupSelect02">
            <option selected>Endereço cadastrado</option>
            {this.state.endereco.map(endereco => {
                          return <option key={endereco.id} value={endereco.id} >{endereco.rua}</option>
                        })}
          </select>
          <div className='center'>

          <a  className="btn btnl btn-primary btn-lg active" role="button" aria-pressed="true" onClick={() => this.hideComponent("showHideEndereco")}>Entregar em outro Endereço</a>
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
</div>
          
    );
  }

}