"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle2, Send, Sparkles, X } from "lucide-react";
import { LotusOrnament } from "./decorations/LotusOrnament";
import { KolamPattern } from "./decorations/KolamPattern";
import { OrnamentalBorder } from "./decorations/OrnamentalBorder";

export const RSVP: React.FC = () => {
  const [guestName, setGuestName] = useState("");
  const [customWish, setCustomWish] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [showWishesModal, setShowWishesModal] = useState(false);

  // Trigger Traditional Multi-stage Flower Confetti
  const triggerFlowerConfetti = () => {
    // Center burst
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.65 },
      colors: ["#D4AF37", "#8B1738", "#F59E0B", "#F472B6", "#1F5A36", "#FFFDF9"],
      shapes: ["circle"],
      scalar: 1.25,
    });

    // Left and right festive cannons
    setTimeout(() => {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.7 },
        colors: ["#D4AF37", "#8B1738", "#F59E0B", "#1F5A36"],
      });
      confetti({
        particleCount: 40,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.7 },
        colors: ["#D4AF37", "#8B1738", "#F59E0B", "#1F5A36"],
      });
    }, 250);
  };

  const handleSendWish = (e: React.FormEvent) => {
    e.preventDefault();
    triggerFlowerConfetti();

    const text = encodeURIComponent(
      `வணக்கம்! ராம்மாலினி வீடு புதுமனை புகுவிழாவிற்கு எங்களது நெஞ்சார்ந்த நல்வாழ்த்துகள்! 🏡🌸\n\nபெயர்: ${guestName}\nவாழ்த்துச் செய்தி: ${customWish}\n\nஇல்லறம் சிறந்து மங்களம் பெருகட்டும்! 🙏✨`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");

    setShowWishesModal(false);
    setSubmittedMessage("தங்களின் அன்பான நல்வாழ்த்துகளுக்கு மனமார்ந்த நன்றிகள்!");
  };

  const quickWishes = [
    "வீடு சிறக்க நல்வாழ்த்துகள்! 🏡✨",
    "மங்களமும் செல்வமும் பெருகட்டும்! 🌸🪔",
    "புதிய வீட்டில் அமைதியும் மகிழ்ச்சியும் நிலைக்கட்டும்! 🕊️🌼",
    "இறைவனின் திருவருள் எப்போதும் சூழ்க! 🙏✨",
  ];

  return (
    <section
      id="rsvp"
      className="relative py-12 md:py-16 px-4 bg-[#FFF4DC] overflow-hidden text-center"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.35 } }}
        >
          <OrnamentalBorder variant="maroon" className="bg-[#FFFDF9]">
            {/* Header */}
            <div className="flex flex-col items-center justify-center mb-4">
              <LotusOrnament size={32} colorVariant="maroon" />
              <p className="text-xs font-semibold tracking-widest text-[#B8863B] uppercase mt-1.5 font-serif">
                நல்வரவு பதிவு
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#8B1738] font-serif mt-1">
                உங்கள் வருகையை எதிர்நோக்குகிறோம்
              </h2>
              <p className="text-xs text-[#6B351C] font-serif mt-1">
                தாங்கள் வருகை தந்து எங்கள் வீட்டை சிறப்பிக்க வேண்டுகிறோம்
              </p>
            </div>

            <KolamPattern variant="divider" size={28} className="my-3" />

            {/* Response Banner if Confirmed */}
            <AnimatePresence>
              {submittedMessage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="my-3 p-3.5 rounded-2xl bg-[#E8F5E9] border border-[#2E7D32]/30 text-[#1B5E20] flex items-center justify-center gap-2 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 animate-bounce" />
                  <p className="text-xs sm:text-sm font-bold font-serif">
                    {submittedMessage}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Interactive RSVP Controls */}
            <div className="space-y-4 my-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {/* Send Wishes via WhatsApp Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowWishesModal(true)}
                  className="shimmer-badge w-full sm:w-auto min-w-[200px] px-7 py-3 rounded-full bg-gradient-to-r from-[#8B1738] to-[#A51E4B] text-[#FFFDF9] font-bold text-[10px] sm:text-[12px] md:text-[14px] shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
                  <span>வாழ்த்துக்கள் (Send Wishes)</span>
                </motion.button>
              </div>
            </div>

            {/* Footnote */}
            <div className="mt-4 pt-3 text-xs text-[#7D4F13] font-serif italic">
              ✦ உங்கள் ஆசிகளே எங்கள் புது வீட்டின் பேரொளி ✦
            </div>
          </OrnamentalBorder>
        </motion.div>
      </div>

      {/* Wishes Interactive Modal */}
      <AnimatePresence>
        {showWishesModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl p-5 sm:p-7 border-4 border-[#B8863B] shadow-2xl text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowWishesModal(false)}
                className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-[#FFF4DC] text-[#8B1738] hover:bg-[#8B1738] hover:text-[#FFFDF9] transition-colors cursor-pointer"
                aria-label="மூடுக"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-3">
                <LotusOrnament size={32} colorVariant="gold" />
                <h3 className="text-lg sm:text-xl font-bold text-[#8B1738] font-serif mt-1.5">
                  வாழ்த்துச் செய்தி அனுப்ப
                </h3>
                <p className="text-xs text-[#7D4F13] font-serif">
                  ராம்மாலினி வீடு - தங்கள் அன்பான வாழ்த்துக்கள்
                </p>
              </div>

              {/* Quick Preset Buttons */}
              <div className="mb-3.5">
                <label className="block text-xs font-semibold text-[#6B351C] mb-1.5 font-serif">
                  விரைவு வாழ்த்துக்களைத் தேர்ந்தெடுக்க:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {quickWishes.map((wish, idx) => (
                    <motion.button
                      key={idx}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setCustomWish(wish)}
                      className="p-2 sm:p-2.5 rounded-xl bg-[#FFF4DC]/80 border border-[#B8863B]/40 text-left text-xs text-[#8B1738] font-medium hover:bg-[#8B1738] hover:text-[#FFFDF9] hover:border-[#8B1738] transition-colors cursor-pointer"
                    >
                      {wish}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Custom Form */}
              <form onSubmit={handleSendWish} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-[#6B351C] mb-1 font-serif">
                    தங்கள் திருப்பெயர் (Your Name):
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="எ.கா: சுந்தரம் குடும்பத்தினர்"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FFFDF7] border border-[#B8863B]/50 text-[#70112C] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1738] transition-shadow"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6B351C] mb-1 font-serif">
                    வாழ்த்துச் செய்தி (Your Blessing):
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={customWish}
                    onChange={(e) => setCustomWish(e.target.value)}
                    placeholder="தங்கள் நல்வாழ்த்துகளை இங்கு எழுதவும்..."
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FFFDF7] border border-[#B8863B]/50 text-[#70112C] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1738] transition-shadow"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setShowWishesModal(false)}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-[#6B351C] hover:bg-[#FFF4DC] transition-colors cursor-pointer"
                  >
                    ரத்து செய்
                  </button>
                  <button
                    type="submit"
                    className="shimmer-badge inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#8B1738] text-[#FFFDF9] text-xs font-bold shadow-md hover:bg-[#70112C] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>வாழ்த்தை சமர்ப்பிக்க</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
