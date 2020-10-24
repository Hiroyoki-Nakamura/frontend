import React from 'react';
import './styles.css';

import API from '../../Services/api';

import $ from 'jquery';


import Banners from '../../Components/Banners';
import Product from '../../Components/Produto';

export default class Home extends React.Component {

  componentDidMount() {
    $('.carousel').carousel()
  }

  getProdutos = async () => {
    const produtos = await API.get('/produto/listar');

    console.log(produtos.data);

  }

  render() {
    return (
      <>
        <div className="col-12 mt-3">
          <section>

            <Banners />

            <div className="products">

              <div className="header-products">
                <h2>Bebidas</h2>
              </div>

              <div className="container">
                <div className="row">

                  <Product
                    name='Chivas 12 anos' value='99,99' valueOff='69,99' image="../img/Chivas-12-anos (3).png" alt="Chivas 12 anos" 
                  />

                </div>
              </div>

            </div>
          </section>
        </div>
      </>
    );
  }
} 