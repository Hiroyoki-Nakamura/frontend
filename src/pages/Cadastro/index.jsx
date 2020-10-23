import React from 'react';
import './styles.css'

export default props => (
  <form className="col-lg-12" id="formulario1">
    <h1 className='center'>Cadastro</h1>
    <div className="row">

      <div className="col-12 center">

        <div className="col-6 center" >
          <div className="col-12" id="container3">

            <div className="col-12">
              <label className='col-form-label' for="exampleInputPassword1">Nome Completo</label>
              <input type="text" className="form-control" placeholder="Digite seu nome" />
            </div>

            <div className="col-12">
              <label className='col-form-label' for="exampleInputPassword1">CPF/CNPJ</label>
              <input type="text" className="form-control valida-cpf-cnpj"
                placeholder="000-000-000-00 / XX.XXX.XXX/XXXX-XX" />
            </div>

            <div className="container">
              <div className="row">
                
                <div className="col-6">
                  <label className='col-form-label' for="exampleInputPassword1">RG</label>
                  <input type="text" className="form-control valida-rg"
                    placeholder="__.___.___-_" />
                </div>
                <div className="col-6">
                  <label className='col-form-label' for="exampleInputPassword1">Nascimento</label>
                  <input type="date" className="form-control" placeholder="" />
                </div>
                <div className="col-6">
                  <label className='col-form-label' for="exampleInputPassword1">Telefone 1</label>
                  <input type="text" className="form-control" placeholder="(__)_____-____" />
                </div>
                <div className="col-6">
                  <label className='col-form-label' for="exampleInputPassword1">Telefone 2</label>
                  <input type="text" className="form-control" placeholder="(__)_____-____" />
                </div>
                <div className="col-4">
                  <label className='col-form-label' for="exampleFormControlSelect1">Gênero</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option>Feminino</option>
                    <option>Masculino</option>
                  </select>
                </div>
                <div className="col-8">
                  <label className='col-form-label' for="exampleInputEmail1">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Joao@gmail.com" />
                </div>

                <div className="col-6">
                  <label className='col-form-label' for="exampleInputPassword1">Senha</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"
                    placeholder="********" />
                </div>

                <div className="col-6">
                  <label className='col-form-label' for="exampleInputPassword1" >Confirme sua senha</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"
                    placeholder="********" />
                </div>

              </div>

            </div>

          </div>
        </div>

        <div className="col-6 center">

            <div id='container4' className="col-12">

              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <br />
                    <label className='col-form-label' for="inputAddress">CEP</label>
                    <input type="text" className="form-control" placeholder="00000-000" />
                  </div>

                  <div className="col-6">
                    <br />
                    <label className='col-form-label' for="inputAddress">Cidade</label>
                    <input type="text" className="form-control"
                      placeholder="Digite sua cidade aqui" />
                  </div>
                  <div className="col-6">
                    <label className='col-form-label' for="inputAddress">Bairro</label>
                    <input type="text" className="form-control" placeholder="Bairro" />
                  </div>
                  <div className="col-3">
                    <label className='col-form-label' for="inputAddress">UF</label>
                    <input type="text" className="form-control" placeholder="UF" />
                  </div>

                </div>
              </div>

              <div className="col-12">
                <label className='col-form-label' for="inputAddress">Rua</label>
                <input type="text" className="form-control" placeholder="Digite seu endereço" />
              </div>
              <div className="col-12">
                <label className='col-form-label' for="inputAddress">Número</label>
                <input type="text" className="form-control" placeholder="00000" />
              </div>
              <div className="col-12">
                <label className='col-form-label' for="inputAddress">Complemento</label>
                <input type="text" className="form-control" placeholder="Torre, Bloco, Andar" />
              </div>
              <div className="col-12">
                <label className='col-form-label' for="inputAddress">Referência</label>
                <input type="text" className="form-control" placeholder="" />
                <br />
              </div>

            </div>

        </div>

      </div>
      <div className="col-12 center">
        <label className='col-form-label' for="inputAddress"></label>
        <button type="submit" className="btn btn-primary btn-lg btn-block w-50" id="teste-botao"
          onclick="validar()">Prosseguir</button>
        <br />
      </div>
    </div>

  </form>
);
