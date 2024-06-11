import '/scss/overview.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useStickyHeader } from './components/useStickyHeader.js';
import { useOverviewSlider } from './components/overview/slider.js';

useTheme();
useBurger();
useStickyHeader();
useOverviewSlider();
