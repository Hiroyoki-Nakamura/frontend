import React, { Component } from 'react'
import './styles.css';

export default class Endereco extends Component {


  render() {
    return (
      <>
     <br></br>
      <h2>Endereço</h2>

      <br></br>
        <form className='container1 '>

          <div className='col-12'>
            <div className='row'>

              <div className="container col-6">
                <div className="form-group">

                 <br></br>
                  <label for="exampleInputEmail1">Rua</label>
                  <input type="text" className="form-control" id="rua" placeholder="Rua" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Bairro</label>
                  <input type="text" className="form-control" id="bairro" placeholder="Bairro" /></div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Complemento</label>
                  <input type="text" className="form-control" id="complemento" placeholder="Complemento" /></div>
                
                  <br></br>
              </div>

              <div className="container col-6">
              <br></br>
              <div className="form-group">
                  <label for="exampleInputPassword1">Referência</label>
                  <input type="text" className="form-control" id="referencia" placeholder="Referência" /></div>
              <div className="row">
                <div className="col-4">
                  
                  
                    <label >Número</label>
                    <input type="text" className="form-control" id="numero" placeholder="Nº" /></div>
                  <div className="form-row align-items-center mb-2">
                  
                    <div className="col-auto my-1">
                    <label className="mr-sm-2" >UF</label>
                      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>UF</option>
                      </select>
                    
                    </div>
                  </div>
                </div>
                
                <div className="col-6">
                  <div className="form-group">
                    <label for="exampleInputPassword1">  CEP</label>
                    <input type="CEP" className="form-control" id="cep" placeholder="00000-000" /></div>
                </div>
              </div>

            </div>
          </div>

        </form>
        <br></br>
        <br></br>

      </>
    )
  }

}