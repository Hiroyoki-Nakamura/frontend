import React, { Component } from 'react';
import './styles.css'

import API from '../../Services/api';

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
                  <label htmlFor="exampleInputPassword1" >Nome Completo</label>
                  <input type="text" onChange={this.onChange} value={this.state.nome} id="nome" className="form-control" placeholder="Digite seu nome" />
                </div>

                <div className="col-12">
                  <label htmlFor="exampleInputPassword1">CPF</label>
                  <input type="text" id="cpf" onChange={this.onChange} value={this.state.cpf} className="form-control valida-cpf-cnpj"
                    placeholder="000-000-000-00 / XX.XXX.XXX/XXXX-XX" />
                </div>

                <div className="container">
                  <div className="row">

                    <div className="col-6">
                      <label htmlFor="exampleInputPassword1">RG</label>
                      <input type="text" id="rg" onChange={this.onChange} value={this.state.rg} className="form-control valida-rg"
                        placeholder="__.___.___-_" />
                    </div>

                    <div className="col-6">
                      <label htmlFor="exampleInputPassword1">Nascimento</label>
                      <input type="date" id="datanascimento" onChange={this.onChange} value={this.state.data_nascimento} className="form-control" placeholder="" />
                    </div>

                    <div className="col-6">
                      <label htmlFor="exampleInputPassword1">Telefone 1</label>
                      <input type="text" id="tele" onChange={this.onChange} value={this.state.contatos["ds_contato1"]} className="form-control" placeholder="(__)_____-____" />
                    </div>

                    <div className="col-6">
                      <label htmlFor="exampleInputPassword1">Telefone 2</label>
                      <input type="text" id="telef" onChange={this.onChange} value={this.state.contatos["ds_contato2"]} className="form-control" placeholder="(__)_____-____" />
                    </div>

                    <div className="col-4">
                      <label htmlFor="exampleFormControlSelect1">Gênero</label>
                      <select className="form-control" onChange={this.onChange} value={this.state.genero} id="exampleFormControlSelect1">
                        <option>Feminino</option>
                        <option>Masculino</option>
                      </select>
                    </div>

                    <div className="col-8">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input type="email" onChange={this.onChange} value={this.state.email} className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Joao@gmail.com" />
                    </div>

                    <div className="col-6">
                      <label htmlFor="exampleInputPassword1">Senha</label>
                      <input type="password" onChange={this.onChange} value={this.state.senha} className="form-control" id="exampleInputPassword1"
                        placeholder="********" />
                    </div>

                    <div className="col-6">
                      <label htmlFor="exampleInputPassword1">Confirme sua senha</label>
                      <input type="password" className="form-control" id="exampleInputPassword11"
                        placeholder="********" />
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

                      <label htmlFor="inputAddress">CEP</label>
                      <input onChange={this.onChange} value={this.state.endereco[this.state.cep]} type="text" id="cep" className="form-control" placeholder="00000-000" />
                    </div>

                    <div className="col-6">

                      <label htmlFor="inputAddress">Cidade</label>
                      <input onChange={this.onChange} value={this.state.endereco[this.state.cidade]} type="text" id="cidade" className="form-control"
                        placeholder="Digite sua cidade aqui" />
                    </div>
                    <div className="col-6">
                      <label htmlFor="inputAddress">Bairro</label>
                      <input onChange={this.onChange} value={this.state.endereco[this.state.bairro]} id="bairro" type="text" className="form-control" placeholder="Bairro" />
                    </div>
                    <div className="col-3">
                      <label htmlFor="inputAddress">UF</label>
                      <select onClick={this.onChange} id="uf" className="form-control">
                        {this.state.ufs.map(uf => {
                          return <option key={uf.id} value={uf.id} >{uf.ds_uf}</option>
                        })}
                      </select>
                    </div>

                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="inputAddress">Rua</label>
                  <input onChange={this.onChange} value={this.state.endereco[this.state.rua]} type="text" id="rua" className="form-control" placeholder="Digite seu endereço" />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress">Número</label>
                  <input onChange={this.onChange} value={this.state.endereco[this.state.rua]} type="text" id="numero" className="form-control" placeholder="00000" />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress">Complemento</label>
                  <input onChange={this.onChange} type="text" value={this.state.endereco[this.state.rua]} id="complemento" className="form-control" placeholder="Torre, Bloco, Andar" />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress">Referência</label>
                  <input onChange={this.onChange} value={this.state.endereco[this.state.referencia]} type="text" id="referencia" className="form-control" placeholder="ponto de referencia" />

                </div>
              </div>

            </div>

          </div>

          <div className="col-12 center">
            <div className="btn btn-primary btn-lg btn-block w-50" id="teste-botao1"
              onClick={this.postCliente} >Prosseguir</div>

          </div>
        </div>

      </div>
    );
  }
}
