/** @type { import('tailwindcss').Config } */
const tailwindcssConfig = {
  content: ['./app/**/*.{js,jsx,ts,tsx,mdx}'],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  theme: {
    extend: {},
  },
};

module.exports = tailwindcssConfig;
