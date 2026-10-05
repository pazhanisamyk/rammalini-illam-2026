"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Mail, Sparkles, Calendar, MapPin, UserCheck } from "lucide-react";

export const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [visible, setVisible] = useState(false);

  const navItems = [
    { id: "hero", label: "முகப்பு", icon: Home },
    { id: "invitation", label: "அழைப்பிதழ்", icon: Mail },
    { id: "house-name", label: "இல்லம்", icon: Sparkles },
    { id: "event-details", label: "நிகழ்வு", icon: Calendar },
    { id: "location", label: "இடம்", icon: MapPin },
    { id: "rsvp", label: "RSVP", icon: UserCheck },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav after scrolling down from the top
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // Detect current active section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 60, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 60, opacity: 0, x: "-50%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 sm:bottom-5 left-1/2 z-40 max-w-[96vw] px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#FFFDF9]/95 border-2 border-[#B8863B]/60 shadow-2xl backdrop-blur-md"
          aria-label="முக்கிய வழிசெலுத்தல்"
        >
          <ul className="flex items-center gap-1 sm:gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollTo(item.id)}
                    className={`relative flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#FFFDF9]"
                        : "text-[#70112C] hover:bg-[#FFF4DC] hover:text-[#8B1738]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    title={item.label}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-[#8B1738] rounded-full shadow-md -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline font-serif">{item.label}</span>
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
