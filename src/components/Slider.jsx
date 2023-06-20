
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./slider.css";
import images from "../assets/images/Iran";

const Slider = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={80}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false
        }}
        speed={1200}
        loop
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        breakpoints={{
          748: {
            slidesPerView: 0,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;




