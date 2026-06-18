import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, DM_Sans, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-cormorant',
    display: 'swap',
});

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-dm-sans',
    display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['500', '700'],
    variable: '--font-noto-jp',
    display: 'swap',
});

export const viewport: Viewport = {
    themeColor: '#0d0a07',
    width: 'device-width',
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://www.miskaramen.com'),
    title: {
        default: 'Miska Ramen | Authentic Tonkotsu in Prague',
        template: '%s | Miska Ramen',
    },
    description:
        'Authentic Tokyo-style ramen bar in Prague 2, Vinohrady. Taste the richest Tonkotsu and spicy Tan-Tan. Book your table today.',
    keywords: [
        'Ramen Prague',
        'Tonkotsu',
        'Miska Ramen',
        'Prague 2 restaurant',
        'Japanese food Prague',
        'Vinohrady dining',
    ],

    authors: [{ name: 'Max Poshyvak', url: 'https://github.com/MaxPoshyvak' }],
    creator: 'Max Poshyvak',

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.miskaramen.com',
        title: 'Miska Ramen | Authentic Tonkotsu in Prague',
        description: 'Authentic Tokyo-style ramen bar in Prague 2, Vinohrady. Book your table today.',
        siteName: 'Miska Ramen',
        images: [
            {
                url: '/vinohrady/vinohrady_indoor.jpg',
                width: 1200,
                height: 630,
                alt: 'Authentic Tonkotsu Ramen at Miska',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Miska Ramen | Authentic Tonkotsu in Prague',
        description: 'Authentic Tokyo-style ramen bar in Prague 2, Vinohrady.',
        images: ['/vinohrady/vinohrady_indoor.jpg'],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${cormorant.variable} ${dmSans.variable} ${notoSansJP.variable} h-full antialiased`}
            data-scroll-behavior="smooth">
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
