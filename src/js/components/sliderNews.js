import Swiper from "swiper";

export const sliderNews = (function () {
  const init = function () {
    const swiperNews = new Swiper(".slider-news", {
      slidesPerView: 1.5,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        },
      },
    });
  };

  return {
    init,
  };
})();
