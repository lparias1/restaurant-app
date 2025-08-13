// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sabor Casero</h3>
          <p>Auténtica cocina tradicional desde 1994, donde el toque secreto de la abuela marca una experiencia culinaria</p>
        </div>
        
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/menu">Menú</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Síguenos</h3>
            <ul>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://x.com/">Twitter</a></li>
            </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sabor Casero. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;