import type { Metadata, Viewport } from "next";
import { Noto_Serif_Tamil, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";

const notoSerifTamil = Noto_Serif_Tamil({
  subsets: ["tamil", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-serif-tamil",
  display: "swap",
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-tamil",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#8B1738",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rammalini-housewarming.vercel.app"),
  title: "புதுமனை புகுவிழா | ராம்மாலினி வீடு - 15.11.2026",
  description: "ராம்மாலினி வீட்டு புதுமனை புகுவிழா அழைப்பிதழ் - 15 நவம்பர் 2026, ஞாயிற்றுக்கிழமை. தங்கள் நல்வரவை அன்புடன் எதிர்நோக்குகிறோம்.",
  keywords: [
    "புதுமனை புகுவிழா",
    "House Warming",
    "Griha Pravesh",
    "ராம்மாலினி வீடு",
    "Tamil House Warming Invitation",
    "அழைப்பிதழ்",
    "Chennai Griha Pravesh"
  ],
  authors: [{ name: "ராமச்சந்திரன் - மாலினி" }],
  openGraph: {
    title: "புதுமனை புகுவிழா அழைப்பிதழ் | ராம்மாலினி வீடு",
    description: "எங்கள் வீடு புதுமனை புகுவிழாவிற்கு குடும்பத்துடன் வருகை தந்து ஆசிகள் வழங்க அன்புடன் அழைக்கிறோம். நாள்: 15 நவம்பர் 2026 (ஞாயிறு).",
    url: "https://rammalini-housewarming.vercel.app",
    siteName: "ராம்மாலினி வீடு புதுமனை புகுவிழா",
    images: [
      {
        url: "/images/welcome_festive_hall.jpg",
        width: 1200,
        height: 675,
        alt: "ராம்மாலினி வீடு புதுமனை புகுவிழா அழைப்பிதழ்",
      },
    ],
    locale: "ta_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "புதுமனை புகுவிழா | ராம்மாலினி வீடு",
    description: "15 நவம்பர் 2026 அன்று நடைபெறும் புதுமனை புகுவிழா நல்வரவு அழைப்பிதழ்.",
    images: ["/images/welcome_festive_hall.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta" className={`${notoSerifTamil.variable} ${notoSansTamil.variable}`}>
      <body className="antialiased min-h-screen bg-[#FFFDF7] text-[#70112C] selection:bg-[#8B1738] selection:text-[#FFFDF7]">
        {children}
      </body>
    </html>
  );
}
