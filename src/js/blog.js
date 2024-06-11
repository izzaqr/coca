import '/scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useStickyHeader } from './components/useStickyHeader.js';

useTheme();
useBurger();
useStickyHeader();
