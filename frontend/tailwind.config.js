const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    colors: {
      "picton-blue": {
        DEFAULT: "#45B1E8",
        50: "#FFFFFF",
        100: "#FBFDFE",
        200: "#CDEAF9",
        300: "#A0D7F3",
        400: "#72C4EE",
        500: "#45B1E8",
        600: "#1C9DDE",
        700: "#167DB1",
        800: "#105D84",
        900: "#0B3D56",
      },
      "deep-cove": {
        DEFAULT: "#07193A",
        50: "#3F7AE8",
        100: "#286BE5",
        200: "#1754C3",
        300: "#124095",
        400: "#0C2D68",
        500: "#07193A",
        600: "#02050C",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
      transparent: "transparent",
      current: "currentColor",
      viber: "#7360f2",
      facebook: "#2d88ff",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      red: colors.red,
    },
    extend: {
      lineHeight: {
        0: "0",
      },
      boxShadow: {
        fancy: "10px 10px 50px 3px rgba(39, 92, 141, 0.1)",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 450ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
