import React from "react";
import "../styles/QuienesSomos.css";
import foto1 from "../assets/negocio1.jpg";
import foto2 from "../assets/negocio2.jpg";
import foto3 from "../assets/negocio3.jpg";

const QuienesSomos = () => {
    return (
        <div className="quienes-somos">
            <h1 className="titulo">Quienes somos</h1>
            <div className="fotos-contenedor">
                <img src={foto1} alt="Foto 1" className="foto" />
                <img src={foto2} alt="Foto 2" className="foto" />
                <img src={foto3} alt="Foto 3" className="foto" />
            </div>
            <p className="descripcion">
            "Casa Monopoli 👩‍🔬👨🏻‍🔬desarrolla su actividad desde el año 1992 Respecto de la actividad medicinal, ofrece gases medicinales, equipamiento y servicios asociados para hospitales 🏥, clínicas 🏩 y ambulancias. 🚑 Aporta soluciones a los pacientes con enfermedades respiratorias mejorando la autonomía de los pacientes, su adherencia a los tratamientos, su evolución clínica y su calidad de vida 👨🏻‍🔬🔬"
            </p>
        </div>
    );
};

export default QuienesSomos;
