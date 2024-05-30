import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { stickyHeader } from './components/stickyheader.js';
import { usePartnersSlider } from './components/slider.js';
import { useInsightSlider } from './components/slider.js';

useTheme();
useBurger();
stickyHeader();
usePartnersSlider();
useInsightSlider();
