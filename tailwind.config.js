/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#050A30",

          secondary: "#000C66",

          accent: "#7EC8E3",

          neutral: "#0000FF",

          "base-100": "#FFFF",

          info: "#0000FF",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
