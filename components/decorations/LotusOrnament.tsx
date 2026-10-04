import React from "react";

interface LotusOrnamentProps {
  className?: string;
  size?: number;
  colorVariant?: "pink" | "gold" | "maroon";
}

export const LotusOrnament: React.FC<LotusOrnamentProps> = ({
  className = "",
  size = 48,
  colorVariant = "gold",
}) => {
  const getGradients = () => {
    switch (colorVariant) {
      case "pink":
        return {
          petal1: "#F472B6",
          petal2: "#DB2777",
          petal3: "#9D174D",
          center: "#FBBF24",
        };
      case "maroon":
        return {
          petal1: "#C026D3",
          petal2: "#8B1738",
          petal3: "#580A20",
          center: "#D4AF37",
        };
      case "gold":
      default:
        return {
          petal1: "#FDE68A",
          petal2: "#D4AF37",
          petal3: "#926315",
          center: "#78350F",
        };
    }
  };

  const g = getGradients();

  return (
    <svg
      width={size}
      height={size * 0.85}
      viewBox="0 0 100 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform duration-300 hover:scale-105 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`lotusGrad-${colorVariant}`} x1="50" y1="10" x2="50" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={g.petal1} />
          <stop offset="60%" stopColor={g.petal2} />
          <stop offset="100%" stopColor={g.petal3} />
        </linearGradient>
        <radialGradient id={`lotusCenter-${colorVariant}`} cx="50" cy="55" r="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor={g.center} />
        </radialGradient>
      </defs>

      {/* Outer Side Petals */}
      <path
        d="M50 72 C30 75 10 65 5 45 C2 35 12 28 22 34 C32 40 45 58 50 72 Z"
        fill={`url(#lotusGrad-${colorVariant})`}
        opacity="0.85"
      />
      <path
        d="M50 72 C70 75 90 65 95 45 C98 35 88 28 78 34 C68 40 55 58 50 72 Z"
        fill={`url(#lotusGrad-${colorVariant})`}
        opacity="0.85"
      />

      {/* Mid Petals */}
      <path
        d="M50 72 C32 70 18 55 18 35 C18 20 32 18 38 28 C44 38 48 58 50 72 Z"
        fill={`url(#lotusGrad-${colorVariant})`}
        opacity="0.95"
      />
      <path
        d="M50 72 C68 70 82 55 82 35 C82 20 68 18 62 28 C56 38 52 58 50 72 Z"
        fill={`url(#lotusGrad-${colorVariant})`}
        opacity="0.95"
      />

      {/* Inner Petals */}
      <path
        d="M50 74 C40 68 32 50 34 25 C35 15 44 10 47 18 C50 26 50 55 50 74 Z"
        fill={`url(#lotusGrad-${colorVariant})`}
      />
      <path
        d="M50 74 C60 68 68 50 66 25 C65 15 56 10 53 18 C50 26 50 55 50 74 Z"
        fill={`url(#lotusGrad-${colorVariant})`}
      />

      {/* Central Majestic Petal */}
      <path
        d="M50 8 C43 25 43 55 50 75 C57 55 57 25 50 8 Z"
        fill={`url(#lotusGrad-${colorVariant})`}
      />

      {/* Center Seed Pod & Stamen Dots */}
      <ellipse cx="50" cy="58" rx="8" ry="5" fill={`url(#lotusCenter-${colorVariant})`} />
      <circle cx="46" cy="56" r="1.2" fill="#78350F" />
      <circle cx="50" cy="55" r="1.2" fill="#78350F" />
      <circle cx="54" cy="56" r="1.2" fill="#78350F" />
      <circle cx="48" cy="59" r="1.2" fill="#78350F" />
      <circle cx="52" cy="59" r="1.2" fill="#78350F" />

      {/* Bottom Leaf Support */}
      <path
        d="M30 73 C42 80 58 80 70 73 C65 79 58 82 50 82 C42 82 35 79 30 73 Z"
        fill="#1F5A36"
        opacity="0.85"
      />
    </svg>
  );
};
