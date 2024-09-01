/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {

    },
  },
  plugins: [require('daisyui'),],
}

