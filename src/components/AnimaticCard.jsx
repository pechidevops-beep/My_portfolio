// src/components/AnimaticCard.jsx
import React, { useRef, useState, useEffect } from 'react';

/**
 * AnimaticCard
 * Implements a high-craft interactive 3D tilt and mouse-following spotlight glow.
 * Engineered for taste-skill aesthetic: tactile feedback, subtle physics, zero clunkiness.
 */
export const AnimaticCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(34, 197, 94, 0.15)',
  borderColor = 'rgba(34, 197, 94, 0.35)',
  tiltFactor = 6,
  onClick,
  ...rest
}) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafId = useRef(null);

  const handlePointerMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      setCoords({ x, y });

      // Calculate 3D tilt angle
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -tiltFactor;
      const rotateY = ((x - centerX) / centerX) * tiltFactor;

      setTilt({ rotateX, rotateY });
    });
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    if (rafId.current) cancelAnimationFrame(rafId.current);
    // Smooth reset
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) translateZ(4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transition: isHovered
          ? 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s ease'
          : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease',
      }}
      className={`relative rounded-2xl bg-[#0e131d]/90 border border-white/10 overflow-hidden will-change-transform ${
        isHovered ? 'shadow-2xl shadow-emerald-500/10' : 'shadow-lg shadow-black/40'
      } ${className}`}
      {...rest}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 75%)`,
        }}
      />

      {/* Dynamic Border Highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, ${borderColor}, transparent 65%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Card Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
