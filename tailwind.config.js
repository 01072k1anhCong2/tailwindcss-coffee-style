// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'xs':'480px'
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif']
      },
      colors: {
        'coffee':{
          50:'#E8D6D0',
          200:'#C89F94',
          400:'#A25F4B',
          600:'#744838'
        }
      },
      // ✅ Đặt trong extend.theme
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },'100%': { transform: 'translateY(0)' },
        },
        fadeIn:{
          from:{opacity:0},to:{opacity:1}
        }
      },
      animation: {
        slideDown: 'slideDown .5s ease-in-out',
        fadeIn:'fadeIn .5s ease-in-out',
      },
      backgroundImage:{
        'slider-bg':'url("./img/hadder.jpg")'
      }
    },
  },
  plugins: [],
  future: {
    useCssVariables: false,
  },
}
