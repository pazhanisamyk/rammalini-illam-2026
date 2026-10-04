"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, CalendarPlus, Check, Sparkles, FileDown } from "lucide-react";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { OrnamentalBorder } from "./decorations/OrnamentalBorder";

export const EventDetails: React.FC = () => {
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <OrnamentalBorder variant="gold" className="bg-[#FFFDF9]">
            {/* Section Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <LotusOrnament size={26} colorVariant="gold" />
                <span className="text-xs font-semibold tracking-widest text-[#B8863B] uppercase">
                  விழா நேரம் & இடம்
                </span>
                <LotusOrnament size={26} colorVariant="gold" />
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
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl bg-gradient-to-b from-[#FFF4DC] to-[#FFFDF9] border border-[#B8863B]/40 shadow-sm"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#8B1738]/10 border border-[#8B1738]/30 flex items-center justify-center text-[#8B1738] mb-2">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl bg-gradient-to-b from-[#FFF4DC] to-[#FFFDF9] border border-[#B8863B]/40 shadow-sm"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1F5A36]/10 border border-[#1F5A36]/30 flex items-center justify-center text-[#1F5A36] mb-2">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl bg-gradient-to-b from-[#FFF4DC] to-[#FFFDF9] border border-[#B8863B]/40 shadow-sm"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#B8863B]/10 border border-[#B8863B]/30 flex items-center justify-center text-[#B8863B] mb-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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

            {/* Action: Add to Calendar & Download Invitation */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-3 border-t border-[#B8863B]/30">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#8B1738] text-[#FFFDF9] font-medium text-xs shadow-md hover:bg-[#70112C] transition-all hover:scale-105"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Google Calendar</span>
              </a>

              <button
                onClick={downloadIcs}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FFFDF9] text-[#8B1738] border border-[#8B1738]/40 font-medium text-xs shadow-xs hover:bg-[#FFF4DC] transition-all hover:scale-105"
              >
                {calendarAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-700">பதிவிறக்கப்பட்டது!</span>
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
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1F5A36] text-[#FFFDF9] font-medium text-xs shadow-md hover:bg-[#164228] transition-all hover:scale-105"
                aria-label="அழைப்பிதழ் PDF பதிவிறக்கம்"
              >
                <FileDown className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>அழைப்பிதழ் PDF</span>
              </a>
            </div>
          </OrnamentalBorder>
        </motion.div>
      </div>
    </section>
  );
};
