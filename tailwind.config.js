/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        background: "rgba(var(--background))",
        secondary: "rgba(var(--secondary))",
      },
      fontFamily: {
        fira_sans: ["Fira Sans Extra Condensed", "sans-serif"],
      },
      backgroundImage: {
        sushi_xs: "url('/src/assets/sushi-bg_480x719.webp')",
        sushi_ss: "url('/src/assets/sushi-bg_620x929.webp')",
        sushi_sm: "url('/src/assets/sushi-bg_768x1151.webp')",
        sushi_md: "url('/src/assets/sushi-bg_1060x1588.webp')",
        sushi_lg: "url('/src/assets/sushi-bg_1200x1798.webp')",
        sushi_xl: "url('/src/assets/sushi-bg_1700x2547.webp')",
        sushi_xxl: "url('/src/assets/sushi-bg_2000x2997.webp')",
        sushi_xxxxl: "url('/src/assets/sushi-bg_2636x3950.webp')",
      },
      brightness: {
        40: ".40",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      xxl: "2000px",
      xxxl: "2400px",
      xxxxl: "3000px",
    },
  },
  plugins: [],
};
