"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps {
  onLoadComplete?: () => void;
  minDisplayTime?: number;
}

export const PageLoader: React.FC<PageLoaderProps> = ({
  onLoadComplete,
  minDisplayTime = 1600,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const handleWindowLoad = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        setIsLoading(false);
        if (onLoadComplete) {
          onLoadComplete();
        }
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      handleWindowLoad();
    } else {
      window.addEventListener("load", handleWindowLoad);
      // Fallback timeout in case load event already fired
      const fallbackTimer = setTimeout(handleWindowLoad, 2000);
      return () => {
        window.removeEventListener("load", handleWindowLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, [minDisplayTime, onLoadComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="page-loader-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(6px)",
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] w-full h-[100dvh] overflow-hidden bg-black text-[#FFFDF9] select-none flex flex-col items-center justify-between"
        >
          {/* Top Spacer for balanced vertical alignment */}
          <div className="w-full pt-8 sm:pt-12 pointer-events-none" />

          {/* Center Loader GIF with Pure Screen Blending (No box or borders) */}
          <div className="relative flex flex-col items-center justify-center px-4 my-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center justify-center"
            >
              <Image
                src="/images/gif/loader.gif"
                alt="Loading Rammalini Illam..."
                width={360}
                height={360}
                unoptimized
                priority
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain mix-blend-screen filter contrast-125"
              />
            </motion.div>
          </div>

          {/* Bottom Developer Branding Badge - Lifted higher for mobile screens & navigation bars */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            style={{ paddingBottom: "max(4.5rem, calc(env(safe-area-inset-bottom, 0px) + 2rem))" }}
            className="relative z-20 w-full pb-18 sm:pb-16 md:pb-12 px-6 flex flex-col items-center justify-center text-center gap-1.5 max-w-lg mx-auto"
          >
            {/* Powered by line with Portfolio Link */}
            <p className="flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm font-serif text-[#FEF3C7] tracking-wide">
              <span className="text-[#D4AF37]">Powered by</span>
              <a
                href="https://devpazhani.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-[#F59E0B] hover:text-[#FEF3C7] underline decoration-[#D4AF37]/50 hover:decoration-[#F59E0B] transition-all duration-200 group focus:outline-none focus:ring-1 focus:ring-[#D4AF37] rounded-xs px-1"
                aria-label="Pazhanisamy K - Developer Portfolio"
              >
                <span>Pazhanisamy K</span>
                <span className="text-[10px] text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                  ↗
                </span>
              </a>
            </p>

            {/* Professional Role Title */}
            <p className="text-[10px] sm:text-[11.5px] tracking-wide text-[#D4AF37]/80 font-sans font-medium text-center">
              Full Stack Developer · Web & Mobile Application Development
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
