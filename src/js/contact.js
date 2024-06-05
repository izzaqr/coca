import '../assets/scss/contact.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { stickyHeader } from './components/stickyheader.js';
import {
  usePartnersSlider,
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';

useTheme();
useBurger();
stickyHeader();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();