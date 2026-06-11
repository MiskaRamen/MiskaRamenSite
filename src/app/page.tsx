'use client';

import Link from 'next/link';

const LOCATIONS = [
    {
        id: 'vinohrady',
        name: 'Vinohrady',
        address: 'Španělská 2, 120 00 Praha 2',
        imageBg: 'bg-[url("/images/vinohrady-bg.jpg")]', // Заміниш на своє фото
        status: 'Open now',
        isOpen: true,
    },
    {
        id: 'mala-strana',
        name: 'Malá Strana',
        address: 'Адреса Малої Страни, Praha 1', // Допишеш їхню нову адресу
        imageBg: 'bg-[url("/images/mala-strana-bg.jpg")]', // Заміниш на своє фото
        status: 'Opening soon', // Або 'Open now'
        isOpen: false, // Зміниш на true, коли точка відкриється
    },
];

export default function LocationPicker() {
    return (
        <main className="min-h-screen bg-[#120f08] flex flex-col items-center justify-center p-6 text-[#ede3ca] font-sans relative overflow-hidden">
            {/* Тло: Легке світіння або шум, щоб не було просто чорним */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2b2010_0%,#120f08_60%)] opacity-60 pointer-events-none" />

            <div className="relative z-10 w-full max-w-5xl">
                {/* Заголовок */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-[#e55628] text-[11px] tracking-[0.2em] font-bold uppercase mb-4">ラーメン</p>
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        Choose your location
                    </h1>
                    <p className="text-[#8a7f6a] text-lg">
                        Select a Miska Ramen restaurant to view menu and book a table.
                    </p>
                </div>

                {/* Картки локацій */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {LOCATIONS.map((loc) => (
                        <Link
                            key={loc.id}
                            href={`/${loc.id}`}
                            className="group relative flex flex-col bg-[#1c1508] border border-[#2b2010] rounded-[24px] overflow-hidden 
                                     transition-all duration-300 ease-out 
                                     hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(229,86,40,0.08)] 
                                     hover:border-[#e55628]/40 focus-visible:outline-2 focus-visible:outline-[#e55628]">
                            {/* Верхня частина з картинкою */}
                            <div className="h-[220px] sm:h-[280px] w-full relative bg-[#120f08] overflow-hidden">
                                <div
                                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 ${loc.imageBg} opacity-50 group-hover:opacity-70`}
                                />
                                {/* Градієнт для плавного переходу до нижньої частини */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1508] via-[#1c1508]/20 to-transparent" />

                                {/* Статус (Відкрито/Закрито) */}
                                <div className="absolute top-6 left-6 flex items-center gap-2 bg-[#120f08]/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#2b2010]">
                                    <span
                                        className={`w-2 h-2 rounded-full ${
                                            loc.isOpen ? 'bg-green-500' : 'bg-[#e55628]'
                                        } shadow-[0_0_8px_currentColor]`}
                                    />
                                    <span className="text-[12px] font-medium text-[#ede3ca] tracking-wide">
                                        {loc.status}
                                    </span>
                                </div>
                            </div>

                            {/* Нижня частина з текстом */}
                            <div className="p-8 md:p-10 flex flex-col flex-1 bg-[#1c1508] relative z-10">
                                <h2 className="font-playfair text-3xl font-bold text-[#ede3ca] mb-2">{loc.name}</h2>
                                <p className="text-[#8a7f6a] text-[15px] mb-8 flex-1">{loc.address}</p>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-[14px] font-semibold text-[#ede3ca] group-hover:text-[#e55628] transition-colors duration-300">
                                        Visit menu & book
                                    </span>
                                    <span
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e55628] text-white 
                                                   transition-transform duration-300 ease-out group-hover:translate-x-1">
                                        →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
