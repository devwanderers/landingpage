const colors = require('tailwindcss/colors')

module.exports = {
    // important: true,
    // important: true,
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
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
            // 'counter': '10rem',
        },
        extend: {
            backgroundImage: {
                render: "url('/src/assets/images/backgrounds/render-fondo.jpg')",
                earth: "url('/src/assets/images/backgrounds/bakgroundearth.png')",
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
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
