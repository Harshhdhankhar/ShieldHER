import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAF7F2",
          100: "#F7F2EA",
          200: "#EFE6DA",
          300: "#E2D4C3",
          card: "#FFFDF9",
        },
        plum: {
          50: "#F9F2F5",
          100: "#F4E3E7",
          200: "#E7C5CD",
          300: "#D39DB0",
          600: "#752A4A",
          800: "#4A1B31",
          900: "#3B1C2A",
          950: "#240E19",
        },
        blush: {
          50: "#FAF0F2",
          100: "#F4E3E7",
          200: "#EBD7DD",
          300: "#DCB8C2",
        },
        lavender: {
          50: "#F6F4FA",
          100: "#EDE8F5",
          200: "#E4DEF2",
          300: "#CFC4E6",
        },
        charcoal: {
          50: "#F6F6F6",
          100: "#E7E7E7",
          800: "#2B2527",
          900: "#1C1917",
          950: "#121011",
        },
        sage: {
          50: "#F2F7F4",
          100: "#E2EFE7",
          500: "#4E7B62",
          700: "#2E5A44",
          800: "#1F3F2F",
        },
        emergency: {
          50: "#FFF5F5",
          100: "#FFECEB",
          500: "#E0484A",
          600: "#D9383A",
          700: "#B82325",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'editorial': '0 10px 30px -10px rgba(59, 28, 42, 0.08)',
        'sticker': '2px 4px 12px rgba(28, 25, 23, 0.08)',
        'soft-glow': '0 0 25px rgba(228, 222, 242, 0.6)',
      },
    },
  },
  plugins: [],
};

export default config;
