import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                white: '#fefdfe',
                inactive: '#5A698F',
            },
            backgroundColor: {
                dark: '#10141f',
                navbar: '#161d2f',
            },
            backgroundImage: {
                dropdown: `url('/images/icon-angle-down.svg')`,
            },
            spacing: {
                8: '30px',
            },
            gridTemplateColumns: {
                fluid: 'repeat(auto-fit, minmax(16rem, 1fr))',
            },
        },
    },
    plugins: [],
};
export default config;
