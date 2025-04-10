import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/DetalleProducto.css';

const DetalleProducto = () => {
  const { id } = useParams();

  const productos = [
    { id: 1, title: "Aspirador", description: "Aspirador de secreciones", image: require("../assets/cards/aspirador.jpg") },
    { id: 2, title: "Concentrador de bajo flujo", description: "Detalles del Concentrador de bajo flujo.", image: require("../assets/cards/concentrador.png") },
    { id: 3, title: "Concentrador de alto flujo", description: "Detalles del Concentrador de alto flujo.", image: require("../assets/cards/concentradoraf.png") },
  ];

  const producto = productos.find((prod) => prod.id === parseInt(id));

  return (
    <div className="detalle-producto">
  <div className="detalle-contenedor">
    {/* Casillero de la imagen */}
    <div className="detalle-imagen-caja">
      <img className="detalle-imagen" src={producto.image} alt={producto.title} />
    </div>
    {/* Casillero de la descripción */}
    <div className="detalle-descripcion-caja">
      <p className="detalle-descripcion">{producto.description}</p>
    </div>
  </div>
</div>

  );
};

export default DetalleProducto;
