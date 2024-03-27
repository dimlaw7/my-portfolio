/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/hero-bg.png')",
        "hero-pattern-up": "url('/hero-bg-up.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "title-decor": "url('/title-decor.svg')",
        "web-dev": "url('/webdev.jpg')",
        "ui-design": "url('/ui-design.jpg')",
        "app-dev": "url('/ofb-ui.png')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
