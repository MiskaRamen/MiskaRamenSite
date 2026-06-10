import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    // 🔒 Тільки для сервера — НІКОЛИ не потрапить у браузер
    server: {
        GOOGLE_CLIENT_ID: z.string().min(1),
        GOOGLE_CLIENT_SECRET: z.string().min(1),
        NEXTAUTH_SECRET: z.string().min(1),
    },

    // 🌐 Доступно і на сервері, і в браузері
    client: {
        NEXT_PUBLIC_API_URL: z.string().url(),
    },

    // Обов'язковий зв'язок для Next.js
    experimental__runtimeEnv: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
});