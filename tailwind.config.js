/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    colors: {
      "cBorder-default": "#CBB6E5",
      "cBorder-active": "#761BE4",
      "cBorder-error": "#ED4545",
      "cFiled-focus": "#FAF9FA",
      "cFiled-error": "#FEECEC",
      "cCta-inactive": "#CBB6E5",
      "cCta-default": "#761BE4",
      "cCta-hover": "#6A19CD",
      "cText-primary": "#000853",
      "cText-secondary": "#FFFFFF",
      "cIcon-default": "#000853",
      "cIcon-hover": "#ED4545",
    },
    fontSize: {
      fsExtraBig: "24px",
      fsBig: "18px",
      fsMedium: "16px",
      fsSmall: "14px",
      fsExtraSmall: "12px",
    },
  },
  plugins: [],
};
