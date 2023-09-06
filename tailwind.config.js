/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      locust: {
        50: "#f4f5f0",
        100: "#e6e9de",
        200: "#ced6c0",
        300: "#a3b18a",
        400: "#93a279",
        500: "#75875b",
        600: "#5b6a46",
        700: "#475239",
        800: "#3b4331",
        900: "#343b2c",
        950: "#1a1e15",
      },
      "vivid-tangerine": {
        50: "#fef2f2",
        100: "#ffe1e1",
        200: "#ffc8c8",
        300: "#ff8a8a",
        400: "#fd6c6c",
        500: "#f53e3e",
        600: "#e22020",
        700: "#be1717",
        800: "#9d1717",
        900: "#821a1a",
        950: "#470808",
      },
    },
  },
  plugins: [],
};
