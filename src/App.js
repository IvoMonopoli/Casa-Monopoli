import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No necesitas importar BrowserRouter aquí
import Header from './components/Header';
import Carousel from './components/Carousel';
import MainSection from './components/mainSection';
import Footer from './components/Footer';
import Servicios from './components/Servicios';
import QuienesSomos from './components/QuienSomos';
import Ayuda from './components/Ayuda';
import './styles/styles.css';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <MainSection />
          </>
        } />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/QuienSomos" element={<QuienesSomos />} />
        <Route path="/Ayuda" element={<Ayuda />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
