import React, { Component } from 'react';
import './styles.css'


import API from '../../Services/api';

import Categoria from '../../Components/Categoria';
import Dropdown_menu from '../../Components/Dropdown_menu';
import ItemMenu from '../../Components/Item_menu';
import Product from '../../Components/Produto';

export default class NavBar extends Component {
  state = {
    categorys: [],
    search: '',
    products: [],
    product: ''
  }

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

    console.log(`/buscar/${resultado}`)
    switch (id) {
      case 'search':
        this.setState({ search: resultado })
        break;
      default:
    }
    this.getBuscar()
  }




  getBuscar = async () => {
    const nome = (this.state.search);
    const busca = await API.get(`/buscar/${nome}`);

    console.log(busca);

  }

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
                    {this.state.categorys.map(category => {
                      return (<Categoria key={category.id} category={category.id} value={category.ds_categoria} />);
                    })}
                  </div>
                </Dropdown_menu>
                <ItemMenu href='#/produto' value='Produto' />
                <ItemMenu href='#/contato' value='Contato' />
              </ul>
              <form className="form-inline my-2 my-lg-0">

                <input className="form-control mr-sm-2" type="search" placeholder="Buscar" id="search" aria-label="Search" value={this.state.search} onChange={this.onChange} />


                <button className=" lupa_icon btn btn-outline-dark my-2 my-sm-0 btn_lupa" type="submit" ></button>
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
