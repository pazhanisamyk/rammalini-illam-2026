"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { KuthuVilakkuIcon } from "./decorations/KuthuVilakkuIcon";
import { Sparkles } from "lucide-react";

export const WelcomeSection: React.FC = () => {
  const poemLines = [
    { text: "“ராம்மாலினி வீட்டில் மங்களம் பொங்க,", color: "text-[#8B1738] font-bold" },
    { text: "மனமெங்கும் ஆனந்தம் மலரும் இந்நாளில்,", color: "text-[#1F5A36] font-semibold" },
    { text: "புதுமனை புகுவிழாவில் தங்கள் குடும்பத்துடன் கலந்து கொண்டு,", color: "text-[#6B351C]" },
    { text: "ஆசிகள் வழங்கி மகிழ்விக்குமாறு அன்புடன் வரவேற்கிறோம்.”", color: "text-[#8B1738] font-bold" },
  ];

  return (
    <section
      id="welcome"
      className="relative py-14 md:py-20 px-4 bg-[#FFF9EE] overflow-hidden text-center"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.35 } }}
          className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-shrine-glow border-4 border-[#B8863B] bg-[#FFFDF9] transition-all duration-500 group"
        >
          {/* Top Decorative Border Banner */}
          <div className="bg-gradient-to-r from-[#8B1738] via-[#A51E4B] to-[#8B1738] py-2 px-3.5 text-[#FFFDF9] flex items-center justify-between">
            <LotusOrnament size={22} colorVariant="gold" />
            <p className="text-xs font-bold tracking-widest uppercase font-serif">
              மங்கள நல்வரவு
            </p>
            <LotusOrnament size={22} colorVariant="gold" />
          </div>

          {/* Majestic Festive Hall Painting Visual */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/welcome_festive_hall.jpg"
              alt="பாரம்பரிய மங்கள வீடு திருவிழா கொண்டாட்டம்"
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover object-center transform group-hover:scale-104 transition-transform duration-700 ease-out"
            />
            {/* Subtle Gradient Veil for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D2206]/85 via-[#3D2206]/35 to-transparent" />

            {/* Overlaid Title on Image Bottom */}
            <div className="absolute bottom-3 sm:bottom-5 left-4 right-4 text-center text-[#FFFDF9]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-3.5 py-1 rounded-full bg-[#8B1738]/85 backdrop-blur-sm border border-[#D4AF37]/50 mb-1.5 shadow-sm"
              >
                <span className="text-[10px] sm:text-[12px] md:text-[14px] font-semibold tracking-wider text-[#FEF3C7]">
                  ஸ்ரீ அம்மச்சார் அம்மன் துணை
                </span>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl sm:text-3xl font-extrabold font-serif drop-shadow-md"
              >
                புதுமனை புகுவிழா
              </motion.h3>
            </div>
          </div>

          {/* Core Welcoming Poem Message */}
          <div className="p-4 sm:p-7 md:p-9 bg-gradient-to-b from-[#FFFDF9] to-[#FFF4DC] text-center relative">
            <KolamPattern variant="divider" size={26} className="mb-3" />

            {/* The 4-line Traditional Welcome Verse with Staggered Fade */}
            <blockquote className="max-w-2xl mx-auto space-y-2 font-serif text-[#70112C] text-sm sm:text-base md:text-lg font-medium leading-relaxed sm:leading-loose">
              {poemLines.map((line, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 * (idx + 1) }}
                  className={line.color}
                >
                  {line.text}
                </motion.p>
              ))}
            </blockquote>

            <KolamPattern variant="divider" size={26} className="mt-3 mb-2.5" />

            {/* Decorative Footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center justify-center gap-3 text-xs text-[#7D4F13] font-serif italic"
            >
              <span className="animate-float-gentle">🌸</span>
              <span>நல்வரவு • மகிழ்ச்சி</span>
              <span className="animate-float-gentle">🌸</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
