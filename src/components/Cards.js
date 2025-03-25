import '../styles/Cards.css'

const Cards = () => {
    const services = [
      {
        id: 1,
        title: "Aspirador",
        description: "Breve descripción del servicio 1.",
        image: "/assets/cards/aspirador.jpg",
      },
      {
        id: 2,
        title: "Concentrador de bajo flujo",
        description: "Breve descripción del servicio 2.",
        image: "/assets/cards/concentrador.png",
      },
      {
        id: 3,
        title: "Concentrador de alto flujo",
        description: "Breve descripción del servicio 3.",
        image: "/assets/cards/concentradoraf.png",
      },
      {
        id: 3,
        title: "Mochila de oxigeno",
        description: "Breve descripción del servicio 3.",
        image: "/assets/cards/mochila.jpg",
      },
      {
        id: 3,
        title: "Nebulizador",
        description: "Breve descripción del servicio 3.",
        image: "/assets/cards/nebulizador.png",
      },
      {
        id: 3,
        title: "Tubo grande hospitalario",
        description: "Breve descripción del servicio 3.",
        image: "/assets/cards/tubogrande.png",
      },
      {
        id: 3,
        title: "Mascara de oxigeno",
        description: "Breve descripción del servicio 3.",
        image: "/assets/cards/mascara.png",
      },
      {
        id: 3,
        title: "Bigotera de oxigeno",
        description: "Breve descripción del servicio 3.",
        image: "/assets/cards/bigotera.png",
      },
    ];
  
    return (
      <div className="cards-container">
        {services.map((service) => (
          <div key={service.id} className="card">
            <img src={service.image} alt={service.title} className="card-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="view-more-btn">Ver más</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Cards;
  