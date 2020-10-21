import React from 'react';
import './navbar.css'

export default props => (
    <>
    <section id="barraNav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Todas as categorias
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Categoria</a>
              <a class="dropdown-item" href="#">Categoria</a>
              <a class="dropdown-item" href="#">Categoria</a>
              <a class="dropdown-item" href="#">Categoria</a>
              <a class="dropdown-item" href="#">Categoria</a>
              <a class="dropdown-item" href="#">Categoria</a>
              <a class="dropdown-item" href="#">Categoria</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Vinhos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Destilados</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Champagnes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contato</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button class=" lupa_icon btn btn-outline-dark my-2 my-sm-0" type="submit"></button>
        </form>
      </div>
    </nav>
  </section>
  <button id="botao_tela_menor" class="navbar-toggler" type="button" data-toggle="collapse"
    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">Menu</span>
  </button>
    </>
  )