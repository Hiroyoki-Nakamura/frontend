import React, { Component } from 'react';
import {FaEyeSlash} from 'react-icons/fa';
import './styles.css'

import API from '../../Services/api';

import $ from 'jquery';
import mask from 'jquery-mask-plugin';

import Alert from '../../Components/Alert';

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
  ufs: [],
  alert: {
    title: '',
    content: '',
    style: ''
  }
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
    const over = document.querySelector('.overlay');
    const spin = document.querySelector('.load');
    spin.classList.remove('none');
    over.classList.remove('none');
    const objClient = {
      nome: this.state  .nome,
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
        cep: this.state.endereco.cep,
        cidade: this.state.endereco.cidade,
        bairro: this.state.endereco.bairro,
        rua: this.state.endereco.rua,
        cd_uf: this.state.endereco.ufselecionado,
        numero: this.state.endereco.numero,
        complemento: this.state.endereco.complemento,
        referencia: this.state.endereco.referencia
      }
    };

    const sendClient = await API.post('/cliente/cadastro', objClient);

    if (sendClient.status != 201) {
      this.myAlert('Opps!', sendClient.data, 'danger');
    } else {
      this.myAlert('Cadastrado!', sendClient.data, 'success');
    }

    spin.classList.add('none');
    over.classList.add('none');
    window.location.href = '#/login';
    this.setState({ ...BEFORE })
  }

  myAlert = (title, content, style) => {
    let showAlert;
    if (title != undefined && content != undefined && style != undefined) {
      showAlert = true;
    } else {
      showAlert = false;
    }

    if (showAlert) {
      this.setState({ alert: { title, content, style } });
    }
  };

  resetForAlert = () => {
    this.setState({ alert: { title: '', content: '', style: '' } });
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
        if (value.length > 9 || REGEXCEP.test(value) == false) {
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

  Showpasswords(){
    let pass1 = document.getElementById("exampleInputPassword1")
    let pass2 = document.getElementById("exampleInputPassword11")
    if((pass1.type && pass2.type) === "password"){
      pass1.type = "text";
      pass2.type = "text";
    } else {
      pass1.type = "password";
      pass2.type = "password";
    }
  }

  onChange = (event) => {
    const value = (event.target.value);
    const id = (event.target.id);

    $('#cpf').mask('000.000.000-00');
    $('#rg').mask('00.000.000-0');
    $('#tele').mask('(00)00000-0000');
    $('#telef').mask('(00)00000-0000');
    $('#cep').mask('00000-000');

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
        this.setState({ endereco: { ...this.state.endereco, cep: value } })
        break;
      case 'cidade':
        this.setState({ endereco: { ...this.state.endereco, cidade: value } })
        break;
      case 'bairro':
        this.setState({ endereco: { ...this.state.endereco, bairro: value } })
        break;
      case 'uf':
        this.setState({ endereco: { ...this.state.endereco, ufselecionado: value } })
        break;
      case 'rua':
        this.setState({ endereco: { ...this.state.endereco, rua: value } })
        break;
      case 'numero':
        this.setState({ endereco: { ...this.state.endereco, numero: value } })
        break;
      case 'complemento':
        this.setState({ endereco: { ...this.state.endereco, complemento: value } })
        break;
      case 'referencia':
        this.setState({ endereco: { ...this.state.endereco, referencia: value } })
        break;
      default:
    }
  }

  render() {
    return (
      <>
        <div className="load center none">
          <div className="spin"></div>
          <div className="loader">Carregando</div>
        </div>

        {this.state.alert.title != '' && this.state.alert.content != '' && this.state.alert.style != '' ? <Alert title={`${this.state.alert.title}`} content={`${this.state.alert.content}`} style={`${this.state.alert.style}`} reset={this.resetForAlert} /> : ''}
        <div className="col-12" >
          <h1 className='center topo_texto_cad'>Cadastro</h1>
          <div className="row">
            <div className="col-12 center cadastro_caixas">

              <div className="col-12 col-sm-12 col-md-6 col-lg-6">

                <div className="col-12 col-sm-12 col-md-12 col-lg-12" id="container3">

                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <label htmlFor="exampleInputPassword1"> Nome Completo </label>
                    <input type="text" onBlur={this.validation} onChange={this.onChange} value={this.state.nome} id="nome" className="form-control text-center" placeholder="Digite seu nome" />
                    <div className="error btn-outline-danger" id="erroNome"><p className="center" >Nome Invalido! Por gentileza, insira um nome valido.</p></div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <label htmlFor="exampleInputPassword1"> CPF </label>
                    <input type="text" id="cpf" onBlur={this.validation} onChange={this.onChange} value={this.state.cpf} className="form-control valida-cpf-cnpj text-center"
                      placeholder="com pontos e traços Ex.: 000.000.000-00 " />
                    <div className="error alert-danger" id="erroCpf"><p> Cpf Invalido! Por gentileza, digite um CPF valido. </p></div>
                  </div>

                  <div className="container">
                    <div className="row">

                      <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="exampleInputPassword1"> RG </label>
                        <input type="text" id="rg" onBlur={this.validation} onChange={this.onChange} value={this.state.rg} className="form-control valida-rg text-center"
                          placeholder="__.___.___-_" />
                        <div className="error alert-danger" id="erroRg"><p> RG Invalido! Por gentileza, digite um RG valido. </p></div>
                      </div>

                      <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="exampleInputPassword1"> Nascimento </label>
                        <input type="date" onBlur={this.validation} id="datanascimento" onChange={this.onChange} value={this.state.data_nascimento} className="form-control text-center" placeholder="" />
                        <div className="error alert-danger" id="erroData"><p> Menor de 18 anos, cadastro Proibido!! </p></div>
                      </div>

                      <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="exampleInputPassword1"> Telefone 1 </label>
                        <input type="text" id="tele" onBlur={this.validation} onChange={this.onChange} value={this.state.contatos["ds_contato1"]} className="form-control text-center" placeholder="(__)_____-____" />
                        <div className="error alert-danger" id="erroTel"><p> Telefone Invalido! Por gentileza, digite um Telefone valido. </p></div>
                      </div>

                      <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="exampleInputPassword1"> Telefone 2 </label>
                        <input type="text" id="telef" onBlur={this.validation} onChange={this.onChange} value={this.state.contatos["ds_contato2"]} className="form-control text-center" placeholder="(__)_____-____" />
                        <div className="error alert-danger" id="erroTelef"><p> Telefone Invalido! Por gentileza, digite um Telefone valido. </p></div>
                      </div>

                      <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <label htmlFor="exampleFormControlSelect1"> Genero </label>
                        <select className="form-control text-center" onChange={this.onChange} value={this.state.genero} id="exampleFormControlSelect1">
                          <option selected="selected">---</option>
                          <option>Feminino</option>
                          <option>Masculino</option>
                        </select>
                      </div>

                      <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                        <label htmlFor="exampleInputEmail1"> Email </label>
                        <input type="email" onBlur={this.validation} onChange={this.onChange} value={this.state.email} className="form-control text-center" id="exampleInputEmail1"
                          aria-describedby="emailHelp" placeholder="Joao@gmail.com" />
                        <div className="error alert-danger" id="erroEmail"><p> Email Invalido! Por gentileza, digite um Email valido. </p></div>
                      </div>

                      <div className="col-5 col-sm-5 col-md-5 col-lg-5">
                        <label htmlFor="exampleInputPassword1"> Senha </label>
                        <input type="password" onBlur={this.validation} onChange={this.onChange} value={this.state.senha} className="form-control text-center" id="exampleInputPassword1"
                          placeholder="********" />
                        <div className="error alert-danger" id="erroSenha"><p> Senha Invalida! Por gentileza, digite uma senha com no minimo 8 caracteres. </p></div>
                      </div>

                      <div className="col-5 col-sm-5 col-md-5 col-lg-5">
                        <label htmlFor="exampleInputPassword1"> Confirmar Senha </label>
                        <input type="password" onBlur={this.validation} className="form-control text-center" id="exampleInputPassword11"
                          placeholder="********" />
                        <div className="error alert-danger" id="erroConfirmaSenha"><p> Assegure-se de que os campos Senha e Confirmar senha coincidem exatamente. </p></div>
                      </div>

                      <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                        <FaEyeSlash className='eye_icon' size='1.5em' onClick={() => this.Showpasswords()}/>
                      </div>

                    </div>
                  </div>

                </div>
              </div>


              <div className="col-12 col-sm-12 col-md-6 col-lg-6 center">

                <div className="col-12" id="container4">
                  <div className="container">
                    <div className="row">
                      <div className="col-6">

                        <label htmlFor="inputAddress"> Cep </label>
                        <input onBlur={this.validation} onChange={this.onChange} value={this.state.endereco.cep} type="text" id="cep" className="form-control text-center" placeholder="00000-000" />
                        <div className="error alert-danger" id="erroCep"><p> Cep Invalido! Por gentileza, digite um Cep valido. </p></div>
                      </div>

                      <div className="col-6">

                        <label htmlFor="inputAddress"> Cidade </label>
                        <input onChange={this.onChange} value={this.state.endereco.cidade} type="text" id="cidade" className="form-control text-center"
                          placeholder="Digite sua cidade aqui" />
                      </div>
                      <div className="col-8">
                        <label htmlFor="inputAddress"> Bairro </label>
                        <input onChange={this.onChange} value={this.state.endereco.bairro} id="bairro" type="text" className="form-control text-center" placeholder="Bairro" />
                      </div>
                      <div className="col-4">
                        <label htmlFor="inputAddress"> UF </label>
                        <select onClick={this.onChange} id="uf" className="form-control text-center">
                          {this.state.ufs.map(uf => {
                            return <option key={uf.id} value={uf.id} >{uf.ds_uf}</option>
                          })}
                        </select>
                      </div>

                      <div className="col-8">
                        <label htmlFor="inputAddress"> Rua </label>
                        <input onChange={this.onChange} value={this.state.endereco.rua} type="text" id="rua" className="form-control text-center" placeholder="Digite seu endereço" />
                      </div>

                      <div className="col-4">
                        <label htmlFor="inputAddress"> Numero </label>
                        <input onChange={this.onChange} value={this.state.endereco.numero} type="text" id="numero" className="form-control text-center" placeholder="00000" />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">

                  </div>
                  <div className="col-12">

                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress"> Complemento </label>
                    <input onChange={this.onChange} type="text" value={this.state.endereco.complemento} id="complemento" className="form-control text-center" placeholder="Torre, Bloco, Andar" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress"> Referencia </label>
                    <input onChange={this.onChange} value={this.state.endereco.referencia} type="text" id="referencia" className="form-control text-center" placeholder="ponto de referencia" />

                  </div>
                </div>

              </div>
            </div>

            <div className="col-12 center">
              <div className="btn btn-lg btn-block center w-25" id="teste-botao1"
                onClick={this.postCliente} >Cadastrar</div>

            </div>
          </div>

        </div>
        <div className='overlay none'></div>
      </>
    );
  }
}
