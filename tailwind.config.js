const colors = require('tailwindcss/colors')

module.exports = {
    // important: true,
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        colors: {
            // ...colors,
            red: colors.red,
            yellow: colors.yellow,
            gray: colors.trueGray,
            white: '#ffffff',
            primary: '#52dad8',
            // secondary: '',
            info: '#70e8ff',
            transparent: 'transparent',
            dark: '#171230',
            darker: '#090416',
            aqua: {
                1: '#7CC4D1',
            },
            blue: {
                1: '#334C8C',
                2: '#81A4D5',
            },
        },
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            tiny: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '2-75rem': '2.75rem',
            '2rem': '2rem',
            // 'counter': '10rem',
        },
        extend: {
            backgroundImage: {
                render: "url('/src/assets/images/backgrounds/render-fondo.jpg')",
                earth: "url('/src/assets/images/backgrounds/fondo-tierra.jpg')",
            },
            margin: {
                84: '21rem',
                88: '22rem',
                92: '23rem',
                '-64px': '-64px',
            },
            padding: {
                '64px': '64px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
