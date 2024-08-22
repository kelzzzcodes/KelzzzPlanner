/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
         boxShadow: {
        'custom-combined':
          '0px 16px 32px -4px rgba(145, 158, 171, 0.24), 0px 0px 4px 0px rgba(145, 158, 171, 0.24)',
      },
    },
  },
  plugins: [],
}
