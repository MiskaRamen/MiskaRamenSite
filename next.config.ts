import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['cdn-media.choiceqr.com'],
        qualities: [30, 60, 70, 75, 100],
    },
};

export default nextConfig;
