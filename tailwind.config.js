/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  future: {
    removeDeprecatedGapUtilities: true
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      ringColor: ['hover'],
      opacity: ['disabled'],
      zIndex: ['hover']
    }
  },
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      primary: '#d9d9d9',
      secondary: '#f15927',
      danger: '#e3342f'
    }),
    extend : {
      colors: {
        'seo-primary': '#f15927',
        'seo-contrast': '#9072f1',
        'seo-highlight': '#FDF6F1',
        'seo-primary-blue': '#27bff1',
      },
      backgroundColor: ['group-hover'],
      keyframes: {
        bounceLeft: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      }
    }
  },
  plugins: []
}
