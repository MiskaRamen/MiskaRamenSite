'use client';

import { Product, CategoryMalaStrana, CategoryVinohrady } from '@/src/types/types';
import Popup from '@/src/components/ui/Popup';
import { useState } from 'react';

interface MenuComponentProps {
    TABS: { label: string; value: 'all' | CategoryMalaStrana | CategoryVinohrady }[];
    SECTIONS: { cat: CategoryMalaStrana | CategoryVinohrady; eyebrow: string; title: string }[];
    products: Product<CategoryMalaStrana | CategoryVinohrady>[];
}

type Filter = 'all' | CategoryMalaStrana | CategoryVinohrady;

export function MenuComponent({ TABS, SECTIONS, products }: MenuComponentProps) {
    const [filter, setFilter] = useState<Filter>('all');
    const [activeProduct, setActiveProduct] = useState<Product<CategoryMalaStrana> | null>(null);
    return (
        <>
            <div
                role="tablist"
                className="flex overflow-x-auto px-12 max-[900px]:px-5 border-b border-[#2b2010] mb-13
                           scrollbar-none [&::-webkit-scrollbar]:w-0">
                {TABS.map((t, i) => (
                    <button
                        key={t.value}
                        role="tab"
                        aria-selected={filter === t.value}
                        onClick={() => setFilter(t.value)}
                        style={{ animationDelay: `${i * 20}ms` }}
                        className={[
                            'px-5.5 py-3.5 bg-transparent border-0 border-b-2 border-solid',
                            'text-sm font-medium cursor-pointer whitespace-nowrap font-[inherit] -mb-px',
                            'transition-colors duration-150 css-fade-in-up',
                            filter === t.value
                                ? 'text-[#ede3ca] border-b-[#e55628]'
                                : 'text-[#8a7f6a] border-b-transparent hover:text-[#ede3ca]',
                        ].join(' ')}>
                        {t.label}
                    </button>
                ))}
            </div>

            {/* ── Menu sectins ─────────────────────────────────────── */}
            {SECTIONS.filter((s) => filter === 'all' || filter === s.cat).map((s) => {
                const items = products.filter((p) => p.cat === s.cat);

                if (items.length === 0) return null;

                return (
                    <section className="mb-14" key={s.cat} id={`sec-${s.cat}`}>
                        <div className="px-12 max-[900px]:px-5 mb-7">
                            <p
                                className="text-[11px] tracking-[0.2em] text-[#e55628] mb-1.5 css-fade-in-up"
                                style={{ animationDelay: '100ms' }}>
                                {s.eyebrow}
                            </p>
                            <h2
                                className="font-playfair text-[30px] font-bold text-[#ede3ca] css-fade-in-up"
                                style={{ animationDelay: '150ms' }}>
                                {s.title}
                            </h2>
                        </div>

                        <div
                            className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1
                                    gap-5 px-12 max-[900px]:px-5">
                            {items.map((product, i) => (
                                <button
                                    key={product.id}
                                    onClick={() => setActiveProduct(product as Product<CategoryMalaStrana>)}
                                    aria-label={`View ${product.name}`}
                                    style={{ animationDelay: `${i * 120}ms` }}
                                    className="bg-[#1c1508] rounded-[14px] overflow-hidden cursor-pointer
                                            border border-[#2b2010] flex flex-col text-left appearance-none
                                            p-0 w-full transition-all duration-300 ease-out
                                            hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(0,0,0,0.5)]
                                            focus-visible:outline-2 focus-visible:outline-[#e55628]
                                            focus-visible:outline-offset-2 css-fade-in-up">
                                    <div
                                        className="h-65 flex items-center justify-center text-[100px]
                                       select-none shrink-0"
                                        style={{
                                            background: 'radial-gradient(ellipse at 50% 60%, #f0e8d5 0%, #e4dac8 100%)',
                                        }}>
                                        <span className="block leading-none drop-shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
                                            {product.emoji}
                                        </span>
                                    </div>

                                    <div className="pt-5.5 px-5.5 pb-6.5 flex-1 flex flex-col">
                                        <h3
                                            className="font-playfair text-[20px] font-bold text-[#ede3ca]
                                           leading-tight mb-2.5">
                                            {product.name}
                                        </h3>
                                        <p
                                            className="text-[13px] text-[#8a7f6a] leading-[1.65] flex-1
                                          line-clamp-3 mb-4.5">
                                            {product.desc}
                                        </p>
                                        <span className="text-[18px] font-bold text-[#E8632A]">{product.price} Kč</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </section>
                );
            })}

            <Popup product={activeProduct} onClose={() => setActiveProduct(null)} />

            <div className="h-15" />
        </>
    );
}
