import React from 'react';
import './styles.css';
import Api from '../../Services/Api';



export default class Cadastro extends React.Component {

  state = {
    nome: "",
    cpf: "",
    rg: "",
    data_nascimento: "",
    contatos: [
      {
        ds_contato1: ""
      },
      {
        ds_contato2: ""
      },
    ],
    genero: "",
    email: "",
    senha: "",
    endereco: {
      cep: "",
      cidade: "",
      bairro: "",
      uf: "",
      rua: "",
      numero: "",
      complemento: "",
      referencia: ""
    }
  }

  getCliente = () => {
    Api.post('/cliente/cadastro',

      {
        nome: this.state.nome,
        cpf: this.state.cpf,
        rg: this.state.rg,
        data_nascimento: this.state.data_nascimento,
        contatos: [
          {
            ds_contato: this.state.ds_contato1
          },
          {
            ds_contato: this.state.ds_contato2
          }
        ],
        genero: this.state.genero,
        email: this.state.email,
        senha: this.state.senha,
        endereco: {
          cep: this.state.cep,
          cidade: this.state.cidade,
          bairro: this.state.bairro,
          uf: this.state.uf,
          rua: this.state.rua,
          numero: this.state.numero,
          complemento: this.state.complemento,
          referencia: this.state.referencia
        }
      }


    )
  }

  onChange = (event) => {
    const e = (event.target.value);
    const i = (event.target.id);

    switch (i) {
      case 'nome':
        this.setState({ nome: e })
        break;
      case 'cpf':
        this.setState({ cpf: e })
        break;
      case 'rg':
        this.setState({ rg: e })
        break;
      case 'datanascimento':
        this.setState({ data_nascimento: e })
        break;
      case 'telefone1':
        this.setState({ ds_contato1: e })
        break;
      case 'telefone2':
        this.setState({ ds_contato2: e})
        break;
      case 'exampleFormControlSelect1':
        this.setState({ genero: e })
        break;
      case 'exampleInputEmail1':
        this.setState({ email: e })
        break;
      case 'exampleInputPassword1':
        this.setState({ senha: e })
        break;
      case 'cep':
        this.setState({ cep: e})
        break;
      

    }

    console.log(e)




  }

  render() {

    return (
      <form className="col-lg-12" id="formulario">
        <h1><center>Cadastro</center></h1>
        <div className="row">
          <div className="col-12 center">
            <div className="row" id="container1">
              <div className="col-12">
                <div className="col-12">
                  <br />
                  <label for="exampleInputPassword1">Nome Completo</label>
                  <input id="nome" onChange={this.onChange} value={this.state.nome} type="text" className="form-control" placeholder="Digite seu nome" />
                  <div />
                  <div className="col-12">
                    <label for="exampleInputPassword1">CPF</label>
                    <input id="cpf" onChange={this.onChange} value={this.state.cpf} type="text" className="form-control valida-cpf-cnpj"
                      placeholder="000-000-000-00 / XX.XXX.XXX/XXXX-XX" />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <label for="exampleInputPassword1">RG</label>
                        <input id="rg" onChange={this.onChange} value={this.state.rg} type="text" className="form-control valida-rg"
                          placeholder="__.___.___-_" />
                      </div>
                      <div className="col-6">
                        <label for="exampleInputPassword1">Nascimento</label>
                        <input id="datanascimento" onChange={this.onChange} value={this.state.data_nascimento} type="date" className="form-control" placeholder="" />
                      </div>
                      <div className="col-6">
                        <label for="exampleInputPassword1">Telefone 1</label>
                        <input id="telefone1" onChange={this.onChange} value={this.state.contatos} type="text" className="form-control" placeholder="(__)_____-____" />
                      </div>
                      <div className="col-6">
                        <label for="exampleInputPassword1">Telefone 2</label>
                        <input id="telefone2" onChange={this.onChange} value={this.state.contatos} type="text" className="form-control" placeholder="(__)_____-____" />
                      </div>
                      <div className="col-6">
                        <label for="exampleFormControlSelect1">Gênero</label>
                        <select onClick={this.onChange} value={this.state.contatos} className="form-control" id="exampleFormControlSelect1">
                          <option>Feminino</option>
                          <option>Masculino</option>
                        </select>
                      </div>
                      <div className="col-6">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" onclick={this.onChange} value={this.setState.email} className="form-control" id="exampleInputEmail1"
                          aria-describedby="emailHelp" placeholder="Joao@gmail.com" />
                      </div>
                      <div className="col-6">
                        <label for="exampleInputPassword1">Senha</label>
                        <input type="password" onclick={this.onChange} value={this.setState.senha} className="form-control" id="exampleInputPassword1"
                          placeholder="********" />
                      </div>

                      <div className="col-6">
                        <label for="exampleInputPassword1">Confirme sua senha</label>
                        <input type="password" className="form-control" id="exampleInputPassword11"
                          placeholder="********" />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 center">
              <div className="row" id="container2">
                <div className="col-12">
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <br />
                        <label for="inputAddress" >CEP</label>
                        <input id="cep" type="text" className="form-control" placeholder="00000-000" />
                      </div>
                      <div className="col-6">
                        <br />
                        <label for="inputAddress">Cidade</label>
                        <input type="text" id="cidade" className="form-control"
                          placeholder="Digite sua cidade aqui" />
                      </div>
                      <div className="col-6">
                        <label for="inputAddress">Bairro</label>
                        <input  id="bairro" type="text" className="form-control" placeholder="Bairro" />
                      </div>
                      <div className="col-3">
                        <label for="inputAddress">UF</label>
                        <input type="text" id="uf" className="form-control" placeholder="UF" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label for="inputAddress">Rua</label>
                    <input type="text" id="rua" className="form-control" placeholder="Digite seu endereço" />
                  </div>
                  <div className="col-12">
                    <label for="inputAddress">Número</label>
                    <input type="text" id="numero" className="form-control" placeholder="00000" />
                  </div>
                  <div className="col-12">
                    <label for="inputAddress">Complemento</label>
                    <input type="text" id="complemento" className="form-control" placeholder="Torre, Bloco, Andar" />
                  </div>
                  <div className="col-12">
                    <label for="inputAddress">Referência</label>
                    <input type="text" id="referencia" className="form-control" placeholder="" />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 prosseguir">
            <label for="inputAddress"></label>
            <button type="submit" className="btn btn-primary btn-lg btn-block" id="teste-botao"
              onclick={this.getCliente}>Prosseguir</button>
            <br />
          </div>
        </div>
      </form>
    )
  }
}