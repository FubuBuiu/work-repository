import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            keyframes: {
                slideIn: {
                    '0%': { opacity: '0', transform: 'translateX(100%)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                }
            },
            animation: {
                slideIn: 'slideIn .25s ease-in-out forwards var(--delay, 0)'
            }
        }
    },
    darkMode: ['class'],
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    ...require('./themes/index')['light']
                },
                dark: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    ...require('./themes/index')['dark']
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
export default config;
