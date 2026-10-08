"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { OrnamentalBorder } from "./decorations/OrnamentalBorder";

export const InvitationMessage: React.FC = () => {
  return (
    <section
      id="invitation"
      className="relative py-12 md:py-16 px-4 bg-[#FFF4DC] overflow-hidden text-center"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.35 } }}
        >
          <OrnamentalBorder variant="maroon" className="bg-[#FFFDF9]/95">
            {/* Top Ornamental Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col items-center justify-center mb-4"
            >
              <LotusOrnament size={34} colorVariant="maroon" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#8B1738] font-serif mt-2 tracking-wide">
                புதுமனை புகுவிழா அழைப்பிதழ்
              </h2>
              <p className="text-[11px] sm:text-xs font-medium text-[#B8863B] tracking-widest mt-1 uppercase">
                GRIHA PRAVESH INVITATION
              </p>
            </motion.div>

            {/* Decorative Kolam Divider */}
            <KolamPattern variant="divider" size={26} className="my-2.5" />

            {/* Core Traditional Tamil Invitation Wording */}
            <div className="space-y-4 text-[#70112C] font-serif px-1 sm:px-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm sm:text-base leading-relaxed font-semibold text-[#8B1738]"
              >
                அன்புடையீர் வணக்கம்,
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xs sm:text-sm md:text-base leading-relaxed text-[#6B351C]"
              >
                இறைவனின் திருவருளாலும், பெரியோர்களின் நல்லாசிகளாலும்
                எங்கள் புதிய வீடு <span className="font-bold text-[#1F5A36] text-sm sm:text-base md:text-lg">“ராம்மாலினி வீடு”</span> -ன்
                புதுமனை புகுவிழா நன்னாளன்று இனிதே நடைபெற உள்ளது.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                whileHover={{ scale: 1.01 }}
                className="py-3 px-4 my-3 rounded-xl bg-[#FFF4DC]/80 border border-[#B8863B]/40 shadow-xs transition-shadow hover:shadow-sm"
              >
                <p className="text-xs sm:text-sm md:text-base font-medium leading-relaxed sm:leading-loose text-[#8B1738]">
                  இந்நிகழ்விற்கு தாங்கள் தங்கள் சுற்றமும் நட்பும் சூழ வருகை தந்து,
                  எங்கள் வீட்டு விழாவை சிறப்பித்து,
                  எங்களை வாழ்த்தி ஆசீர்வதிக்குமாறு அன்போடு வேண்டுகிறோம்.
                </p>
              </motion.div>

              {/* Auspicious Blessing Footnote */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-1 text-xs text-[#7D4F13] italic flex items-center justify-center gap-2"
              >
                <span className="animate-float-gentle">🌸</span>
                <span>தங்கள் வருகை எங்கள் வீட்டுக்கு மங்களம் சேர்க்கும்</span>
                <span className="animate-float-gentle">🌸</span>
              </motion.div>

              {/* Download PDF Invitation CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="pt-3 pb-1 flex justify-center"
              >
                <a
                  href="/pdf/invitation.pdf"
                  download="Rammalini_Housewarming_Invitation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8B1738] to-[#A51E4B] text-[#FFFDF9] font-bold text-[10px] sm:text-[12px] md:text-[14px] shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group"
                  aria-label="புதுமனை புகுவிழா அழைப்பிதழ் PDF பதிவிறக்கம்"
                >
                  <FileDown className="w-4 h-4 text-[#D4AF37] group-hover:translate-y-0.5 transition-transform" />
                  <span>அழைப்பிதழைப் பதிவிறக்குக (Download PDF)</span>
                </a>
              </motion.div>
            </div>

            {/* Bottom Flower Accents */}
            <div className="mt-6 pt-3.5 border-t border-[#B8863B]/30 flex items-center justify-center gap-4 sm:gap-6">
              <LotusOrnament size={24} colorVariant="gold" />
              <span className="text-[8px] sm:text-[10px] md:text-[12px] font-serif text-[#B8863B] font-semibold tracking-wider">
                மங்களம் பொங்குக • நலம் சூழ்க
              </span>
              <LotusOrnament size={24} colorVariant="gold" />
            </div>
          </OrnamentalBorder>
        </motion.div>
      </div>
    </section>
  );
};
