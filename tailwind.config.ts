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
            spacing: {
                8: '30px',
            },
        },
    },
    plugins: [],
};
export default config;
