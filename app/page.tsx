"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DivineIntro, IntroState } from "@/components/DivineIntro";
import { Hero } from "@/components/Hero";
import { GaneshaSection } from "@/components/GaneshaSection";
import { InvitationMessage } from "@/components/InvitationMessage";
import { FamilySection } from "@/components/FamilySection";
import { HouseName } from "@/components/HouseName";
import { EventDetails } from "@/components/EventDetails";
import { LocationSection } from "@/components/LocationSection";
import { WelcomeSection } from "@/components/WelcomeSection";
import { Countdown } from "@/components/Countdown";
import { RSVP } from "@/components/RSVP";
import { MusicToggle } from "@/components/MusicToggle";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { PetalShower } from "@/components/decorations/PetalShower";

export default function Home() {
  const [introState, setIntroState] = useState<IntroState>("intro");

  const handlePlay = () => {
    setIntroState("playing");
  };

  const handleVideoEnd = () => {
    setIntroState("revealing");
    setTimeout(() => {
      setIntroState("revealed");
    }, 800);
  };

  const isWebsiteVisible = introState === "revealing" || introState === "revealed";

  return (
    <main className="relative min-h-screen bg-[#FFFDF7] text-[#70112C] selection:bg-[#8B1738] selection:text-[#FFFDF7] overflow-x-hidden">
      {/* 1. Cinematic Divine Video Intro Overlay */}
      <DivineIntro
        introState={introState}
        onPlay={handlePlay}
        onVideoEnd={handleVideoEnd}
      />

      {/* 2. Floating Ambient Controls & Effects (Active when website is revealed) */}
      {isWebsiteVisible && (
        <>
          <PetalShower />
          <MusicToggle />
          <FloatingNav />
        </>
      )}

      {/* 3. Main Website Invitation Experience - Preloaded underneath overlay for instant buttery smooth cross-fade */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={
          isWebsiteVisible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
              }
            : { opacity: 0, y: 15 }
        }
        className="relative z-10"
      >
        {/* 1. Hero / Entrance Doorway */}
        <Hero />

        {/* 2. Ganesha / Auspicious Pooja Shrine */}
        <GaneshaSection />

        {/* 3. Invitation Message */}
        <InvitationMessage />

        {/* 4. Family / Hosts */}
        <FamilySection />

        {/* 5. House Name Highlight */}
        <HouseName />

        {/* 6. Event Details */}
        <EventDetails />

        {/* 7. Location & Map Directions */}
        <LocationSection />

        {/* 8. Festive Welcome Hall & Poem */}
        <WelcomeSection />

        {/* 9. Countdown Timer */}
        <Countdown />

        {/* 10. RSVP & Interactive Blessings */}
        <RSVP />

        {/* 11. Footer & Closing Blessing */}
        <Footer />
      </motion.div>
    </main>
  );
}
