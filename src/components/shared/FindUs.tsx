'use client';

import { motion } from 'framer-motion';

interface FindUsProps {
    address: string;
    phone: string;
    directLink: string;
    workingHours: {
        mon: string;
        tue: string;
        wed: string;
        thu: string;
        fri: string;
        sat: string;
        sun: string;
    };
}

export function FindUs({ address, phone, directLink, workingHours }: FindUsProps) {
    const splitAddress = address.split(',').map((part) => part.trim());

    return (
        <>
            <section id="find-us" className="py-24 bg-[#0d0a07] w-full relative z-10 border-t border-[#E8632A]/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                        {/* ЛІВА КОЛОНКА: FIND US */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col">
                            <h2 className="font-serif text-2xl md:text-3xl text-[#F5EDD8] tracking-[0.15em] uppercase mb-8 md:mb-10">
                                Find Us
                            </h2>

                            {/* Адреса */}
                            <div className="font-sans text-lg text-[#A69B8F] space-y-1">
                                {splitAddress.map((part, index) => (
                                    <p key={index}>{part}</p>
                                ))}
                                <p>Czech Republic</p>
                            </div>

                            {/* Клікабельний телефон */}
                            <div className="mt-8">
                                <a
                                    href={`tel:${phone}`}
                                    className="text-[#F5EDD8] font-sans text-xl md:text-2xl tracking-wide hover:text-[#E8632A] transition-colors">
                                    {phone}
                                </a>
                            </div>

                            {/* Кнопка маршруту */}
                            <div className="mt-10">
                                <a
                                    href={directLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#F5EDD8]/30 hover:border-[#F5EDD8] text-[#F5EDD8] font-sans font-medium text-lg rounded transition-all duration-300 w-full sm:w-auto">
                                    Get Directions
                                </a>
                            </div>
                        </motion.div>

                        {/* ПРАВА КОЛОНКА: HOURS */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col">
                            <h2 className="font-serif text-2xl md:text-3xl text-[#F5EDD8] tracking-[0.15em] uppercase mb-8 md:mb-10">
                                Hours
                            </h2>

                            {/* Розклад */}
                            <ul className="font-sans text-lg text-[#8C7B6A] space-y-4 w-full max-w-md">
                                <li className="flex justify-between items-center border-b border-[#2E1F0F] pb-3">
                                    <span>Monday</span>
                                    <span className="text-[#F5EDD8]">{workingHours.mon}</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-[#2E1F0F] pb-3">
                                    <span>Tuesday</span>
                                    <span className="text-[#F5EDD8]">{workingHours.tue}</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-[#2E1F0F] pb-3">
                                    <span>Wednesday</span>
                                    <span className="text-[#F5EDD8]">{workingHours.wed}</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-[#2E1F0F] pb-3">
                                    <span>Thursday</span>
                                    <span className="text-[#F5EDD8]">{workingHours.thu}</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-[#2E1F0F] pb-3">
                                    <span>Friday</span>
                                    <span className="text-[#F5EDD8]">{workingHours.fri}</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-[#2E1F0F] pb-3">
                                    <span>Saturday</span>
                                    <span className="text-[#F5EDD8]">{workingHours.sat}</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-[#2E1F0F] pb-3">
                                    <span>Sunday</span>
                                    <span className="text-[#F5EDD8]">{workingHours.sun}</span>
                                </li>
                            </ul>

                            {/* Нотатка про кухню */}
                            <p className="font-serif italic text-sm md:text-base text-[#8C7B6A] mt-6">
                                * Kitchen closes 45 min early
                            </p>

                            {/* Кнопка бронювання */}
                            <div className="mt-10">
                                <a
                                    href="#book"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-[#E8632A] hover:bg-[#FF7A3D] text-[#F5EDD8] font-sans font-bold text-lg rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(232,99,42,0.5)] w-full sm:w-auto group">
                                    Book a Table
                                    <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform">
                                        &rarr;
                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
