// utils/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    scrollToTop();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
