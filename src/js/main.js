import '/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useStickyHeader } from './components/useStickyHeader.js';
import {
  usePartnersSlider,
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';
import { accordion } from './components/accordion.js';

useTheme();
useBurger();
useStickyHeader();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();
accordion();
