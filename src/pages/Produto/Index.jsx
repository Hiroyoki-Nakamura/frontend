
import Axios from 'axios';
import React from 'react';

getCategoria = () => {
      Axios.get('').then(
          resp => {
              this.setState({produtos: resp.data})
          });
          let nome = ' meu nome'
          console.log('oi' + nome )

          console.log(`oi ${nome}`)

        //   return
        //   this.state.produto.map((item => {
        //       return <li><a href={"#/" + item.nome} className={item.nome}>
        //           {item.nome}</a></li>
        //   }))
}

export default props => (
    <html lang="pt-br">

        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />


            <link rel="stylesheet" href="./../css/main.css" />
            <link rel="stylesheet" href="./../css/produto.css" />
            <title>Produto</title>
        </head>

        <body>

            <section id="sectionproduto">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="card" style={{ width: + '18rem' }}>
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
                                <h6>De: <strike>R$ 100,00</strike> &nbsp; <id style="font-size:20px;">Por: R$ 90,99</id>
                                </h6>
                                <br />


                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. </p>
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

        </body>

    </html>
)
