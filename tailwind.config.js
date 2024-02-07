/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}", "./**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
