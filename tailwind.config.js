/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#fafbfc",
        "neutral-100": "#f8f9fb",
        "primary-200": "#b1ccfb",
        "gray-600": "#2c3444",
        "gray-300": "#2e3545",
        "gray-25": "#919ba7",
        "gray-950": "#151b28",
        "neutral-800": "#a5acba",
        "neutral-200": "#f9f9f9",
        "neutral-700": "#dae0e6",
        "gray-700": "#272d37",
        "gray-50": "#5f6d7e",
        "gray-500": "#737885",
        "primary-900": "#2b63d9",
        "primary-400": "#648ef7",
        "primary-600": "#437ef7",
        "base-white": "#fff",
      },
      fontFamily: {
        "headline-m-desktop-semibold": "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        "31xl": "50px",
        "3xs": "10px",
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "13xl": "32px",
      mini: "15px",
      "3xl": "22px",
      "9xl": "28px",
      lg: "18px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
