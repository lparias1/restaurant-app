// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Sabor Casero</Link>
      </div>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={location.pathname === '/menu' ? 'active' : ''}>
            <Link to="/menu">Menú</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;