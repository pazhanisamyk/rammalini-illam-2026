"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, CalendarPlus, Check, Sparkles, FileDown } from "lucide-react";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { OrnamentalBorder } from "./decorations/OrnamentalBorder";

interface EventDetailsProps { }

export const EventDetails: React.FC<EventDetailsProps> = () => {
  const [calendarAdded, setCalendarAdded] = useState(false);

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("புதுமனை புகுவிழா | ராம்மாலினி வீடு");
    const details = encodeURIComponent(
      "ராம்மாலினி வீட்டு புதுமனை புகுவிழா (Griha Pravesh Ceremony). தாங்கள் குடும்பத்துடன் கலந்து கொண்டு எங்களை ஆசீர்வதிக்குமாறு அன்புடன் வேண்டுகிறோம்."
    );
    const location = encodeURIComponent(
      "ராம்மாலினி வீடு, Plot No. 6B, SRS அவென்யூ, இரத்தினமங்கலம், சென்னை - 127"
    );
    // 15 Nov 2026: 4:00 AM to 5:30 AM IST (UTC+5:30 -> 14 Nov 22:30 UTC to 15 Nov 00:00 UTC)
    const dates = "20261114T223000Z/20261115T000000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  // Download .ics file
  const downloadIcs = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Rammalini Housewarming//TA",
      "BEGIN:VEVENT",
      "UID:housewarming-rammalini-20261115",
      "DTSTAMP:20261004T000000Z",
      "DTSTART:20261114T223000Z",
      "DTEND:20261115T000000Z",
      "SUMMARY:புதுமனை புகுவிழா | ராம்மாலினி வீடு",
      "DESCRIPTION:ராம்மாலினி வீட்டு புதுமனை புகுவிழா நல்வரவு அழைப்பிதழ்",
      "LOCATION:Plot No. 6B, SRS Avenue, இரத்தினமங்கலம், சென்னை - 127",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "rammalini-housewarming.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCalendarAdded(true);
    setTimeout(() => setCalendarAdded(false), 3000);
  };

  return (
    <section
      id="event-details"
      className="relative py-12 md:py-16 px-4 bg-[#FFFDF7] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.35 } }}
        >
          <OrnamentalBorder variant="gold" className="bg-[#FFFDF9]">
            {/* Section Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <LotusOrnament size={28} colorVariant="gold" />
                <span className="text-xs font-semibold tracking-widest text-[#B8863B] uppercase">
                  விழா நேரம் & இடம்
                </span>
                <LotusOrnament size={28} colorVariant="gold" />
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#8B1738] font-serif">
                நிகழ்வு விவரங்கள்
              </h2>
              <p className="text-xs text-[#7D4F13] font-serif mt-1">
                மங்கல நாளில் தங்களை வரவேற்க காத்திருக்கிறோம்
              </p>

              <KolamPattern variant="divider" size={28} className="my-2.5" />
            </div>

            {/* Event Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
              {/* Date Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFF4DC] to-[#FFFDF9] border border-[#B8863B]/40 shadow-xs hover:shadow-gold-card transition-all group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#8B1738]/10 border border-[#8B1738]/30 flex items-center justify-center text-[#8B1738] mb-2 group-hover:scale-110 transition-transform">
                  <Calendar className="w-4 h-4" />
                </div>
                <h3 className="text-[11px] font-semibold tracking-wider text-[#B8863B] uppercase mb-0.5">
                  திருநாள்
                </h3>
                <p className="text-base sm:text-lg font-bold text-[#8B1738] font-serif">
                  15 நவம்பர் 2026
                </p>
                <p className="text-xs font-medium text-[#1F5A36] mt-0.5 font-serif">
                  15 November 2026
                </p>
                <span className="mt-1.5 inline-block px-2.5 py-0.5 rounded-full bg-[#8B1738]/10 text-[10px] font-bold text-[#8B1738]">
                  ஞாயிற்றுக்கிழமை (Sunday)
                </span>
              </motion.div>

              {/* Time Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFF4DC] to-[#FFFDF9] border border-[#B8863B]/40 shadow-xs hover:shadow-gold-card transition-all group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1F5A36]/10 border border-[#1F5A36]/30 flex items-center justify-center text-[#1F5A36] mb-2 group-hover:scale-110 transition-transform">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="text-[11px] font-semibold tracking-wider text-[#B8863B] uppercase mb-0.5">
                  சுப முகூர்த்த நேரம்
                </h3>
                <p className="text-base sm:text-lg font-bold text-[#1F5A36] font-serif">
                  அதிகாலை 4:00 - 5:30
                </p>
                <p className="text-xs font-medium text-[#6B351C] mt-0.5">
                  4:00 AM to 5:30 AM
                </p>
                <span className="mt-1.5 inline-block px-2.5 py-0.5 rounded-full bg-[#1F5A36]/10 text-[10px] font-bold text-[#1F5A36]">
                  அதிகாலை வேளை
                </span>
              </motion.div>

              {/* Venue Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFF4DC] to-[#FFFDF9] border border-[#B8863B]/40 shadow-xs hover:shadow-gold-card transition-all group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B8863B]/10 border border-[#B8863B]/30 flex items-center justify-center text-[#B8863B] mb-2 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="text-[11px] font-semibold tracking-wider text-[#B8863B] uppercase mb-0.5">
                  நிகழ்விடம்
                </h3>
                <p className="text-sm sm:text-base font-bold text-[#8B1738] font-serif">
                  ராம்மாலினி வீடு
                </p>
                <p className="text-xs text-[#6B351C] font-serif mt-0.5 leading-relaxed">
                  Plot No. 6B, SRS அவென்யூ,
                  <br />
                  இரத்தினமங்கலம்
                  <br />
                  சென்னை - 127
                </p>
              </motion.div>
            </div>

            {/* Visual Ceremony Highlights Cards */}
            <div className="mt-8 mb-6 pt-6 border-t border-[#B8863B]/30">
              <div className="text-center mb-5">
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#B8863B] uppercase font-serif">
                  மங்கள சடங்குகள் & விருந்து
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#8B1738] font-serif mt-0.5">
                  விழா நிகழ்வுகள்
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* 1. Ganapathi Homam */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl overflow-hidden bg-[#FFF4DC]/80 border border-[#B8863B]/40 shadow-sm hover:shadow-md transition-all group flex flex-col"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/10">
                    <img
                      src="/images/ganapathi_homam_ceremony.jpg"
                      alt="கணபதி ஹோமம் & வாஸ்து பூஜை"
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#8B1738]/90 text-[#FFFDF9] text-[9px] sm:text-[10px] font-bold font-serif shadow-xs">
                      1. அதிகாலை வேளை
                    </span>
                  </div>
                  <div className="p-3 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#8B1738] font-serif">
                        கணபதி ஹோமம் & வாஸ்து பூஜை
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-[#7D4F13] font-serif mt-0.5 leading-snug">
                        இறை அருளும் அமைதியும் வீட்டில் குடியேற மங்கள ஹோமங்கள்
                      </p>
                    </div>
                    <span className="mt-2 text-[9px] sm:text-[10px] font-semibold text-[#1F5A36] bg-[#1F5A36]/10 px-2 py-0.5 rounded-full inline-block">
                      அதிகாலை 4:00 - 5:00 AM
                    </span>
                  </div>
                </motion.div>

                {/* 2. Paal Kaichuthal */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl overflow-hidden bg-[#FFF4DC]/80 border border-[#B8863B]/40 shadow-sm hover:shadow-md transition-all group flex flex-col"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/10">
                    <img
                      src="/images/paal_kaichuthal_ceremony.jpg"
                      alt="கிரகப்பிரவேசம் & பால் காய்ச்சுதல்"
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#1F5A36]/90 text-[#FFFDF9] text-[9px] sm:text-[10px] font-bold font-serif shadow-xs">
                      2. சுப முகூர்த்தம்
                    </span>
                  </div>
                  <div className="p-3 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#8B1738] font-serif">
                        கிரகப்பிரவேசம் & பால் காய்ச்சுதல்
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-[#7D4F13] font-serif mt-0.5 leading-snug">
                        செல்வமும் வளமும் பொங்கி வழிய மங்களகரமான திருநிகழ்வு
                      </p>
                    </div>
                    <span className="mt-2 text-[9px] sm:text-[10px] font-semibold text-[#8B1738] bg-[#8B1738]/10 px-2 py-0.5 rounded-full inline-block">
                      சுப முகூர்த்தம் 5:00 - 5:30 AM
                    </span>
                  </div>
                </motion.div>

                {/* 3. Mangala Virundhu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl overflow-hidden bg-[#FFF4DC]/80 border border-[#B8863B]/40 shadow-sm hover:shadow-md transition-all group flex flex-col"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/10">
                    <img
                      src="/images/mangala_virundhu_feast.jpg"
                      alt="மங்கள விருந்து உபசரிப்பு"
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#B8863B]/90 text-[#FFFDF9] text-[9px] sm:text-[10px] font-bold font-serif shadow-xs">
                      3. விருந்தோம்பல்
                    </span>
                  </div>
                  <div className="p-3 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#8B1738] font-serif">
                        மங்கள விருந்து உபசரிப்பு
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-[#7D4F13] font-serif mt-0.5 leading-snug">
                        சுவையான அறுசுவை தென்னிந்திய பாரம்பரிய தலைவாழை விருந்து
                      </p>
                    </div>
                    <span className="mt-2 text-[9px] sm:text-[10px] font-semibold text-[#B8863B] bg-[#B8863B]/10 px-2 py-0.5 rounded-full inline-block">
                      காலை 7:00 AM முதல்
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Action: Add to Calendar & Download Invitation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-2.5 pt-3 border-t border-[#B8863B]/30"
            >
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-badge inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#8B1738] text-[#FFFDF9] font-medium text-xs shadow-md hover:bg-[#70112C] transition-all hover:scale-105 active:scale-95 group"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span>Google Calendar</span>
              </a>

              <button
                onClick={downloadIcs}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFFDF9] text-[#8B1738] border border-[#8B1738]/40 font-medium text-xs shadow-xs hover:bg-[#FFF4DC] hover:border-[#8B1738]/70 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {calendarAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600 animate-bounce" />
                    <span className="text-green-700 font-bold">பதிவிறக்கப்பட்டது!</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-3.5 h-3.5 text-[#B8863B]" />
                    <span>Apple / Outlook (.ics)</span>
                  </>
                )}
              </button>

              <a
                href="/pdf/invitation.pdf"
                download="Rammalini_Housewarming_Invitation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-badge inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1F5A36] text-[#FFFDF9] font-medium text-xs shadow-md hover:bg-[#164228] transition-all hover:scale-105 active:scale-95 group"
                aria-label="அழைப்பிதழ் PDF பதிவிறக்கம்"
              >
                <FileDown className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-y-0.5 transition-transform" />
                <span>அழைப்பிதழ் PDF</span>
              </a>
            </motion.div>
          </OrnamentalBorder>
        </motion.div>
      </div>
    </section>
  );
};
