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
            full: '100%',
            minMobileWidth: '375px',
        },
        maxWidth: {
            '1000px': '1000px',
            '1800px': '1800px',
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
                7: '#80c4e4',
                8: '#75b2c4',
                9: '#1e3755',
                10: '#728294',
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
            '9xl': '7rem',
            '10xl': '8rem',
            '2-75rem': '2.75rem',
            '2rem': '2rem',
            '89px': '89px',
            '53px': '53px',
            '23px': '23px',
            '40px': '40px',
            '27px': '27px',
            '34px': '34px',
        },
        letterSpacing: {
            widest: '0.2em',
        },
        extend: {
            backgroundImage: {
                render:
                    "url('/src/assets/images/backgrounds/render-fondo.jpg')",
                'render-mobil':
                    "url('/src/assets/images/backgrounds/render-fondo-mobil.jpg')",
                earth:
                    "url('/src/assets/images/backgrounds/bakgroundearth3.png')",
                floor:
                    "url('/src/assets/images/backgrounds/fondo-transparencia.png')",
                whitelistSlider:
                    "url('/src/assets/images/backgrounds/whitelist-slider-desktop.jpeg')",
                whiteListBottom:
                    "url('/src/assets/images/backgrounds/bg-whitelist-bottom.png')",
            },
            margin: {
                84: '21rem',
                88: '22rem',
                92: '23rem',
                '-64px': '-64px',
                '-1px': '-1px',
            },
            padding: {
                '10%': '10%',
                '25%': '25%',
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
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
