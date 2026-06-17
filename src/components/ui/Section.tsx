function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    return (
        <section id={`s${id}`} className="mb-12 md:mb-14 scroll-mt-24">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#ede3ca] mb-5 flex items-baseline gap-3">
                <span className="text-[#e55628] text-base md:text-lg font-sans font-bold tracking-[0.15em]">{id}</span>
                {title}
            </h2>
            <div className="space-y-4 text-[#b9ad99] text-[15px] md:text-[16px] leading-relaxed font-sans">
                {children}
            </div>
        </section>
    );
}

export default Section;
