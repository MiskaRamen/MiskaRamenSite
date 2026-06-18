'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'; // Додано імпорт Image
import { CategoryMalaStrana, CategoryVinohrady, Product } from '@/src/types/types';

interface PopupProps {
    product: Product<CategoryMalaStrana | CategoryVinohrady> | null;
    onClose: () => void;
}

export default function Popup({ product, onClose }: PopupProps) {
    const [showSticky, setShowSticky] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function reset() {
            setShowSticky(false);
        }
        reset();
        if (modalRef.current) modalRef.current.scrollTop = 0;
    }, [product]);

    useEffect(() => {
        document.body.style.overflow = product ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [product]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    const handleScroll = () => {
        if (!modalRef.current) return;
        setShowSticky(modalRef.current.scrollTop > 220);
    };

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-hidden={!product}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
            className={[
                'fixed inset-0 bg-black/80 backdrop-blur-sm z-1000',
                'flex items-center justify-center p-4 sm:p-6',
                'transition-all duration-300 ease-out',
                product ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none delay-100',
            ].join(' ')}>
            <div
                ref={modalRef}
                onScroll={handleScroll}
                className={[
                    'bg-gradient-to-b from-[#1c1508] to-[#120f08] border border-[#3a2e1c]/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] rounded-[24px]',
                    'w-full max-w-[480px] max-h-[88vh] overflow-y-auto relative',
                    'transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1)',
                    '[scrollbar-width:thin] [scrollbar-color:#3a2e1c_transparent]',
                    '[&::-webkit-scrollbar]:w-1.5',
                    '[&::-webkit-scrollbar-thumb]:bg-[#3a2e1c]',
                    '[&::-webkit-scrollbar-thumb]:rounded-full',
                    product ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-[0.95] opacity-0',
                ].join(' ')}>
                {/* Липкий Хедер (Glassmorphism) */}
                <div
                    className={[
                        'sticky top-0 z-30 bg-[#120f08]/85 backdrop-blur-xl border-b border-[#3a2e1c]/50',
                        'px-5 py-3.5 flex items-center gap-4',
                        'transition-all duration-300 ease-in-out',
                        showSticky
                            ? 'opacity-100 translate-y-0 pointer-events-auto shadow-md'
                            : 'opacity-0 -translate-y-full pointer-events-none',
                    ].join(' ')}>
                    {/* Мініатюра в хедері */}
                    <div className="w-10 h-10 rounded-full relative overflow-hidden shrink-0 bg-[#2b2010] border border-[#3a2e1c] shadow-inner grid place-items-center">
                        {product?.image ? (
                            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="40px" />
                        ) : (
                            <span className="text-[20px] drop-shadow-xs">{product?.emoji}</span>
                        )}
                    </div>

                    <span className="flex-1 text-[16px] font-bold text-[#F5EDD8] truncate">{product?.name}</span>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white/70 text-[14px]
                       cursor-pointer grid place-items-center shrink-0
                       hover:bg-white/10 hover:text-white transition-all duration-200">
                        ✕
                    </button>
                </div>

                {/* Абсолютна кнопка закриття */}
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full
                     bg-black/40 backdrop-blur-md border border-white/10 text-white/80 text-[16px] cursor-pointer
                     flex items-center justify-center hover:bg-black/60 hover:text-white hover:scale-105 transition-all duration-200 shadow-lg">
                    ✕
                </button>

                {/* Hero секція з фотографією */}
                <div className="relative h-[280px] flex items-center justify-center overflow-hidden  bg-[#120f08]">
                    {product?.image ? (
                        <>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 480px"
                            />
                            {/* Градієнт для плавного переходу фотографії в темний фон опису */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1508ab] via-transparent to-transparent opacity-95" />
                        </>
                    ) : (
                        // Fallback (показуємо емодзі, якщо фото немає)
                        <>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,99,42,0.12)_0%,transparent_65%)]" />
                            <span className="relative z-10 text-[140px] block leading-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-default">
                                {product?.emoji}
                            </span>
                        </>
                    )}

                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Основний опис */}
                <div className="relative pt-6 px-6 sm:px-8 pb-5 z-10">
                    <div className="flex flex-col gap-1.5 mb-4">
                        <h2 className="font-serif text-[28px] leading-tight font-bold text-[#F5EDD8]">
                            {product?.name}
                        </h2>
                        <div className="flex items-baseline gap-1.5">
                            <span className="text-[24px] font-bold text-[#E8632A]">{product?.price}</span>
                            <span className="text-[15px] font-semibold text-[#E8632A]/70">Kč</span>
                        </div>
                    </div>

                    <p className="text-[15px] text-[#A69B8F] leading-relaxed mb-6">{product?.desc}</p>

                    {product && product.allergens && product.allergens.length > 0 && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E8632A]/10 border border-[#E8632A]/20 rounded-full mb-2">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#E8632A] text-white text-[10px] font-bold shadow-sm">
                                AL
                            </span>
                            <span className="text-[13px] font-medium text-[#E8632A]">
                                {product.allergens.join(', ')}
                            </span>
                        </div>
                    )}
                </div>

                {/* Опції */}
                {product?.options?.sections &&
                    product.options.sections
                        .filter((sec) => sec.items.length > 0)
                        .map((sec, i) => (
                            <div
                                key={i}
                                className="px-6 sm:px-8 py-6 border-t border-[#3a2e1c]/40 bg-gradient-to-b from-[#1a140b]/50 to-transparent">
                                <div className="mb-4">
                                    <h3 className="text-[17px] font-bold text-[#F5EDD8] mb-0.5">{sec.title}</h3>
                                    <p className="text-[13px] text-[#8a7f6a]">{sec.sub}</p>
                                </div>

                                <div className="space-y-1">
                                    {sec.items.map((item, j) => (
                                        <div
                                            key={j}
                                            className="group flex items-center justify-between py-2.5 px-3 -mx-3 rounded-xl hover:bg-white/[0.03] transition-colors duration-200 cursor-default">
                                            <span className="text-[15px] text-[#D4C8B5] group-hover:text-[#F5EDD8] transition-colors">
                                                {item.name}
                                            </span>
                                            {item.price > 0 ? (
                                                <span className="text-[#E8632A] font-semibold tracking-wide">
                                                    + {item.price} Kč
                                                </span>
                                            ) : (
                                                <span className="text-[#8a7f6a] group-hover:text-[#A69B8F] text-[11px] font-bold uppercase tracking-wider transition-colors">
                                                    Included
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    );
}
