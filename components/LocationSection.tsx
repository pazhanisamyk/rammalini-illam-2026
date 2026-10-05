"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink, Copy, Check } from "lucide-react";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { KuthuVilakkuIcon } from "./decorations/KuthuVilakkuIcon";
import { OrnamentalBorder } from "./decorations/OrnamentalBorder";

interface LocationSectionProps { }

export const LocationSection: React.FC<LocationSectionProps> = () => {
  const [copied, setCopied] = React.useState(false);

  const fullAddress =
    "ராம்மாலினி வீடு, Plot No. 6B, SRS அவென்யூ, இரத்தினமங்கலம், சென்னை - 600127";

  // Google Maps Search Query URL
  const googleMapsUrl = `https://www.google.com/maps/place/SRS+avenue/@12.8486657,80.1265844,14z/data=!4m10!1m2!2m1!1sRathinamangalam,+SRS+Avenue,+Chennai+600127!3m6!1s0x3a5259330166b8b9:0xf0145ede8ab5f8eb!8m2!3d12.8486591!4d80.1503727!15sCitSYXRoaW5hbWFuZ2FsYW0sIFNSUyBBdmVudWUsIENoZW5uYWkgNjAwMTI34AEA!16s%2Fg%2F11ptv9q1wm?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D`;

  const copyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="location"
      className="relative py-12 md:py-16 px-4 bg-[#FFF4DC] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.35 } }}
        >
          <OrnamentalBorder variant="maroon" className="bg-[#FFFDF9]">
            {/* Section Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <LotusOrnament size={28} colorVariant="maroon" />
                <span className="text-xs font-semibold tracking-widest text-[#B8863B] uppercase">
                  வழிகாட்டுதல்
                </span>
                <LotusOrnament size={28} colorVariant="maroon" />
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#8B1738] font-serif">
                வருகை தரும் இடம்
              </h2>
              <p className="text-xs text-[#7D4F13] font-serif mt-1">
                LOCATION & DIRECTIONS
              </p>

              <KolamPattern variant="divider" size={28} className="my-2.5" />
            </div>

            {/* Address & Map Container Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Side: Address Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-6 space-y-4 text-left"
              >
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#FFF4DC]/90 to-[#FFFDF9] border border-[#B8863B]/40 shadow-xs hover:shadow-gold-card transition-shadow relative">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#8B1738] text-[#FFFDF9] flex items-center justify-center flex-shrink-0 shadow-sm animate-pulse-subtle">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-base sm:text-lg font-bold text-[#8B1738] font-serif">
                        ராம்மாலினி வீடு
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#1F5A36] font-serif">
                        Plot No. 6B, SRS அவென்யூ
                      </p>
                      <p className="text-xs sm:text-sm text-[#6B351C] font-serif">
                        இரத்தினமங்கலம்
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-[#8B1738]">
                        சென்னை - 600 127
                      </p>
                    </div>
                  </div>

                  {/* Copy Address Button */}
                  <div className="mt-3 pt-2.5 border-t border-[#B8863B]/30 flex justify-end">
                    <button
                      onClick={copyAddress}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B1738] hover:text-[#70112C] transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600 animate-bounce" />
                          <span className="text-green-600 font-bold">முகவரி நகலெடுக்கப்பட்டது!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>முகவரியை நகலெடு (Copy)</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Landmarks Info */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FFF9EE] border border-[#B8863B]/30 text-xs text-[#6B351C] font-serif leading-relaxed">
                  <p className="font-semibold text-[#8B1738] mb-0.5 flex items-center gap-1.5">
                    <span>📌</span> முக்கிய அடையாளங்கள் (Landmarks):
                  </p>
                  <p>
                    இரத்தினமங்கலம், SRS அவென்யூ &bull; பிரதான சாலை அருகில்.
                  </p>
                </div>

                {/* Primary CTA Button */}
                <div className="pt-1">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer-badge w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8B1738] to-[#A51E4B] text-[#FFFDF9] font-bold text-[8px] sm:text-[10px] md:text-[12px] shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group"
                  >
                    <Navigation className="w-4 h-4 text-[#D4AF37] group-hover:rotate-45 transition-transform duration-300" />
                    <span>வழிகாட்டி பெற (Get Directions)</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                </div>
              </motion.div>

              {/* Right Side: Map Visual Simulation Frame */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="lg:col-span-6"
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#B8863B]/50 shadow-md hover:shadow-gold-card-hover bg-[#E8ECE9] aspect-[4/3] flex flex-col items-center justify-center text-center p-4 group transition-all duration-500">
                  {/* Styled Map Graphic Background */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1F5A36_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-20" />

                  {/* Central Pin Motif with Radar Waves */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative flex items-center justify-center mb-2">
                      <span className="absolute w-12 h-12 rounded-full bg-[#8B1738]/25 animate-ping" />
                      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8B1738] text-[#FFFDF9] flex items-center justify-center shadow-diya-glow">
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-[#8B1738] font-serif">
                      ராம்மாலினி வீடு
                    </h4>
                    <p className="text-xs text-[#1F5A36] font-medium font-serif mt-0.5">
                      Plot No. 6B, SRS அவென்யூ
                    </p>
                    <p className="text-[11px] text-[#6B351C] mt-0.5">
                      இரத்தினமங்கலம், சென்னை - 127
                    </p>

                    {/* Direct Map Launch Link */}
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 px-4 py-1.5 rounded-full bg-[#FFFDF9] border border-[#8B1738]/35 text-xs font-bold text-[#8B1738] shadow-xs hover:bg-[#8B1738] hover:text-[#FFFDF9] hover:shadow-md transition-all hover:scale-105"
                    >
                      Google Maps-ல் பார்க்க ↗
                    </a>
                  </div>

                  {/* Corner Lamp Icon */}
                  <div className="absolute bottom-2 right-2 text-[#B8863B]">
                    <KuthuVilakkuIcon size={20} glow={true} />
                  </div>
                </div>
              </motion.div>
            </div>
          </OrnamentalBorder>
        </motion.div>
      </div>
    </section>
  );
};
