import Swiper from "swiper";
import { Pagination, EffectFade } from "swiper/modules";

export const sliderServices = (function () {
  const init = function () {
    const slider = new Swiper(".js-swiper-services", {
      modules: [Pagination, EffectFade],
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button",
      },
      breakpoints: {
        1200: {
          enabled: false
        }
      }
    });
  };

  return {
    init,
  };
})();
