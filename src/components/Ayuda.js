import React, { useState } from "react";
import "../styles/Ayuda.css";

const temasAyuda = [
  { titulo: "Pedidos", preguntas: [
      { pregunta: "¿Cómo realizo un pedido?", respuesta: "1) Deberás comunicarte por WhatsApp o llamada al +54 9 1131521097\n2) Comunicar qué servicio deseas solicitar\n3) Completar unos datos que te pedirán para realizar el pedido" },
      { pregunta: "¿Como se que servicio es adecuado para el paciente?", respuesta: "Contamos con personal capacitado y ellos se encargaran de ayudarte segun la necesidad del paciente." },
    ]
  },
  { titulo: "Pagos", preguntas: [
      { pregunta: "¿Cuáles son los métodos de pago?", respuesta: "Aceptamos efectivo y transferencias bancarias." },
      { pregunta: "¿Se puede abonar luego de recibir el producto?", respuesta: "Sí, se puede abonar una vez entregado el producto en domicilio" }
    ]
  },
  { titulo: "Envíos", preguntas: [
    { pregunta: "¿Cuanto demora en llegar el servicio?", respuesta: "En caso de solitar el servicio antes de las 15hs , el envio sera el mismo dia, en caso de que supere las 15hs pasara para el proximo dia habil" },
    { pregunta: "¿Se puede retirar el servicio solicitado?", respuesta: "No , solo se puede recibir en el domicilio solicitado" }
    ]
  }
];

const Ayuda = () => {
  const [activo, setActivo] = useState(null);

  const toggleTema = (index) => {
    setActivo(activo === index ? null : index);
  };

  return (
    <section className="ayuda">
      <h2>Sección de Ayuda</h2>
      {temasAyuda.map((tema, index) => (
        <div key={index} className="ayuda-item">
          <button className="ayuda-titulo" onClick={() => toggleTema(index)}>
            {tema.titulo}
          </button>
          {activo === index && (
            <div className="ayuda-preguntas">
              {tema.preguntas.map((preg, i) => (
                <div key={i} className="ayuda-pregunta">
                  <strong>{preg.pregunta}</strong>
                  <p>
                    {preg.respuesta.split("\n").map((linea, j) => (
                      <span key={j}>{linea}<br /></span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Ayuda;
