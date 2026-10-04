"use client";

import React from "react";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#FFFDF7] border-t-2 border-[#B8863B]/40 pt-7 pb-36 sm:pb-32 px-4 text-center overflow-hidden">
      {/* Upper Content */}
      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center justify-center">
        {/* Top Lotus */}
        <LotusOrnament size={24} colorVariant="gold" />

        {/* House Title */}
        <h2 className="text-lg sm:text-2xl font-extrabold text-[#1F5A36] font-serif mt-1.5 tracking-wide">
          ராம்மாலினி வீடு
        </h2>

        {/* Ceremony Subtitle */}
        <p className="text-xs sm:text-sm font-bold text-[#8B1738] font-serif mt-0.5">
          புதுமனை புகுவிழா நல்வரவு
        </p>

        {/* Date */}
        <div className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full bg-[#FFF4DC] border border-[#B8863B]/30 text-[10px] sm:text-xs font-semibold text-[#6B351C] font-serif">
          <span>15.11.2026</span>
          <span>•</span>
          <span>ஞாயிற்றுக்கிழமை</span>
        </div>

        {/* Traditional Kolam Divider */}
        <KolamPattern variant="divider" size={22} className="my-2.5" />

        {/* Auspicious Closing Text */}
        <p className="text-[11px] sm:text-xs text-[#7D4F13] font-serif italic max-w-md leading-relaxed px-2">
          எல்லா நலமும் வளமும் பெற்று இல்லறம் சிறக்க, உங்கள் நல்வரவை நெஞ்சார எதிர்நோக்குகிறோம்.
        </p>
      </div>

      {/* Copyright & Developer Credit Full Width Bar */}
      <div className="max-w-4xl mx-auto relative z-10 mt-6 pt-4 border-t border-[#B8863B]/25 w-full flex flex-col items-center justify-center text-[11px] sm:text-xs text-[#7D4F13]/85 gap-1.5 text-center">

        {/* Copyright */}
        <p className="font-serif text-[10.5px] sm:text-xs text-[#7D4F13]/80 leading-relaxed max-w-md">
          © 2026 ராம்மாலினி குடும்பத்தினர். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
        </p>

        {/* Developer Credit */}
        <p className="flex flex-wrap items-center justify-center gap-1 mt-2.5 font-serif text-[10.5px] sm:text-xs text-[#7D4F13]">
          <span>இணையதளம் வடிவமைத்து உருவாக்கியது</span>

          <a
            href="https://devpazhani.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#8B1738] hover:text-[#B8863B] underline decoration-[#B8863B]/50 hover:decoration-[#8B1738] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#8B1738] rounded-xs px-1 group whitespace-nowrap"
            aria-label="Pazhanisamy K - Developer Portfolio (புதிய தாவலில் திறக்கும்)"
          >
            <span>Pazhanisamy K</span>

            <Heart
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#8B1738] fill-[#8B1738] group-hover:scale-110 transition-transform duration-200"
            />

            <span className="text-[9px] sm:text-[10px] text-[#B8863B]">↗</span>
          </a>
        </p>

        {/* Professional Role */}
        <p className="text-[9px] sm:text-[10px] tracking-wide text-[#7D4F13]/60 font-sans leading-tight">
          Full Stack Developer · Web & Mobile Application Development
        </p>

      </div>
    </footer>
  );
};

