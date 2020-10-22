import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

export default props => (


  <>
    {/* <div class="container">
      <div class="row"></div>
    </div> */}

    <div className="container">
      <div className="row">

        <div class="col-12">

        </div>

        <div className="col-12">
          <section>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100 banners-carousel" src="../img/champagne-dom-perignon-brut_1_650.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 banners-carousel" src="../img/desvinho_logo.png" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 banners-carousel" src="../img/cart_icon.png" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

          <div className="product">
            <div className="header-products">
              <h2>Bebidas</h2>
            </div>
            <div className="container color_back">
              <div className="row">
                <div className="col-6 col-md-3">
                  <div className="center product">
                    <div className="image-product">
                      <img src="../img/Chivas-12-anos (3).png" alt="Chivas 12 anos" />
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
                      <img src="../img/Chivas-12-anos (3).png" alt="Chivas 12 anos" />
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
                      <img src="../img/Chivas-12-anos (3).png" alt="Chivas 12 anos" />
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
                      <img src="../img/Chivas-12-anos (3).png" alt="Chivas 12 anos" />
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
                      <img src="../img/Chivas-12-anos (3).png" alt="Chivas 12 anos" />
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
      </div>
    </div>
  </>

)



