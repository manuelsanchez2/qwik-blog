/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blogGrayPrimary: '#e5e7eb',
        blogGrayDark: '#d1d5db',
        blogTurquoisePrimary: '#ebfaff',
        blogTurquoiseDark: '#61dafb',
        blogOrangePrimary: '#f3cab9',
        blogOrangeDark: '#e34f26',
        blogBluePrimary: '#e5eefa',
        blogBlueDark: '#2f73bf',
        blogYellowPrimary: '#fffad7',
        blogYellowDark: '#ffcc18',
        blogPurplePrimary: '#ebe2fb',
        blogPurpleDark: '#ac7ef4',
      },

      screens: {
        xs: '390px',
        sm: '768px',
        md: '1024px',
        lg: '1280px',
        xl: '1440px',
      },
      spacing: {
        tiny: '720px',
        small: '1024px',
        content: '1140px',
        medium: '1260px',
        large: '1600px',
      },
    },
  },
  plugins: [],
}
