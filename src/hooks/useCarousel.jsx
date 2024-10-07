// src/useCarousel.js
import { useState, useEffect, useRef } from 'react';

const useCarousel = (initialIndex = 0, interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goToNext();
    }, interval);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  const goToPrevious = (length) => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? length - 1 : prevIndex - 1));
  };

  const goToNext = (length) => {
    setCurrentIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goToNext();
    }, interval);
  };

  return { currentIndex, goToPrevious, goToNext, resetInterval };
};

export default useCarousel;
