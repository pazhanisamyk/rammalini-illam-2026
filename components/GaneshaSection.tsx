"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { KuthuVilakkuIcon } from "./decorations/KuthuVilakkuIcon";
import { Sparkles } from "lucide-react";

export const GaneshaSection: React.FC = () => {
  return (
    <section
      id="ganesha-section"
      className="relative py-12 md:py-16 px-4 bg-[#FFF9EE] overflow-hidden text-center"
    >
      {/* Background Subtle Kolam Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center">
        <KolamPattern variant="mandala" size={500} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Auspicious Title Mantra */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <LotusOrnament size={24} colorVariant="gold" />
            <span className="text-xs font-semibold tracking-widest text-[#B8863B] uppercase">
              மங்கள வாழ்த்து
            </span>
            <LotusOrnament size={24} colorVariant="gold" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#8B1738] font-serif">
            ஸ்ரீ கணபதி துணை
          </h2>
          <p className="text-xs sm:text-sm text-[#7D4F13] font-serif mt-1">
            வினைகளை நீக்கும் விநாயகப் பெருமானின் அருளோடு
          </p>
        </motion.div>

        {/* Traditional Pooja Shrine Visual Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#B8863B]/60 p-2 sm:p-3 bg-gradient-to-b from-[#FFF4DC] to-[#FFFDF9] max-w-2xl mx-auto"
        >
          {/* Inner Image Container */}
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="/images/ganesha_pooja_shrine.jpg"
              alt="ஸ்ரீ விநாயகர் பூஜை பீடம் மற்றும் தீப அலங்காரம்"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Gentle Warm Light Glow Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D2206]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Shrine Bottom Plate */}
          <div className="pt-2.5 pb-1 px-3 flex items-center justify-between text-[8px] sm:text-[10px] md:text-[12px] text-[#8B1738] font-medium">
            <div className="flex items-center gap-1">
              <span className="text-[#D4AF37]">✦</span>
              <span>மங்கல தீபம்</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8863B]" />
              <span className="font-serif">ஓம் கணபதயே நமஹ</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8863B]" />
            </div>
            <div className="flex items-center gap-1">
              <span>மலர் மாலை</span>
              <span className="text-[#D4AF37]">✦</span>
            </div>
          </div>
        </motion.div>

        {/* Auspicious Devotional Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto bg-[#FFFDF9]/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-[#B8863B]/30 shadow-sm"
        >
          <KolamPattern variant="divider" size={24} className="mb-2.5" />

          <p className="text-sm sm:text-base text-[#70112C] font-serif leading-relaxed italic">
            &ldquo;விநாயகர் திருவருளாலும், குலதெய்வம் ஆசிகளாலும்,
            எங்கள் புதிய இல்லத்தில் அமைதியும் செல்வமும் மங்களமும் பெருகிட
            எல்லோரும் கூடி கொண்டாடுவோம்.&rdquo;
          </p>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs sm:text-sm text-[#6B351C] font-semibold">
            <span>சாந்தி</span>
            <span className="text-[#B8863B]">❈</span>
            <span>சுபீக்ஷம்</span>
            <span className="text-[#B8863B]">❈</span>
            <span>மங்களம்</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
