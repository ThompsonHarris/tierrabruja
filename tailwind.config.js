module.exports = {
    purge: {
      enabled: false,
      content: ['./src/**/*.jsx',]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '1/2x': '50vh',
      '3/4': '75%',
      '3/4x': '75vh',
      '5/6': '83.333333%',
      '5/6x': '83.333333vh',
      'full': '100%',
      }
    },
    variants: {},
    plugins: [],
  }