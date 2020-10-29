import { get } from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import './styles.css';
import API from '../../Services/api';


export default class Checkout extends React.Component {

  state = {
    nome_titular: "",
    cpf_titular: "",
    numero_cartão: ""
  }

  async componentDidMount() {
    const response = await API.get('');
    console.log(response.data);

    this.setState({ nome_titular: response.data });

  }

  render() {
    return (
      <div className="flex-container cima col-12">

        <div className="ede col-4">
          <h3>Endereço de Entrega</h3>
          <label className="ed">Endereço cadastrado: </label>
          <select className=".select_endereco custom-select" id="inputGroupSelect02">
            <option selected>Endereço cadastrado</option>
            <option value="1">R. numero um, nº1, cep: 00000-00</option>
          </select>
          <div className='center'>

          <a href="#" className="btn btnl btn-primary btn-lg active" role="button" aria-pressed="true">Entregar em outro Endereço</a>
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
            <input type="text-area" className="input_nCartao" placeholder="0000-0000-0000-0000" />
            <label>Nome no cartão</label>
            <input type="text-area" className='input_nomeCartao' placeholder="NOME ESCRITO NO CARTÃO" onInput={this.setState.nome_titular} />
            <br />
            <label>Validade</label><br /><input type="text-area" className='input_valCartao' placeholder="mês/ano" />
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


          <label>Valor Frete:</label>
          <br />
          <input type="text-area " className='input_frete' placeholder="R$ 000,00 " />
          <br />
          <br />
          <label>Valor Total:</label>
          <br />
          <input type="text-area " className='input_valorTotal' placeholder="R$ 000,00 " />
          <div className='center'>
          <a href="#" className="btn btn-success btcc">Prosseguir</a>
          <a href="#" className="btn btn-success btfc">Finalizar Compra</a>
          </div>
        </div>
      </div>
    );
  }

}