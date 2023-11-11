/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      heading: ["20px", "24.38px"],
    },
    extend: {
      colors: {
        primary: "#5056ED",
        secondary: "#F2F6F8",
        tertiary: "#ED5050",
        "white-900": "rgba(255, 255, 255, 0.90)",
        "white-800": "rgba(255, 255, 255, 0.80)",
        "white-700": "rgba(255, 255, 255, 0.70)",
        "white-600": "rgba(255, 255, 255, 0.60)",
        "white-500": "rgba(255, 255, 255, 0.50)",
        "white-400": "rgba(255, 255, 255, 0.40)",
        "white-300": "rgba(255, 255, 255, 0.30)",
        "white-200": "rgba(255, 255, 255, 0.20)",
        "white-100": "rgba(255, 255, 255, 0.10)",
      },
      dropShadow: {
        "card": "5px 5px 8px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
