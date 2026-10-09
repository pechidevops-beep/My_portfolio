// src/context/SmoothScrollContext.jsx
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext({
  lenis: null,
  scrollTo: () => {},
  scrollProgress: 0,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      if (e.limit > 0) {
        const progress = Math.min(100, Math.max(0, (e.scroll / e.limit) * 100));
        setScrollProgress(progress);
      }
    });

    const tickerUpdate = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // Initial ScrollTrigger refresh after DOM settles
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: options.offset ?? -70,
        duration: options.duration ?? 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      });
    } else {
      // Fallback native smooth scroll
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      }
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo, scrollProgress }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
