'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface AtmosphereProps {
    Photos: {
        MainAtmoPhoto: string;
        atmo1: string;
        atmo2: string;
        atmo3: string;
        atmo4: string;
    };
}

export function Atmosphere({ Photos }: AtmosphereProps) {
    return (
        <section className="py-24 bg-[#0d0a07] w-full relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16">
                    <span className="text-[#E8632A] font-jp tracking-[0.2em] text-sm font-bold mb-3 block">雰囲気</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#F5EDD8] font-bold">Step Inside</h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[300px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="col-span-2 md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group bg-[#1a1108]">
                        <Image
                            src={Photos.MainAtmoPhoto}
                            alt="Miska Ramen Interior"
                            quality={70}
                            fill
                            loading="lazy"
                            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0d0a07] via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-0" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="col-span-1 relative rounded-2xl overflow-hidden group bg-[#1a1108]">
                        <Image
                            src={Photos.atmo1}
                            alt="Atmosphere Detail"
                            quality={60}
                            fill
                            loading="lazy"
                            className="object-cover transition-all duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100 "
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="col-span-1 relative rounded-2xl overflow-hidden group bg-[#1a1108]">
                        <Image
                            src={Photos.atmo2}
                            alt="Kitchen Detail"
                            quality={60}
                            fill
                            loading="lazy"
                            className="object-cover transition-all duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="col-span-1 relative rounded-2xl overflow-hidden bg-[#1a1108] border border-[#2E1F0F] flex flex-col items-center justify-center p-6 text-center">
                        <div className="absolute inset-0 pointer-events-none">
                            <Image
                                src={Photos.atmo4}
                                alt=""
                                fill
                                quality={30}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover object-center opacity-[0.03]"
                            />
                        </div>

                        <p className="relative z-10 font-serif italic text-2xl md:text-3xl text-[#F5EDD8] leading-snug">
                            &quot;Warm, <br /> intimate,&quot;
                        </p>
                        <span className="relative z-10 text-[#E8632A] font-sans font-bold text-sm tracking-widest uppercase mt-4 block">
                            88 seats
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="col-span-1 relative rounded-2xl overflow-hidden group bg-[#1a1108]">
                        <Image
                            src={Photos.atmo3}
                            alt="Ramen Detail"
                            fill
                            loading="lazy"
                            className="object-cover transition-all duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
