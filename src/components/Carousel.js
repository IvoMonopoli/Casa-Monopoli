import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../assets/concentradores.jpg';
import img2 from '../assets/tubos.jpg';
import img3 from '../assets/oximetro.png';

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="swiper-container"
    >
      <SwiperSlide><img src={img1} alt="Foto 1" /></SwiperSlide>
      <SwiperSlide><img src={img2} alt="Foto 2" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="Foto 3" /></SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
