import React from 'react';
import './navbar.css'

export default props => (
    <>
    <section id="barraNav">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#"></a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#/index">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Todas as categorias
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#/categoria">Categoria</a>
              <a className="dropdown-item" href="#">Categoria</a>
              <a className="dropdown-item" href="#">Categoria</a>
              <a className="dropdown-item" href="#">Categoria</a>
              <a className="dropdown-item" href="#">Categoria</a>
              <a className="dropdown-item" href="#">Categoria</a>
              <a className="dropdown-item" href="#">Categoria</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/produto">Vinhos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/produto">Destilados</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/produto">Champagnes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/contato">Contato</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
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