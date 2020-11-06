// import React, { Component } from 'react'
// import Checkout from '../Checkout';
// import './styles.css';
// import API from '../../Services/api'

// export default class Endereco extends React.Component {

//   constructor() {
//     super();
//     this.state = {
      
//       showHideForm: false,
//         enderecos:{
//         rua: "",
//         bairro: "",
//         complemento: "",
//         refencia: "",
//         numero: "",
//         cep: "",
//         uf: "",
//         },
//       ufs: [],
//     };
//     this.hideComponent = this.hideComponent.bind(this);
//   }

//   componentDidMount() {
//     this.getUfs();
//   }

//   getUfs = async () => {
//     const ufs = await API.get('/uf');
//     this.setState({ ufs: [...ufs.data] });
//   }

//   postEnderecos = async () => {
//       API.post('/endereco/adicionarEnd', {
//       enderecos:{  
//       rua: this.state.rua,
//       bairro: this.state.bairro,
//       complemento: this.state.complemento,
//       refencia: this.state.referencia,
//       numero: this.state.numero,
//       cep: this.state.cep,
//       cd_uf: this.state.uf
//       }
//     }).then(response => {
//       console.log(response)
//     })
//       .catch(error => {
//         console.log(error.response)
//       });

//   };

//   onChange = (event) => {
//     const a = (event.target.value)
//     const b = (event.target.id)

//     switch(b){
//       case 'rua':
//       this.setState({rua: a});
//       break;
//       case 'bairro':
//       this.setState({bairro: a});
//       break;
//       case 'complemento':
//       this.setState({complemento: a});  
//       break;
//       case 'referencia':
//       this.setState({referencia: a});
//       break;
//       case 'numero':
//       this.setState({numero: a});
//       break;
//       case 'cep':
//       this.setState({cep: a});
//       case 'uf' :
//       this.setState({uf: a});
//       break;    
//       default:  
//       break;
//     }
//   }



//   hideComponent(checkout) {
//     switch (checkout) {
//       case "showHideCheckout":
//         this.setState({ showHideCheckout: !this.state.showHideCheckout });
//         break;
//       default:

//     }
//   }

//   render() {
    
//     return (

      
        
      
        



//     )
//   }

// }