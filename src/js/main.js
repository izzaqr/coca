import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { stickyHeader } from './components/stickyheader.js';
import {
  usePartnersSlider,
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';
import { accordion } from './components/accordion.js';

useTheme();
useBurger();
stickyHeader();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();
accordion();
