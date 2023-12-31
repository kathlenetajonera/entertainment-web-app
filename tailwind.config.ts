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
                placeholder: `url('/images/placeholder.png')`,
            },
            spacing: {
                8: '1.875rem',
            },
            gridTemplateColumns: {
                fluid: 'repeat(auto-fill, minmax(16rem, 1fr))',
            },
        },
        screens: {
            '2xl': { max: '1535px' },
            xl: { max: '1279px' },
            lg: { max: '1023px' },
            md: { max: '767px' },
            sm: { max: '639px' },
        },
    },
    plugins: [],
};
export default config;
