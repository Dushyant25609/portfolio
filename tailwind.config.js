/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    'index.html',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      dropShadow:{
        purple: "0 0px 15px rgba(145, 142, 244, 0.3)",
        hover: "0 0px 15px rgba(145, 142, 244, 0.5)"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        web: {
          background: "#0d1433",
          blur: "#0c132d",
          glow: "#918ef4",
          "light-text": "#6f9ceb",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        glow: {
          '0%': { filter: 'drop-shadow(-2px -1px 5px #9ec1ff)' },
          '12.5%': { filter: 'drop-shadow(0px -2px 5px #9ec1ff)' },
          '25%': { filter: 'drop-shadow(2px -1px 5px #9ec1ff)' },
          '37.5%': { filter: 'drop-shadow(3px 0px 5px #9ec1ff)' },
          '50%': { filter: 'drop-shadow(2px 1px 4px #9ec1ff)' },
          '62.5%': { filter: 'drop-shadow(0px 6px 5px #9ec1ff)' },
          '75%': { filter: 'drop-shadow(-5px 1px 5px #9ec1ff)' },
          '87.5%': { filter: 'drop-shadow(-8px 0px 5px #9ec1ff)' },
          '100%': { filter: 'drop-shadow(-2px -1px 5px #9ec1ff)' },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        meteor: "meteor 5s linear infinite",
        grid: "grid 15s linear infinite",
        glow: 'glow 2s linear infinite',
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",

      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}