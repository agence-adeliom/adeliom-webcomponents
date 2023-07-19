/** @type {import('tailwindcss').Config} */

import awcPreset from './src/tailwind/preset.js';

export default {
  presets: [awcPreset],
  important: '.code-preview--tailwind > .code-preview__preview',
  content: ['./docs/**/*.{njk,md}', './docs/**/*.svg'],
  theme: {
    extend: {}
  },
  plugins: []
};
