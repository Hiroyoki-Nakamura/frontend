import React from 'react';
import './styles.css';

export default props => (


<body className='color_back'>
    <section className="fundo">
        <div className="fundobr">
            <div className="fundonota">
                <br/>
                <br/>
                <img src="../img/check.png" width="100px"  height="100px" />
                <br/>
                <br/>
                <h2>Pedido Concluido Com Sucesso!</h2>
                <br/>
                <br/>
                <p className="ps">Numero do Pedido: #00001</p>
                <br/>
                <p className="ps">Data: 01/01/2020 Horario:23h:59m</p>
                <br/>
                <p className="ps">Endereço De Entrega: Rua dois, nº 01 - Cep: 01234-56 - Cidade: São Paulo - Bairro: Centro.</p>
                <br/>
                <a href="../html/index.html"><button type="button " className="btn btn-success btcc ">Continuar Comprando</button></a>
            </div>
        </div>
    </section>

</body>
)
