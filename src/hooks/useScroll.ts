import { useState, useEffect } from 'react';

interface ScrollState {
  scrolled: boolean;
  scrollY: number;
  scrollDirection: 'up' | 'down' | 'none';
}

export function useScroll(threshold = 50): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrolled: false,
    scrollY: 0,
    scrollDirection: 'none',
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      let direction: 'up' | 'down' | 'none' = 'none';
      if (currentScrollY > lastScrollY) {
        direction = 'down';
      } else if (currentScrollY < lastScrollY) {
        direction = 'up';
      }

      setScrollState({
        scrolled: currentScrollY > threshold,
        scrollY: currentScrollY,
        scrollDirection: direction,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollState;
}
