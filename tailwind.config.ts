import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        maroon: {
          50: "#fdf2f4",
          100: "#fbe8eb",
          200: "#f7d3d9",
          300: "#f0b0bc",
          400: "#e48094",
          500: "#d3516f",
          600: "#b93353",
          700: "#a51e4b",
          800: "#8b1738",
          900: "#70112c",
          950: "#450516",
        },
        gold: {
          50: "#fdfbf5",
          100: "#f9f4e4",
          200: "#f2e7c3",
          300: "#e9d499",
          400: "#deb96a",
          500: "#d4af37",
          600: "#b8863b",
          700: "#996515",
          800: "#7d4f13",
          900: "#673f13",
          950: "#3d2206",
        },
        tamilGreen: {
          50: "#f2f8f4",
          100: "#e2f0e6",
          200: "#c7e2d0",
          300: "#9dcdb0",
          400: "#6db18a",
          500: "#48956b",
          600: "#337953",
          700: "#1f5a36",
          800: "#19482d",
          900: "#143c26",
          950: "#0b2216",
        },
        templeWood: {
          50: "#fbf6f3",
          100: "#f5ece4",
          200: "#edd8c9",
          300: "#dfbda5",
          400: "#ce9a7c",
          500: "#bf7b5a",
          600: "#a96144",
          700: "#894a34",
          800: "#6b351c",
          900: "#4f2716",
          950: "#2d130a",
        },
        ivory: {
          50: "#ffffff",
          100: "#fffdf9",
          200: "#fff9ee",
          300: "#fff4dc",
          400: "#fcebc2",
          500: "#f7dba0",
        },
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-tamil)", "serif"],
        sans: ["var(--font-noto-sans-tamil)", "sans-serif"],
        display: ["var(--font-kavivanar)", "var(--font-noto-serif-tamil)", "serif"],
      },
      boxShadow: {
        'diya-glow': '0 0 25px 5px rgba(212, 175, 55, 0.45), 0 0 50px 15px rgba(184, 134, 59, 0.25)',
        'maroon-glow': '0 0 20px 2px rgba(139, 23, 56, 0.25)',
        'gold-card': '0 10px 30px -5px rgba(184, 134, 59, 0.15), 0 0 0 1px rgba(184, 134, 59, 0.25)',
        'invitation': '0 20px 50px -10px rgba(107, 53, 28, 0.15), 0 0 0 1px rgba(184, 134, 59, 0.3)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'diya-flicker': 'flicker 3s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
          '75%': { opacity: '0.85', transform: 'scale(0.97)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
