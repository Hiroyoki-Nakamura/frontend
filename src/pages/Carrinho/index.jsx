import React, { Component } from 'react';
import './styles.css';

export default class Carrinho extends Component {

    state = {
        display: 1,
        price: 90.99
    }

    plus = () => {
        this.setState({ display: this.state.display + 1 })
    }

    minus = () => {
        if (this.state.display !== 1) {
            this.setState({ display: this.state.display - 1 })
        }
        return this.state.display
    }

    valor = () => {
        this.price = this.state.price
        if (this.state.display !== 1) {
            this.setState({ price: this.state.price * this.state.display })
            return this.price
        }

        return this.state.price
    }

    render() {
        return (
            <>
                <body className="cinza">
                    <div className="container" id="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="center">Carrinho</h2>
                                <div className="container" id="topo">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4 className="center">Produto</h4>
                                                </div>
                                                <div className="col-lg-2">
                                                    <h4 className="center">Vlr Unidade</h4>
                                                </div>
                                                <div className="col-lg-2">
                                                    <h4 className="center">Quantidade</h4>
                                                </div>
                                                <div className="col-lg-2">
                                                    <h4 className="center">Subtotal</h4>
                                                </div>
                                                <div className="col-lg-2">
                                                    <h4 className="center">Remover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br/><br/>

                                <div>

                                    <div className="container" id="carrinho">
                                        <div className="row">
                                            <div className="col-lg-12">

                                                <br />

                                                <div className="row">
                                                    <div className="col-lg-1">
                                                        <div className="center">
                                                            <div className="card-body">
                                                                <img className="imagem" src="./img/Chivas-carrinho.png" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3" id="nomeProduto">
                                                        <h5>Chivas Whisky 12 Anos</h5>
                                                    </div>

                                                    <div className="col-lg-2">
                                                        <br />
                                                        <input disabled className="valor-unit center" placeholder="R$ 90,99" />
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <br />
                                                        <div className="input-group">
                                                            <button className='btn btn-danger' type="button" onClick={this.minus}>-</button>
                                                            <input type="text" id="quantity" name="quantity"
                                                                className="form-control input-number" value={this.state.display} />
                                                            <button className='btn btn-success' type="button" onClick={this.plus}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <br />
                                                        <input disabled className="valor-unit center" placeholder="R$ 90,99" />
                                                    </div>
                                                    <div className="col-lg-2 center">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                            <label className="custom-control-label" for="customCheck1">

                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-1">
                                                <div className="center">
                                                    <div className="card-body">
                                                        <img className="imagem" src="./img/Chivas-carrinho.png" />
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="col-lg-3" id="nomeProduto">
                                                <h5>Chivas Whisky 12 Anos</h5>
                                            </div>
                                            <div className="col-lg-2">
                                                <br />
                                                <input disabled className="valor-unit center" placeholder="R$ 90,99" />
                                            </div>
                                            <div className="col-lg-2">
                                                <br />
                                                <div className="input-group">
                                                            <button className='btn btn-danger' type="button" onClick={this.minus}>-</button>
                                                            <input type="text" id="quantity" name="quantity"
                                                                className="form-control input-number" value={this.state.display} />
                                                            <button className='btn btn-success' type="button" onClick={this.plus}>+</button>
                                                        </div>
                                                    </div>
                                            <div className="col-lg-2">
                                                <br />
                                                <input disabled className="valor-unit center" placeholder="R$ 181,98" />
                                            </div>
                                            <div className="col-lg-2 center">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                    <label className="custom-control-label" for="customCheck2">
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-1">
                                                <div className="center">
                                                    <div className="card-body">
                                                        <img className="imagem" src="./img/Chivas-carrinho.png" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3" id="nomeProduto">
                                                <h5>Chivas Whisky 12 Anos</h5>
                                            </div>
                                            <div className="col-lg-2">
                                                <br />
                                                <input disabled className="valor-unit center" placeholder="R$ 90,99" />
                                            </div>
                                            <div className="col-lg-2">
                                                <br />
                                                <div className="input-group">
                                                            <button className='btn btn-danger' type="button" onClick={this.minus}>-</button>
                                                            <input type="text" id="quantity" name="quantity"
                                                                className="form-control input-number" value={this.state.display} />
                                                            <button className='btn btn-success' type="button" onClick={this.plus}>+</button>
                                                        </div>
                                                    </div>
                                            <div className="col-lg-2">
                                                <br />
                                                <input disabled className="valor-unit center" placeholder="R$ 272,97" />
                                            </div>
                                            <div className="col-lg-2 center">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                    <label className="custom-control-label" for="customCheck3">

                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-1">
                                                <div className="center">
                                                    <div className="card-body">
                                                        <img className="imagem" src="./img/Chivas-carrinho.png" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3" id="nomeProduto">
                                                <h5>Chivas Whisky 12 Anos</h5>
                                            </div>
                                            <div className="col-lg-2">
                                                <br />
                                                <input disabled className="valor-unit center" placeholder="R$ 90,99" />
                                            </div>
                                            <div className="col-lg-2">
                                                <br />
                                                <div className="input-group">
                                                            <button className='btn btn-danger' type="button" onClick={this.minus}>-</button>
                                                            <input type="text" id="quantity" name="quantity"
                                                                className="form-control input-number" value={this.state.display} />
                                                            <button className='btn btn-success' type="button" onClick={this.plus}>+</button>
                                                        </div>
                                                    </div>
                                            <div className="col-lg-2">
                                                <br />
                                                <input disabled className="valor-unit" placeholder="R$ 363,96" />
                                            </div>
                                            <div className="col-lg-2 center">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                    <label className="custom-control-label" for="customCheck4">         </label>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>

                                <div className="container col-lg-12 base">
                                    <div className="row">
                                        <div className="col-lg-12">
                                        <label className="corvalor">Valor Total</label>
                                        <input className="valortotal" disabled placeholder="R$ 00,00" />

                                        <div className="row">
                                            <div className="col-lg-1" id="voltar">
                                            <a href="index.html"><button type="button" className="btn btn-secondary botao" id="botao">Voltar</button></a>
                                            </div>
                                            <div className="col-lg-2">
                                            <a href="checkout.html"><button type="button" className="btn btn-success btn-md btn-block botao"
                                                id="botao">Confirmar</button></a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </body>
            </>
        )
    }
}
