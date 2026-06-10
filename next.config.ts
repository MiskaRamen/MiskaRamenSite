import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://www.byblos.com/**')],
        formats: ['image/avif', 'image/webp'],
        qualities: [60, 70, 75, 100],
    },
};

export default nextConfig;
