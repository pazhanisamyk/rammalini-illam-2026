"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Volume2, VolumeX, FileDown } from "lucide-react";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { KuthuVilakkuIcon } from "./decorations/KuthuVilakkuIcon";
import { ToranamBanner } from "./decorations/ToranamBanner";

interface HeroProps {
  onExplore?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("ganesha-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-[#FFFDF7] text-[#70112C]"
    >
      {/* Top Auspicious Toranam */}
      <ToranamBanner className="absolute top-0 left-0 right-0 z-30" repeat={12} />

      {/* Background Image with Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/welcome_festive_hall.jpg"
          alt="பாரம்பரிய தென்னிந்திய இல்ல முகப்பு வாசல்"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Soft Traditional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF7]/90 via-[#FFFDF7]/60 to-[#FFFDF7]/95 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(112,17,44,0.3)_100%)]" />
      </div>

      {/* Top Auspicious Invocation Bar */}
      <div className="relative z-20 w-full pt-10 sm:pt-12 pb-1 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 mt-4 rounded-full bg-[#FFFDF7]/95 border border-[#B8863B]/50 shadow-xs backdrop-blur-sm shimmer-badge hover:shadow-gold-card transition-all"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B1738] animate-pulse" />
          <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#8B1738] font-serif">
            ஸ்ரீ அம்மச்சார் அம்மன் துணை
          </p>
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B1738] animate-pulse" />
        </motion.div>
      </div>

      {/* Main Hero Card Container */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 my-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.35 } }}
          className="relative bg-[#FFFDF9]/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-[#B8863B]/60 shadow-invitation transition-shadow duration-500 hover:shadow-invitation-hover"
        >
          {/* Inner Golden Border */}
          <div className="absolute inset-1.5 sm:inset-2 rounded-xl border border-[#B8863B]/35 pointer-events-none" />

          {/* Corner Kolam Accents */}
          <div className="absolute top-1.5 left-1.5 text-[#B8863B]">
            <KolamPattern variant="corner" size={26} />
          </div>
          <div className="absolute top-1.5 right-1.5 text-[#B8863B] rotate-90">
            <KolamPattern variant="corner" size={26} />
          </div>
          <div className="absolute bottom-1.5 left-1.5 text-[#B8863B] -rotate-90">
            <KolamPattern variant="corner" size={26} />
          </div>
          <div className="absolute bottom-1.5 right-1.5 text-[#B8863B] rotate-180">
            <KolamPattern variant="corner" size={26} />
          </div>

          {/* Top Lotus Motif */}
          <div className="flex justify-center mb-2">
            <LotusOrnament size={32} colorVariant="gold" />
          </div>

          {/* Traditional Pill Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block mb-2 px-3.5 py-0.5 rounded-full bg-[#8B1738]/10 border border-[#8B1738]/25 shimmer-badge"
          >
            <span className="text-[10px] sm:text-xs font-medium tracking-widest text-[#8B1738] uppercase">
              இல்லத் திருவிழா நல்வரவு
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#8B1738] font-serif mb-1 leading-tight"
          >
            புதுமனை புகுவிழா
          </motion.h1>

          {/* House Name Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="my-1.5 sm:my-2"
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#1F5A36] tracking-wide font-serif transition-transform duration-300 hover:scale-102">
              ராம்மாலினி வீடு
            </h2>
          </motion.div>

          {/* Decorative Divider */}
          <KolamPattern variant="divider" size={28} className="my-1.5 sm:my-2" />

          {/* Date & Day Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 my-2 text-[11px] sm:text-xs md:text-sm font-medium text-[#70112C]"
          >
            <motion.div
              whileHover={{ y: -2, scale: 1.03 }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FFF4DC] border border-[#B8863B]/40 shadow-xs cursor-default transition-shadow"
            >
              <span className="text-sm">📅</span>
              <span className="font-semibold text-[#8B1738]">15 நவம்பர் 2026</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -2, scale: 1.03 }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FFF4DC] border border-[#B8863B]/40 shadow-xs cursor-default transition-shadow"
            >
              <span className="text-sm">🌟</span>
              <span>ஞாயிற்றுக்கிழமை</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -2, scale: 1.03 }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FFF4DC] border border-[#B8863B]/40 shadow-xs cursor-default transition-shadow"
            >
              <span className="text-sm">🕓</span>
              <span>அதிகாலை 4:00 - 5:30</span>
            </motion.div>
          </motion.div>

          {/* Welcoming Subtitle Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="max-w-lg mx-auto text-[11px] sm:text-xs text-[#6B351C] font-serif leading-relaxed italic px-2"
          >
            எங்கள் புதிய இல்லத்தின் புதுமனை புகுவிழாவிற்கு குடும்பத்துடன் வருகை தந்து எங்களை ஆசீர்வதிக்க அன்புடன் அழைக்கிறோம்.
          </motion.p>

          {/* Download PDF Quick Action */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-2.5 flex justify-center"
          >
            <a
              href="/pdf/invitation.pdf"
              download="Rammalini_Housewarming_Invitation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-badge inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#8B1738] to-[#A51E4B] text-[#FFFDF9] text-[11px] sm:text-xs font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 group"
              aria-label="அழைப்பிதழ் PDF பதிவிறக்கம்"
            >
              <FileDown className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-y-0.5 transition-transform" />
              <span>அழைப்பிதழ் PDF பதிவிறக்கம்</span>
            </a>
          </motion.div>

          {/* Dual Lamps Decoration on Desktop */}
          <div className="hidden sm:flex items-center justify-between absolute -bottom-6 left-6 right-6 pointer-events-none px-4">
            <KuthuVilakkuIcon size={24} glow={true} />
            <KuthuVilakkuIcon size={24} glow={true} />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-20 pb-6 pt-2 text-center">
        <motion.button
          onClick={handleScrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="group inline-flex flex-col items-center gap-1 text-[10px] sm:text-xs font-medium text-[#8B1738] hover:text-[#70112C] transition-colors focus:outline-none cursor-pointer"
          aria-label="கீழே செல்லுங்கள்"
        >
          <span className="px-2.5 py-0.5 rounded-full bg-[#FFFDF7]/90 border border-[#B8863B]/40 shadow-xs backdrop-blur-xs group-hover:bg-[#FFF4DC] transition-colors">
            அழைப்பிதழை வாசிக்க கீழே செல்லவும் ↓
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#B8863B] group-hover:text-[#8B1738] transition-colors" />
        </motion.button>
      </div>
    </section>
  );
};
