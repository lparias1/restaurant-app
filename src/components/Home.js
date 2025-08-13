// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>¡Bienvenido a Sabor Casero!</h1>
        <p>Auténtica cocina tradicional con ingredientes frescos</p>
        <Link to="/menu" className="cta-button">Ver Menú</Link>
      </div>
      
      <div className="features">
        <div className="feature">
          <div className="icon">🍽️</div>
          <h3>Platos Tradicionales</h3>
          <p>Recetas auténticas heredadas de generación en generación</p>
        </div>
        <div className="feature">
          <div className="icon">🥬</div>
          <h3>Ingredientes Frescos</h3>
          <p>Productos locales de la más alta calidad</p>
        </div>
        <div className="feature">
          <div className="icon">👨‍🍳</div>
          <h3>Chef Experto</h3>
          <p>Con más de 20 años de experiencia culinaria</p>
        </div>
      </div>
    </div>
  );
};

export default Home;