// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,ts}', 'src/**/*.{css,scss}'],
  theme: {
    extend: {
      colors: {
        accent: '#3545E9',
        warning: '#FEFD54',
        success: '#63C995',
        error: '#E23D69',
        primary: '#222328',
        secondary: '#969AB0',
        bright: '#FFFFFF',
        muted: '#7C9CBF',
        shade: '#DBE2EA',
      },
      fontFamily: {
        'ibm-plex-sans': ["IBMPlexSans"]
      },

    },
  },
  plugins: [],

};

// fontSize: {
//         x2: ['64px', '76px'],
//         x3: ['56px', '68px'],
//         x4: ['34px', '44px'],
//         x5: ['28px', '36px'],
//       }