import React from 'react';
import Routes from './Routes';
import Footer from '../templates/Footer';
import Header from '../templates/Header';
import Menu from '../templates/NavBar';

export default props => (
  <>
    <Header />
    <Menu />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Routes />
        </div>
      </div>
    </div>

    <Footer />
  </>
);