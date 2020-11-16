import React, { Component } from 'react';
import './styles.css'

import API from '../../Services/api';

import Categoria from '../../Components/Categoria';
import Dropdown_menu from '../../Components/Dropdown_menu';
import ItemMenu from '../../Components/Item_menu';
import Produto from '../../Components/PesquisaProduto';

const BEFORE = {
  categorys: [],
  search: '',
  products: []
};

export default class NavBar extends Component {
  state = { ...BEFORE };

  componentDidMount() {
    this.getCategorias();
  }

  getCategorias = async () => {
    const localCategorys = JSON.parse(localStorage.getItem('categorys'));
    if (localCategorys == null) {
      const categorys = await API.get('/categoria/listarCategorias');
      this.setState({ categorys: [...categorys.data] });
      localStorage.setItem('categorys', JSON.stringify([...categorys.data]));
    } else {
      this.setState({ categorys: localCategorys });
    }
  }

  onChange = (event) => {
    const resultado = (event.target.value)
    const id = (event.target.id)

    switch (id) {
      case 'search':
        this.setState({ search: resultado });
        this.getBuscar(resultado);
        break;
      default:
    }
  }

  hideSearch = () => {
    const result = document.querySelector('.resultado-pesquisa');
    const prev = document.querySelector('.carousel-control-next');

    result.classList.add('none');
    if (prev != null) {
      prev.classList.remove('none');
    }
    this.setState({ products: [] });
  }

  getBuscar = async (nome) => {
    const result = document.querySelector('.resultado-pesquisa');
    const overlay = document.querySelector('.overlay-pesquisa');
    const spin = document.querySelector('.load-pesquisa');
    const prev = document.querySelector('.carousel-control-next');

    if (prev != null) {
      prev.classList.add('noPrevs');
    }
    result.classList.add('none');
    overlay.classList.remove('none');
    spin.classList.remove('none');

    let stop = false;
    if (nome != '' && nome != ' ' && nome.length > 1) {
      const busca = await API.get(`/buscar/${nome}`);
      if (busca.status == 202) {
        this.setState({ products: [...busca.data] });
        stop = true;
      }
    }

    if (stop == true) {
      result.classList.remove('none');
    } else {
      result.classList.add('none');
      if (prev != null) {
        prev.classList.remove('noPrevs');
      }
      this.setState({ products: [] });
    }
    overlay.classList.add('none');
    spin.classList.add('none');
  }

  render() {
    return (
      <>
        <section id="barraNav">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#"></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">

                <ItemMenu href='#/' value='Home' />
                <Dropdown_menu value='Todas as categorias'>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {this.state.categorys.map(category => {
                      return (<Categoria key={category.id} category={category.id} value={category.ds_categoria} />);
                    })}
                  </div>
                </Dropdown_menu>
                <ItemMenu href='#/produto' value='Produto' />
                <ItemMenu href='#/contato' value='Contato' />
              </ul>
              <div className="form-inline my-2 my-lg-0">

                <input className="form-control mr-sm-2" type="search" placeholder="Buscar" id="search" aria-label="Search" value={this.state.search} onChange={this.onChange} />
                <button className="lupa_icon btn btn-outline-dark my-2 my-sm-0 btn_lupa"></button>
              </div>
              <div className="resultado-pesquisa none">
                {this.state.products.map(product => {
                  return (
                    <Produto product={product} hide={this.hideSearch} />
                  );
                })}
              </div>
              <div className="load-pesquisa center none">
                <div className="spin"></div>
                <div className="loader">carregando</div>
              </div>
              <div className="overlay-pesquisa none"></div>
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
