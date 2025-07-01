// src/components/Header.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logardo.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="header-navbar shadow-sm"
    >
      {/* Usa container-fluid para que el logo llegue al borde */}
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          className="header-logo d-flex align-items-center"
        >
          <img
            src={logo}
            alt="Logo de la marca"
            className="d-inline-block align-top"
          />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Servicios">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/QuienSomos">Quiénes somos</Nav.Link>
            <Nav.Link as={Link} to="/Ayuda">Ayuda</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
