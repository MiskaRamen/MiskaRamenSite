'use client';

import { useEffect, useRef, useState } from 'react';
import { CategoryMalaStrana, CategoryVinohrady, Product } from '@/src/types/types';

interface PopupProps {
    product: Product<CategoryMalaStrana | CategoryVinohrady> | null;
    onClose: () => void;
}

export default function Popup({ product, onClose }: PopupProps) {
    const [liked, setLiked] = useState(false);
    const [showSticky, setShowSticky] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function reset() {
            setLiked(false);
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

    const likeCount = product ? product.likes + (liked ? 1 : 0) : 0;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-hidden={!product}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
            className={[
                'fixed inset-0 bg-black/[.78] backdrop-blur-[6px] z-[100]',
                'flex items-center justify-center p-6',
                'transition-opacity duration-[220ms] ease-in-out',
                product ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
            ].join(' ')}>
            <div
                ref={modalRef}
                onScroll={handleScroll}
                className={[
                    'bg-[#1c1508] border border-[#2b2010] rounded-[18px]',
                    'w-full max-w-[480px] max-h-[88vh] overflow-y-auto relative',
                    'transition-[transform] duration-[220ms] ease-in-out',
                    '[scrollbar-width:thin] [scrollbar-color:#3a2e1c_transparent]',
                    '[&::-webkit-scrollbar]:w-1',
                    '[&::-webkit-scrollbar-thumb]:bg-[#3a2e1c]',
                    '[&::-webkit-scrollbar-thumb]:rounded-sm',
                    product ? 'translate-y-0 scale-100' : 'translate-y-[22px] scale-[.97]',
                ].join(' ')}>
                <div
                    className={[
                        'sticky top-0 z-10 bg-[#1c1508] border-b border-[#2b2010]',
                        'px-[18px] py-3 flex items-center gap-3',
                        'transition-[opacity,transform] duration-[180ms]',
                        showSticky
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 -translate-y-full pointer-events-none',
                    ].join(' ')}>
                    <div
                        className="w-[38px] h-[38px] rounded-full grid place-items-center text-[22px] shrink-0"
                        style={{ background: 'radial-gradient(ellipse at 50% 60%, #f0e8d5, #e4dac8)' }}>
                        {product?.emoji}
                    </div>
                    <span className="flex-1 text-[15px] font-semibold text-[#ede3ca] truncate">{product?.name}</span>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="w-9 h-9 rounded-full bg-[#cc2929] border-0 text-white text-[15px]
                       cursor-pointer grid place-items-center shrink-0
                       hover:bg-[#a51f1f] transition-colors duration-150">
                        ✕
                    </button>
                </div>

                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-[14px] right-[14px] z-20 w-[38px] h-[38px] rounded-full
                     bg-[#cc2929] border-0 text-white text-[15px] cursor-pointer
                     grid place-items-center hover:bg-[#a51f1f] transition-colors duration-150">
                    ✕
                </button>

                <div
                    className="h-[290px] flex items-center justify-center text-[130px]
                     select-none rounded-t-[17px]"
                    style={{ background: 'radial-gradient(ellipse at 50% 65%, #f0e8d5 0%, #e4dac8 100%)' }}>
                    <span className="block leading-none drop-shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                        {product?.emoji}
                    </span>
                </div>

                <div className="pt-[22px] px-6 pb-4 border-b border-[#2b2010]">
                    <h2 className="font-playfair text-[22px] font-bold text-[#ede3ca] mb-1">{product?.name}</h2>
                    <p className="text-[16px] font-semibold text-[#cc2929] mb-3">{product?.price} Kč</p>
                    <p className="text-[14px] text-[#8a7f6a] leading-[1.65] mb-[14px]">{product?.desc}</p>

                    {product && product.allergens.length > 0 && (
                        <div
                            className="inline-flex items-center gap-[7px] px-[11px] py-[5px]
                            bg-[#251d0f] border border-[#3a2e1c] rounded-[20px] mb-[18px]">
                            <span
                                className="inline-flex items-center justify-center w-5 h-5 rounded-full
                               bg-[#5a5040] text-[#ede3ca] text-[10px] font-bold">
                                AI
                            </span>
                            <span className="text-[12px] text-[#8a7f6a]">{product.allergens.join(', ')}</span>
                        </div>
                    )}

                    <button
                        onClick={() => setLiked((v) => !v)}
                        className={[
                            'inline-flex items-center gap-2 px-4 py-2 border rounded-[9px]',
                            'bg-transparent cursor-pointer text-[14px] font-[inherit]',
                            'transition-colors duration-150',
                            liked
                                ? 'border-[#cc2929] text-[#cc2929]'
                                : 'border-[#3a2e1c] text-[#8a7f6a] hover:border-[#cc2929] hover:text-[#cc2929]',
                        ].join(' ')}>
                        <span className="text-[16px]">{liked ? '♥' : '♡'}</span>
                        <span>{likeCount}</span>
                    </button>
                </div>

                {product?.options.sections
                    .filter((sec) => sec.items.length > 0)
                    .map((sec, i) => (
                        <div key={i} className="px-6 py-5 border-t border-[#2b2010] last:pb-7">
                            <div className="text-[15px] font-bold text-[#ede3ca] mb-[3px]">{sec.title}</div>
                            <div className="text-[12px] text-[#8a7f6a] mb-[14px]">{sec.sub}</div>
                            {sec.items.map((item, j) => (
                                <div
                                    key={j}
                                    className="flex items-center justify-between py-[10px] text-[14px]
                             text-[#c4b89a] border-b border-[#2b2010] last:border-b-0">
                                    <span>{item.name}</span>
                                    {item.price > 0 ? (
                                        <span className="text-[#cc2929] font-medium">{item.price} Kč</span>
                                    ) : (
                                        <span className="text-[#5a5040] text-[13px]">included</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
}
