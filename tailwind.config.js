/** @type {import('tailwindcss').Config} */
export default {
  important: ".code-preview--tailwind > .code-preview__preview",
  content: [
    "./docs/**/*.{njk,md}",
    "./docs/**/*.svg"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

