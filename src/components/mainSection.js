// src/components/MainSection.js
import React from 'react';
import img1 from '../assets/ambulancia.png';
import img2 from '../assets/avatar.png';
import img3 from '../assets/estetoscopio.png';
import '../styles/MainSection.css';   


const MainSection = () => (
  <section className="images-wrapper">
    <div className="section-images">
      <div className="image-container enlarged">
        <img src={img1} alt="Servicio a domicilio en 24h" />
        <p>Contamos con servicio a domicilio en menos de 24hs</p>
      </div>
      <div className="image-container medio">
        <img src={img2} alt="Asesoramiento personalizado" />
        <p>Tenemos asesoramiento personalizado para cada una de sus necesidades</p>
      </div>
      <div className="image-container">
        <img src={img3} alt="Variedad de servicios hospitalarios" />
        <p>Disponemos de una gran variedad de servicios hospitalarios</p>
      </div>
    </div>
  </section>
);

export default MainSection;
