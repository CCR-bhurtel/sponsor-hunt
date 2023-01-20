/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Inter: ['Inter', 'sans-serif'],
            },
            colors: {
                Orch: '#241918',
                Iron: '#E5E5E5',
                Cultured: '#F5F5F5',
                Smoke: '#737373',
                Cream: '#FEFEFF',
                Lotion: '#FAFAFA',
            },
            screens: {
                sm: '320px',
                usm: '425px',
                md: '768px',
                lg: '1024px',
            },
        },
    },
    plugins: [],
};
