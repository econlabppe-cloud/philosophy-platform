/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chronological: {
          primary: '#3b82f6',
          secondary: '#1d4ed8',
        },
        thematic: {
          primary: '#8b5cf6',
          secondary: '#6d28d9',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
