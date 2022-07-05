import React from 'react';
import './style.css';
import bannerImg from './momoBanner.png'
import Logo from '../../common/Logo';

const Banner = () => {
  return (
    <header>
        <div className="header-content">
          <Logo/>
          <div className="content-main">
            <h1>Taste the tangy momo in my momo</h1>
            <p> Hot and spicy!! </p>
            <button>
              Menu <i className="fas fa-long-alt-right"></i>
              </button>
          </div>
        </div>
        <img src={bannerImg} alt='banner' className="header-img"/>
    </header>
  );
};

export default Banner;