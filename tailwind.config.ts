import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        deepBlack: '#121212',      
        primary: '#121212',        // main color - wip
        darkGray: '#1E1E1E',      
        secondary: '#1E1E1E',     // secondary color
        softWhite: '#F5F5F5',     // main text
        electricBlue: '#0099FF',  // links & buttons
        silverGray: '#CCCCCC',    // text secondary dividers or border
      },
      fontFamily: {
        primary: ['Poppins', 'Montserrat', 'sans-serif'],
        secondary: ['Roboto', 'Open Sans', 'sans-serif'],
      },
      fontSize: {
        h1: '48px',
        h2: '36px',
        base: '16px',
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        regular: '400',
      },
    },
  },
  plugins: [],
} satisfies Config;
