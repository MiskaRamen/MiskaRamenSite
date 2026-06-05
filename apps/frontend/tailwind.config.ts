// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                serif: ['var(--font-cormorant)', 'serif'],
                sans: ['var(--font-dm-sans)', 'sans-serif'],
                jp: ['var(--font-noto-jp)', 'sans-serif'],
            },
            // 🔥 Додаємо плавні анімації для Hero
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'bounce-slow': {
                    '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
                    '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
                },
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'bounce-slow': 'bounce-slow 3s infinite',
            },
        },
    },
    plugins: [],
};
export default config;
