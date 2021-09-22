const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        colors: {
            // ...colors,
            yellow: colors.yellow,
            primary: {
                600: '#2b344b',
            },
            white: '#ffffff',
            gray: colors.trueGray,
            transparent: 'transparent',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
