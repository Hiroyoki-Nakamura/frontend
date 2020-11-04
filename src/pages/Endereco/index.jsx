import React, { Component } from 'react'
import Checkout from '../Checkout';
import './styles.css';
import API from '../../Services/api'

export default class Endereco extends Component {

  constructor() {
    super();
    this.state = {
      
      showHideForm: false,

      enderecos: {
        rua: "",
        bairro: "",
        complemento: "",
        refencia: "",
        numero: "",
        cep: "",
        ufselecionado: "",
        cd_cliente: ""
      },
      ufs: [],
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  postEnderecos = async () => {
    await API.post('/endereco/adicionar', {
      cd_cliente: this.state.cd_cliente,
      rua: this.state.rua,
      bairro: this.state.bairro,
      complemento: this.state.complemento,
      refencia: this.state.referencia,
      numero: this.state.numero,
      cep: this.state.cep,
      cd_uf: this.state.ufselecionado
    });

  };

  onChange = (event) => {
    const a = (event.target.value)
    const b = (event.target.id)

    switch(b){
      case 'rua':
      this.setState({rua: a});
      break;
      case 'bairro':
      this.setState({bairro: a});
      break;
      case 'complemento':
      this.setState({complemento: a});  
      break;
      case 'referencia':
      this.setState({referencia: a});
      break;
      case 'numero':
      this.setState({numero: a});
      break;
      case 'cep':
      this.setState({cep: a});
      case 'uf' :
      this.setState({ufselecionado: a});
      break;    
      default:  
      break;
    }
  }

  componentDidMount() {
    this.getUfs();
  }

  getUfs = async () => {
    const ufs = await API.get('/uf');
    this.setState({ ufs: [...ufs.data] });
  }

  hideComponent(checkout) {
    switch (checkout) {
      case "showHideCheckout":
        this.setState({ showHideCheckout: !this.state.showHideCheckout });
        break;
      default:

    }
  }

  render() {
    const { showHideCheckout } = this.state;
    return (

      <div {...showHideCheckout && <Checkout />}>
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
                  <input type="text" className="form-control" id="rua" placeholder="Rua" onChange={this.onChange} value={this.state.rua} />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Bairro</label>
                  <input type="text" className="form-control" id="bairro" placeholder="Bairro" onChange={this.onChange} value={this.state.bairro}/></div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Complemento</label>
                  <input type="text" className="form-control" id="complemento" placeholder="Complemento" onChange={this.onChange} value={this.state.complemento}/></div>

                <br></br>
              </div>

              <div className="container col-6">
                <br></br>
                <div className="form-group">
                  <label for="exampleInputPassword1">Referência</label>
                  <input type="text" className="form-control" id="referencia" placeholder="Referência" onChange={this.onChange} value={this.state.referencia}/></div>
                <div className="row">
                  <div className="col-4">


                    <label >Número</label>
                    <input type="text" className="form-control" id="numero" placeholder="Nº" onChange={this.onChange} value={this.state.numero}/></div>
                  <div className="form-row align-items-center mb-2">

                    <div className="col-auto my-1">
                      <label className="mr-sm-2" >UF</label>
                      <select className="custom-select mr-sm-2" id="uf" onChange={this.onChange}>
                        {this.state.ufs.map(uf => {
                          return <option key={uf.id} value={uf.id} >{uf.ds_uf}</option>
                        })}
                        
                      </select>

                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label  >  CEP</label>
                    <input type="CEP" className="form-control" id="cep" placeholder="00000-000" onChange={this.onChange} value={this.state.cep} /></div>
                </div>
              </div>

            </div>
            <button  className="btn btnl btn-primary btn-lg active" role="button"  onClick={this.postEnderecos}>Entregar em outro Endereço</button>
            
          </div>
          
        </form>
        

        <br></br>
        <br></br>
      
        </div>



    )
  }

}