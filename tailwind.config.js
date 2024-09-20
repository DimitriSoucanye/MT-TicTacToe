module.exports = {
  content: ['./SplashScreen.{js,jsx,ts,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lucioleBold: ['Luciole-Bold'],
        lucioleRegular: ['Luciole-Regular'],
      },
      fontSize: {
        title: [
          '48px',
          {
            lineHeight: '57.6px',
          },
        ],
        body: [
          '16px',
          {
            lineHeight: '19.2px',
          },
        ],
      },
      colors: {
        red: '#f01349',
        lightBlue: '#00a1e5',
        blue: '#0060a4',
        orange: '#ff9e00',
        yellow: '#ffde03',
        green: '#2db873',
        purple: '#6372c6',
        pink: '#e1347e',
        grey: '#e5e5e5',
      },
    },
  },
  plugins: [],
};
