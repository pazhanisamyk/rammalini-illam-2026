"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { KuthuVilakkuIcon } from "./decorations/KuthuVilakkuIcon";
import { Sparkles } from "lucide-react";

export const WelcomeSection: React.FC = () => {
  return (
    <section
      id="welcome"
      className="relative py-14 md:py-20 px-4 bg-[#FFF9EE] overflow-hidden text-center"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#B8863B] bg-[#FFFDF9]"
        >
          {/* Top Decorative Border Banner */}
          <div className="bg-gradient-to-r from-[#8B1738] via-[#A51E4B] to-[#8B1738] py-2 px-3.5 text-[#FFFDF9] flex items-center justify-between">
            <LotusOrnament size={20} colorVariant="gold" />
            <p className="text-xs font-bold tracking-widest uppercase font-serif">
              மங்கள நல்வரவு
            </p>
            <LotusOrnament size={20} colorVariant="gold" />
          </div>

          {/* Majestic Festive Hall Painting Visual */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/welcome_festive_hall.jpg"
              alt="பாரம்பரிய மங்கள இல்லத் திருவிழா கொண்டாட்டம்"
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover object-center transform hover:scale-103 transition-transform duration-700 ease-out"
            />
            {/* Subtle Gradient Veil for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D2206]/85 via-[#3D2206]/35 to-transparent" />

            {/* Overlaid Title on Image Bottom */}
            <div className="absolute bottom-3 sm:bottom-5 left-4 right-4 text-center text-[#FFFDF9]">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#8B1738]/80 backdrop-blur-sm border border-[#D4AF37]/50 mb-1.5">
                <span className="text-xs font-semibold tracking-wider text-[#FEF3C7]">
                  ஸ்ரீ அம்மச்சார் அம்மன் துணை
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold font-serif drop-shadow-md">
                புதுமனை புகுவிழா
              </h3>
            </div>
          </div>

          {/* Core Welcoming Poem Message */}
          <div className="p-4 sm:p-7 md:p-9 bg-gradient-to-b from-[#FFFDF9] to-[#FFF4DC] text-center relative">
            <KolamPattern variant="divider" size={26} className="mb-3" />

            {/* The 4-line Traditional Welcome Verse */}
            <blockquote className="max-w-2xl mx-auto space-y-2 font-serif text-[#70112C] text-sm sm:text-base md:text-lg font-medium leading-relaxed sm:leading-loose">
              <p className="text-[#8B1738] font-bold">
                “ராம்மாலினி இல்லத்தில் மங்களம் பொங்க,
              </p>
              <p className="text-[#1F5A36] font-semibold">
                மனமெங்கும் ஆனந்தம் மலரும் இந்நாளில்,
              </p>
              <p className="text-[#6B351C]">
                புதுமனை புகுவிழாவில் தங்கள் குடும்பத்துடன் கலந்து கொண்டு,
              </p>
              <p className="text-[#8B1738] font-bold">
                ஆசிகள் வழங்கி மகிழ்விக்குமாறு அன்புடன் வரவேற்கிறோம்.”
              </p>
            </blockquote>

            <KolamPattern variant="divider" size={26} className="mt-3 mb-2.5" />

            {/* Decorative Footnote */}
            <div className="flex items-center justify-center gap-3 text-xs text-[#7D4F13] font-serif italic">
              <span>🌸 நல்வரவு</span>
              <span>•</span>
              <span>மகிழ்ச்சி 🌸</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
