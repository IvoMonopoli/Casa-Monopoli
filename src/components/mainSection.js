import React from 'react';
import img1 from '../assets/ambulancia.png';
import img2 from '../assets/avatar.png';
import img3 from '../assets/estetoscopio.png';

const MainSection = () => {
  return (
    <section className="images-wrapper">
      <div className="section-images">
        <div className="image-container enlarged">
          <img src={img1} alt="Imagen 1" />
          <p>Contamos con servicio a domicilio en menos de 24hs</p>
        </div>
        <div className="image-container medio">
          <img src={img2} alt="Imagen 2" />
          <p>Tenemos asesoramiento personalizado para cada una de sus necesidades</p>
        </div>
        <div className="image-container">
          <img src={img3} alt="Imagen 3" />
          <p>Disponemos de una gran variedad de servicios hospitalarios</p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
