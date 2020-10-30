import React from 'react';
import './styles.css';

export default props => (
<footer>
    <div className="center Footer">
      <div className='col-12 col-md-2 list_footer'>
        <ul>
          <a href="#/home"><li className='list_footer'>Home</li></a>
          <a href="#"><li className='list_footer'>About us</li></a>
          <a href="#/contato"><li className='list_footer'>Contato</li></a>
        </ul>
      </div>
      <div className='col-12 col-md-2'>
        <img className='bottle_icon' src="./img/bottle_icon.png" alt=""/>
      </div>
      <div className='col-12 col-md-2 list_footer'>
        <ul>
          <a href=""><li className='list_footer'>Vinhos</li></a>
          <a href=""><li className='list_footer'>Champagnes</li></a>
          <a href=""><li className='list_footer'>Destilados</li></a>
        </ul>
      </div>  
      <div className='col-12 col-md-2'>
        <h4>Contatos</h4>
        <p>(11)91234-5678</p>
        <p>(11)91234-5678</p>
        <img className='phone_icon' src="./img/phone_icon.svg" alt=""/>
        <a href="https://www.instagram.com/pi_desvinhos/" target='blank'><img className='insta_icon' src="./img/instagram_icon.svg" alt=""/></a>
        <a href="#/contato"><img className='mail_icon' src="./img/email_icon.png" alt=""/></a>
      </div>
    </div>
    <p className='center'>Site focado exclusivamente na venda de Bebidas Alcoólicas como, vinhos, champanhes e  destilados com os produtos de alta qualidade </p>
    <p className="copyright">Desvinho &copy; 2020</p>
  </footer> 
)