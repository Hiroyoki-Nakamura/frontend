import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Categoria extends Component{

    render(){
        return (
            <Link className="dropdown-item" href="#">{this.props.value}</Link>
        )
    }
}