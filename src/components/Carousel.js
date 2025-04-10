import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../assets/concentradores.jpg';
import img2 from '../assets/tubos.jpg';
import img3 from '../assets/oximetro.png';

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Incluye Autoplay aquí
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Configura Autoplay
      className="swiper-container"
    >
      <SwiperSlide><img src={img1} alt="Foto 1" /></SwiperSlide>
      <SwiperSlide><img src={img2} alt="Foto 2" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="Foto 3" /></SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
