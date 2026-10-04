import React from "react";

interface OrnamentalBorderProps {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "maroon" | "temple";
  showCorners?: boolean;
}

export const OrnamentalBorder: React.FC<OrnamentalBorderProps> = ({
  children,
  className = "",
  variant = "gold",
  showCorners = true,
}) => {
  const borderColors = {
    gold: "border-[#B8863B]/40 bg-[#FFFDF9]",
    maroon: "border-[#8B1738]/40 bg-[#FFFDF9]",
    temple: "border-[#6B351C]/40 bg-[#FFF9EE]",
  };

  return (
    <div className={`relative p-4 sm:p-6 md:p-8 rounded-2xl border-2 ${borderColors[variant]} shadow-invitation transition-all duration-300 hover:shadow-xl ${className}`}>
      {/* Inner Decorative Double Line */}
      <div className="absolute inset-1.5 sm:inset-2 md:inset-2.5 border border-[#B8863B]/30 rounded-xl pointer-events-none" />

      {/* 4 Corner Traditional Filigrees */}
      {showCorners && (
        <>
          {/* Top-Left */}
          <div className="absolute top-2 left-2 w-7 h-7 pointer-events-none">
            <svg viewBox="0 0 28 28" fill="none" className="w-full h-full text-[#B8863B]">
              <path d="M2 2 L24 2 M2 2 L2 24" stroke="currentColor" strokeWidth="2" />
              <path d="M6 6 Q14 6 14 14 Q6 14 6 6" fill="#8B1738" opacity="0.3" stroke="currentColor" strokeWidth="1" />
              <circle cx="5" cy="5" r="2" fill="#B8863B" />
            </svg>
          </div>

          {/* Top-Right */}
          <div className="absolute top-2 right-2 w-7 h-7 pointer-events-none rotate-90">
            <svg viewBox="0 0 28 28" fill="none" className="w-full h-full text-[#B8863B]">
              <path d="M2 2 L24 2 M2 2 L2 24" stroke="currentColor" strokeWidth="2" />
              <path d="M6 6 Q14 6 14 14 Q6 14 6 6" fill="#8B1738" opacity="0.3" stroke="currentColor" strokeWidth="1" />
              <circle cx="5" cy="5" r="2" fill="#B8863B" />
            </svg>
          </div>

          {/* Bottom-Left */}
          <div className="absolute bottom-2 left-2 w-7 h-7 pointer-events-none -rotate-90">
            <svg viewBox="0 0 28 28" fill="none" className="w-full h-full text-[#B8863B]">
              <path d="M2 2 L24 2 M2 2 L2 24" stroke="currentColor" strokeWidth="2" />
              <path d="M6 6 Q14 6 14 14 Q6 14 6 6" fill="#8B1738" opacity="0.3" stroke="currentColor" strokeWidth="1" />
              <circle cx="5" cy="5" r="2" fill="#B8863B" />
            </svg>
          </div>

          {/* Bottom-Right */}
          <div className="absolute bottom-2 right-2 w-7 h-7 pointer-events-none rotate-180">
            <svg viewBox="0 0 28 28" fill="none" className="w-full h-full text-[#B8863B]">
              <path d="M2 2 L24 2 M2 2 L2 24" stroke="currentColor" strokeWidth="2" />
              <path d="M6 6 Q14 6 14 14 Q6 14 6 6" fill="#8B1738" opacity="0.3" stroke="currentColor" strokeWidth="1" />
              <circle cx="5" cy="5" r="2" fill="#B8863B" />
            </svg>
          </div>
        </>
      )}

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
