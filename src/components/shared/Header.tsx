'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-[#1a1108]/95 backdrop-blur-md border-b border-[#2E1F0F] shadow-lg'
                        : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex justify-center group gap-3"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        <Image
                            src="/MiskaRamenLogo.png"
                            alt="Miska Ramen"
                            width={60}
                            height={60}
                            loading="eager"
                            className="w-10 h-10 md:w-14 md:h-14"
                        />
                        <div className="flex flex-col justify-center group">
                            <span className="font-serif text-2xl font-bold tracking-widest text-[#F5EDD8] leading-none group-hover:text-[#E8632A] transition-colors duration-300">
                                MISKA
                            </span>
                            <span className="text-[10px] font-sans text-[#E8632A] tracking-[0.25em] mt-1 font-medium">
                                ラーメン
                            </span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="/menu"
                            className="text-sm font-sans text-[#F5EDD8] hover:text-[#E8632A] transition-colors duration-200">
                            Menu
                        </Link>
                        <Link
                            href="#find-us"
                            className="text-sm font-sans text-[#F5EDD8] hover:text-[#E8632A] transition-colors duration-200">
                            Find Us
                        </Link>
                        <button className="bg-[#E8632A] hover:bg-[#FF7A3D] text-[#F5EDD8] text-sm font-sans font-medium px-5 py-2.5 rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,99,42,0.4)] flex items-center gap-2">
                            Book a Table
                            <span
                                aria-hidden="true"
                                className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
                                &rarr;
                            </span>
                        </button>
                    </nav>

                    <button
                        className="md:hidden text-[#F5EDD8] p-2 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-40 bg-[#0d0a07] transform transition-transform duration-300 ease-in-out md:hidden ${
                    isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <Link
                        href="/menu"
                        className="text-2xl font-serif text-[#F5EDD8] hover:text-[#E8632A] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        Menu
                    </Link>
                    <Link
                        href="#find-us"
                        className="text-2xl font-serif text-[#F5EDD8] hover:text-[#E8632A] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        Find Us
                    </Link>
                    <button
                        className="bg-[#E8632A] text-[#F5EDD8] text-lg font-sans font-medium px-8 py-3 rounded mt-4"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        Book a Table &rarr;
                    </button>
                </div>
            </div>
        </>
    );
}
