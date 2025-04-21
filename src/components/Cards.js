import { Link } from 'react-router-dom';
import '../styles/Cards.css';

const Cards = () => {
    const services = [
      {
        id: 1,
        title: "Aspirador",
        description: "Aspirador para secreciones.",
        image: require("../assets/cards/aspirador.jpg"),
      },
      {
        id: 2,
        title: "Concentrador de bajo flujo",
        description: "Concentrador electrico de bajo flujo.",
        image: require("../assets/cards/concentrador.png"),
      },
      {
        id: 3,
        title: "Concentrador de alto flujo",
        description: "Concentrador electrico de alto flujo.",
        image: require("../assets/cards/concentradoraf.png"),
      },
      {
        id: 4,
        title: "Mochila de oxígeno",
        description: "Mochila de oxigeno de transporte.",
        image: require("../assets/cards/mochila.jpg"),
      },
      {
        id: 5,
        title: "Nebulizador",
        description: "Nebulizador a piston.",
        image: require("../assets/cards/nebulizador.png"),
      },
      {
        id: 6,
        title: "Tubo grande hospitalario",
        description: "Tubo grande medicinal hospitalario 6 y 3 mts.",
        image: require("../assets/cards/tubogrande.png"),
      },
      {
        id: 7,
        title: "Máscara de oxígeno",
        description: "Mascara de oxigeno descartable.",
        image: require("../assets/cards/mascara.png"),
      },
      {
        id: 8,
        title: "Bigotera de oxígeno",
        description: "Bigotera de oxigeno descartable.",
        image: require("../assets/cards/bigotera.png"),
      },
    ];
  
    return (
      <div className="cards-container">
        {services.map((service) => (
          <div key={service.id} className="card">
            <img src={service.image} alt={service.title} className="card-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={`/producto/${service.id}`}>
              <button className="view-more-btn">Ver más</button>
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default Cards;
