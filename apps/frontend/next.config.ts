import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://www.byblos.com/**')],
    },
};

export default nextConfig;
