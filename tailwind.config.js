/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F7CAC",
        secondary: "#617073",
      },
      backgroundImage: {
        auth: "url('/src/assets/auth.jpg')",
      },
    },
  },
  plugins: [],
};
