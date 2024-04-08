/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        secondary: "#424242",
        // tertiary: "#424242",
        accent: "#FF705C",
        bluegray: "#6C7E99",
        lightbluegray: "#7E92B2",
        light: "#C4C4C4",
        danger: "#FF705C",
        background: "#EEEEEE",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
