import React from 'react';
import './Hero.css';
import heroVideo from '../assets/hero-video.mp4'; // Import the video

const Hero: React.FC = () => {
  return (
    <div className="hero-container" id="hero">
      <video autoPlay loop muted className="hero-video">
        <source src={heroVideo} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

      {/* Title is positioned independently */}
      <div className="hero-title-container">
        <h1 className="hero-title">EL SABOR DE UN BUEN MOMENTO</h1>
      </div>
      {/* Button is positioned independently */}
      <div className="hero-button-container">
        <button className="hero-button">DESCUBRE MÁS</button>
      </div>
    </div>
  );
};

export default Hero;
