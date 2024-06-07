import '/scss/pricing.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { stickyHeader } from './components/stickyheader.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';

useTheme();
useBurger();
stickyHeader();
usePriceSwitcher();
