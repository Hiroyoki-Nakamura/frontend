import React from 'react';

export default props => (
<html lang="pt-br">

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
    <link rel="stylesheet" href="./../css/main.css"/>
    <link rel="stylesheet" href="../css/checkout.css"/>
    <title>Checkout</title>
</head>

<body>


        <div className="ede">

            <h3>Endereço de Entrega</h3>
            <label className="ed">Endereço cadastrado: </label>
            <select style={{borderRadius: + '15px'}} className="custom-select" id="inputGroupSelect02">
                <option selected>Endereço cadastrado no sistema</option>
                <option value="1">R. numero um, nº1, cep: 00000-00</option>
            </select>
            <a href="#" className="btn btnl btn-primary btn-lg active" role="button" aria-pressed="true">Entregar em outro
                Endereço</a>
        </div>

        <div className="modopg">
            <h3>Forma de Pagamento</h3>
            <input type="radio" name="radiof" value="boleto" className="radio" id="radio" aria-label="Radio button for following text input"/>
            <label>Boleto</label>
            <br/>
            <input type="radio" name="radioc" value="cartao" id="radioc" aria-label="Radio button for following text input"/>
            <label>Cartão de crédito</label>
            <br/>
            <form id="formulariocartao">
                <label>Nº do cartão </label>
                <input type="text-area" style=" text-align: center; border-radius: 10px; width: 300px; height:30px;" placeholder="0000-0000-0000-0000" />
                <label>Nome no cartão</label>
                <input type="text-area" style={{borderRadius: + '10px'}} style={{width: '300px'}} style={{height: + '30px'}} placeholder="NOME ESCRITO NO CARTÃO" />
                <br/>
                <label>Validade</label><br/><input type="text-area" style={{borderRadius: + '10px'}} width= '100px' height= '30px' style={{textAlign: + 'center'}} placeholder="mês/ano" />
                <br/>
                <label>CVV</label>
                <br/>
                <input type="text-area" style={{bordeRadius: + '10px' , width: + '100px' , height: + '30px' , textAlign: + 'center'}} placeholder="000"/>
                <br/>
                <label>Quantidade de Parcelas</label>
                <br/>
                <select style={{bordeRadius: + '15px', width: + '300px'}} className="custom-select" id="inputGroupSelect02">
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
                <br/>
            
            <img className=" img " src="../img/visa.png " width= "40px"  height= "40px" />
            <img className="img " src="../img/master.png " width=  "40px"  height= "40px" />
            <img className="img " src="../img/boleto.png " width=  "40px"  height=  "40px" />
            
        </div>

        <div className="confirmadados">
            <h3>Confirmar Dados</h3>
            <label>Entrega:</label>
            
            <div className="input-group mb-3 ">
                <select style={{bordeRadius: + '15px'}} className="custom-select " id="inputGroupSelect01 ">
                    <option selected>Endereço cadastrado no sistema</option>
                    <option value="1 ">R. numero um, nº1, cep: 00000-00</option>
                </select>
            </div>
            <label>Forma de Pagamento:</label>
            <div className="input-group mb-3 ">
                <select style={{bordeRadius: + '15px'}} className="custom-select " id="inputGroupSelect01 ">
                    <option selected>Opção Selecionada</option>
                    <option value="1 ">Cartão de crédito</option>
                    <option value="1 ">Boleto</option>
                </select>
            </div>

            <div>
            <label>Valor Frete:</label>
            <br/>
            <input type="text-area " style="border-radius: 10px; width: 200px; " placeholder="R$ 000,00 " />
            <br/>
            <br/>
            <label>Valor Total:</label>
            <br/>
            <input type="text-area " style="border-radius: 10px; width: 2 00px; " placeholder="R$ 000,00 " />
            <br/>
            <a href="../html/index.html"><button type="button" className="btn btn-success btcc ">Continuar Comprando</button></a>
            <a href="../html/sucesso_compra.html"><button type="button " className="btn btn-success btfc ">Finalizar Compra</button></a>
        </div>

        </div>

    



</body>

</html>
)