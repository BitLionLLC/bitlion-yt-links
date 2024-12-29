import React from 'react';
import bitlionPic from '../assets/MJ.jpg';

function Header() {
  return (
    <div className="header">
      <div id="hero-image-container">
        <img src={bitlionPic} alt="Keefler" width="100%" className="hero-image" />
      </div>
      <h1>BitLion</h1>
      <p>Content Creators</p>
    </div>
  )
}

export default Header;
