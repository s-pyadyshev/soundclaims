import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

export const sliderTeams = (function () {
  const init = function () {
    const swiperTeams = new Swiper(".slider-teams", {
      modules: [Navigation, Autoplay],
      autoplay: true,
      loop: true,
      slidesPerView: 1.5,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        560: {
          slidesPerView: 2.5,
        },
        800: {
          slidesPerView: 3.5,
        },
        1024: {
          slidesPerView: 4.5,
        },
        1200: {
          slidesPerView: 5,
        },
        1300: {
          slidesPerView: 6,
        },
        1600: {
          slidesPerView: 7,
        },
        1800: {
          slidesPerView: 8,
        },
      },
    });
  };

  return {
    init,
  };
})();
