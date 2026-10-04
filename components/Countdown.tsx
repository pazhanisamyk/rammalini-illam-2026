"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { KuthuVilakkuIcon } from "./decorations/KuthuVilakkuIcon";
import { Clock, Sparkles } from "lucide-react";

export const Countdown: React.FC = () => {
  // Target: 15 November 2026, 04:00:00 (4:00 AM IST - அதிகாலை)
  const targetDate = new Date("2026-11-15T04:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPassed: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPassed: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isPassed: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) {
    return null;
  }

  const timeBlocks = [
    { label: "நாட்கள்", enLabel: "Days", value: timeLeft.days },
    { label: "மணிநேரம்", enLabel: "Hours", value: timeLeft.hours },
    { label: "நிமிடங்கள்", enLabel: "Minutes", value: timeLeft.minutes },
    { label: "விநாடிகள்", enLabel: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="relative py-12 md:py-16 px-4 bg-[#FFFDF7] overflow-hidden text-center"
    >
      {/* Background Kolam Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <KolamPattern variant="mandala" size={550} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFFDF9] rounded-3xl p-5 sm:p-8 md:p-10 border-2 border-[#B8863B]/40 shadow-invitation"
        >
          {/* Inner Border Frame */}
          <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#B8863B]/30 pointer-events-none" />

          {/* Top Lotus Motif */}
          <div className="flex justify-center mb-2">
            <LotusOrnament size={28} colorVariant="gold" />
          </div>

          <span className="text-xs font-semibold tracking-widest text-[#B8863B] uppercase">
            நிகழ்விற்கான நேரக் கணக்கீடு
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#8B1738] font-serif mt-1">
            மங்கல நன்னாளை நோக்கி
          </h2>
          <p className="text-xs text-[#6B351C] font-serif mt-1">
            15 நவம்பர் 2026 • அதிகாலை 4:00 மணி முதல் 5:30 மணி வரை
          </p>

          <KolamPattern variant="divider" size={26} className="my-2.5" />

          {timeLeft.isPassed ? (
            <div className="my-4 p-5 rounded-2xl bg-[#FFF4DC] border border-[#B8863B]/40 text-center">
              <p className="text-lg sm:text-xl font-bold text-[#8B1738] font-serif">
                நிகழ்வு இனிதே நிறைவுற்றது!
              </p>
              <p className="text-xs sm:text-sm text-[#1F5A36] font-serif mt-1">
                தங்கள் அன்பிற்கும் ஆசிகளுக்கும் நெஞ்சார்ந்த நன்றிகள்.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 my-4">
              {timeBlocks.map((block, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.04 }}
                  className="relative p-3.5 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FFF4DC] border-2 border-[#B8863B]/50 shadow-sm flex flex-col items-center justify-center overflow-hidden group"
                >
                  {/* Subtle top bar accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1738] via-[#B8863B] to-[#8B1738]" />

                  {/* Digits Display */}
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#8B1738] font-serif tracking-tight tabular-nums">
                    {String(block.value).padStart(2, "0")}
                  </span>

                  {/* Tamil Label */}
                  <span className="text-xs font-bold text-[#1F5A36] font-serif mt-1.5">
                    {block.label}
                  </span>

                  {/* English sub-label */}
                  <span className="text-[10px] text-[#7D4F13]/80 uppercase tracking-wider">
                    {block.enLabel}
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Bottom Blessing Line */}
          <div className="flex items-center justify-center gap-2.5 text-xs text-[#7D4F13] font-serif italic mt-3">
            <KuthuVilakkuIcon size={16} glow={false} />
            <span>எங்கள் இல்லத் தொடக்கத்திற்கு தங்கள் வருகையே பேரானந்தம்</span>
            <KuthuVilakkuIcon size={16} glow={false} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
