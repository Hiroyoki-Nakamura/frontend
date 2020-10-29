import React from 'react';
import './styles.css'

export default props => (
<>

<body className="cinza">


    <div className="container" id="principal">
        <div className="row">
            <div className="col-12">
                <h1 className="center">Meus Pedidos</h1>
                <div className="container" id="topo">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4">

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

                            <br/><br/>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-4" id="menu_lat">
                            <br/>
                            <a href="#/cadastro"><li className='menu_lat_li'>Meu Cadastro</li></a>
                            <hr/>
                            <a href="#/pedido"><li className='menu_lat_li'>Meus Pedidos</li></a>
                            <hr/>
                            <a href=""><li className='menu_lat_li'>Endereco</li></a>
                            <hr/>
                            <a href=""><li className='menu_lat_li'>Alterar senha</li></a>
                            <hr/>
                            <a href=""><li className='menu_lat_li'>Logout</li></a>
                            <hr/>
                        </div>



                        <div className="col-8" id="pedido">
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
                                    <label>05/10/2020</label>
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

</>
)
