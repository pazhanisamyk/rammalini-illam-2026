import React from "react";

interface ToranamBannerProps {
  className?: string;
  repeat?: number;
}

export const ToranamBanner: React.FC<ToranamBannerProps> = ({
  className = "",
  repeat = 8,
}) => {
  return (
    <div className={`w-full overflow-hidden flex justify-center items-start select-none pointer-events-none ${className}`}>
      <div className="flex flex-nowrap min-w-full justify-center">
        {Array.from({ length: repeat }).map((_, idx) => (
          <div key={idx} className="relative flex-shrink-0 w-24 h-14">
            <svg
              viewBox="0 0 96 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Top Golden Hanging Thread */}
              <line x1="0" y1="4" x2="96" y2="4" stroke="#B8863B" strokeWidth="2.5" />
              <line x1="0" y1="7" x2="96" y2="7" stroke="#DC2626" strokeWidth="1" />

              {/* Mango Leaves Cluster */}
              {/* Left Mango Leaf */}
              <path
                d="M48 6 C36 14 26 26 28 42 C30 46 36 44 42 32 C45 26 47 16 48 6 Z"
                fill="#164E28"
                stroke="#0D331D"
                strokeWidth="0.5"
              />
              <path d="M48 6 Q35 24 35 38" stroke="#22C55E" strokeWidth="0.5" opacity="0.6" />

              {/* Right Mango Leaf */}
              <path
                d="M48 6 C60 14 70 26 68 42 C66 46 60 44 54 32 C51 26 49 16 48 6 Z"
                fill="#164E28"
                stroke="#0D331D"
                strokeWidth="0.5"
              />
              <path d="M48 6 Q61 24 61 38" stroke="#22C55E" strokeWidth="0.5" opacity="0.6" />

              {/* Center Main Leaf */}
              <path
                d="M48 6 C42 16 40 32 48 50 C56 32 54 16 48 6 Z"
                fill="#1F5A36"
                stroke="#0B2216"
                strokeWidth="0.5"
              />
              <line x1="48" y1="6" x2="48" y2="48" stroke="#4ADE80" strokeWidth="0.7" opacity="0.7" />

              {/* Hanging Marigold Garland Swag */}
              <path
                d="M0 4 Q48 24 96 4"
                stroke="#F59E0B"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              {/* Jasmine Buds Swag */}
              <path
                d="M0 4 Q48 22 96 4"
                stroke="#FFFBEB"
                strokeWidth="2"
                strokeDasharray="2 3"
                fill="none"
              />

              {/* Central Marigold & Jasmine Flower Drop */}
              <circle cx="48" cy="12" r="5.5" fill="#D97706" />
              <circle cx="48" cy="12" r="4" fill="#F59E0B" />
              <circle cx="48" cy="12" r="2" fill="#FEF3C7" />

              <circle cx="48" cy="22" r="3.5" fill="#FFFBEB" />
              <circle cx="48" cy="22" r="1.5" fill="#D97706" />

              <circle cx="48" cy="30" r="4.5" fill="#EF4444" />
              <circle cx="48" cy="30" r="2.5" fill="#FBBF24" />

              {/* Side Flower Dots */}
              <circle cx="16" cy="7" r="3" fill="#F59E0B" />
              <circle cx="80" cy="7" r="3" fill="#F59E0B" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
