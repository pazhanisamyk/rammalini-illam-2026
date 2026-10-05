"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

export const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElemRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioElemRef.current) return;

    if (isPlaying) {
      audioElemRef.current.pause();
      setIsPlaying(false);
    } else {
      audioElemRef.current.volume = 0.4;
      audioElemRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Audio playback error:", error);
        });
    }
  };

  useEffect(() => {
    const audio = audioElemRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-3 right-3 z-40"
    >
      <audio
        ref={audioElemRef}
        src="/audio/Ganapathiye%20Varuvai.mp3"
        loop
        preload="auto"
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMusic}
        className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-sm transition-all duration-300 backdrop-blur-md cursor-pointer ${
          isPlaying
            ? "bg-[#8B1738] text-[#FFFDF9] border-[#B8863B] shadow-diya-glow scale-102"
            : "bg-[#FFFDF9]/95 text-[#8B1738] border-[#B8863B]/50 hover:bg-[#FFF4DC]"
        }`}
        aria-label={isPlaying ? "இசையை நிறுத்துக" : "மங்கல இசை ஒலிக்க"}
        title={isPlaying ? "இசையை நிறுத்துக" : "மங்கல இசை ஒலிக்க"}
      >
        {isPlaying ? (
          <>
            <div className="flex items-end gap-0.5 h-3.5 px-0.5" aria-hidden="true">
              <span className="w-0.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:0ms] h-3" />
              <span className="w-0.5 bg-[#FEF08A] rounded-full animate-bounce [animation-delay:150ms] h-1.5" />
              <span className="w-0.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:300ms] h-3.5" />
              <span className="w-0.5 bg-[#FEF08A] rounded-full animate-bounce [animation-delay:450ms] h-2" />
            </div>
            <span className="text-[11px] font-semibold font-serif">இசை இயக்கத்தில்</span>
            <Volume2 className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-[#B8863B] group-hover:text-[#8B1738] transition-colors" />
            <span className="text-[11px] font-semibold font-serif">இசை (Music)</span>
          </>
        )}
      </motion.button>
    </motion.div>
  );
};
