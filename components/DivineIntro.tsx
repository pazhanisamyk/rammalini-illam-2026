"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { KuthuVilakkuIcon } from "./decorations/KuthuVilakkuIcon";
import { ToranamBanner } from "./decorations/ToranamBanner";

export type IntroState = "intro" | "playing" | "revealing" | "revealed";

interface DivineIntroProps {
  introState: IntroState;
  onPlay: () => void;
  onVideoEnd: () => void;
}

export const DivineIntro: React.FC<DivineIntroProps> = ({
  introState,
  onPlay,
  onVideoEnd,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handleStart = () => {
    if (introState !== "intro") return;
    onPlay();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = 1.05;
      videoRef.current
        .play()
        .catch((err) => {
          console.warn("Video playback error:", err);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.playbackRate = 1.05;
            videoRef.current.play().catch(() => { });
          }
        });
    }
  };

  const handleEnded = () => {
    // Smooth cinematic dissolve
    onVideoEnd();
  };

  return (
    <AnimatePresence mode="wait">
      {introState !== "revealed" && (
        <motion.div
          key="divine-intro-overlay"
          initial={{ opacity: 1 }}
          animate={{
            opacity: introState === "revealing" ? 0 : 1,
            scale: introState === "revealing" ? 1.03 : 1,
            filter: introState === "revealing" ? "blur(8px)" : "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className={`fixed inset-0 z-50 w-screen h-screen overflow-hidden bg-black text-[#FFFDF9] select-none ${introState === "revealing" ? "pointer-events-none" : ""
            }`}
        >
          {/* 1. Full-Screen Cinematic Video */}
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src="/video/greetings.mp4"
              playsInline
              preload="auto"
              controls={false}
              onLoadedData={() => setIsVideoLoading(false)}
              onEnded={handleEnded}
              className="w-full h-full object-cover object-center"
            />

            {/* Cinematic Vignette & Ambient Temple Warmth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/70 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(31,3,11,0.5)_100%)] pointer-events-none" />
          </div>

          {/* 2. Top Traditional Auspicious Toranam */}
          <ToranamBanner className="absolute top-0 left-0 right-0 z-30 opacity-90 pointer-events-none" repeat={14} />

          {/* 3. Auspicious Corner Kolams */}
          <div className="absolute top-2.5 left-2.5 text-[#D4AF37] pointer-events-none opacity-60 z-30 hidden sm:block">
            <KolamPattern variant="corner" size={24} color="#D4AF37" />
          </div>
          <div className="absolute top-2.5 right-2.5 text-[#D4AF37] rotate-90 pointer-events-none opacity-60 z-30 hidden sm:block">
            <KolamPattern variant="corner" size={24} color="#D4AF37" />
          </div>
          <div className="absolute bottom-2.5 left-2.5 text-[#D4AF37] -rotate-90 pointer-events-none opacity-60 z-30 hidden sm:block">
            <KolamPattern variant="corner" size={24} color="#D4AF37" />
          </div>
          <div className="absolute bottom-2.5 right-2.5 text-[#D4AF37] rotate-180 pointer-events-none opacity-60 z-30 hidden sm:block">
            <KolamPattern variant="corner" size={24} color="#D4AF37" />
          </div>

          {/* 4. Top Floating Sacred Deity Invocation - Renders Immediately */}
          <div className="absolute top-6 sm:top-8 left-0 right-0 z-30 px-3 flex flex-col items-center pointer-events-none">
            {/* Sacred Deity Invocation Bar */}
            <div className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1 rounded-full bg-black/60 border border-[#D4AF37]/50 shadow-diya-glow backdrop-blur-md">
              <span className="w-1 h-1 rounded-full bg-[#D4AF37] animate-pulse" />
              <p className="text-[8px] sm:text-xs md:text-sm font-semibold tracking-wider text-[#FEF3C7] font-serif">
                ஸ்ரீ கணபதி துணை • ஸ்ரீ முருகன் துணை
              </p>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37] animate-pulse" />
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-1.5 px-2.5 py-0.5 rounded-full bg-black/30 backdrop-blur-xs">
              <LotusOrnament size={16} colorVariant="gold" />
              <h1 className="text-[8px] sm:text-xs md:text-sm font-semibold tracking-wider text-[#D4AF37] uppercase font-serif drop-shadow-md">
                தெய்வீக இல்லப் பிரவேசம் • கிரகப்பிரவேசம்
              </h1>
              <LotusOrnament size={16} colorVariant="gold" />
            </div>
          </div>

          {/* 5. Flanking Sacred Kuthuvilakku Lamps on Desktop - Renders Immediately */}
          <div className="absolute inset-y-0 left-6 sm:left-8 z-30 hidden md:flex items-center pointer-events-none opacity-85">
            <KuthuVilakkuIcon size={34} glow={true} />
          </div>
          <div className="absolute inset-y-0 right-6 sm:right-8 z-30 hidden md:flex items-center pointer-events-none opacity-85">
            <KuthuVilakkuIcon size={34} glow={true} />
          </div>

          {/* 6. Bottom Floating CTA & Action Controls */}
          <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-40 px-4 flex flex-col items-center justify-center pointer-events-auto">
            <AnimatePresence mode="wait">
              {introState === "intro" ? (
                <div
                  key="cta-invite"
                  className="flex flex-col items-center justify-center gap-2 max-w-sm mx-auto text-center"
                >
                  {/* Primary Divine CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleStart}
                    className="shimmer-badge group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#B8863B] text-[#3D0817] font-bold text-xs sm:text-sm md:text-base tracking-wide shadow-diya-glow hover:shadow-gold-card-hover border border-[#FFFDF9]/80 cursor-pointer transition-all duration-200 flex items-center justify-center gap-2"
                    aria-label="Invite Their Blessings"
                  >
                    <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#8B1738] group-hover:rotate-45 transition-transform duration-300" />
                    <span className="font-serif">Invite Their Blessings ✨</span>
                  </motion.button>

                  {/* Subtitle Badge */}
                  <div className="px-3 py-0.5 rounded-full bg-black/50 border border-[#D4AF37]/25 backdrop-blur-md">
                    <p className="text-[8px] sm:text-[10px] md:text-[12px] text-[#FEF3C7] font-serif italic tracking-wide">
                      தெய்வீக ஆசிகளுடன் இல்லத் திருவிழா தொடங்கட்டும் 🙏
                    </p>
                  </div>
                </div>
              ) : introState === "playing" ? (
                <motion.div
                  key="cta-playing"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-[#D4AF37]/50 text-[#FEF3C7] text-[11px] sm:text-xs md:text-sm font-serif shadow-diya-glow backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                  <span>தெய்வீக அருள் இல்லத்தில் நிறைகிறது... ✨</span>
                </motion.div>
              ) : (
                <motion.div
                  key="cta-revealing"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37] text-[#3D0817] text-[11px] sm:text-xs md:text-sm font-bold font-serif shadow-diya-glow"
                >
                  <span>மங்கள நல்வரவு! இல்லத்திற்குள் நுழைகிறோம்... 🪔</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 7. Full-Screen Silky Golden Divine Flare on Revealing Transition */}
          {introState === "revealing" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: [0, 0.65, 0], scale: [0.95, 1.25, 1.6] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="fixed inset-0 pointer-events-none z-60 bg-[radial-gradient(circle,_rgba(254,240,138,0.85)_0%,_rgba(212,175,55,0.5)_40%,_transparent_75%)]"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
