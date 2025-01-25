/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
        colors: {
            content: {
                primary: '#FFFFFF',
                secondary: '#C7C9CC',
                tertiary: '#D9D9D9',
                brand: '#C58DE7',
                inverse: '#030203'
            },

            background: {
                primary: '#020202',
                secondary: '#111012',
                tertiary: '#24222E',
                brand: '#C58DE7',
                gray: '#3D3D3D'
            },

            accent: {
                pink: '#D586E0',
                blue: '#91A1FA',
                green: '#77C0A',
                lime: '#D1DC97',
                red: '#E9A9B3'
            }
        },

        fontFamily: {
            sora: ["Sora", "serif"],
            robotoMono: ["Roboto Mono", "serif"],
            robotoFlex: ["Roboto Flex", "serif"]
        }
    }
},

plugins: [
function ({ addComponents, theme }) {
    addComponents({
        '.displayL': {
            fontFamily: theme('fontFamily.sora'),
            fontSize: '4.5rem',
            fontWeight: '800',
            lineHeight: '130%'
        },

        '.displayM': {
            fontFamily: theme('fontFamily.sora'),
            fontSize: '2.5rem',
            fontWeight: '800',
            lineHeight: '130%'
        },

        '.displayS': {
            fontFamily: theme('fontFamily.sora'),
            fontSize: '2rem',
            fontWeight: '700',
            lineHeight: '130%'
        },

        '.overline': {
            fontFamily: theme('fontFamily.robotoMono'),
            fontSize: '1rem',
            fontWeight: '700',
            lineHeight: '150%'
        },

        '.pL': {
            fontFamily: theme('fontFamily.robotoFlex'),
            fontSize: '1rem',
            fontWeight: '500',
            lineHeight: '150%'
        },

        '.pM': {
            fontFamily: theme('fontFamily.robotoFlex'),
            fontSize: '0.875rem',
            fontWeight: '500',
            lineHeight: '150%'
        },

        '.pS': {
            fontFamily: theme('fontFamily.robotoFlex'),
            fontSize: '0.75rem',
            fontWeight: '500',
            lineHeight: '150%'
        },

        '.lM': {
            fontFamily: theme('fontFamily.robotoFlex'),
            fontSize: '1.25rem',
            fontWeight: '700',
            lineHeight: '150%'
        },

        '.lS': {
            fontFamily: theme('fontFamily.robotoFlex'),
            fontSize: '1rem',
            fontWeight: '700',
            lineHeight: '150%'
        }
    })
}
]
}

