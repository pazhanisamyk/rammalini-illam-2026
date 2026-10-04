import React from "react";

interface KuthuVilakkuProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const KuthuVilakkuIcon: React.FC<KuthuVilakkuProps> = ({
  className = "",
  size = 40,
  glow = true,
}) => {
  return (
    <svg
      width={size}
      height={size * 2}
      viewBox="0 0 50 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-label="குத்துவிளக்கு"
    >
      <defs>
        <linearGradient id="brassGrad" x1="0" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="35%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#B8863B" />
          <stop offset="100%" stopColor="#7D4F13" />
        </linearGradient>
        <radialGradient id="flameGrad" cx="25" cy="14" r="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#FEF08A" />
          <stop offset="65%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#DC2626" />
        </radialGradient>
        <filter id="flameGlowEffect" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Flame top */}
      <g className={glow ? "animate-diya-flicker" : ""}>
        {glow && (
          <ellipse
            cx="25"
            cy="14"
            rx="9"
            ry="14"
            fill="#F59E0B"
            opacity="0.35"
            filter="url(#flameGlowEffect)"
          />
        )}
        <path
          d="M25 4 C21 10 18 14 18 18 C18 22 21 24 25 24 C29 24 32 22 32 18 C32 14 29 10 25 4 Z"
          fill="url(#flameGrad)"
        />
        <ellipse cx="25" cy="19" rx="3" ry="4" fill="#FFFFFF" opacity="0.9" />
      </g>

      {/* Top bird/crown ornament (Annam / Kalasam) */}
      <path
        d="M25 23 L27 27 L23 27 Z"
        fill="url(#brassGrad)"
      />
      
      {/* Top Oil Cup with 5 wicks platform */}
      <ellipse cx="25" cy="28" rx="14" ry="4.5" fill="url(#brassGrad)" stroke="#7D4F13" strokeWidth="0.5" />
      <ellipse cx="25" cy="27" rx="10" ry="2.5" fill="#7D4F13" />
      
      {/* Upper Pillar Segment */}
      <path
        d="M23 32 L27 32 L28 48 L22 48 Z"
        fill="url(#brassGrad)"
      />
      {/* Upper Ring Beading */}
      <ellipse cx="25" cy="40" rx="6" ry="2" fill="url(#brassGrad)" stroke="#7D4F13" strokeWidth="0.5" />

      {/* Middle Oil Bowl */}
      <path
        d="M14 48 C14 55 36 55 36 48 Z"
        fill="url(#brassGrad)"
        stroke="#7D4F13"
        strokeWidth="0.5"
      />
      <ellipse cx="25" cy="48" rx="12" ry="3.5" fill="url(#brassGrad)" />

      {/* Main Fluted Pillar Stem */}
      <path
        d="M22 53 L28 53 L29 78 L21 78 Z"
        fill="url(#brassGrad)"
      />
      {/* Middle Ribbed Knob */}
      <circle cx="25" cy="65" r="4.5" fill="url(#brassGrad)" stroke="#7D4F13" strokeWidth="0.5" />

      {/* Lower Decorative Ring */}
      <ellipse cx="25" cy="78" rx="9" ry="3" fill="url(#brassGrad)" stroke="#7D4F13" strokeWidth="0.5" />

      {/* Flared Pedestal Base (Peedam) */}
      <path
        d="M21 80 C18 88 10 93 6 96 L44 96 C40 93 32 88 29 80 Z"
        fill="url(#brassGrad)"
        stroke="#7D4F13"
        strokeWidth="0.5"
      />
      {/* Base Foundation Rim */}
      <rect x="5" y="95" width="40" height="4" rx="1.5" fill="url(#brassGrad)" stroke="#7D4F13" strokeWidth="0.5" />
    </svg>
  );
};
