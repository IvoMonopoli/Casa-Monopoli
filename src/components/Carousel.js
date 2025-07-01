// src/components/Carousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Carousel.css';

import img1 from '../assets/concentradores.png';
import img2 from '../assets/tubos.png';
import img3 from '../assets/oximetro.png';

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        // en pantallas <992px desactiva Navigation
        0: {
          navigation: false,
        },
        // en pantallas ≥992px activa Navigation
        992: {
          navigation: true,
        },
      }}
      className="swiper-container"
    >
      {[img1, img2, img3].map((src, idx) => (
        <SwiperSlide key={idx}>
          <img src={src} alt={`Foto ${idx + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
