"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { KuthuVilakkuIcon } from "./decorations/KuthuVilakkuIcon";
import { Home, Sparkles } from "lucide-react";

export const HouseName: React.FC = () => {
  return (
    <section
      id="house-name"
      className="relative py-14 md:py-20 px-4 bg-gradient-to-b from-[#FFF4DC] via-[#FFF9EE] to-[#FFF4DC] overflow-hidden text-center"
    >
      {/* Background Decorative Mandala */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
        <KolamPattern variant="mandala" size={620} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.35 } }}
          className="relative bg-[#FFFDF9] rounded-3xl p-5 sm:p-8 md:p-10 border-4 border-[#B8863B] shadow-2xl hover:shadow-shrine-glow overflow-hidden transition-all duration-500"
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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-2.5"
          >
            <LotusOrnament size={28} colorVariant="gold" />
            <div className="h-0.5 w-6 sm:w-14 bg-gradient-to-r from-transparent to-[#B8863B]" />
            <div className="p-1.5 sm:p-2 rounded-full bg-[#1F5A36]/10 text-[#1F5A36] shadow-xs">
              <Home className="w-4 h-4" />
            </div>
            <div className="h-0.5 w-6 sm:w-14 bg-gradient-to-l from-transparent to-[#B8863B]" />
            <LotusOrnament size={28} colorVariant="gold" />
          </motion.div>

          <p className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#B8863B] uppercase mb-1 font-serif">
            புதுமனை திருப்பெயர்
          </p>

          {/* Majestic House Name Typography */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="my-2 sm:my-3 relative"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1F5A36] tracking-tight font-serif drop-shadow-sm transition-transform duration-300 hover:scale-102">
              ராம்மாலினி வீடு
            </h1>

            {/* Subtle Gold Sub-line */}
            <div className="mt-1.5 flex items-center justify-center gap-2 text-[8px] sm:text-[12px] md:text-[16px] font-bold text-[#8B1738] tracking-widest font-serif">
              <span className="text-[#D4AF37]">✦</span>
              <span>மங்களம் நிறையும் மணி மாளிகை</span>
              <span className="text-[#D4AF37]">✦</span>
            </div>
          </motion.div>

          {/* House Visual Feature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative my-4 sm:my-6 rounded-2xl overflow-hidden border-2 sm:border-3 border-[#B8863B]/60 shadow-lg group max-w-2xl mx-auto"
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/9]">
              <Image
                src="/images/rammalini_illam_house.jpg"
                alt="ராம்மாலினி வீடு முகப்பு வாசல்"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[#FFFDF9] text-[8px] sm:text-[10px] md:text-[12px] font-serif drop-shadow-md">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>மங்கல முகப்பு வாசல்</span>
                </span>
                <span className="bg-black/50 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/50 backdrop-blur-xs">
                  இறை அருளும் அமைதியும் தவழும் வீடு
                </span>
              </div>
            </div>
          </motion.div>

          {/* Traditional Brass Lamps Visual Flankers */}
          <div className="flex items-center justify-center gap-4 sm:gap-10 my-2 sm:my-3 text-[#B8863B]">
            <KuthuVilakkuIcon size={24} glow={true} />
            <div className="max-w-md text-xs sm:text-sm text-[#6B351C] font-serif leading-relaxed italic">
              Plot No.6B, SRS அவென்யூ, இரத்தினமங்கலம், சென்னை - 127
            </div>
            <KuthuVilakkuIcon size={24} glow={true} />
          </div>

          {/* Bottom Kolam */}
          <KolamPattern variant="divider" size={26} className="mt-2" />
        </motion.div>
      </div>
    </section>
  );
};
