import React from 'react';
import './styles.css'
import api from '../../Services/api';

export default class Cadastro extends React.Component {


  constructor() {
    super()
    this.state = {
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
        ufselecionado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        complemento: "",
        referencia: ""
      },
      ufs: [],
    }
  }




  componentDidMount() {
    this.getUfs();
  }

  getUfs = async () => {
    const ufs = await api.get('/uf');
    this.setState({ ufs: [...ufs.data] });
  }


  postCliente = () => {
    api.post('/cliente/cadastro',{
        nome: this.state.nome,
        cpf: this.state.cpf,
        rg: this.state.rg,
        data_nascimento: this.state.data_nascimento,
        contatos: [
          {
            ds_contato1: this.state.ds_contato1
          },
          {
            ds_contato2: this.state.ds_contato2
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
          uf: this.state.ufselecionado,
          numero: this.state.numero,
          complemento: this.state.complemento,
          referencia: this.state.referencia
        }
      }
    ).then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });

    
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
      case 'tele':
        this.setState({ ds_contato1: e })
        break;
      case 'telef':
        this.setState({ ds_contato2: e })
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
        this.setState({ cep: e })
        break;
      case 'cidade':
        this.setState({ cidade: e })
        break;
      case 'bairro':
        this.setState({ bairro: e })
        break;
      case 'uf':
        this.setState({ ufselecionado: e })
        break;
      case 'rua':
        this.setState({ rua: e })
        break;
      case 'numero':
        this.setState({ numero: e })
        break;
      case 'complemento':
        this.setState({ complemento: e })
        break;
      case 'referencia':
        this.setState({ referencia: e })
        break;
      default:
    }

  }

  render() {
    return (
      <form className="col-lg-12" id="formularioCadastro">
        <h1><center>Cadastro</center></h1>
        <div className="row">
          <div className="col-12 center">

            <div className="col-6">

              <div className="col-12" id="container3">

                <div className="col-12">
                  <label for="exampleInputPassword1" >Nome Completo</label>
                  <input type="text" onChange={this.onChange} value={this.state.nome} id="nome" className="form-control" placeholder="Digite seu nome" />
                </div>

                <div className="col-12">
                  <label for="exampleInputPassword1">CPF</label>
                  <input type="text" id="cpf" onChange={this.onChange} value={this.state.cpf} className="form-control valida-cpf-cnpj"
                    placeholder="000-000-000-00 / XX.XXX.XXX/XXXX-XX" />
                </div>

                <div className="container">
                  <div className="row">

                    <div className="col-6">
                      <label for="exampleInputPassword1">RG</label>
                      <input type="text" id="rg" onChange={this.onChange} value={this.state.rg} className="form-control valida-rg"
                        placeholder="__.___.___-_" />
                    </div>

                    <div className="col-6">
                      <label for="exampleInputPassword1">Nascimento</label>
                      <input type="date" id="datanascimento" onChange={this.onChange} value={this.state.data_nascimento} className="form-control" placeholder="" />
                    </div>

                    <div className="col-6">
                      <label for="exampleInputPassword1">Telefone 1</label>
                      <input type="text" id="tele" onChange={this.onChange} value={this.state.contatos["ds_contato1"]} className="form-control" placeholder="(__)_____-____" />
                    </div>

                    <div className="col-6">
                      <label for="exampleInputPassword1">Telefone 2</label>
                      <input type="text" id="telef" onChange={this.onChange} value={this.state.contatos["ds_contato2"]} className="form-control" placeholder="(__)_____-____" />
                    </div>

                    <div className="col-4">
                      <label for="exampleFormControlSelect1">Gênero</label>
                      <select className="form-control" onChange={this.onChange} value={this.state.genero} id="exampleFormControlSelect1">
                        <option>Feminino</option>
                        <option>Masculino</option>
                      </select>
                    </div>

                    <div className="col-8">
                      <label for="exampleInputEmail1">Email</label>
                      <input type="email" onChange={this.onChange} value={this.state.email} className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Joao@gmail.com" />
                    </div>

                    <div className="col-6">
                      <label for="exampleInputPassword1">Senha</label>
                      <input type="password" onChange={this.onChange} value={this.state.senha} className="form-control" id="exampleInputPassword1"
                        placeholder="********" />
                    </div>

                    <div className="col-6">
                      <label for="exampleInputPassword1">Confirme sua senha</label>
                      <input type="password" className="form-control" id="exampleInputPassword11"
                        placeholder="********" />
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <div className="col-6 center">

              <div className="col-12" id="container4">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <br />
                      <label for="inputAddress">CEP</label>
                      <input onChange={this.onChange} value={this.state.endereco[this.state.cep] } type="text" id="cep" className="form-control" placeholder="00000-000" />
                    </div>

                    <div className="col-6">
                      <br />
                      <label for="inputAddress">Cidade</label>
                      <input onChange={this.onChange} value={this.state.endereco[this.state.cidade]} type="text" id="cidade" className="form-control"
                        placeholder="Digite sua cidade aqui" />
                    </div>
                    <div className="col-6">
                      <label for="inputAddress">Bairro</label>
                      <input onChange={this.onChange} value={this.state.endereco[this.state.bairro]} id="bairro" type="text" className="form-control" placeholder="Bairro" />
                    </div>
                    <div className="col-3">
                      <label for="inputAddress">UF</label>
                      <select className="form-control" id="uf">
                        {this.state.ufs.map(uf => {
                          return <option value={uf.id}>{uf.ds_uf}</option>
                        })}
                      </select>
                    </div>

                  </div>
                </div>

                <div className="col-12">
                  <label for="inputAddress">Rua</label>
                  <input onChange={this.onChange} value={this.state.endereco[this.state.rua]} type="text" id="rua" className="form-control" placeholder="Digite seu endereço" />
                </div>
                <div className="col-12">
                  <label for="inputAddress">Número</label>
                  <input onChange={this.onChange} value={this.state.endereco[this.state.rua]} type="text" id="numero" className="form-control" placeholder="00000" />
                </div>
                <div className="col-12">
                  <label for="inputAddress">Complemento</label>
                  <input onChange={this.onChange} type="text" value={this.state.endereco[this.state.rua]} id="complemento" className="form-control" placeholder="Torre, Bloco, Andar" />
                </div>
                <div className="col-12">
                  <label for="inputAddress">Referência</label>
                  <input onChange={this.onChange} value={this.state.endereco[this.state.referencia]} type="text" id="referencia" className="form-control" placeholder="ponto de referencia" />
                  <br />
                </div>
              </div>

            </div>


          </div>

          <div className="col-12 center">
            <button className="btn btn-primary btn-lg btn-block w-50" id="teste-botao1"
              onClick={this.postCliente} >Prosseguir</button>
            <br />
          </div>
        </div>

      </form>
    );

  }
}
