import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importamos Routes y Route
import Header from './components/Header';
import Carousel from './components/Carousel';
import MainSection from './components/mainSection';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Servicios from './components/Servicios';
import QuienesSomos from './components/QuienSomos';
import Ayuda from './components/Ayuda';
import DetalleProducto from './components/DetalleProducto'; // Ruta para los detalles del producto
import './styles/styles.css';

// Creamos un componente contenedor para la página principal
const Home = () => {
  return (
    <>
      <Carousel />
      <MainSection />
    </>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/QuienSomos" element={<QuienesSomos />} />
        <Route path="/Ayuda" element={<Ayuda />} />

        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
