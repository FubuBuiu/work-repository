import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            keyframes: {
                slideIn: {
                    '0%': { opacity: '0', transform: 'translateX(100%)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(120%)' },
                    '100%': { opacity: '1', transform: 'translateY(0%)' }
                },
                fadeOutRight: {
                    '0%': { opacity: '1', transform: 'translateX(0)' },
                    '100%': { opacity: '0', transform: 'translateX(100%)' }
                },
                fadeInRight: {
                    '0%': { opacity: '0', transform: 'translateX(100%)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                }
            },
            animation: {
                slideIn: 'slideIn .25s ease-in-out forwards var(--delay, 0)',
                slideDown: 'slideDown 0.5s ease-out',
                fadeRightOut: 'fadeOutRight 0.5s ease-out',
                fadeRightIn: 'fadeInRight 0.5s ease-out'
            }
        }
    },
    darkMode: ['class'],
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    ...require('./themes/index')['light'],
                    '.field-disabled': {
                        'background-color': '#CCCCCC !important',
                        'border-color': '#CCCCCC !important'
                    },
                    '.field-title-disabled': {
                        color: '#888'
                    },
                    '.placeholder-disabled::placeholder': {
                        color: '#888'
                    },
                    '.background-toggle-disabled': {
                        backgroundColor: '#CCCCCC'
                    },
                    '.dot-toggle-disabled': {
                        backgroundColor: '#888'
                    }
                },
                dark: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    ...require('./themes/index')['dark'],
                    '.field-disabled': {
                        'background-color': '#2a2b29 !important',
                        borderColor: '#2a2b29 !important'
                    },
                    '.field-title-disabled': {
                        color: '#888'
                    },
                    '.placeholder-disabled::placeholder': {
                        color: '#888'
                    },
                    '.background-toggle-disabled': {
                        backgroundColor: '#2a2b29'
                    },
                    '.dot-toggle-disabled': {
                        backgroundColor: '#4f514d'
                    }
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
export default config;
