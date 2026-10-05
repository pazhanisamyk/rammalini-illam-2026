"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

interface KolamProps {
  className?: string;
  size?: number;
  variant?: "divider" | "corner" | "mandala" | "small";
  color?: string;
  animated?: boolean;
}

export const KolamPattern: React.FC<KolamProps> = ({
  className = "",
  size = 64,
  variant = "divider",
  color = "#B8863B",
  animated = true,
}) => {
  const pathDraw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.2, ease: "easeOut" },
        opacity: { duration: 0.4 },
      },
    },
  };

  if (variant === "divider") {
    return (
      <div className={`flex items-center justify-center gap-3 w-full my-4 ${className}`}>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#B8863B]/60 origin-right"
        />
        <motion.svg
          width={size * 2}
          height={size * 0.4}
          viewBox="0 0 120 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#B8863B] overflow-visible"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Central Kolam Motif */}
          <motion.path
            d="M60 2 L68 12 L60 22 L52 12 Z"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            variants={animated ? pathDraw : undefined}
          />
          <motion.circle
            cx="60"
            cy="12"
            r="2"
            fill={color}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          />

          {/* Side Looping Petals */}
          <motion.path
            d="M52 12 C44 4 36 20 28 12 C20 4 12 20 4 12"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            variants={animated ? pathDraw : undefined}
          />
          <motion.path
            d="M68 12 C76 4 84 20 92 12 C100 4 108 20 116 12"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            variants={animated ? pathDraw : undefined}
          />

          {/* Auspicious Dots (புள்ளி கோலம்) */}
          <motion.circle
            cx="28"
            cy="12"
            r="1.5"
            fill="#8B1738"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.3 }}
          />
          <motion.circle
            cx="40"
            cy="12"
            r="1.2"
            fill={color}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.3 }}
          />
          <motion.circle
            cx="80"
            cy="12"
            r="1.2"
            fill={color}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.3 }}
          />
          <motion.circle
            cx="92"
            cy="12"
            r="1.5"
            fill="#8B1738"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.3 }}
          />
        </motion.svg>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[#B8863B]/60 origin-left"
        />
      </div>
    );
  }

  if (variant === "corner") {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.path
          d="M4 4 L56 4 M4 4 L4 56"
          stroke={color}
          strokeWidth="2"
          variants={animated ? pathDraw : undefined}
        />
        <motion.path
          d="M12 12 L44 12 M12 12 L12 44"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="2 2"
          variants={animated ? pathDraw : undefined}
        />
        <motion.path
          d="M8 8 Q24 8 24 24 Q8 24 8 8 Z"
          stroke="#8B1738"
          strokeWidth="1.2"
          fill="none"
          variants={animated ? pathDraw : undefined}
        />
        <circle cx="8" cy="8" r="2.5" fill={color} />
        <circle cx="20" cy="20" r="2" fill="#8B1738" />
        <motion.path
          d="M4 32 Q16 28 20 20 Q28 16 32 4"
          stroke={color}
          strokeWidth="1"
          fill="none"
          variants={animated ? pathDraw : undefined}
        />
      </motion.svg>
    );
  }

  if (variant === "mandala") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative inline-flex items-center justify-center"
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`animate-spin-slow ${className}`}
        >
          <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="50" cy="50" r="38" stroke="#8B1738" strokeWidth="1.2" opacity="0.8" />
          <circle cx="50" cy="50" r="28" stroke={color} strokeWidth="1" />

          {/* 8-Petal Symmetry */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 50 50)`}>
              <path
                d="M50 14 C44 26 44 38 50 42 C56 38 56 26 50 14 Z"
                stroke={color}
                strokeWidth="1.2"
                fill="none"
              />
              <circle cx="50" cy="18" r="1.8" fill="#8B1738" />
              <circle cx="50" cy="30" r="1.2" fill={color} />
            </g>
          ))}

          <circle cx="50" cy="50" r="6" fill="#8B1738" />
          <circle cx="50" cy="50" r="3" fill="#D4AF37" />
        </svg>
      </motion.div>
    );
  }

  // Small badge/bullet
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <rect x="12" y="2" width="14" height="14" rx="2" transform="rotate(45 12 2)" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="#8B1738" />
    </motion.svg>
  );
};
