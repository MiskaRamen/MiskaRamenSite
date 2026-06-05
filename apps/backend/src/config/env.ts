import { z } from 'zod';
import dotenv from 'dotenv';
dotenv.config();

const envSchema = z.object({
    PORT: z.string().default('4000'),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    // DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string().min(10),
    TELEGRAM_TOKEN: z.string().min(10),
    NEXTAUTH_SECRET: z.string().min(10),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
    console.error('❌ Error with your environment variables (.env):');
    console.error(_env.error.format());
    process.exit(1);
}

export const env = _env.data;