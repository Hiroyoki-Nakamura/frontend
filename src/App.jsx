import React from 'react';
import Routes from './Routes';
import Footer from './templates/Footer/Footer';
import Header from './templates/Header/index';
import Menu from './templates/navBar/Menu';
import 'bootstrap/dist/css/bootstrap.css';


export default props => (
    <body className='color_back'>
        <Header/>
        <Menu/>
        <Routes/> 
        <Footer/>
    </body>
    
)