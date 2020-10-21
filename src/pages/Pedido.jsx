import React from 'react';

export default props => (
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="stylesheet" href="../css/main.css" />
    <link rel="stylesheet" href="../css/pedido.css" />
    <title>Cadastro</title>
</head>

<body>


    <div className="container" id="principal">
        <div className="row">
            <div className="col-12">
                <h1 className="center">Meus Pedidos</h1>
                <div className="container" id="topo">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-3">

                                </div> 
                                
                                <div className="col-9" id="labels">
                                    <label>Numero Pedido</label>
                                    <label>Vlr Pedido</label>
                                    <label>Data Pedido</label>
                                    <label>Status</label>
                                </div>
                                <div className="col-2 center ">
                                    <h5>Nr Pedido</h5>
                                </div>
                                <div className="col-2 center">
                                    <h5>Vlr Pedido</h5>
                                </div>
                                <div className="col-2 center">
                                    <h5>Data Pedido</h5>
                                </div>
                                <div className="col-2 center">
                                    <h5>Status</h5>
                                </div>
                          
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-3" id="menu_lat">
                            <br/>
                            <li>Meu Cadastro</li>
                            <hr/>
                            <li>Meus Pedidos</li>
                            <hr/>
                            <li>Endereco</li>
                            <hr/>
                            <li>Alterar senha</li>
                            <hr/>
                            <li>Logout</li>
                            <hr/>
                        </div>



                        <div className="col-9" id="pedido">
                            <br/>
                            <div className="row">
                                <div className="col-12 center" id="labels">
                                    <label>12345</label>
                                    <label>R$ 120,00</label>
                                    <label>28/7/2019</label>
                                    <label>Finalizado</label>
                                </div>
                                
                            </div>
                            <hr/>
                            
                                <div className="row">
                                    <div className="col-12 center" id="labels">
                                        <label>13401</label>
                                        <label>R$ 550,00</label>
                                        <label>10/3/2020</label>
                                        <label>Cancelado</label>
                                    </div>
                                    
                                </div>

                            <hr/>
                            <div className="row">
                                <div className="col-12 center" id="labels">
                                    <label>14599</label>
                                    <label>R$ 800,00</label>
                                    <label>05/9/2020</label>
                                    <label>Pendente</label>
                                </div>
                                
                            </div>
                            
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

</body>

</html>
)