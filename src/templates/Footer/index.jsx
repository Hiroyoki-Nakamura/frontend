import React from 'react';
import './styles.css';

export default props => (
<footer>
    <div className="center Footer">
      <div className='col-12 col-md-3 list_footer'>
        <ul>
        <li className='list_footer'><a href="#/home">Home</a></li>
          <li className='list_footer'><a href="#/sobre">Sobre nós</a></li>
          <li className='list_footer'><a href="#/contato">Contato</a></li>
        </ul>
      </div>
      <div className='col-12 col-md-3 list_footer'>
        <ul>
          <li className='list_footer'><a href="">Vinhos</a></li>
          <li className='list_footer'><a href="">Champagnes</a></li>
          <li className='list_footer'><a href="">Destilados</a></li>
        </ul>
      </div>  
      <div className='col-12 col-md-3 list_footer'>
        <h4>Contatos</h4>
        <p>(11)91234-5678</p>
        <p>(11)91234-5678</p>
      </div>
      <div className='social_icons center col-md-3 col-12'>
            <a href="#"><div className='phone_icon'/></a>    
            <a href="https://www.instagram.com/pi_desvinhos/" target='blank'><div className='insta_icon'/></a>
            <a href="#/contato"><div className='mail_icon'/></a>
          </div>
    </div>
    <div className='row footer-bootom'>
      <div className="col-12">
          <p className='center ml-5'>Site focado exclusivamente na venda de Bebidas Alcoólicas como, vinhos, champanhes e  destilados com os produtos de alta qualidade </p>
          <p className="copyright">Desvinho &copy; 2020</p>
      </div>   
    </div>
  </footer> 
)