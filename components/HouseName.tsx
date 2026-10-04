"use client";

import React from "react";
import { motion } from "framer-motion";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { KuthuVilakkuIcon } from "./decorations/KuthuVilakkuIcon";
import { Sparkles, Home } from "lucide-react";

export const HouseName: React.FC = () => {
  return (
    <section
      id="house-name"
      className="relative py-14 md:py-20 px-4 bg-gradient-to-b from-[#FFF4DC] via-[#FFF9EE] to-[#FFF4DC] overflow-hidden text-center"
    >
      {/* Background Decorative Mandala */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <KolamPattern variant="mandala" size={600} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 md:p-12 border-4 border-[#B8863B] shadow-2xl overflow-hidden"
        >
          {/* Ornate Gold Trim Inner Frames */}
          <div className="absolute inset-2 sm:inset-4 border-2 border-[#1F5A36]/30 rounded-2xl pointer-events-none" />
          <div className="absolute inset-4 sm:inset-6 border border-[#B8863B]/20 rounded-xl pointer-events-none" />

          {/* Corner Kolams */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-[#B8863B]">
            <KolamPattern variant="corner" size={26} />
          </div>
          <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 text-[#B8863B] rotate-90">
            <KolamPattern variant="corner" size={26} />
          </div>
          <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 text-[#B8863B] -rotate-90">
            <KolamPattern variant="corner" size={26} />
          </div>
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 text-[#B8863B] rotate-180">
            <KolamPattern variant="corner" size={26} />
          </div>

          {/* Top Lotus Garland Motif */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2.5">
            <LotusOrnament size={30} colorVariant="gold" />
            <div className="h-0.5 w-6 sm:w-14 bg-gradient-to-r from-transparent to-[#B8863B]" />
            <div className="p-1 sm:p-1.5 rounded-full bg-[#1F5A36]/10 text-[#1F5A36]">
              <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="h-0.5 w-6 sm:w-14 bg-gradient-to-l from-transparent to-[#B8863B]" />
            <LotusOrnament size={30} colorVariant="gold" />
          </div>

          <p className="text-xs font-semibold tracking-widest text-[#B8863B] uppercase mb-1.5 font-serif">
            புதிய இல்லத்தின் திருப்பெயர்
          </p>

          {/* Majestic House Name Typography */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="my-3 sm:my-5 relative"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1F5A36] tracking-tight font-serif drop-shadow-sm">
              ராம்மாலினி வீடு
            </h1>

            {/* Subtle Gold Sub-line */}
            <div className="mt-2 flex items-center justify-center gap-2 text-xs font-bold text-[#8B1738] tracking-widest font-serif">
              <span>✦</span>
              <span>மங்களம் நிறையும் மணி மாளிகை</span>
              <span>✦</span>
            </div>
          </motion.div>

          {/* Traditional Brass Lamps Visual Flankers */}
          <div className="flex items-center justify-center gap-4 sm:gap-10 my-3 sm:my-5 text-[#B8863B]">
            <KuthuVilakkuIcon size={24} glow={true} />
            <div className="max-w-md text-xs sm:text-sm text-[#6B351C] font-serif leading-relaxed italic">
              Plot No.6B, SRS அவென்யூ, இரத்தினமங்கலம், சென்னை - 127
            </div>
            <KuthuVilakkuIcon size={24} glow={true} />
          </div>

          {/* Bottom Kolam */}
          <KolamPattern variant="divider" size={28} className="mt-2.5" />
        </motion.div>
      </div>
    </section>
  );
};
