import React, { Component } from 'react';
import Categoria from '../../Components/Categoria';
import Dropdown_menu from '../../Components/Dropdown_menu';
import ItemMenu from '../../Components/Item_menu';
import './styles.css'

export default class NavBar extends Component {
  render() {
    return (
      <>
        <section id="barraNav">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#"></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">

                <ItemMenu href='#/index' value='Home' />
                <Dropdown_menu value='Todas as categorias'>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Categoria value='Destilados' />
                    <Categoria value='Vinhos' />
                    <Categoria value='Champagnes' />
                    <Categoria value='Vinhos Latinos' />
                    <Categoria value='Espumante' />
                    <Categoria value='Licor' />
                  </div>
                </Dropdown_menu>
                <ItemMenu href='#/produto' value='Vinhos' />
                <ItemMenu href='#/produto' value='Destilados' />
                <ItemMenu href='#/produto' value='Champagnes' />
                <ItemMenu href='#/contato' value='Contato' />
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                <button className=" lupa_icon btn btn-outline-dark my-2 my-sm-0 btn_lupa" type="submit"></button>
              </form>
            </div>
          </nav>
        </section>
        <button id="botao_tela_menor" className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">Menu</span>
        </button>
      </>
    )
  }
}
