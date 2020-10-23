import React from 'react';
import './perfil.css';

export default props => (
<html lang="pt-br">

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
    <link rel="stylesheet" href="./../css/main.css"/>
    <title>Home</title>
</head>

 <body>


    <header className="meuHeader">
        <div className="center logo">
            <h1>Desvinho</h1>
        </div>
    </header>


    <section id="barraNav">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#"></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Todas as categorias
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Categoria</a>
                            <a className="dropdown-item" href="#">Categoria</a>
                            <a className="dropdown-item" href="#">Categoria</a>
                            <a className="dropdown-item" href="#">Categoria</a>
                            <a className="dropdown-item" href="#">Categoria</a>
                            <a className="dropdown-item" href="#">Categoria</a>
                            <a className="dropdown-item" href="#">Categoria</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="produto.html">Vinhos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Destilados</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Champagnes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contato.html">Contato</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className=" lupa_icon btn btn-outline-dark my-2 my-sm-0" type="submit"></button>

                </form>
            </div>
        </nav>
    </section>
    <button id="botao_tela_menor" className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">Menu</span>
    </button>

     {/* <div style="width: 1000px; height: 1000px; background-color: #3d3c3c;"></div> */}



 </body>

</html>
)
