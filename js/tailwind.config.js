/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './pages/**/*.{html,js}',
    './elements/**/*.{html,js}',
    './elements/snippets/**/*.{html,js}',
    './layouts/**/*.{html,js}',
    './js/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Open Sans"',],
      },
      spacing: {
        '80': '311px',
      },
      width: {
        '14': '0.875 em',
        '18': '32 em',
        '76': '312px',
        '160':'160px',
        '70': '70px',
        '80': '5 em',
        '500': '32.188 em',
        '85' : '5.313 em',
        '242': '15.125em', //alterado
        '289': '18.063 em',
        '630': '39.375 em',
        '197': '12.313 em',
        '468': '29.25 em',
        '64' : '64px',
        '521': '32.563 em',
        '413': '25.813 em',
        '738': '46.125 em',
        '305': '305px', //aleterado
      },
      minWidth: {
        '197/1': '12.313 em',
        '242': '242px',
        '521': '32.563 em',
        '360': '23.125 em',
        '328': '20.5 em',
        '330': '20.625 em',
        '70': '4.375 em',
        '120': '7.5 em',
        '733': '45.813 em',
        '305': '19.063 em',
        '85': '5.313 em',
        '20': '1.25 em',
      },
      maxWidth: {
        '197/1': '12.313 em',
        '120/1': '7.5 em',
        '630/1': '39.375 em',
        '190': '11.875 em',
        '305': '305px',
        '468': '29.25 em',
        '102': '6.375 em',
        '521': '32.563 em',
        '193': '12.063 em',
        '460': '28.75 em',
        '360': '23.125 em',
        '733': '45.813 em',
      },
      maxHeight: {
        '102': '6.375 em',
        '496': '31 em',
      },
      minHeight: {
        '102': '6.375em',
        '496': '31 em',
        '20': '1.25 em',
      },
      height: {
        '126': '431px',
        '105': '6.617 em',
        '132': '8.25 em',
        '100': '6.25 em',
        '800': '52.688 em',
        '30' : '1.883 em',
        '384' : '384px',
        '366': '366px',
        '360': '22.5 em',
        '64' : '64px',
        '70': '4.375 em',
        '800': '50 em',
        '428': '26.75 em',
      },
      boxShadow: {
        '3xl': '0 -8px 35px -8px rgba(0, 0, 0, 0.8)',
      },
      left: {
        '4x4': '80%',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
        widdest: '1.2em'
      },
      fontSize: {
       '40xl' : '2.5 em'
      }
    },
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'sd': '472px',
      // => @media (min-width: 1024px) { ... }

      'md': '744px',
      // => @media (min-width: 768px) { ... }

      'lg': '900px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1366px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
      '3xl': '1274px',
      'm11': '1182px',
      'm08': '1008px',
      'm29': '1129px',
      'm79': '979px',
      'm34': '934px',
    }
  },
}