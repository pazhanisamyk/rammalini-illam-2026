import React from "react";
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
  return (
    <main className="relative min-h-screen bg-[#FFFDF7] text-[#70112C] selection:bg-[#8B1738] selection:text-[#FFFDF7] overflow-x-hidden">
      {/* Floating Ambient Controls & Effects */}
      <PetalShower />
      <MusicToggle />
      <FloatingNav />

      {/* Sequential Storytelling Experience */}
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
    </main>
  );
}
