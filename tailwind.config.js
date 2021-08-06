const { callWithErrorHandling } = require("vue");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        'screen-menu': 'calc(100vh - 3.5rem)',
        modal: 'calc(100vh - 160px)'
      },
      maxHeight: {
        'full-18': 'calc(100% + 18px)',
        modal: 'calc(100% + 18px)'
      }, backgroundColor: theme => ({
        ...theme('colors'),
        'backgroundMain': 'rgb(214, 237, 248)',
        'backgroundMainSearch': 'rgb(50, 165, 220)',
        'searchResultTiCtle': 'rgb(101, 187, 229)',
        'personInfo': 'rgb(204, 204, 204)',
        'personDataInfo': 'rgb(230, 230, 230)',
        'searchBunnon': 'rgb(240, 150, 0)',
        'cardTitle': 'rgb(101, 187, 229)',
        'cardTitlePmad': 'rgb(153, 153, 153)',
        'cardGroup1': 'rgb(105, 125, 200)',
        'cardGroup2': 'rgb(140, 200, 90)',
        'cardGroup3': 'rgb(250, 130, 160)',
        'cardTypePmad1': 'rgb(236, 198, 206)',
        'cardTypePmad2': 'rgb(252, 207, 161)',
        'cardTypePmad3': 'rgb(187, 232, 221)',
        'cardLooked': 'rgb(253, 245, 230)',
        'cardBrowseRequired': 'rgb(212, 20, 90)',
        'cardViewCount': 'rgb(204, 233, 246)',

      }), textColor: theme => theme('colors'),
      textColor: {
        'searchDropdown': 'rgb(58, 175, 226)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
