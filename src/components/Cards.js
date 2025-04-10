import { Link } from 'react-router-dom';
import '../styles/Cards.css';

const Cards = () => {
    const services = [
      {
        id: 1,
        title: "Aspirador",
        description: "Breve descripción del servicio 1.",
        image: require("../assets/cards/aspirador.jpg"),
      },
      {
        id: 2,
        title: "Concentrador de bajo flujo",
        description: "Breve descripción del servicio 2.",
        image: require("../assets/cards/concentrador.png"),
      },
      {
        id: 3,
        title: "Concentrador de alto flujo",
        description: "Breve descripción del servicio 3.",
        image: require("../assets/cards/concentradoraf.png"),
      },
      {
        id: 4,
        title: "Mochila de oxígeno",
        description: "Breve descripción del servicio 4.",
        image: require("../assets/cards/mochila.jpg"),
      },
      {
        id: 5,
        title: "Nebulizador",
        description: "Breve descripción del servicio 5.",
        image: require("../assets/cards/nebulizador.png"),
      },
      {
        id: 6,
        title: "Tubo grande hospitalario",
        description: "Breve descripción del servicio 6.",
        image: require("../assets/cards/tubogrande.png"),
      },
      {
        id: 7,
        title: "Máscara de oxígeno",
        description: "Breve descripción del servicio 7.",
        image: require("../assets/cards/mascara.png"),
      },
      {
        id: 8,
        title: "Bigotera de oxígeno",
        description: "Breve descripción del servicio 8.",
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
