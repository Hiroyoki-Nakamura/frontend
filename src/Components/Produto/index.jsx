import React, { Component } from 'react';
import './styles.css';

export default class Produto extends Component {
  state = {
    product: '',
    de: '',
    por: ''
  }

  componentDidMount() {
    this.setProduto();
  }

  setProduto = async () => {
    const product = await this.props.route.render();
      if (product == '') {
      window.location.href = '/';
    }
    this.setState({
      product: { ...product },
      de: product.valor_produto.toFixed(2),
      por: product.desconto_produto.toFixed(2)
    });
  }

  onCart = () => {
    const product = this.state.product;
    const verify = JSON.parse(localStorage.getItem('cart'));

    if (verify !== null && verify.length >= 1) {
      let add = true;
      verify.map(products => {
        if (add) {
          add = products.id == product.id ? false : true;
        }
      });

      if (add) {
        localStorage.setItem('cart', JSON.stringify([...verify, product]));
      } 
    } else {
      localStorage.setItem('cart', JSON.stringify([product]));
    }
  }

  render() {
    return (
      <>
        <section id="sectionproduto" className="center">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 ">
                <div className="card style_card">
                  <div className="card-body center">
                    <img className='imageProduct' src={this.state.product.ds_imagem} />
                  </div>
                </div>
              </div>
              <div className="col-9 md-12 white">

                <div className="col-12">
                  <h4>{this.state.product.nome_produto}</h4>
                  <hr />
                  <h6>De: <strike className='price-line'>R$ {`${this.state.de}`.replace('.', ',')}</strike> &nbsp;
                  <h6 className='id_style'>Por: {`${this.state.por}`.replace('.', ',')}</h6>
                  </h6>
                  <br />

                  <p>{this.state.product.ds_produto}</p>
                  <hr />
                  <div className="col-lg-6" id="comprar">
                    <a href="#/carrinho"><button type="button" className="btn btn-success btn-lg " onClick={this.onCart} id="botao">Comprar</button></a>
                  </div>
                  <div className="col-6" id="voltar">
                    <a href="#/"><button type="button" className="btn btn-secondary btn-lg" id="botao">Voltar</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
} 