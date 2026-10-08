"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, FileDown } from "lucide-react";
import { BrushStrokeDivider } from "./decorations/BrushStrokeDivider";

interface HeroProps {
  onExplore?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const handleScrollDown = () => {
    if (onExplore) {
      onExplore();
      return;
    }
    const nextSection = document.getElementById("ganesha-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#2D050E] text-[#FFFDF9] select-none"
    >
      {/* 1. Background Artwork: Edge-to-Edge Image (Mobile & Desktop) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#2D050E] flex items-center justify-center">
        {/* Mobile View: mobile-image-intro.jpg */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block md:hidden absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/mobile-image-intro.jpg"
            alt="புதுமனை புகுவிழா - ராம்மாலினி வீடு"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Desktop View: desktop-image-intro.png */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:block absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/desktop-image-intro.png"
            alt="புதுமனை புகுவிழா - ராம்மாலினி வீடு"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      {/* 2. Top Brush Stroke Overlay (Fades down from top of section) */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 inset-x-0 h-40 sm:h-48 md:h-56 z-10 pointer-events-none"
      >
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#2D050E] via-[#2D050E]/60 to-transparent" />
        <BrushStrokeDivider position="top" className="w-full h-full" color="#2D050E" />
      </motion.div>

      {/* 3. Bottom Brush Stroke Overlay (Fades up from bottom of section) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 inset-x-0 h-72 sm:h-80 md:h-96 z-10 pointer-events-none"
      >
        <div className="absolute inset-x-0 bottom-0 h-44 sm:h-48 md:h-56 bg-gradient-to-t from-[#2D050E] via-[#2D050E]/85 to-transparent" />
        <BrushStrokeDivider position="bottom" className="w-full h-full" color="#2D050E" />
      </motion.div>

      {/* 4. TOP CONTENT: Welcome & House Name (Enters via Fade Down) */}
      <motion.div
        initial={{ opacity: 0, y: -35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 w-full pt-5 sm:pt-6 md:pt-7 px-4 flex flex-col items-center text-center pointer-events-none"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4AF37] uppercase font-serif drop-shadow"
        >
          WELCOME TO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.94, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-serif tracking-wide text-white drop-shadow-[0_2px_10px_rgba(45,5,14,0.9)] mt-0.5"
        >
          ராம்மாலினி வீடு
        </motion.h1>
      </motion.div>

      {/* 5. CENTER: Transparent viewing space for the family doorway artwork */}
      <div className="flex-1 w-full pointer-events-none" />

      {/* 6. BOTTOM CONTENT: Greeting & Actions (Enters via Fade Up) */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ paddingBottom: "max(3rem, calc(env(safe-area-inset-bottom, 0px) + 1.5rem))" }}
        className="relative z-20 w-full pb-10 sm:pb-8 md:pb-6 px-4 flex flex-col items-center text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xs sm:text-sm md:text-base text-[#FEF3C7] font-serif font-medium drop-shadow mb-2 max-w-xl mx-auto"
        >
          ✨ புதுமனை புகுவிழாவிற்கு குடும்பத்துடன் வருகை தந்து வாழ்த்த அன்புடன் அழைக்கிறோம் ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center gap-3 mb-1"
        >
          <a
            href="/pdf/invitation.pdf"
            download="Rammalini_Housewarming_Invitation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-badge inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#B8863B] text-[#3D0817] font-bold text-xs sm:text-sm tracking-wide shadow-2xl border border-[#FFFDF9]/80 cursor-pointer transition-all hover:scale-105 active:scale-95 font-serif"
            aria-label="அழைப்பிதழ் PDF பதிவிறக்கம்"
          >
            <FileDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B1738]" />
            <span>அழைப்பிதழ் PDF</span>
          </a>
        </motion.div>

        {/* Scroll Down Prompt */}
        <motion.button
          onClick={handleScrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 4, 0] }}
          transition={{
            opacity: { delay: 1.0, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="group inline-flex flex-col items-center gap-0.5 text-[10px] sm:text-xs text-[#FEF3C7]/90 hover:text-white transition-colors focus:outline-none cursor-pointer mt-1"
          aria-label="கீழே செல்லவும்"
        >
          <span className="drop-shadow">அழைப்பிதழை வாசிக்க கீழே செல்லவும்</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-y-0.5 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
};
