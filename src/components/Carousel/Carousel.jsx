import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={3} 
      centeredSlides={true}
      spaceBetween={60}
      loop={true}
      className="tilted-swiper w-full pb-16" 
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <>
              <div className={`slide-content ${isActive ? 'active-slide' : ''}`}>
                <img src={item.src} alt={`Slide ${index + 1}`} />
              </div>
              {isActive && <div className="caption text-center mt-16">
                <p className='text-[36px] line-height-1.8'>Client {index + 1}</p>
              </div>}
            </>
          )}
            
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;