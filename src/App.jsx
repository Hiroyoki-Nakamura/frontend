import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Casdatro from './pages/Cadastro';
import Routes from './Routes';
import Footer from './templates/Footer/Footer';
import Header from './templates/header/Header';
import Menu from './templates/navBar/Menu';
import 'bootstrap/dist/css/bootstrap.css';



export default props => (
    <>
        <Header/>
        <Menu/>
        <Routes/> 
        <Footer/>
    </>
    
)