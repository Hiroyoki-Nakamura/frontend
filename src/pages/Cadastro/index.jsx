import React, { Component } from 'react';
import './styles.css'

import API from '../../Services/api';
import { findAllByDisplayValue } from '@testing-library/react';

const BEFORE = {
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
    ufselecionado: 1,
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
    referencia: ""
  },
  ufs: []
}

export default class Cadastro extends Component {


  state = { ...BEFORE };



  componentDidMount() {
    this.getUfs();
  }

  getUfs = async () => {
    const ufs = await API.get('/uf');
    this.setState({ ufs: [...ufs.data] });
  }

  postCliente = async () => {

    const objClient = {
      nome: this.state.nome,
      cpf: this.state.cpf,
      rg: this.state.rg,
      data_nascimento: this.state.data_nascimento,
      contato: [
        {
          ds_contato: this.state.ds_contato1
        },
        {
          ds_contato: this.state.ds_contato1
        }
      ],
      genero: this.state.genero,
      email: this.state.email,
      senha: this.state.senha,
      endereco: {
        cep: this.state.cep,
        cidade: this.state.cidade,
        bairro: this.state.bairro,
        rua: this.state.rua,
        cd_uf: this.state.ufselecionado,
        numero: this.state.numero,
        complemento: this.state.complemento,
        referencia: this.state.referencia 
      }
    };

    const sendClient = await API.post('/cliente/cadastro', objClient);

    if (sendClient.data == 'email já cadastrado') {
      alert(sendClient.data.replace('criado', ''));
    } else {
      alert(sendClient.data);
      this.setState({ ... BEFORE })
    }
  }

  validation = (event) => {

    const value = (event.target.value)
    const id = (event.target.id)
    const REGEXNOME = (/\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/);
    const REGEXCEP = (/^([\d]{2})\.?([\d]{3})\-?([\d]{3})/);
    const REGEXCPF = (/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/);
    const REGEXRG = (/(\d{1,2})(\d{3})(\d{3})(\[\dX])$/);
    const REGEXTEL = (/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/);
    const REGEXEMAIL = (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
    const DATE = new Date(value);


    switch (id) {

      case 'nome':
        var nome = document.querySelector("#nome");
        var erro = document.querySelector("#erroNome");
        if (value.length < 3 || REGEXNOME.test(value) == false) {
          erro.style.display = "block";
          erro.style.backgroundColor = "rgba(255, 0, 0, 0.288)";
          erro.style.borderRadius = "25px";
          nome.style.borderColor = "rgba(255, 0, 0, 0.450)";
        } else {
          erro.style.display = "none";
          nome.style.borderColor = "green";
        }
        break;
      case 'cpf':
        var cpf = document.querySelector("#cpf");
        var erro = document.querySelector("#erroCpf");
        if (value.length < 11 || REGEXCPF.test(value) == false) {
          erro.style.display = "block";
          erro.style.backgroundColor = "rgba(255, 0, 0, 0.288)";
          erro.style.borderRadius = "25px";
          cpf.style.borderColor = "rgba(255, 0, 0, 0.450)";
        } else {
          erro.style.display = "none";
          cpf.style.borderColor = "green";
        }
        break;
      case 'datanascimento':
        var date = document.querySelector("#datanascimento");
        var erro = document.querySelector("#erroData");
        if (value.length === 0 || DATE.getFullYear() > 2002 || DATE.getFullYear() > 2020) {
          erro.style.display = "block";
          erro.style.backgroundColor = "rgba(255, 0, 0, 0.288)";
          erro.style.borderRadius = "15px";
          date.style.borderColor = "rgba(255, 0, 0, 0.450)";
        } else {
          erro.style.display = "none";
          date.style.borderColor = "green";
        }
        break;
      case 'rg':
        var rg = document.querySelector("#rg");
        var erro = document.querySelector("#erroRg");
        if (value.length === 0) {
          erro.style.display = "block";
          erro.style.backgroundColor = "rgba(255, 0, 0, 0.288)";
          erro.style.borderRadius = "10px";
          rg.style.borderColor = "rgba(255, 0, 0, 0.450)";
        } else {
          erro.style.display = "none";
          rg.style.borderColor = "green";
        }
        break;
      case 'tele':
        var telefone1 = document.querySelector("#tele");
        var erro = document.querySelector("#erroTel");
        if (value.length === 0 || REGEXTEL.test(value) == false) {
          erro.style.display = "block";
          erro.style.backgroundColor = "rgba(255, 0, 0, 0.288)";
          erro.style.borderRadius = "10px";
          telefone1.style.borderColor = "rgba(255, 0, 0, 0.450)";
        } else {
          erro.style.display = "none";
          telefone1.style.borderColor = "green";
        }
        break;
      case 'telef':
        var telefone1 = document.querySelector("#telef");
        var erro = document.querySelector("#erroTelef");
        if (value.length === 0 || REGEXTEL.test(value) == false) {
          erro.style.display = "block";
          erro.style.backgroundColor = "rgba(255, 0, 0, 0.288)";
          erro.style.borderRadius = "10px";
          telefone1.style.borderColor = "rgba(255, 0, 0, 0.450)";
        } else {
          erro.style.display = "none";
          telefone1.style.borderColor = "green";
        }
        break;
      case 'cep':
        var cep = document.querySelector("#cep");
        var erro = document.querySelector("#erroCep");
        if (value.length > 8 || REGEXCEP.test(value) == false) {
          erro.style.display = "block";
          erro.style.backgroundColor = "rgba(255, 0, 0, 0.288)";
          erro.style.borderRadius = "10px";
          cep.style.borderColor = "rgba(255, 0, 0, 0.450)";
        } else {
          erro.style.display = "none";
          cep.style.borderColor = "green";
        }
        break;
      case 'exampleInputEmail1':
        var email = document.querySelector("#exampleInputEmail1");
        var erro = document.querySelector("#erroEmail");
        if (value.length === 0 || REGEXEMAIL.test(value) == false) {
          erro.style.display = "block";
          erro.style.backgroundColor = "rgba(255, 0, 0, 0.288)";
          erro.style.borderRadius = "10px";
          email.style.borderColor = "rgba(255, 0, 0, 0.450)";
        } else {
          erro.style.display = "none";
          email.style.borderColor = "green";
        }
      case 'exampleInputPassword1':
        var senha1 = document.querySelector("#exampleInputPassword1");
        var erro = document.querySelector("#erroSenha");
        if (value.length < 8) {
          erro.style.display = "block";
          erro.style.backgroundColor = "rgba(255, 0, 0, 0.288)";
          erro.style.borderRadius = "10px";
          senha1.style.borderColor = "rgba(255, 0, 0, 0.450)";
        } else {
          erro.style.display = "none";
          senha1.style.borderColor = "green";
        }

      case 'exampleInputPassword11':
        var senha = document.querySelector("#exampleInputPassword1");
        var confirmasenha = document.querySelector("#exampleInputPassword11");
        var erro = document.querySelector("#erroConfirmaSenha")
        if (value != senha.value) {
          erro.style.display = "block";
          erro.style.backgroundColor = "rgba(255, 0, 0, 0.288)";
          erro.style.borderRadius = "10px";
          confirmasenha.style.borderColor = "rgba(255, 0, 0, 0.450)";
        } else {
          erro.style.display = "none";
          confirmasenha.style.borderColor = "green";
        }
        break;
      default:
    }
  }

  onChange = (event) => {

    const value = (event.target.value);
    const id = (event.target.id);

    switch (id) {
      case 'nome':
        this.setState({ nome: value })
        break;
      case 'cpf':
        this.setState({ cpf: value })
        break;
      case 'rg':
        this.setState({ rg: value })
        break;
      case 'datanascimento':
        this.setState({ data_nascimento: value })
        break;
      case 'tele':
        this.setState({ ds_contato1: value })
        break;
      case 'telef':
        this.setState({ ds_contato2: value })
        break;
      case 'exampleFormControlSelect1':
        this.setState({ genero: value })
        break;
      case 'exampleInputEmail1':
        this.setState({ email: value })
        break;
      case 'exampleInputPassword1':
        this.setState({ senha: value })
        break;
      case 'cep':
        this.setState({ cep: value })
        break;
      case 'cidade':
        this.setState({ cidade: value })
        break;
      case 'bairro':
        this.setState({ bairro: value })
        break;
      case 'uf':
        this.setState({ ufselecionado: value })
        break;
      case 'rua':
        this.setState({ rua: value })
        break;
      case 'numero':
        this.setState({ numero: value })
        break;
      case 'complemento':
        this.setState({ complemento: value })
        break;
      case 'referencia':
        this.setState({ referencia: value })
        break;
      default:
    }
  }




  render() {
    return (
      <div className="col-12" id="formularioCadastro">
        <h1><center>Cadastro</center></h1>
        <div className="row">
          <div className="col-12 center">

            <div className="col-6">

              <div className="col-12" id="container3">

                <div className="col-12">
                  <label htmlFor="exampleInputPassword1"><i>Nome Completo</i></label>
                  <input type="text" onBlur={this.validation} onChange={this.onChange} value={this.state.nome} id="nome" className="form-control" placeholder="Digite seu nome" />
                  <div className="error alert-danger" id="erroNome"><p className="center" ><i>Nome Invalido! Por gentileza, insira um nome valido.</i></p></div>
                </div>

                <div className="col-12">
                  <label htmlFor="exampleInputPassword1"><i>CPF</i></label>
                  <input type="text" id="cpf" onBlur={this.validation} onChange={this.onChange} value={this.state.cpf} className="form-control valida-cpf-cnpj"
                    placeholder="com pontos e traços Ex.: 000-000-000-00 " />
                  <div className="error alert-danger" id="erroCpf"><p><i>Cpf Invalido! Por gentileza, digite um CPF valido.</i></p></div>
                </div>

                <div className="container">
                  <div className="row">

                    <div className="col-6">
                      <label htmlFor="exampleInputPassword1"><i>RG</i></label>
                      <input type="text" id="rg" onBlur={this.validation} onChange={this.onChange} value={this.state.rg} className="form-control valida-rg"
                        placeholder="__.___.___-_" />
                      <div className="error alert-danger" id="erroRg"><p><i>RG Invalido! Por gentileza, digite um RG valido.</i></p></div>
                    </div>

                    <div className="col-6">
                      <label htmlFor="exampleInputPassword1"><i>Nascimento</i></label>
                      <input type="date" onBlur={this.validation} id="datanascimento" onChange={this.onChange} value={this.state.data_nascimento} className="form-control" placeholder="" />
                      <div className="error alert-danger" id="erroData"><p><i>Menor de 18 anos, cadastro Proibido!!</i></p></div>
                    </div>

                    <div className="col-6">
                      <label htmlFor="exampleInputPassword1"><i>Telefone 1</i></label>
                      <input type="text" id="tele" onBlur={this.validation} onChange={this.onChange} value={this.state.contatos["ds_contato1"]} className="form-control" placeholder="(__)_____-____" />
                      <div className="error alert-danger" id="erroTel"><p><i>Telefone Invalido! Por gentileza, digite um Telefone valido.</i></p></div>
                    </div>

                    <div className="col-6">
                      <label htmlFor="exampleInputPassword1"><i>Telefone 2</i></label>
                      <input type="text" id="telef" onBlur={this.validation} onChange={this.onChange} value={this.state.contatos["ds_contato2"]} className="form-control" placeholder="(__)_____-____" />
                      <div className="error alert-danger" id="erroTelef"><p><i>Telefone Invalido! Por gentileza, digite um Telefone valido.</i></p></div>
                    </div>

                    <div className="col-4">
                      <label htmlFor="exampleFormControlSelect1"><i>Genero</i></label>
                      <select className="form-control" onChange={this.onChange} value={this.state.genero} id="exampleFormControlSelect1">
                        <option selected="selected">---</option>
                        <option>Feminino</option>
                        <option>Masculino</option>
                      </select>
                    </div>

                    <div className="col-8">
                      <label htmlFor="exampleInputEmail1"><i>Email</i></label>
                      <input type="email" onBlur={this.validation} onChange={this.onChange} value={this.state.email} className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Joao@gmail.com" />
                      <div className="error alert-danger" id="erroEmail"><p><i>Email Invalido! Por gentileza, digite um Email valido.</i></p></div>
                    </div>

                    <div className="col-6">
                      <label htmlFor="exampleInputPassword1"><i>Senha</i></label>
                      <input type="password" onBlur={this.validation} onChange={this.onChange} value={this.state.senha} className="form-control" id="exampleInputPassword1"
                        placeholder="********" />
                      <div className="error alert-danger" id="erroSenha"><p><i>Senha Invalida! Por gentileza, digite uma senha com no minimo 8 caracteres.</i></p></div>
                    </div>

                    <div className="col-6">
                      <label htmlFor="exampleInputPassword1"><i>Confirmar Senha</i></label>
                      <input type="password" onBlur={this.validation} className="form-control" id="exampleInputPassword11"
                        placeholder="********" />
                      <div className="error alert-danger" id="erroConfirmaSenha"><p><i>Assegure-se de que os campos Senha e Confirmar senha coincidem exatamente.</i></p></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <div className="col-6 center">

              <div className="col-12" id="container3">
                <div className="container">
                  <div className="row">
                    <div className="col-6">

                      <label htmlFor="inputAddress"><i>Cep</i></label>
                      <input onBlur={this.validation} onChange={this.onChange} value={this.state.endereco[this.state.cep]} type="text" id="cep" className="form-control" placeholder="00000-000" />
                      <div className="error alert-danger" id="erroCep"><p><i>Cep Invalido! Por gentileza, digite um Cep valido.</i></p></div>
                    </div>

                    <div className="col-6">

                      <label htmlFor="inputAddress"><i>Cidade</i></label>
                      <input onChange={this.onChange} value={this.state.endereco[this.state.cidade]} type="text" id="cidade" className="form-control"
                        placeholder="Digite sua cidade aqui" />
                    </div>
                    <div className="col-6">
                      <label htmlFor="inputAddress"><i>Bairro</i></label>
                      <input onChange={this.onChange} value={this.state.endereco[this.state.bairro]} id="bairro" type="text" className="form-control" placeholder="Bairro" />
                    </div>
                    <div className="col-3">
                      <label htmlFor="inputAddress"><i>UF</i></label>
                      <select onClick={this.onChange} id="uf" className="form-control">
                        {this.state.ufs.map(uf => {
                          return <option key={uf.id} value={uf.id} >{uf.ds_uf}</option>
                        })}
                      </select>
                    </div>

                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="inputAddress"><i>Rua</i></label>
                  <input onChange={this.onChange} value={this.state.endereco[this.state.rua]} type="text" id="rua" className="form-control" placeholder="Digite seu endereço" />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress"><i>Numero</i></label>
                  <input onChange={this.onChange} value={this.state.endereco[this.state.rua]} type="text" id="numero" className="form-control" placeholder="00000" />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress"><i>Complemento</i></label>
                  <input onChange={this.onChange} type="text" value={this.state.endereco[this.state.rua]} id="complemento" className="form-control" placeholder="Torre, Bloco, Andar" />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress"><i>Referencia</i></label>
                  <input onChange={this.onChange} value={this.state.endereco[this.state.referencia]} type="text" id="referencia" className="form-control" placeholder="ponto de referencia" />

                </div>
              </div>

            </div>

          </div>

          <div className="col-12 center">
            <div className="btn btn-lg btn-block w-50" id="teste-botao1"
              onClick={this.postCliente} >Prosseguir</div>

          </div>
        </div>

      </div>
    );
  }
}
