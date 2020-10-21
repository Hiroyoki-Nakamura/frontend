// import React from 'react';

// export default props => (
//     // <!DOCTYPE html>
//     // <html lang="pt-br">
    
//     // <head>
//     //     <meta charset="UTF-8">
//     //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     //     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
//     //         integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
//     //     <link rel="stylesheet" href="../css/main.css">
//     //     <link rel="stylesheet" href="../css/cadastro.css">
//     //     <title>Cadastro</title>
//     // </head>
    
//     <body>
    
//         <header className="meuHeader">
//             <div className="center logo">
//                 <div className="center logotipo"></div>
//             </div>
//         </header>
    
//         <section id="barraNav">
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <a className="navbar-brand" href="#"></a>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mr-auto">
//                         <li className="nav-item">
//                             <a className="nav-link" href="index.html">Home</a>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
//                                 aria-haspopup="true" aria-expanded="false">
//                                 Todas as categorias
//                             </a>
//                             <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                 <a className="dropdown-item" href="#">Categoria</a>
//                                 <a className="dropdown-item" href="#">Categoria</a>
//                                 <a className="dropdown-item" href="#">Categoria</a>
//                                 <a className="dropdown-item" href="#">Categoria</a>
//                                 <a className="dropdown-item" href="#">Categoria</a>
//                                 <a className="dropdown-item" href="#">Categoria</a>
//                                 <a className="dropdown-item" href="#">Categoria</a>
//                             </div>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="produto.html">Vinhos</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Destilados</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Champagnes</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="contato.html">Contato</a>
//                         </li>
//                     </ul>
//                     <form className="form-inline my-2 my-lg-0">
//                         <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
//                         <button className="lupa_icon btn btn-outline-dark my-2 my-sm-0" type="submit"></button>
    
//                     </form>
//                 </div>
//             </nav>
//         </section>
//         <button id="botao_tela_menor" className="navbar-toggler" type="button" data-toggle="collapse"
//             data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
//             aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon">Menu</span>
//         </button>
    
//         <div className="container main">
//             <div className="row">
//                 <div className="col-lg-12">
    
//                     <form className="col-lg-12" id="formulario">
//                         <h1/>
//                             <center/>
    
//                                 Cadastro
//                         <h1/>
//                         <center/>
    
//                         <div className="row">
//                             <div className="col-6 center">
//                                 <div className="row" id="container1">
//                                     <div className="col-12">
//                                         <div className="col-12">
//                                             <br/>
//                                             <label for="exampleInputPassword1">Nome Completo</label>
//                                             <input type="text" className="form-control" placeholder="Digite seu nome" />
//                                         <div/>
//                                         <div className="col-12">
//                                             <label for="exampleInputPassword1">CPF/CNPJ</label>
//                                             <input type="text" className="form-control valida-cpf-cnpj"
//                                                 placeholder="000-000-000-00 / XX.XXX.XXX/XXXX-XX" />
//                                         </div>
//                                         <div className="container">
//                                             <div className="row">
//                                                 <div className="col-6">
//                                                     <label for="exampleInputPassword1">RG</label>
//                                                     <input type="text" className="form-control valida-rg"
//                                                         placeholder="__.___.___-_" />
//                                                 </div>
//                                                 <div className="col-6">
//                                                     <label for="exampleInputPassword1">Nascimento</label>
//                                                     <input type="date" className="form-control" placeholder="" />
//                                                 </div>
//                                                 <div className="col-6">
//                                                     <label for="exampleInputPassword1">Telefone 1</label>
//                                                     <input type="text" className="form-control" placeholder="(__)_____-____" />
//                                                 </div>
//                                                 <div className="col-6">
//                                                     <label for="exampleInputPassword1">Telefone 2</label>
//                                                     <input type="text" className="form-control" placeholder="(__)_____-____" />
//                                                 </div>
//                                                 <div className="col-6">
//                                                     <label for="exampleFormControlSelect1">Gênero</label>
//                                                     <select className="form-control" id="exampleFormControlSelect1">
//                                                         <option>Feminino</option>
//                                                         <option>Masculino</option>
//                                                     </select>
//                                                 </div>
//                                                 <div className="col-6">
//                                                     <label for="exampleInputEmail1">Email</label>
//                                                     <input type="email" className="form-control" id="exampleInputEmail1"
//                                                         aria-describedby="emailHelp" placeholder="Joao@gmail.com" />
//                                                 </div>
//                                                 <div className="col-6">
//                                                     <label for="exampleInputPassword1">Senha</label>
//                                                     <input type="password" className="form-control" id="exampleInputPassword1"
//                                                         placeholder="********" />
//                                                 </div>
    
//                                                 <div className="col-6">
//                                                     <label for="exampleInputPassword1">Confirme sua senha</label>
//                                                     <input type="password" className="form-control" id="exampleInputPassword1"
//                                                         placeholder="********" />
//                                                     <br/>
//                                                 </div>
//                                             </div>
//                                         </div>
    
//                                     </div>
    
//                                 </div>
    
//                             </div>
    
//                             <div className="col-6 center">
//                                 <div className="row" id="container2">
//                                     <div className="col-12">
//                                         <div className="container">
//                                             <div className="row">
//                                                 <div className="col-6">
//                                                     <br/>
//                                                     <label for="inputAddress">CEP</label>
//                                                     <input type="text" className="form-control" placeholder="00000-000" />
//                                                 </div>
    
//                                                 <div className="col-6">
//                                                     <br/>
//                                                     <label for="inputAddress">Cidade</label>
//                                                     <input type="text" className="form-control"
//                                                         placeholder="Digite sua cidade aqui" />
//                                                 </div>
//                                                 <div className="col-6">
//                                                     <label for="inputAddress">Bairro</label>
//                                                     <input type="text" className="form-control" placeholder="Bairro" />
//                                                 </div>
//                                                 <div className="col-3">
//                                                     <label for="inputAddress">UF</label>
//                                                     <input type="text" className="form-control" placeholder="UF" />
//                                                 </div>
    
//                                             </div>
//                                         </div>
    
    
//                                         <div className="col-12">
//                                             <label for="inputAddress">Rua</label>
//                                             <input type="text" className="form-control" placeholder="Digite seu endereço" />
//                                         </div>
//                                         <div className="col-12">
//                                             <label for="inputAddress">Número</label>
//                                             <input type="text" className="form-control" placeholder="00000" />
//                                         </div>
//                                         <div className="col-12">
//                                             <label for="inputAddress">Complemento</label>
//                                             <input type="text" className="form-control" placeholder="Torre, Bloco, Andar" />
//                                         </div>
//                                         <div className="col-12">
//                                             <label for="inputAddress">Referência</label>
//                                             <input type="text" className="form-control" placeholder="" />
//                                             <br/>
//                                         </div>
//                                     </div>
    
    
    
    
//                                 </div>
    
//                             </div>
    
//                         </div>
//                         <div className="col-6">
//                             <label for="inputAddress"></label>
//                             <button type="submit" className="btn btn-primary btn-lg btn-block" id="teste-botao"
//                                 onclick="validar()">Prosseguir</button>
//                             <br/>
//                         </div>
    
//                     </form>
    
//                 </div>
    
//             {/* </div> */}
    
//         </div>
    
//         <footer>
//             <div className="center meuFooter">
//                 <div className="textos">
//                     <p>Lorem ipsum dolor sit amet consectetur dicta quisquam! Tenetur labore esse dolor quidem beatae
//                         consequuntur cum.</p>
//                     <p>Lorem, ipsum dolor sit amet consectetur a autem dolorum culpa modi tenetur, velit magni. Ad ab quod
//                         eius?</p>
//                 </div>
//                 <div className="telefone">
//                     <p>(11)91234-5678</p>
//                     <p>(11)91234-5678</p>
//                 </div>
//             </div>
    
//             <p className="copyright">copyright &copy 2020</p>
    
//         </footer>
    
//     </body>
    
//     {/* </html> */}
// )