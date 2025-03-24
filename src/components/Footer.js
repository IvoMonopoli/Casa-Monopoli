import React from 'react';
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="iconos">
        <a href="https://www.instagram.com/oxigenoterapiamonopolijulio/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://wa.me/5491131521097" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://www.facebook.com/julio.monopoli.5" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
      </div>
      <div className="telefono">
        <i className="fa-solid fa-phone"></i>
        <a href="tel:+541131521097">+54 1131521097</a>
        <i className="fa-solid fa-phone"></i>
        <a href="tel:+54947505285">+54 9 47505285</a>
      </div>
    </footer>
  );
};

export default Footer;
