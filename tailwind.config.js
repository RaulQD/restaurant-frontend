/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          100: '#1F1F25',
          900: '#131517'
        }
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
      maxWidth: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    backgroundImage: {
      'header': "url('./src/assets/foodhero5.webp')",
      'signup': "url('/foodhero5.webp')",
      'footer': "url('/foodhero2.png')",
    },
    backgroundPosition: {
      'center': 'center',
      'top': 'top',
      'left-bottom': '-600px center',
      'left-top': '-400px center',
      'left': 'left',
      'right': 'right'

    },
    fontFamily: {
      'oleo': ['"Oleo Script Swash Caps", system-ui'],
      'montserrat': ['"Montserrat", system-ui'],
      'poppins': ['"Poppins", system-ui'],
      'outfit': ['"Outfit", system-ui'],
    },
  },
  plugins: [],
}