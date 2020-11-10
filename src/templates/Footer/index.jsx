import React from 'react';
import './styles.css';

export default props => (
<footer>
    <div className="center Footer">
      <div className='col-12 col-md-2 list_footer'>
        <ul>
          <a href="#/home"><li className='list_footer'>Home</li></a>
          <a href="#/sobre"><li className='list_footer'>Sobre nós</li></a>
          <a href="#/contato"><li className='list_footer'>Contato</li></a>
        </ul>
      </div>
      <div className='col-12 col-md-2'>
        <div className='bottle_icon'/>
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

        
      </div>
    </div>
    <div className='row'>
      <div className="col-8">
          <p className='center'>Site focado exclusivamente na venda de Bebidas Alcoólicas como, vinhos, champanhes e  destilados com os produtos de alta qualidade </p>
          <p className="copyright">Desvinho &copy; 2020</p>
      </div>
          <div className='col-1'>
            <a href="#"><div className='phone_icon'/></a>    
          </div>
          <div className="col-1">
          <a href="https://www.instagram.com/pi_desvinhos/" target='blank'><div className='insta_icon'/></a>
          </div>
          <div className="col-1 m-0">
          <a href="#/contato"><div className='mail_icon'/></a>
          </div>

    </div>
  </footer> 
)