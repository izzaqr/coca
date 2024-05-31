import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.insight__slider-btns-right',
      prevEl: '.insight__slider-btns-left',
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
    },
  });
};
