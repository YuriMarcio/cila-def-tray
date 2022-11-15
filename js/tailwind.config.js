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
        '14': '0.875rem',
        '18': '32rem',
        '76': '312px',
        '160':'160px',
        '70': '70px',
        '80': '5rem',
        '500': '32.188rem',
        '85' : '5.313rem',
        '242': '15.125rem',
        '289': '18.063rem',
        '630': '39.375rem',
        '197': '12.313rem',
        '468': '29.25rem',
        '64' : '64px',
        '521': '32.563rem',
        '413': '25.813rem',
        '738': '46.125rem',
        '305': '19.063rem',
      },
      minWidth: {
        '197/1': '12.313rem',
        '242': '15.125rem',
        '521': '32.563rem',
        '360': '23.125rem',
        '328': '20.5rem',
        '330': '20.625rem',
        '70': '4.375rem',
        '120': '7.5rem',
        '733': '45.813rem',
        '305': '19.063rem',
        '85': '5.313rem',
        '20': '1.25rem',
      },
      maxWidth: {
        '197/1': '12.313rem',
        '120/1': '7.5rem',
        '630/1': '39.375rem',
        '190': '11.875rem',
        '305': '19.063rem',
        '468': '29.25rem',
        '102': '6.375rem',
        '521': '32.563rem',
        '193': '12.063rem',
        '460': '28.75rem',
        '360': '23.125rem',
        '733': '45.813rem',
      },
      maxHeight: {
        '102': '6.375rem',
        '496': '31rem',
      },
      minHeight: {
        '102': '6.375rem',
        '496': '31rem',
        '20': '1.25rem',
      },
      height: {
        '126': '431px',
        '105': '6.617rem',
        '132': '8.25rem',
        '100': '6.25rem',
        '800': '52.688rem',
        '30' : '1.883rem',
        '384' : '384px',
        '366': '366px',
        '360': '22.5rem',
        '64' : '64px',
        '70': '4.375rem',
        '800': '50rem',
        '428': '26.75rem',
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
       '40xl' : '2.5rem'
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