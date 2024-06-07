import '/scss/contact.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { stickyHeader } from './components/stickyheader.js';
import {
  usePartnersSlider,
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';
import { usePhone } from './components/contact/phone.js';

useTheme();
useBurger();
stickyHeader();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();
usePhone();
