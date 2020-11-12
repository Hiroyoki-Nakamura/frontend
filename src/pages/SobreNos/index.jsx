import React from 'react';
import './styles.css';

export default props => (
    <div className="container">
        <div className="row color_text center" id='sobre_container'>
            <div className='container'>
                <h1>Sobre Nós</h1>
                <p>E-commerce desenvolvido para o projeto QUERO SER DEV! da RD</p>
                <p>Desenvolvedores responsáveis:</p>
                <ul className='list_members'>
                    <li>Anderson Nakamura</li>
                    <li>Gustavo Doria</li>
                    <li>Kleydson Barros</li>
                    <li>Matheus Costa</li>
                    <li>Steffany Souza</li>
                </ul>
            </div>
        </div>
    </div>
)