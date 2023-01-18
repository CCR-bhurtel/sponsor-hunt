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
                Smoke: '#737373',
            },
        },
    },
    plugins: [],
};
