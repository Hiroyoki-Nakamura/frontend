import React from 'react';
import './produto.css';
import Product from '../../Components/Produto';
export default props => (
  <>
    <section id="sectionproduto">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="card style_card">
              <div className="card-body">
                <img src="../img/Chivas-12-anos (3).png" />
              </div>
            </div>
          </div>
          <article>
            <div className="col-lg-3">

            </div>
            <div className="col-12 ">
              <h4>Chivas 12 anos</h4>
              <hr />
              <h6>De: <strike>R$ 100,00</strike> &nbsp; <id className='id_style'>Por: R$ 90,99</id>
              </h6>
              <br />

              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              <hr />
              <div className="col-6" id="comprar">
                <a href="carrinho.html"><button type="button" className="btn btn-success btn-lg btn-block" id="botao">Comprar</button></a>
              </div>
              <div className="col-4" id="voltar">
                <a href="index.html"><button type="button" className="btn btn-secondary" id="botao">Voltar</button></a>
              </div>
            </div>
          </article>
        </div>
      </div>




    </section>

  </>

)