/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: "#333",
        white: "#fff",
        gray: "#1a1a1a",
        blueviolet: "#9747ff",
        dimgray: "#666",
        deeppink: "#ff0099",
        black: "#000",
        "dark-selected": "#fff",
        darkslategray: "#333",
        "dark-secondary": "#ccc",
        greenyellow: "rgba(173, 255, 0, 0.5)",
      },
      spacing: {},
      fontFamily: {
        "suit-variable": "'SUIT Variable'",
        default: "Inter",
      },
      borderRadius: {
        "91xl": "110px",
        "131xl": "150px",
        "11xl": "30px",
        "35xl-5": "54.5px",
        "13xl": "32px",
      },
    },
    fontSize: {
      xs: "12px",
      xl: "20px",
      "5xl": "24px",
      "6xl": "25px",
      "21xl": "40px",
      "31xl": "50px",
      "61xl": "80px",
      "41xl": "60px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
