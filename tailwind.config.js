/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          400: "#E3472F",
          500: "#c73d28",
          600: "#a13323",
        },
        gray: {
          100: "#F0F0F0",
        },
      },
    },
  },
  plugins: [],
};
