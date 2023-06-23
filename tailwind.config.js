/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [

    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {screens:{
      "3xl": "2000px",
    }},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

