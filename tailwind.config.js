/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#4F7CAC",
        primary: "#F7996E",
        secondary: "#617073",
      },
      backgroundImage: {
        auth: "url('/src/assets/auth.jpg')",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
