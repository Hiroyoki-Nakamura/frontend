import React from 'react';
import './styles.css'

export default props => (
  <>
    <body className="cinza">

      <div className="container">
        <div className="row"></div>
      </div>
      <div className="container">
        <div className="row">

          <div className="col-12">

          </div>

          <div className="col-12">
            <section>

              <div className="center carousel">
                <div className="banners-carousel">
                  <h2>BANNERS</h2>
                </div>
              </div>

              <div className="products">
                <div className="header-products center">
                  <h2 className="center">Bebidas</h2>
                  <select className="hp2" name="order_by" id="orderby">
                    <option value="maior-menor">Maior - Menor $</option>
                    <option value="menor-maior">Menor - Maior $</option>
                    <option value="maior-menor">A - Z</option>
                    <option value="maior-menor">Z - A</option>
                  </select>
                </div>
              </div>


              <div className="row">

                <div className="container col-12">
                  <div className="row">

                    <div className="col-3">
                      <div className="col-12 filter">
                        <div className="filter-products">Filtros </div>
                        <div className="sublin"> Valores</div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="100_500" />
                          <label className="form-check-label" for="100_500">
                            R$100-R$500
                        </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="500_800" />
                          <label className="form-check-label" for="500_800">
                            R$500-R$800
                        </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="800_1000" />
                          <label className="form-check-label" for="800_1000">
                            R$800-R$1000
                        </label>
                        </div>
                        <div className="sublin"> Tipo</div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="tinto" />
                          <label className="form-check-label" for="tinto">
                            Tinto
                        </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="rose" />
                          <label className="form-check-label" for="rose">
                            Rose
                        </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="Outros" />
                          <label className="form-check-label" for="Outros">
                            Outros
                        </label>
                        </div>
                        <div className="sublin"> Marca</div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="tinto" />
                          <label className="form-check-label" for="tinto">
                            Marca
                        </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="rose" />
                          <label className="form-check-label" for="rose">
                            Marca
                        </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="Outros" />
                          <label className="form-check-label" for="Outros">
                            Marca
                        </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-9">
                      <div className="row">

                        <div className="col-12 col-md-6">
                          <div className="center product">
                            <div className="image-product">
                              <img
                                src="./img/Chivas-12-anos (3).png"
                                alt="Chivas 12 anos" />
                            </div>
                            <div className="header-product">
                              <h1 className="header-product">Chivas 12 anos</h1>
                            </div>
                            <div className="price-product"><label className="price-line">R$ 99,99</label> <label>R$ 90,99</label></div>
                            <div>
                              <button className="buy-product">comprar</button>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="center product">
                            <div className="image-product">
                              <img
                                src="./img/Chivas-12-anos (3).png"
                                alt="Chivas 12 anos" />
                            </div>
                            <div className="header-product">
                              <h1 className="header-product">Chivas 12 anos</h1>
                            </div>
                            <div className="price-product"><label className="price-line">R$ 99,99</label> <label>R$ 90,99</label></div>
                            <div>
                              <button className="buy-product">comprar</button>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="center product">
                            <div className="image-product">
                              <img
                                src="./img/Chivas-12-anos (3).png"
                                alt="Chivas 12 anos" />
                            </div>
                            <div className="header-product">
                              <h1 className="header-product">Chivas 12 anos</h1>
                            </div>
                            <div className="price-product"><label className="price-line">R$ 99,99</label> <label>R$ 90,99</label></div>
                            <div>
                              <button className="buy-product">comprar</button>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="center product">
                            <div className="image-product">
                              <img
                                src="./img/Chivas-12-anos (3).png"
                                alt="Chivas 12 anos" />
                            </div>
                            <div className="header-product">
                              <h1 className="header-product">Chivas 12 anos</h1>
                            </div>
                            <div className="price-product"><label className="price-line">R$ 99,99</label> <label>R$ 90,99</label></div>
                            <div>
                              <button className="buy-product">comprar</button>
                            </div>
                          </div>
                        </div>






                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </section>
          </div>

        </div>
      </div>

    </body>

  </>
)
