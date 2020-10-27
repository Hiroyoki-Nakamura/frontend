import React, { Component } from 'react';
import './styles.css';

export default class Produto extends Component {
  state = {
    product: ''
  }

  componentDidMount() {
    this.setProduto();
  }

  setProduto = async () => {
    const product = await this.props.route.render();
    this.setState({product: { ...product }});
    console.log(product);
  }

  render() {
    return (
      <>
        <section id="sectionproduto" className="center">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="card style_card">
                  <div className="card-body center">
                    <img className='imageProduct' src={this.state.product.ds_imagem} />
                  </div>
                </div>
              </div>
              <article className='col-9'>
                <div className="col-lg-3">
    
                </div>
                <div className="col-12 ">
                  <h4>{this.state.product.nome_produto}</h4>
                  <hr />
                  <h6>De: <strike>R$ {`${this.state.product.valor_produto}`.replace('.', ',')}</strike> &nbsp; <h6 className='id_style'>Por: {`${this.state.product.desconto_produto}`.replace('.', ',')}</h6>
                  </h6>
                  <br />
    
                  <p>{this.state.product.ds_produto}</p>
                  <hr />
                  <div className="col-6" id="comprar">
                    <a href="carrinho.html"><button type="button" className="btn btn-success btn-lg btn-block" id="botao">Comprar</button></a>
                  </div>
                  <div className="col-4" id="voltar">
                    <a href="#/"><button type="button" className="btn btn-secondary" id="botao">Voltar</button></a>
                  </div>
                </div>
              </article>
            </div>
          </div>
    
        </section>
      </>
    )
  }
} 
