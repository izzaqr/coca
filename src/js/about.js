import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useStickyHeader } from './components/useStickyHeader.js';
import { useAboutSlider } from './components/about/slider.js';

useTheme();
useBurger();
useStickyHeader();
useAboutSlider();
