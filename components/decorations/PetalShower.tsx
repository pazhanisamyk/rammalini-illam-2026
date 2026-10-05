"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Petal {
  id: number;
  x: number; // percentage across screen
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  type: "jasmine" | "rose" | "marigold" | "goldDust";
}

export const PetalShower: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);

    // Generate gentle festive petals and golden sparkles
    const generated: Petal[] = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 9,
      duration: 12 + Math.random() * 10,
      size: i % 4 === 3 ? 6 + Math.random() * 6 : 14 + Math.random() * 12,
      rotation: Math.random() * 360,
      type: i % 4 === 0 ? "jasmine" : i % 4 === 1 ? "rose" : i % 4 === 2 ? "marigold" : "goldDust",
    }));

    setPetals(generated);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => {
        const driftDistance = (petal.id % 2 === 0 ? 1 : -1) * (3 + (petal.id % 4));
        return (
          <motion.div
            key={petal.id}
            initial={{
              y: "-10vh",
              x: `${petal.x}vw`,
              rotate: petal.rotation,
              opacity: 0,
            }}
            animate={{
              y: "110vh",
              x: [
                `${petal.x}vw`,
                `${petal.x + driftDistance}vw`,
                `${petal.x - driftDistance * 0.7}vw`,
                `${petal.x + driftDistance * 0.4}vw`,
              ],
              rotate: [petal.rotation, petal.rotation + 180, petal.rotation + 360],
              opacity: petal.type === "goldDust" ? [0, 0.9, 0.9, 0] : [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{ width: petal.size, height: petal.size }}
          >
            {petal.type === "jasmine" ? (
              // Fragrant White Jasmine bud (மல்லிகை)
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-xs">
                <ellipse cx="12" cy="10" rx="4" ry="7" fill="#FFFDF5" stroke="#FDE68A" strokeWidth="0.5" />
                <ellipse cx="10" cy="11" rx="3.5" ry="6" fill="#FFFFFF" opacity="0.95" />
                <path d="M12 17 C12 19 11 21 10 22" stroke="#4ADE80" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            ) : petal.type === "rose" ? (
              // Soft Pink/Red Rose petal (ரோஜா இதழ்)
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-xs opacity-85">
                <path
                  d="M12 3 C16 3 20 8 18 15 C16 20 12 22 12 22 C12 22 8 20 6 15 C4 8 8 3 12 3 Z"
                  fill="url(#roseGrad)"
                />
                <defs>
                  <linearGradient id="roseGrad" x1="12" y1="3" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FB7185" />
                    <stop offset="60%" stopColor="#E11D48" />
                    <stop offset="100%" stopColor="#9F1239" />
                  </linearGradient>
                </defs>
              </svg>
            ) : petal.type === "marigold" ? (
              // Golden Orange Marigold petal (செவ்வந்தி / சாமந்தி)
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-xs opacity-80">
                <path
                  d="M12 4 C15 4 18 9 16 16 C14 20 12 21 12 21 C12 21 10 20 8 16 C6 9 9 4 12 4 Z"
                  fill="url(#marigoldGrad)"
                />
                <defs>
                  <linearGradient id="marigoldGrad" x1="12" y1="4" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FDE047" />
                    <stop offset="60%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              // Tiny Auspicious Golden Sparkle Particle
              <svg viewBox="0 0 16 16" fill="none" className="w-full h-full animate-sparkle-twinkle">
                <circle cx="8" cy="8" r="3" fill="#D4AF37" opacity="0.8" />
                <path d="M8 1 L8 15 M1 8 L15 8" stroke="#FEF08A" strokeWidth="1" strokeLinecap="round" opacity="0.9" />
              </svg>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
