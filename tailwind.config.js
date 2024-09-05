/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        primary: '#EFEFEF',
        primary2: '#DDDDDD',
        secondary: '#231F20',
        secondary2: '#231F20',
        accent: '#f51524',
        accentInverse: '#0aeadb',
        // light mode gradint
        lgrad1: '#E2E2E2',
        lgrad2: '#C9D6FF',
      },
      boxShadow: {
        'even-shadow': '0 0 8px rgba(0, 0, 0, 0.5)', // for even shadows on all sides of the box
      },
      borderRadius: {
        custom: '0.75rem', //  same 0.75 -> rounded-xl
      },

      screens: {
        // Custom screen size for `sm`
        sm: '540px', // sm changed from 640px to 540px
      },

      transitionProperty: {
        'max-height': 'max-height', // custom propery for transition animation
      },
    },
  },
  plugins: [],
}
