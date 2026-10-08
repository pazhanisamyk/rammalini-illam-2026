"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-3.5 right-3.5 sm:top-4 sm:right-4 z-40 pointer-events-auto"
    >
      <audio
        ref={audioElemRef}
        src="/audio/Ganapathiye%20Varuvai.mp3"
        loop
        preload="auto"
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggleMusic}
        className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border shadow-md transition-all duration-300 backdrop-blur-md cursor-pointer ${
          isPlaying
            ? "bg-[#8B1738] text-[#FFFDF9] border-[#D4AF37] shadow-diya-glow"
            : "bg-[#FFFDF9]/95 text-[#70112C] border-[#B8863B]/50 hover:bg-[#FFF4DC] hover:border-[#8B1738]/60 shadow-sm"
        }`}
        aria-label={isPlaying ? "இசையை நிறுத்துக (Mute)" : "மங்கல இசை ஒலிக்க (Play)"}
        title={isPlaying ? "இசையை நிறுத்துக (Mute)" : "மங்கல இசை ஒலிக்க (Play)"}
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-[#FEF3C7] animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F59E0B]" />
            </span>
          </div>
        ) : (
          <VolumeX className="w-5 h-5 text-[#70112C] group-hover:text-[#8B1738] transition-colors" />
        )}
      </motion.button>
    </motion.div>
  );
};
