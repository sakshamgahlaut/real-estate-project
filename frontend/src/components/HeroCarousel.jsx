import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const HeroCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="h-screen"
    >
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="w-full h-screen object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
          className="w-full h-screen object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
          className="w-full h-screen object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;