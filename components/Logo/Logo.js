import React from 'react';
import './Logo.css';
import logo from '../assets/logo.png';
import bg from '../assets/bg.jpg';

const Logo = () => {
  return (
    <main className="logo" style={{ backgroundImage: `url(${bg})` }}>
      <img src={logo} />
    </main>
  );
};

export default Logo;
