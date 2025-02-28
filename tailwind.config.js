/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#010103",
          200: "#0E0E10",
          300: "#1C1C21",
          500: "#3A3A49",
          600: "#1A1A1A",
        },
        white: {
          DEFAULT: "#FFFFFF",
          800: "#E4E4E6",
          700: "#D6D9E9",
          600: "#AFB0B6",
          500: "#62646C",
        },
        neon: {
          blue: "#00e6ff", // Neon blue color
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
      boxShadow: {
        glow: "0 0 10px #00e6ff, 0 0 20px #00e6ff, 0 0 40px #00e6ff", // Glow effect
      },
      textShadow: {
        neon: "0 0 5px #00e6ff, 0 0 10px #00e6ff, 0 0 20px #00e6ff", // Neon text glow
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-neon-blue": {
          borderColor: "#00e6ff",
        },
        ".glow-effect": {
          boxShadow: "0 0 10px #00e6ff, 0 0 20px #00e6ff, 0 0 40px #00e6ff",
        },
        ".neon-text": {
          color: "#00e6ff",
          textShadow: "0 0 5px #00e6ff, 0 0 10px #00e6ff, 0 0 20px #00e6ff",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
