import React from 'react';
import keeflerImg from '../assets/keefler.jpg';

function Header() {
  return (
    <div className="header">
      <img src={keeflerImg} alt="Keefler" width="200" className="hero-image" />
      <h1>Keefler</h1>
      <p>Musician, Twitch streamer</p>
    </div>
  )
}

export default Header;
