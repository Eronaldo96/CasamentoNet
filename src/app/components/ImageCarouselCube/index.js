import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";

import "./styles.scss";

class ImageCarouselCube extends Component {
  render() {
    const { images } = this.props;

    return (
      <div>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiperCube"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img 
                src={src} 
                alt={`Slide ${index}`} 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover" 
                }} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default ImageCarouselCube;
