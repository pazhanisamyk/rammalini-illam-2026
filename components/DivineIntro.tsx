"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, FastForward } from "lucide-react";
import { BrushStrokeDivider } from "./decorations/BrushStrokeDivider";

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
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  // Desktop vs Mobile specific video sources (No poster image before playing)
  const currentVideoSrc = isMobile
    ? "/video/mobile-video-intro.mp4"
    : "/video/desktop-video-intro.mp4";

  const handleStart = () => {
    if (introState !== "intro" || hasStartedPlaying) return;
    setHasStartedPlaying(true);
    onPlay();

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = 1.0;
      videoRef.current
        .play()
        .catch((err) => {
          console.warn("Video playback error (trying muted):", err);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.playbackRate = 1.0;
            videoRef.current.play().catch(() => { });
          }
        });
    }
  };

  const handleVideoEnded = () => {
    // Fires automatically when the full video (including the 14s mobile video) completes
    onVideoEnd();
  };

  const isVisible = introState !== "revealed";

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="divine-intro-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.96,
            y: -20,
            filter: "blur(8px)",
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 w-full h-[100dvh] overflow-hidden overscroll-none touch-none bg-[#2D050E] text-[#FFFDF9] select-none flex flex-col items-center justify-between"
        >
          {/* 1. Full-Height & Full-Width Edge-to-Edge Video (Desktop & Mobile) */}
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#2D050E] flex items-center justify-center">
            <video
              ref={videoRef}
              key={currentVideoSrc}
              src={currentVideoSrc}
              playsInline
              preload="auto"
              controls={false}
              onLoadedData={() => setIsVideoLoading(false)}
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 2. Textured Brush Stroke Bottom Overlay (Only shown on initial intro screen) */}
          <AnimatePresence>
            {introState === "intro" && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 inset-x-0 pointer-events-none z-20"
              >
                <div className="absolute inset-x-0 bottom-0 h-44 sm:h-48 bg-gradient-to-t from-[#2D050E] via-[#2D050E]/85 to-transparent" />
                <BrushStrokeDivider
                  position="bottom"
                  className="w-full h-64 sm:h-72 md:h-80"
                  color="#2D050E"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3. Top Spacing */}
          <div className="relative z-30 w-full pt-4 sm:pt-6 pointer-events-none" />

          {/* 4. Bottom Divine CTA & Controls - Lifted higher for mobile screens & navigation bars */}
          <div
            style={{ paddingBottom: "max(6rem, calc(env(safe-area-inset-bottom, 0px) + 3rem))" }}
            className="relative z-30 w-full pb-24 sm:pb-20 md:pb-16 px-4 flex flex-col items-center justify-center pointer-events-auto"
          >
            <AnimatePresence mode="wait">
              {introState === "intro" ? (
                <motion.div
                  key="cta-invite"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center gap-2.5 max-w-sm mx-auto text-center"
                >
                  {/* Primary Divine CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStart}
                    disabled={hasStartedPlaying}
                    className="shimmer-badge group relative px-8 sm:px-10 py-3.5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#B8863B] text-[#3D0817] font-bold text-sm sm:text-base tracking-wide shadow-2xl hover:shadow-gold-card-hover border border-[#FFFDF9]/90 cursor-pointer transition-all flex items-center justify-center gap-2.5 font-serif"
                    aria-label="Invite Their Blessings"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B1738] group-hover:rotate-45 transition-transform duration-300" />
                    <span>Invite Their Blessings ✨</span>
                  </motion.button>

                  {/* Subtitle Badge */}
                  <div className="px-4 py-1 rounded-full bg-[#2D050E]/90 border border-[#D4AF37]/50 backdrop-blur-md shadow-lg">
                    <p className="text-[11px] sm:text-xs text-[#FEF3C7] font-serif tracking-wide">
                      தெய்வீக ஆசிகளுடன் புதுமனை புகுவிழா தொடங்கட்டும் 🙏
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="cta-playing-skip"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center"
                >
                  {/* Only Skip button during video playback - Elevated for mobile */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.95 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleVideoEnded}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2D050E]/90 border border-[#D4AF37]/50 text-[#FEF3C7] text-xs sm:text-sm font-serif backdrop-blur-md hover:bg-[#450516] hover:border-[#D4AF37] shadow-xl cursor-pointer transition-all"
                  >
                    <FastForward className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Skip / தொடரவும்</span>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Divine Golden Flash Transition during reveal exit */}
          {introState === "revealing" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.7, 0] }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 z-50 bg-gradient-to-t from-[#B8863B]/30 via-[#F59E0B]/25 to-[#D4AF37]/30 pointer-events-none mix-blend-screen"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
