const colors = require('tailwindcss/colors')

module.exports = {
    // important: true,
    // important: true,
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            '50%': '50%',
            16: '4rem',
        },
        backgroundPosition: {
            bottom: 'bottom',
            'bottom-4': 'center bottom 1rem',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
            'top-4': 'center top 1rem',
            '-top-7': 'center top -5rem',
            '-top-15': 'center top -15rem',
        },
        minWidth: {
            minMobileWidth: '375px',
        },
        maxWidth: {
            '1000px': '1000px',
        },
        fontFamily: {
            'russo-one': ['Russo One', 'sans-serif'],
            'saira-condensed': ['Saira Condensed', 'sans-serif'],
        },
        colors: {
            // ...colors,
            red: colors.red,
            yellow: colors.yellow,
            gray: colors.trueGray,
            white: '#ffffff',
            primary: '#1BC09B',
            // secondary: '',
            info: '#00B5EB',
            transparent: 'transparent',
            dark: '#171230',
            darker: '#090416',
            green: {
                0: '#15a9be',
                1: '#243c49',
                2: '#2a4655',
                3: '#337184',
            },
            aqua: {
                1: '#7CC4D1',
            },
            blue: {
                1: '#334C8C',
                2: '#81A4D5',
                3: '#171230',
                4: '#688CA5',
                5: '#03152b',
                6: '#041B37',
            },
            black: {
                1: '#1d1d1b',
            },
        },
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '2-75rem': '2.75rem',
            '2rem': '2rem',
            '89px': '89px',
            '53px': '53px',
            '23px': '23px',
            '40px': '40px',
            '27px': '27px',
            '34px': '34px',
        },
        extend: {
            backgroundImage: {
                render:
                    "url('/src/assets/images/backgrounds/render-fondo.jpg')",
                'render-mobil':
                    "url('/src/assets/images/backgrounds/render-fondo-mobil.jpg')",
                earth:
                    "url('/src/assets/images/backgrounds/bakgroundearth.png')",
            },
            margin: {
                84: '21rem',
                88: '22rem',
                92: '23rem',
                '-64px': '-64px',
                '-1px': '-1px',
            },
            padding: {
                '64px': '64px',
                '10px': '10px',
            },
            width: {
                '100px': '100px',
                '125px': '125px',
                '150px': '150px',
                '300px': '300px',
                '750px': '750px',
                '900px': '900px',
                '1000px': '1000px',
                '1025px': '1025px',
                '1100px': '1100px',
            },
        },
        backgroundColor: (theme) => ({
            ...theme('colors'),
        }),
        textColor: (theme) => theme('colors'),
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
