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
        'ibm-plex-sans-regular': ["IBMPlexSans-Regular"],
        'ibm-plex-sans-semi-bold': ["IBMPlexSans-SemiBold"]
      },
      fontSize: {
        x1: '72px',
        x2: '64px',
        x3: '56px',
        x4: '34px',
        x5: '28px',
        x6: '24px',
        paragraphX1: '16px',
        paragraphX2: '14px',
        label: '12px'
      },
      lineHeight: {
        x1: '86px',
        x2: '76px',
        x3: '68px',
        x4: '44px',
        x5: '36px',
        x6: '28px',
        paragraphX1: '22px',
        paragraphX2: '20px',
        label: '18px'
      },
      width: {
        '30px': '30px',
      },
      height: {
        '30px': '30px',
      }
    },
  },
  plugins: [],

};

