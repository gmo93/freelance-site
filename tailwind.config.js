/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        dots: 'url("/yellowDot.svg")',
      },
      colors: {
        "omo-first": "#F4978E",
        "omo-second": "#EF8080",
        "omo-third": "#F8AD9D",
        "omo-fourth": "#FBC4AB",
        "omo-fifth": "#FFDAB9",
      },
      animation: {
        rotate: 'rotate 5s ease-in-out infinite',
        loadIn: 'loadIn 1.5s ease-in',
      },
      keyframes: {
        rotate: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
        },
        loadIn: {
          '0%': {
            transform: 'translateY(30px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 1
          }
        }
      }
    },
    fontFamily: {
      'comp': ['Garamond']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
