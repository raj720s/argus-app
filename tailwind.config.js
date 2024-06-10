/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e11d48",

          "secondary": "#f3f4f6",

          "accent": "#ef4444",

          "neutral": "#3b82f6",

          "base-100": "#ffffff",

          "info": "#2563eb",

          "success": "#15803d",

          "warning": "#f59e0b",

          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}