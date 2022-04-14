module.exports = {
  mode: 'jit',
  content: ['./dist/**/*.{html,js}',
            './index.html' ,                
],
  theme: {
    container: {
      center: 'true',
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#22c55e',
        stone: '#292524',
        white: '#fff',
        blue: '#3b82f6',
        emerald: '#10b981',
        sky: '#0ea5e9',
        secondary: '#64748b',
        dark: '#000',
      },
      screen: {
         'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
