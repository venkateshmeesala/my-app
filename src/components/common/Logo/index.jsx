import React from 'react';
import'./style.css';
import logoImg from './logo.png'

const Logo = () => {
  return (
    <div className='logo'>
        <div>
            <img src={logoImg} alt='logo' />
            <span> 
              <b> MY </b>
              <b> MOMO</b>

              </span>

        </div>

    </div>
  );
};

export default Logo;