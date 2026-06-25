'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { scrollToSection } from '@/src/utils/scroll';
import { usePathname } from 'next/navigation';
import { checkIsLocationOpen } from '@/src/data/locations';
import { useEffect, useState } from 'react';

interface HeroProps {
    address: string;
    heroPhoto: string;
}

export function Hero({ address, heroPhoto }: HeroProps) {
    const pathname = usePathname();

    const isMalaStrana = pathname.includes('/mala-strana');
    const isVinohrady = pathname.includes('/vinohrady');

    const basePath = isMalaStrana ? '/mala-strana' : isVinohrady ? '/vinohrady' : '';
    const bookPath = `${basePath}/book`;

    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const locationId = isMalaStrana ? 'mala-strana' : isVinohrady ? 'vinohrady' : '';

        const updateStatus = () => {
            setIsMounted(true);

            if (locationId) {
                setIsOpen(checkIsLocationOpen(locationId));
            }
        };

        updateStatus();

        const interval = setInterval(updateStatus, 60000);
        return () => clearInterval(interval);
    }, [isMalaStrana, isVinohrady]);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[#0d0a07]">
                <Image
                    src={heroPhoto}
                    alt="Authentic Tonkotsu Ramen"
                    quality={60}
                    fill
                    priority
                    className="object-cover object-center opacity-80"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0d0a07] via-[#0d0a07]/50 to-[#0d0a07]/80" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mt-16">
                {/* Японський акцент */}
                <span className="css-fade-in-up font-jp text-[#E8632A] tracking-[0.3em] text-sm md:text-base font-bold mb-4 block">
                    ラーメン
                </span>

                {/* Головний заголовок */}
                <h1
                    className="css-fade-in-up font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5EDD8] leading-tight md:leading-[1.1] mb-6"
                    style={{ animationDelay: '200ms' }}>
                    Born in Tokyo,
                    <br />
                    <span className="italic font-medium text-white">Served in Prague.</span>
                </h1>

                {/* Статус і локація */}
                <div
                    className="css-fade-in-up flex items-center gap-3 text-[#F5EDD8] font-sans text-sm md:text-base mb-10 bg-[#1a1108]/40 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#2E1F0F]"
                    style={{ animationDelay: '400ms' }}>
                    <span className="relative flex h-2.5 w-2.5">
                        <span
                            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-green-400' : 'bg-red-400'}`}></span>
                        <span
                            className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    </span>
                    <span>
                        {isOpen ? 'Open now' : 'Closed'} &middot; {address}
                    </span>
                </div>

                {/* Кнопки дії */}
                <div
                    className="css-fade-in-up flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    style={{ animationDelay: '600ms' }}>
                    <Link
                        href={bookPath}
                        className="w-full sm:w-auto px-8 py-4 bg-[#E8632A] hover:bg-[#FF7A3D] text-[#F5EDD8] font-sans font-bold text-lg rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(232,99,42,0.5)] flex justify-center items-center gap-2 group">
                        Book a Table
                        <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
                            &rarr;
                        </span>
                    </Link>

                    <Link
                        href="#find-us"
                        onClick={(e) => scrollToSection(e, 'find-us')}
                        className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#F5EDD8]/30 hover:border-[#F5EDD8] text-[#F5EDD8] font-sans font-medium text-lg rounded transition-all duration-300 flex justify-center items-center">
                        Location & Hours
                    </Link>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                    <Link
                        href="#atmosphere"
                        onClick={(e) => scrollToSection(e, 'atmosphere')}
                        aria-label="Scroll to menu">
                        <svg
                            className="w-6 h-6 text-[#F5EDD8]/50 hover:text-[#E8632A] transition-colors"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
