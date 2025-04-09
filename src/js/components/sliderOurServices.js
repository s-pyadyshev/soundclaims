import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const sliderOurServices = (function () {
  const init = function () {
    const slider = new Swiper(".our-services__slider", {
      modules: [Navigation],
      slidesPerView: "auto",
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  return {
    init,
  };
})();
