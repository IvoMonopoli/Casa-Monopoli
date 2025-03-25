import React from 'react';
import logo from '../assets/logardo.jpg'; // Actualiza la ruta de la imagen
import { Link } from 'react-router-dom';
import '../styles/styles.css';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo de la marca" />
      </div>
      <nav className="navfront">
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Servicios">Servicios</Link></li>
          <li><Link to="/QuienSomos">Quiénes somos</Link></li>
          <li><Link to="/Ayuda">Ayuda</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
