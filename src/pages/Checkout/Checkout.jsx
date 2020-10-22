import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './checkout.css';

export default props => (

        <div class="flex-container cima color_back">


            <div className="ede">

                <h3>Endereço de Entrega</h3>
                <label className="ed">Endereço cadastrado: </label>
                <select className=".select_endereco custom-select" id="inputGroupSelect02">
                    <option selected>Endereço cadastrado no sistema</option>
                    <option value="1">R. numero um, nº1, cep: 00000-00</option>
                </select>
                <a href="#" className="btn btnl btn-primary btn-lg active" role="button" aria-pressed="true">Entregar em outro
                Endereço</a>
            </div>

            <div className="modopg">
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
                    <br />
                    <input type="text-area" className="input_nomeCartao" placeholder="NOME ESCRITO NO CARTÃO" />                    <br />
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
                <img className=" img " src="/img/visa.png " width="40px " height="40px" />
                <img className="img " src="/img/master.png " width="40px " height="40px " />
                <img className="img " src="/img/boleto.png " width="40px " height="40px " />
            </div>

        <div class="confirmadados">
            <h3>Confirmar Dados</h3>
            <label>Entrega:</label>
            <div class="input-group mb-3 ">
                <select class="custom-select select_endereco " id="inputGroupSelect01 ">
                    <option selected>Endereço cadastrado no sistema</option>
                    <option value="1 ">R. numero um, nº1, cep: 00000-00</option>
                </select>
            </div>
            <label>Forma de Pagamento:</label>
            <div class="input-group mb-3 ">
                <select class="custom-select select_formaPagamento" id="inputGroupSelect01 ">
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
            <br />
            <a href="../html/index.html"><button type="button" class="btn btn-success btcc ">Continuar Comprando</button></a>
            <a href="../html/sucesso_compra.html"><button type="button " class="btn btn-success btfc ">Finalizar Compra</button></a>
        </div>

    </div>













)