"use client";

import React, { useState, useEffect } from "react";
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

  if (!visible) return null;

  return (
    <nav
      className="fixed bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[96vw] px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#FFFDF9]/95 border-2 border-[#B8863B]/60 shadow-2xl backdrop-blur-md transition-all duration-300"
      aria-label="முக்கிய வழிசெலுத்தல்"
    >
      <ul className="flex items-center gap-1.5 sm:gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-2 sm:py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#8B1738] text-[#FFFDF9] shadow-md scale-105"
                    : "text-[#70112C] hover:bg-[#FFF4DC] hover:text-[#8B1738]"
                }`}
                aria-current={isActive ? "page" : undefined}
                title={item.label}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline font-serif">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
