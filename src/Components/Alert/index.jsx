import React, { Component } from 'react';

import $ from 'jquery';

export default class MyAlert extends Component {

  componentDidMount() {
    this.life();
  }

  life = () => {
    $('#alert').modal('show');
    window.setTimeout(() => {
      $('#alert').modal('hide');
      this.props.reset();
    }, 4000);
  }

  render() {
    return (
      <div className="modal fade alert alert-a" id='alert' role="alert">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{this.props.content}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className={"btn btn-outline-" + this.props.style} data-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}