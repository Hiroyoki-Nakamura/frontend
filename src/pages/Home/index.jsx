import React from 'react';

import API from '../../Services/api';

export default class props extends React.Component {

  getProdutos = async () => {
    const produtos = await API.get('/produto/listar');

    console.log(produtos.data);
  }

  render() {
    return (
      <>
        <div className="col-12">
          <section>

            <div className="center carousel">
              <div className="banners-carousel">

              </div>
            </div>

            <div className="products">

              <div className="header-products">
                <h2>Bebidas</h2>
              </div>

              <div className="container">
                <div className="row">

                  <div className="col-6 col-md-3">
                    <div className="center product">
                      <div className="image-product">
                        <img
                          src="../img/Chivas-12-anos (3).png" alt="Chivas 12 anos" />
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

                  <div className="col-6 col-md-3">
                    <div className="center product">

                      <div className="image-product">
                        <img
                          src="../img/Chivas-12-anos (3).png"
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

                  <div className="col-6 col-md-3">
                    <div className="center product">
                      <div className="image-product">
                        <img
                          src="../img/Chivas-12-anos (3).png"
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

                  <div className="col-6 col-md-3">
                    <div className="center product">
                      <div className="image-product">
                        <img
                          src="../img/Chivas-12-anos (3).png"
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

                  <div className="col-6 col-md-3">
                    <div className="center product">
                      <div className="image-product">
                        <img
                          src="../img/Chivas-12-anos (3).png"
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
          </section>
        </div>
      </>
    );
  }
} 