/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#fca311',
        navyBlue: '#14213d',
        gray: '#edf2f4',
        red: '#ef233c',
        lightBlack: '#1B2430',
        teal: '#4FBDBA',
      },
      width: {
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '60%': '60%',
        '80%': '80%',
        '100%': '100%',
        '120%': '120%',
        '140%': '140%',

        450: '450px',
      },
      height: {
        450: '450px',
        500: '500px',
      },
      margin: {
        '20%': '20%',
        '30%': '30%',
        '35%': '35%',
        '40%': '40%',
        '45%': '45%',
        '50%': '50%',
        '60%': '60%',
      },
      fontFamily: {
        barcode: ['"Libre Barcode 39 Text"', 'cursive'],
        code: ['"Source Code Pro"', 'monospace'],
        logo: ['"Michroma"', 'sans-serif'],
      },
      boxShadow: {
        border: '0 0px 10px 2px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
        'border-expand': '0 6px 20px 2px rgb(0 0 0 / 0.1)',
      },
      screens: {
        xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
        sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
        lg: { min: '1200px' }, // Desktop smallest.
        xl: { min: '1159px' }, // Desktop wide.
        xxl: { min: '1359px' }, // Desktop widescreen.
      },
    },
  },
  plugins: [],
}
