'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Popup from '@/src/components/ui/Popup';
import { CategoryMalaStrana, CategoryVinohrady, Product } from '@/src/types/types';

// Розширюємо твій базовий тип Product, додаючи картинку для секції бестселерів
export interface BestsellerProduct extends Product<CategoryMalaStrana | CategoryVinohrady> {
    image?: string;
}

interface BestsellersProps {
    dishes: BestsellerProduct[];
}

export function Bestsellers({ dishes }: BestsellersProps) {
    const pathname = usePathname();
    const menuPath = `${pathname}/menu`;

    // Стейт для керування попапом
    const [selectedDish, setSelectedDish] = useState<BestsellerProduct | null>(null);

    return (
        <>
            <section id="menu" className="py-24 bg-[#0d0a07] w-full relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Заголовок секції */}
                    <div className="flex justify-between items-end mb-10 md:mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}>
                            <span className="text-[#E8632A] font-jp tracking-[0.2em] text-sm font-bold mb-3 block">
                                おすすめ
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl text-[#F5EDD8] font-bold">Our Signatures</h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="hidden sm:block">
                            <Link
                                href={menuPath}
                                className="group flex items-center gap-2 text-[#F5EDD8]/70 hover:text-[#E8632A] transition-colors font-sans text-sm font-medium">
                                View Full Menu
                                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
                                    &rarr;
                                </span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Картки страв */}
                    <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar w-[calc(100%+2rem)] -ml-4 px-4 md:w-full md:ml-0 md:px-0">
                        {dishes.map((dish, i) => (
                            <motion.div
                                key={dish.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
                                onClick={() => setSelectedDish(dish)} // Відкриваємо попап при кліці
                                className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center group relative flex items-stretch flex-col bg-[#1a1108] border border-[#2E1F0F] rounded-xl overflow-hidden cursor-pointer h-auto ">
                                <div className="relative w-full aspect-4/3 overflow-hidden bg-black">
                                    <Image
                                        src={dish.image || '/images/placeholder.jpg'}
                                        alt={dish.name}
                                        quality={60}
                                        priority={i === 0}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                        sizes="(max-width: 768px) 85vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#1a1108] via-transparent to-transparent opacity-80 transition-opacity duration-500 ease-out group-hover:opacity-0" />
                                </div>

                                <div className="relative flex-1 p-6 md:p-8 flex flex-col justify-between z-10 bg-[#1a1108]">
                                    <div>
                                        <h3 className="text-[#F5EDD8] font-sans font-bold text-xl md:text-2xl mb-3 line-clamp-2 min-h-14 md:min-h-16">
                                            {dish.name}
                                        </h3>
                                        {/* Використовуємо dish.desc замість description */}
                                        <p className="text-[#A69B8F] font-sans text-sm md:text-base line-clamp-3 leading-relaxed">
                                            {dish.desc}
                                        </p>
                                    </div>
                                    <div className="mt-6 flex justify-between items-end">
                                        {/* Додаємо "Kč", оскільки price тепер просто число */}
                                        <p className="text-[#E8632A] font-sans font-bold text-lg md:text-xl">
                                            {dish.price} Kč
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 h-1 w-full bg-[#E8632A] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-center sm:hidden">
                        <Link
                            href={menuPath}
                            className="text-[#F5EDD8] hover:text-[#E8632A] transition-colors font-sans text-sm font-medium underline underline-offset-4">
                            View Full Menu
                        </Link>
                    </div>
                </div>

                {/* Рендеримо Popup (він сам керує своєю видимістю завдяки CSS-класам на основі переданого product) */}
            </section>
            <Popup product={selectedDish} onClose={() => setSelectedDish(null)} />
        </>
    );
}
