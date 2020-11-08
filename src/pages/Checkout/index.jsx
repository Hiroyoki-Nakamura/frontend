import React from 'react';
import './styles.css';
import API from '../../Services/api';

const BEFORE = {
  pageAdress: 'novoEndereco',
  page: 'cartao',
  enderecos: [],
    rua: '',
    bairro: '',
    complemento: '',
    referencia: '',
    numero: '',
    cep: '',
    uf: '',
    cartoes_credito:{
    nome_titular: '',
    cpf_titular: '',
    numero_cartao: '',
    address: 0,
    cvv: '',
    },
    client: '',
    price: '',
  ufs: []
};


export default class Checkout extends React.Component {

  state = { ...BEFORE };

  componentDidMount() {
    this.getEndereco();

  }

  showPage = () => {

  }

  getEndereco = async () => {


    const client = JSON.parse(localStorage.getItem('client'))
    const enderecos = await API.get('/endereco/buscar/' + client.id)
    const cartSettings = await JSON.parse(localStorage.getItem('cartSettings'));
    const price = `${cartSettings.totalPrice}`.replace('.', ',');

    this.setState({ enderecos: [...enderecos.data],
      price: price,
      address: enderecos.data[0].id
    });
    
  }

  componentDidMount() {
    this.getUfs();
  }

  getUfs = async () => {
    const ufs = await API.get('/uf');
    this.setState({ ufs: [...ufs.data] });
  }

  postCards = async () => {
    await API.post('/cartaoCredito/adicionarCartao', {
      nome_titular: this.nome_titular,
      numero_cartao: this.numero_cartao,
      cpf_titular: this.cpf_titular
    });

    const client = JSON.parse(localStorage.getItem('client'));
    const cart = await JSON.parse(localStorage.getItem('cart'));

    let dados_pagamento;
    if (this.state.page == 'boleto') {
      dados_pagamento = {
        ds_boleto: parseInt(Math.random() * 1000000000000000)
      }
    } else {
      dados_pagamento = {
        id_cartão: client.id
      }
    }

    const objSend = {
      cliente: client.id,
      endereco_entrega: this.state.address,
      tipo_pagamento: (this.state.page == 'boleto' ? 1 : 2),
      dados_pagamento,
      produtos: [...cart],
      valor_total: parseFloat(this.state.price.replace(',', '.'))
    };
    await API.post('/pedido/criar', objSend);

    alert('pedido realizado com sucesso!');
    
    localStorage.removeItem('cart');
    localStorage.removeItem('cartSettings');
    window.location.href = '/';
  }

  postEnderecos = async () => {
    const client = JSON.parse(localStorage.getItem('client'))
    // const enderecos = await API.post('/endereco/salvar/' + client.id)
    console.log(this.state.rua, this.state.bairro, this.state.complemento, this.state.numero, this.state.cep, this.state.uf, client.id)

    // this.setState({ enderecos: [...enderecos.data] });
          await API.post('/endereco/salvar', {
          rua: this.state.rua,
          bairro: this.state.bairro,
          complemento: this.state.complemento,
          refencia: this.state.referencia,
          numero: this.state.numero,
          cep: this.state.cep,
          cd_uf: this.state.uf,
          cd_cliente: client.id
          
        })
          .then(response => {
          console.log(response)
        })
          .catch(error => {
            console.log(error.response)
          });
        }
      

  onChange = (event) => {
    const value = (event.target.value);
    const id = (event.target.id);


    switch (id) {
      case 'nome_titular':
        this.setState({ nome_titular: value });
        break;
      case 'numero_cartao':
        this.setState({ numero_cartao: value });
        break;
      case 'cpf_titular':
        this.setState({ cpf_titular: value });
        break;
      case 'rua':
        this.setState({ rua: value })
        break;
      case 'numero':
        this.setState({ numero: value })
        break;
      case 'bairro':
        this.setState({ bairro: value })
        break;   
      case 'complemento':
        this.setState({ complemento: value })
        break;
      case 'referencia':
        this.setState({ referencia: value})
        break;
      case 'cep':
        this.setState({ cep: value })
        break;
      case 'uf':
        this.setState({ uf: value })
        break;           
      default:
        break;

    }

  }

  renderAdress = event => {
    this.setState({ pageAdress: event.target.id });
    console.log(event.target.id)
  }

  showAdress = () => {
    const pageAdress = this.state.pageAdress;
    const Adress =
      <>

        <label className="ed"> Endereço cadastrado: </label>
        <select className=".select_endereco custom-select" id="enderecos"  onClick={() => this.getEndereco()}>
          <option>Endereco Cliente</option>
          {this.state.enderecos.map(enderecos => {
            return <option value={enderecos.id} >{enderecos.rua + ' , ' + enderecos.numero}</option>
          })}

        </select>
        
        <div className="btn btnl btn-primary btn-lg active" id="endereco"  value ="endereco" aria-pressed="true" onClick={this.renderAdress} >Entregar em outro Endereço</div>

      </>
    const newAdress =
      <>
        
        <h2>Endereço</h2>

        
        <form className='container1' >

          <div className='col-12' >
            <div className='row'>

              {/* <div className="container col-6"> */}
              
                <div className="form-group"   >
                <div className="row">
                <div className="col-8">
                
                  <label >Rua</label>
                  <input type="text" className="form-control" id="rua" placeholder="Rua" onChange={this.onChange} value={this.state.rua} />
                
                  </div>
                  <div className="col-4">
                
                  <label >Número</label>
                    <input type="text" className="form-control" id="numero" placeholder="Nº" onChange={this.onChange} value={this.state.numero} /></div>
                </div>
                </div>
                <div className="form-group">
                  <label >Bairro</label>
                  <input type="text" className="form-control" id="bairro" placeholder="Bairro" onChange={this.onChange} value={this.state.bairro} /></div>
                <div className="form-group">
                  <label >Complemento</label>
                  <input type="text" className="form-control" id="complemento" placeholder="Complemento" onChange={this.onChange} value={this.state.complemento} /></div>

                <br></br>
              {/* </div> */}

              {/* <div className="container col-6"> */}
               
                <div className="form-group">
                  <label >Referência</label>
                  <input type="text" className="form-control" id="referencia" placeholder="Referência" onChange={this.onChange} value={this.state.referencia} /></div>
                <div className="row">
                  <div className="col-4">

                    <div className="col- my-1">
                      <label className="mr-sm-2" >UF</label>
                      <select className="custom-select mr-sm-2" id="uf" onClick={this.onChange}>
                        {this.state.ufs.map(uf => {
                          return <option key={uf.id} value={uf.id} >{uf.ds_uf}</option>
                        })}

                      </select>

                    </div>
                  </div>
                {/* </div> */}

                {/* <div className="col-6"> */}
                  <div className="form-group">
                    <label  >  CEP</label>
                    <input type="CEP" className="form-control" id="cep" placeholder="00000-000" onChange={this.onChange} value={this.state.cep} /></div>
                    <div className="col-6">
                    <div className="row">
                  
                    <a className="btn  btn-primary btn-md active" id="novoEndereco" aria-pressed="true" onClick={this.renderAdress} value="novoEndereco">Voltar</a>
                    </div>
                    </div>
                    <div className="col-6">
                    <div className="row">
                    <a className="btn  btn-primary btn-md active" id="salvar" aria-pressed="true" onClick={() => this.postEnderecos()} >Salvar</a>
                    </div>
                    </div>  
                </div>
              {/* </div> */}

            </div>
            
          </div>

        </form>


        
       
      </>
    switch (pageAdress) {
      case 'endereco':
        return newAdress;
      case 'novoEndereco':
        return Adress;
        default:
      
    }
  }

  renderPay = event => {
    this.setState({ page: event.target.value });
  }

  showPay = () => {
    const page = this.state.page;
    const card =
      <>
        <form className='mt-2'>
          <label className='w-100 text-center'>Nº do cartão </label>
          <input type="text-area" className="form-control text-center" id='numero_cartao' placeholder="0000-0000-0000-0000" onChange={this.onChange} value={this.state.numero_cartao} />

          <label className='w-100 text-center'>Nome no cartão</label>
          <input type="text-area" className='form-control text-center' id='nome_titular' placeholder="NOME ESCRITO NO CARTÃO" onChange={this.onChange} value={this.state.nome_titular} />

          <label className='w-100 text-center'>CPF Titular</label>
          <input type="text-area" className='form-control text-center' id='cpf_titular' placeholder="NOME ESCRITO NO CARTÃO" onChange={this.onChange} value={this.state.cpf_titular} />

          <label className='w-100 text-center'>Validade</label> <input type="text-area" className='form-control text-center' id='validade_cartao' placeholder="mês/ano" onChange={this.onChange} value={this.state.validade_cartao} />

          <label className='w-100 text-center'>CVV</label>
          <input type="text-area"
            id="cvv" className='form-control text-center'
            onChange={this.onChange} maxLength='3' placeholder="000" />

          <label className='w-100 text-center'>Quantidade de Parcelas</label>
          <select className="custom-select form-control" id="inputGroupSelect02">
            <option>1x sem juros</option>
            <option>2x sem juros</option>
            <option>3x sem juros</option>
            <option>4x sem juros</option>
            <option>5x sem juros</option>
            <option>6x sem juros</option>
            <option>7x sem juros</option>
            <option>8x sem juros</option>
            <option>9x sem juros</option>
            <option>10x sem juros</option>
          </select>

          <div className='center'>
            <img className="img " src="/img/visa.png " width="40px " height="40px" />
            <img className="img " src="/img/master.png " width="40px " height="40px " />
            <img className="img " src="/img/boleto.png " width="40px " height="40px " />
          </div>
        </form>
      </>
    const billet =
      <>
        <div className='w-100 h-auto'>
          {/* <label className='w-100 text-center' htmlFor="boleto_nome">Nome:</label>
          <input type="text" id='boleto_nome' className='form-control text-center' onChange={this.onChange} />
          <label className='w-100 text-center' htmlFor="boleto_cpf">CPF:</label>
          <input type="text" id='boleto_cpf' className='form-control text-center' onChange={this.onChange} /> */}
        </div>
      </>
    switch (page) {
      case 'cartao':
        return card;
      case 'boleto':
        return billet;
      default:
    }
  }

  render() {
    return (

      <div className="flex-container cima col-12" >
        <div className="ede col-4"  style={{overflowY: "scroll", overflowX: "hidden"}}>
          
          
          {this.showAdress() }
          
          <div className='center'>
          
</div>
          
        </div>
        <div className="modopg col-4" style={{overflowY: "scroll", overflowX: "hidden"}}>
          <h3>Forma de Pagamento</h3>
          <input type="radio" name="radiof" value="boleto" onChange={this.renderPay} className="radio" id="radio" aria-label="Radio button for following text input" />
          <label>Boleto</label>
          <br />
          <input type="radio" name="radiof" value="cartao" onChange={this.renderPay} id="radioc" aria-label="Radio button for following text input" />
          <label>Cartão de crédito</label>
          <br />
          {this.showPay()}

        </div>
        <div className="confirmadados col-4">
          <h3>Confirmar Dados</h3>
         
         

          <div>
            <label>Valor Total:</label>
            <br />
            <input type="text-area " className='input_valorTotal'/*style="border-radius: 10px; width: 2 00px; "*/ placeholder="R$ 000,00 " />
            <br />
            <a href="../html/index.html"><button type="button" className="btn btn-success btcc ">Continuar Comprando</button></a>
            <a ><button type="button " className="btn btn-success btfc " onClick={this.postCards}>Finalizar Compra</button></a>
          </div>
        </div>
      </div>
    )
  }
}
