import React from 'react';
import './styles.css';

export default props => (
<footer>

    <div className="center Footer">
      <div className='col-3 list_footer'>
        <ul>
          <li><a href="#/home">Home</a></li>
          <li><a href="#/">About us</a></li>
          <li><a href="#/Contato">Fale conosco</a></li>
        </ul>
      </div>
      <div className='col-3'>
        <img className='bottle_icon' src="./img/bottle_icon.png" alt=""/>
      </div>
      <div className='col-3 list_footer'>
        <ul>
          <li><a href="">Vinhos</a></li>
          <li><a href="">Champagnes</a></li>
          <li><a href="">Destilados</a></li>
        </ul>
      </div>  
      <div className='col-3'>
        <h4>Contatos</h4>
        <p>(11)91234-5678</p>
        <p>(11)91234-5678</p>
        <img className='phone_icon' src="./img/phone_icon.svg" alt=""/>
        <img className='insta_icon' src="./img/instagram_icon.svg" alt=""/>
        <img className='mail_icon' src="./img/email_icon.png" alt=""/>
      </div>
    </div>
    <p className='center'>Site focado exclusivamente na venda de Bebidas Alcoólicas como, vinhos, champanhes e  destilados com os produtos de alta qualidade </p>

    <p className="copyright">Desvinho &copy; 2020</p>
  </footer> 
)