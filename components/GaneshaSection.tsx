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
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
        <KolamPattern variant="mandala" size={520} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Auspicious Title Mantra */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <LotusOrnament size={26} colorVariant="gold" />
            <span className="text-xs font-semibold tracking-widest text-[#B8863B] uppercase">
              மங்கள வாழ்த்து
            </span>
            <LotusOrnament size={26} colorVariant="gold" />
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
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.35 } }}
          className="relative rounded-3xl overflow-hidden shadow-shrine-glow border-4 border-[#B8863B]/70 p-2 sm:p-3 bg-gradient-to-b from-[#FFF4DC] to-[#FFFDF9] max-w-2xl mx-auto transition-all duration-500 group"
        >
          {/* Inner Image Container */}
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="/images/ganesha_pooja_shrine.jpg"
              alt="ஸ்ரீ விநாயகர் பூஜை பீடம் மற்றும் தீப அலங்காரம்"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover object-center transform group-hover:scale-104 transition-transform duration-700 ease-out"
            />
            {/* Gentle Warm Light Glow Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D2206]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Shrine Bottom Plate */}
          <div className="pt-2.5 pb-1 px-3 flex items-center justify-between text-[8px] sm:text-[10px] md:text-[12px] text-[#8B1738] font-medium">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-1"
            >
              <span className="text-[#D4AF37] animate-sparkle-twinkle">✦</span>
              <span>மங்கல தீபம்</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8863B] animate-pulse" />
              <span className="font-serif font-bold text-[#8B1738]">ஓம் கணபதயே நமஹ</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8863B] animate-pulse" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-1"
            >
              <span>மலர் மாலை</span>
              <span className="text-[#D4AF37] animate-sparkle-twinkle">✦</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Auspicious Devotional Text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -2, transition: { duration: 0.3 } }}
          className="mt-6 max-w-2xl mx-auto bg-[#FFFDF9]/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-[#B8863B]/35 shadow-sm hover:shadow-gold-card transition-shadow"
        >
          <KolamPattern variant="divider" size={24} className="mb-2.5" />

          <p className="text-sm sm:text-base text-[#70112C] font-serif leading-relaxed italic">
            &ldquo;விநாயகர் திருவருளாலும், குலதெய்வம் ஆசிகளாலும்,
            எங்கள் புதிய இல்லத்தில் அமைதியும் செல்வமும் மங்களமும் பெருகிட
            எல்லோரும் கூடி கொண்டாடுவோம்.&rdquo;
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 sm:gap-5 text-[10px] sm:text-[12px] md:text-[14px] text-[#6B351C] font-semibold">
            <motion.span
              whileHover={{ scale: 1.1, color: "#8B1738" }}
              className="px-2.5 py-0.5 rounded-full bg-[#FFF4DC] border border-[#B8863B]/30 cursor-default transition-all"
            >
              சாந்தி
            </motion.span>
            <span className="text-[#B8863B]">❈</span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#8B1738" }}
              className="px-2.5 py-0.5 rounded-full bg-[#FFF4DC] border border-[#B8863B]/30 cursor-default transition-all"
            >
              சுபீக்ஷம்
            </motion.span>
            <span className="text-[#B8863B]">❈</span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#8B1738" }}
              className="px-2.5 py-0.5 rounded-full bg-[#FFF4DC] border border-[#B8863B]/30 cursor-default transition-all"
            >
              மங்களம்
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
