import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/DetalleProducto.css';

const DetalleProducto = () => {
  const { id } = useParams();

  const productos = [
    { id: 1, title: "Aspirador", description: "El aspirador de secreciones es un dispositivo médico diseñado para eliminar líquidos, mucosidad, o secreciones acumuladas en las vías respiratorias de un paciente. Su función principal es mantener las vías respiratorias despejadas para facilitar la respiración, especialmente en situaciones en las que el paciente no puede eliminar estas secreciones de forma natural, como en casos de enfermedades respiratorias, postoperatorios, o situaciones de emergencia. El dispositivo utiliza una bomba de succión conectada a un tubo para aspirar las secreciones de manera eficaz y segura.", image: require("../assets/cards/aspirador.jpg") },
    { id: 2, title: "Concentrador de bajo flujo", description: "Concentrador de oxigeno cuya funcionalidad es brindarle una mejor calidad de vida al paciente , su función es filtrar el oxigeno del ambiente y brindárselo puro y de mejor calidad al paciente. Puede estar funcionando las 24 hs y no necesita recargas. El servicio incluye equipo reductor y material descartable con envió gratis.", image: require("../assets/cards/concentrador.png") },
    { id: 3, title: "Concentrador de alto flujo", description: "Concentrador de oxigeno cuya funcionalidad es brindarle una mejor calidad de vida al paciente , su función es filtrar el oxigeno del ambiente y brindárselo puro y de mejor calidad al paciente. Puede estar funcionando las 24 hs y no necesita recargas. El servicio incluye equipo reductor y material descartable con envió gratis.", image: require("../assets/cards/concentradoraf.png") },
    { id: 4, title: "Mochila de oxigeno", description: "La mochila de oxigeno es una de las mejores opciones al momento de elegir , ya que su facilidad para transportar y su peso son ideales para realizar viajes de larga o corta distancia. Las mochilas poseen dos capacidades de oxigeno 415L y 680L , el servicio incluye equipo reductor y material descartable con envió gratis", image: require("../assets/cards/mochila.jpg") },
    { id: 5, title: "Nebulizador", description: "Un nebulizador es un dispositivo médico utilizado para administrar medicamentos directamente a las vías respiratorias en forma de vapor o aerosol. Funciona transformando un líquido, generalmente una solución medicada, en partículas finas que el paciente puede inhalar. Esto lo hace ideal para tratar enfermedades respiratorias como asma, bronquitis o neumonía. El nebulizador ayuda a aliviar la inflamación, abrir las vías respiratorias y mejorar la respiración. Es especialmente útil para quienes tienen dificultades para usar inhaladores tradicionales, como niños pequeños o personas mayores.", image: require("../assets/cards/nebulizador.png") },
    { id: 6, title: "Tubo grande hospitalario", description: "El tubo de oxigeno hospitalario es ideal para realizar un tratamiento domiciliario , ya que por su gran capacidad de carga , tiene una gran duración en su uso.El servicio incluye equipo reductor y material descartable con envió gratis.", image: require("../assets/cards/tubogrande.png") },
    { id: 7, title: "Mascara de oxigeno", description: "Una máscara de oxígeno es un dispositivo utilizado para proporcionar oxígeno adicional a pacientes que tienen dificultades para respirar adecuadamente. Se coloca sobre la nariz y la boca del usuario, permitiendo una administración directa del oxígeno desde una fuente, como un tanque o un concentrador de oxígeno. Es comúnmente utilizada en situaciones de emergencia, en tratamientos médicos como la terapia de oxígeno, y durante procedimientos quirúrgicos. Su propósito principal es mejorar la oxigenación en el cuerpo y aliviar los síntomas de hipoxia (falta de oxígeno).", image: require("../assets/cards/mascara.png") },
    { id: 8, title: "Bigotera de oxigeno", description: "Una bigotera de oxígeno, también conocida como cánula nasal, es un dispositivo sencillo que se utiliza para administrar oxígeno a pacientes de manera cómoda y eficaz. Consta de un tubo flexible que se coloca sobre las orejas y termina en dos puntas pequeñas que se insertan suavemente en las fosas nasales. Este sistema permite un suministro continuo de oxígeno mientras el paciente respira de forma natural. Es comúnmente empleada en terapias de oxígeno a largo plazo o en situaciones donde se requiere un soporte leve o moderado de oxígeno.", image: require("../assets/cards/bigotera.png") },
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
