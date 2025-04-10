/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: ['lg:block'],
  theme: {
    extend: {
      fontFamily: {
        'departure': ['Departure Mono', 'monospace'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      colors: {
        'primary': '#3D4A3A',
        'secondary': '#D4A73A',
        'primary-light': '#E9EDE8',
        'primary-dark': '#2D362B',
        'text-dark': '#1C1C1C',
        'text-light': '#E5E5E5'
      },
      height: {
        '18': '4.5rem'
      }
    },
  },
  plugins: [],
} 