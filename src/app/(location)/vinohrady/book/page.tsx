import React from 'react';
import Link from 'next/link';

export default function ReservationPage() {
    return (
        <main className="min-h-screen bg-[#120f08] text-[#ede3ca] font-sans relative overflow-hidden flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            {/* Ембієнтне свічення на фоні (як на головній) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2b2010_0%,#120f08_70%)] opacity-70 pointer-events-none" />

            <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col">
                {/* Верхня навігація та заголовок на твоєму боці */}
                <div className="mb-8 mt-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <span className="text-[#e55628] text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                            Rezervace
                        </span>
                        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#ede3ca]">Book a Table</h1>
                    </div>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#b9ad99] hover:text-[#e55628] transition-colors text-[14px] font-medium">
                        <span>←</span> Back to Homepage
                    </Link>
                </div>

                {/* Преміальний контейнер-картка для iframe */}
                <div className="relative w-full h-[680px] md:h-[780px] bg-[#1c1508] border border-[#3a2e1c]/60 rounded-[24px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
                    {/* Тонка лінія підсвічування зверху картки */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#e55628]/30 to-transparent z-20" />

                    <iframe
                        src="https://embed.choiceqr.com/booking/miskaramen?lang=en"
                        className="w-full h-full border-0 relative z-10 opacity-95 hover:opacity-100 transition-opacity duration-300"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>

                {/* Текст-підказка знизу */}
                <p className="text-center text-[#8a7f6a] text-xs mt-6">
                    Rezervační systém běží na platformě ChoiceQR. V případě dotazů nás kontaktujte.
                </p>
            </div>
        </main>
    );
}
