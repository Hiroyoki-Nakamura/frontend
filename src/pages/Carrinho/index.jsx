import React from 'react';
import './styles.css';

export default props => (
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
            <br />
            <br />
            <div className="container" id="carrinho">
              <div className="row">
                <div className="col-lg-12">

                  <div className="row">
                    <div className="col-lg-1">
                      <div className="center">
                        <div className="card-body">
                          <img className="imagem" src="./img/Chivas-carrinho.png" />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3" id='nomeProduto'>
                      <h5>Chivas Whisky 12 Anos</h5>
                    </div>

                    <div className="col-lg-2">
                      <br />
                      <input disabled className="valor-unit center" placeholder="R$ 90,99" />
                    </div>

                    <div className="col-lg-2">
                      <br />
                      <div className="input-group quant_select">
                        <span className="input-group-btn">
                          <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                            data-type="minus" data-field="">
                            <span className="glyphicon glyphicon-minus">-</span>
                          </button>
                        </span>
                        <input type="text" id="quantity" name="quantity"
                          className="form-control input-number" value="1" min="1" max="100" />
                        <span className="input-group-btn">
                          <button type="button" className="quantity-right-plus btn btn-success btn-number"
                            data-type="plus" data-field="">
                            <span className="glyphicon glyphicon-plus">+</span>
                          </button>
                        </span>
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
                  <div className="input-group quant_select">
                    <span className="input-group-btn">
                      <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                        data-type="minus" data-field="">
                        <span className="glyphicon glyphicon-minus">-</span>
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity"
                      className="form-control input-number" value="2" min="1" max="100" />
                    <span className="input-group-btn">
                      <button type="button" className="quantity-right-plus btn btn-success btn-number"
                        data-type="plus" data-field="">
                        <span className="glyphicon glyphicon-plus">+</span>
                      </button>
                    </span>
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
                  <div className="input-group quant_select">
                    <span className="input-group-btn">
                      <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                        data-type="minus" data-field="">
                        <span className="glyphicon glyphicon-minus">-</span>
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity"
                      className="form-control input-number" value="3" min="1" max="100" />
                    <span className="input-group-btn">
                      <button type="button" className="quantity-right-plus btn btn-success btn-number"
                        data-type="plus" data-field="">
                        <span className="glyphicon glyphicon-plus">+</span>
                      </button>
                    </span>
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
                  <div className="input-group quant_select">
                    <span className="input-group-btn">
                      <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                        data-type="minus" data-field="">
                        <span className="glyphicon glyphicon-minus">-</span>
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity"
                      className="form-control input-number" value="4" min="1" max="100" />
                    <span className="input-group-btn">
                      <button type="button" className="quantity-right-plus btn btn-success btn-number"
                        data-type="plus" data-field="">
                        <span className="glyphicon glyphicon-plus">+</span>
                      </button>
                    </span>
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