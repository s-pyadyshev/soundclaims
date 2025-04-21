import Swiper from "swiper";

export const sliderOtherNews = (function () {
  const init = function () {
    const swiperOtherNews = new Swiper(".block-news--other-news .slider-news", {
      slidesPerView: 1.5,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      },
    });
  };

  return {
    init,
  };
})();
