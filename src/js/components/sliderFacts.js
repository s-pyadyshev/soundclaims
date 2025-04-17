import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const sliderFacts = (function () {
  const init = function () {
    const swiperFacts = new Swiper(".slider-facts", {
      modules: [Navigation],
      slidesPerView: 1.5,
      spaceBetween: 30,
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 3,
        },
      },
    });
  };

  return {
    init,
  };
})();
