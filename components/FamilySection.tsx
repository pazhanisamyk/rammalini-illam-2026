"use client";

import React from "react";
import { motion } from "framer-motion";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { OrnamentalBorder } from "./decorations/OrnamentalBorder";
import { Heart, Users } from "lucide-react";

export const FamilySection: React.FC = () => {
  return (
    <section
      id="family"
      className="relative py-12 md:py-16 px-4 bg-[#FFFDF7] overflow-hidden text-center"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.35 } }}
        >
          <OrnamentalBorder variant="gold" className="bg-[#FFFDF9]">
            {/* Header */}
            <div className="flex flex-col items-center justify-center mb-3">
              <LotusOrnament size={30} colorVariant="gold" />
              <p className="text-xs font-semibold tracking-widest text-[#B8863B] uppercase mt-1.5">
                இல்லத்தார்
              </p>
              <h2 className="text-lg sm:text-xl font-bold text-[#8B1738] font-serif">
                இங்ஙனம், தங்கள் அன்புடன்
              </h2>
            </div>

            <KolamPattern variant="divider" size={26} className="my-2.5" />

            {/* Hosts List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-4">
              {/* Host 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFF4DC]/90 to-[#FFFDF9] border border-[#B8863B]/40 shadow-xs hover:shadow-gold-card transition-all group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#8B1738]/10 border border-[#8B1738]/30 flex items-center justify-center mx-auto mb-2 text-[#8B1738] group-hover:scale-110 transition-transform">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#8B1738] font-serif tracking-wide">
                  ராமச்சந்திரன் - மாலினி
                </h3>
                <p className="text-xs text-[#7D4F13] font-serif mt-0.5">
                  இல்ல உரிமையாளர்கள்
                </p>
              </motion.div>

              {/* Host 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFF4DC]/90 to-[#FFFDF9] border border-[#B8863B]/40 shadow-xs hover:shadow-gold-card transition-all group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1F5A36]/10 border border-[#1F5A36]/30 flex items-center justify-center mx-auto mb-2 text-[#1F5A36] group-hover:scale-110 transition-transform">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#8B1738] font-serif tracking-wide">
                  ஹரேஷ்குமார் - புனிதவதி
                </h3>
                <p className="text-xs text-[#7D4F13] font-serif mt-0.5">
                  அன்பு குடும்பத்தினர்
                </p>
              </motion.div>
            </div>

            {/* Welcoming Next Generation / Children */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 pt-4 border-t border-[#B8863B]/30 bg-[#FFFDF7]/80 rounded-xl p-3 sm:p-4"
            >
              <p className="text-xs font-semibold tracking-wider text-[#6B351C] font-serif mb-2.5">
                தங்கள் வருகையை அன்புடன் எதிர்நோக்கும்:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-[#1F5A36] font-serif">
                <motion.span
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3.5 py-1.5 rounded-full bg-[#FFF4DC] border border-[#1F5A36]/30 shadow-xs cursor-default transition-all hover:bg-[#FFF9EE] hover:border-[#1F5A36]/60"
                >
                  🌸 அதிதி
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3.5 py-1.5 rounded-full bg-[#FFF4DC] border border-[#1F5A36]/30 shadow-xs cursor-default transition-all hover:bg-[#FFF9EE] hover:border-[#1F5A36]/60"
                >
                  🌼 துருவன்
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3.5 py-1.5 rounded-full bg-[#FFF4DC] border border-[#1F5A36]/30 shadow-xs cursor-default transition-all hover:bg-[#FFF9EE] hover:border-[#1F5A36]/60"
                >
                  🌺 தூரிகா
                </motion.span>
              </div>
            </motion.div>
          </OrnamentalBorder>
        </motion.div>
      </div>
    </section>
  );
};
