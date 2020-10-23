import React from 'react';

export default props => (
  <body>
    <div className="container" id="container">
      <div className="row">
        <div className="col-12">
          <h2 className="center">Carrinho</h2>
          <div className="container" id="topo">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <h4 className="Produto"></h4>
                  </div>
                  <div className="col-2">
                    <h4 className="Valor Unitario"></h4>
                  </div>
                  <div className="col-2">
                    <h4>Quantidade</h4>
                  </div>
                  <div className="col-2">
                    <h4>Subtotal</h4>
                  </div>
                  <div className="col-2">
                    <h4>Remover</h4>
                  </div>
                </div>


              </div>

            </div>
          </div>
          <div className="container" id="carrinho">
            <div className="row">
              <div className="col-12">

                <br />
                <div className="row" id="linha-1">

                  <div className="col-1">
                    <div className="card">
                      <div className="card-body">

                      </div>
                    </div>
                  </div>
                  <div className="col-3" id="nomeProduto">
                    <h5>Chivas Whisky 12 Anos</h5>

                  </div>
                  <div className="col-2 center">
                    <input disabled placeholder="R$ 90,99" />

                  </div>


                  <div className="col-2 center">
                    <div className="input-group">
                      <span className="input-group-btn">
                        <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                          data-type="minus" data-field="">
                          <span className="glyphicon glyphicon-minus"></span>
                        </button>
                      </span>
                      <input type="text" id="quantity" name="quantity"
                        className="form-control input-number" value="10" min="1" max="100" />
                      <span className="input-group-btn">
                        <button type="button" className="quantity-right-plus btn btn-success btn-number"
                          data-type="plus" data-field="">
                          <span className="glyphicon glyphicon-plus"></span>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="col-2 center">
                    <input disabled placeholder="R$ 90,99" />
                  </div>
                  <div className="col-2 center">
                    <div className="form-check">
                      <input className="form-check-input position-static" type="checkbox"
                        id="blankCheckbox" value="option1" aria-label="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">

              <div className="col-1">
                <div className="card">
                  <div className="card-body">
                  </div>
                </div>
              </div>

              <div className="col-3" id="nomeProduto">
                <h5>Chivas Whisky 12 Anos</h5>

              </div>
            </div>
            <hr />
            <div className="row">

              <div className="col-1">
                <div className="card">
                  <div className="card-body">

                  </div>
                </div>
              </div>
              <div className="col-3" id="nomeProduto">
                <h5>Chivas Whisky 12 Anos</h5>

              </div>
            </div>
            <hr />
            <div className="row">

              <div className="col-1">
                <div className="card">
                  <div className="card-body">
                  </div>
                </div>
              </div>

              <div className="col-3" id="nomeProduto">

                <h5>Chivas Whisky 12 Anos</h5>

              </div>
            </div>
            <hr />
            <div className="col-12">
              <div className="row">

                <div className="col-1">
                  <div className="card">
                    <div className="card-body">
                    </div>
                  </div>
                </div>
                <div className="col-3" id="nomeProduto">

                  <h5>Chivas Whisky 12 Anos</h5>

                </div>
                <input disabled placeholder="R$ 90,99" />
                <div className="input-group">
                  <span className="input-group-btn">
                    <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                      data-type="minus" data-field="">
                      <span className="glyphicon glyphicon-minus"></span>
                    </button>
                  </span>
                  <input type="text" id="quantity" name="quantity"
                    className="form-control input-number" value="10" min="1" max="100" />
                  <span className="input-group-btn">
                    <button type="button" className="quantity-right-plus btn btn-success btn-number"
                      data-type="plus" data-field="">
                      <span className="glyphicon glyphicon-plus"></span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="container" id="base">
        <div className="row">
          <div className="col-12">
            <h6 style={{ color: + '#fff' }}>Valor Total</h6>
            <div className="row">
              <div className="col-4">

                <input disabled placeholder="R$ 00,00" />
              </div>
              <div className="col-4">

                <button>Confirmar Compra</button>

              </div>

            </div>


          </div>

        </div>
      </div>


    </div>

  </body>





)