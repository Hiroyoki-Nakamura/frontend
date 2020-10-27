import React, { Component } from 'react';
import './styles.css';

export default class Banner extends Component {

  render() {
    return (
      <div className="center carousel">
        
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {this.props.images.map((image, key) => {
              return (
                <div key={image.id} className={key == 0 ? 'carousel-item active' : 'carousel-item' }>
                  <img className="d-block w-100 banners-carousel" src={image.ds_imagem} />
                </div>
              );
            })}
          </div>

          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>

        </div>

      </div>
    );
  }
} 