module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#02B290',
          secondary: '#207398',
          accent: '#1B98F5',
          neutral: '#120E43',
          'base-100': '#ffffff',
          error: '#E21717',
          success: '#38CC77',
        },
      },
    ],
  },
}
