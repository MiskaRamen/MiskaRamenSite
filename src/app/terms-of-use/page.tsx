'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Section from '@/src/components/ui/Section';

function Clause({ n, children }: { n: string; children: React.ReactNode }) {
    return (
        <p>
            <span className="text-[#e55628] font-semibold mr-2">{n}</span>
            {children}
        </p>
    );
}

const TOC = [
    { id: '1', label: 'Úvodní ustanovení a definice' },
    { id: '2', label: 'Základní principy fungování Aplikace Choice' },
    { id: '3', label: 'Registrace a uživatelský účet' },
    { id: '4', label: 'Prezentace produktů' },
    { id: '5', label: 'Uzavření kupní smlouvy' },
    { id: '6', label: 'Kupní cena a způsoby platby' },
    { id: '7', label: 'Způsoby dodání' },
    { id: '8', label: 'Autorské právo a související ujednání' },
    { id: '9', label: 'Další práva a povinnosti uživatele' },
    { id: '10', label: 'Ochrana osobních údajů' },
    { id: '11', label: 'Stížnosti a oznámení' },
    { id: '12', label: 'Závěrečná ustanovení' },
];

export default function TermsOfUsePage() {
    const router = useRouter();
    return (
        <main className="min-h-screen bg-[#120f08] text-[#ede3ca] font-sans relative overflow-hidden">
            {/* Ambient background glow, same treatment as homepage / privacy policy */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2b2010_0%,#120f08_60%)] opacity-60 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-8 md:py-12">
                {/* Header */}
                <div className="pt-10 flex flex-col py-8 sm:flex-row gap-4 sm:justify-between sm:items-center">
                    <span
                        onClick={router.back}
                        className="inline-flex items-center gap-2 text-[#b9ad99] hover:text-[#e55628] transition-colors text-[15px] font-medium">
                        <span aria-hidden>←</span> Back
                    </span>
                    <Link
                        href="/privacy-policy"
                        className="inline-flex items-center gap-2 text-[#b9ad99] hover:text-[#e55628] transition-colors text-[15px] font-medium">
                        Privacy Policy <span aria-hidden>→</span>
                    </Link>
                </div>
                <div className="mb-14 md:mb-20">
                    <p className="text-[#e55628] text-[11px] tracking-[0.2em] font-bold uppercase mb-4">利用規約</p>
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                        Obchodní podmínky
                    </h1>
                    <p className="text-[#8a7f6a] text-base md:text-lg max-w-2xl">
                        Tyto podmínky upravují užívání platformy Choice, prostřednictvím které rezervujete stůl a
                        objednáváte v restauraci Miska Ramen, a vztahy mezi Vámi, provozovatelem platformy a naší
                        restaurací jako prodejcem.
                    </p>
                    <p className="text-[#6b6052] text-sm mt-6">Platné a účinné od 1. června 2025</p>
                </div>

                {/* Identification card */}
                <div className="bg-[#1c1508] border border-[#2b2010] rounded-3xl p-6 md:p-8 mb-14">
                    <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#ede3ca] mb-4">Strany</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <p className="text-[#6b6052] text-xs uppercase tracking-wide mb-1">
                                Provozovatel platformy Choice
                            </p>
                            <p className="text-[#ede3ca] font-medium">Choice QR s.r.o.</p>
                            <p className="text-[#b9ad99] text-[14px] mt-1">
                                IČ: 09517600 <br />
                                Na příkopě 857/18, Nové Město, 110 00 Praha 1 <br />
                                zapsaná u Městského soudu v Praze, sp. zn. C 337491
                            </p>
                        </div>
                        <div>
                            <p className="text-[#6b6052] text-xs uppercase tracking-wide mb-1">
                                Partner (restaurace Miska Ramen)
                            </p>
                            <p className="text-[#ede3ca] font-medium">HAPPY NOODLES s.r.o.</p>
                            <p className="text-[#b9ad99] text-[14px] mt-1">
                                IČO: 07608268, VAT ID: CZ07608268 <br />
                                Nušlova 2268/1, 158 00 Praha
                            </p>
                        </div>
                    </div>
                    <p className="text-[#8a7f6a] text-sm mt-5 pt-5 border-t border-[#2b2010]">
                        Restaurace Miska Ramen provozuje pobočky na adresách{' '}
                        <span className="text-[#ede3ca]">Španělská 2, 120 00 Praha 2 (Vinohrady)</span> a{' '}
                        <span className="text-[#ede3ca]">Míšeňská 70/4, 118 00 Praha 1 (Malá Strana)</span>.
                    </p>
                </div>

                {/* Intro */}
                <p className="text-[#b9ad99] text-[15px] md:text-[16px] leading-relaxed mb-14">
                    Rezervace stolu a objednávky v restauraci Miska Ramen probíhají prostřednictvím platformy Choice.
                    Tyto obchodní podmínky (dále jen „Podmínky“) vydává společnost Choice QR s.r.o. jako provozovatel
                    platformy (dále jen „Provozovatel“) a upravují vzájemná práva a povinnosti mezi Provozovatelem, Vámi
                    jako uživatelem platformy (dále jen „Uživatel“) a naší restaurací jako partnerem (dále jen
                    „Partner“). Používáním platformy Choice v souvislosti s návštěvou restaurace Miska Ramen
                    potvrzujete, že jste se s těmito Podmínkami seznámili a souhlasíte s nimi.
                </p>

                {/* Table of contents */}
                <nav
                    aria-label="Obsah dokumentu"
                    className="bg-[#1c1508] border border-[#2b2010] rounded-3xl p-6 md:p-8 mb-16">
                    <p className="text-[#6b6052] text-xs uppercase tracking-wide mb-4">Obsah</p>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                        {TOC.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#s${item.id}`}
                                    className="group flex items-center gap-3 text-[#b9ad99] hover:text-[#ede3ca] transition-colors text-[15px]">
                                    <span className="text-[#e55628] font-bold text-sm w-6">{item.id}.</span>
                                    <span className="group-hover:translate-x-0.5 transition-transform">
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 1. Úvodní ustanovení a definice */}
                <Section id="1" title="Úvodní ustanovení a definice">
                    <Clause n="1.1.">
                        Tyto Podmínky vydává společnost Choice QR s.r.o., IČ: 09517600, se sídlem Na příkopě 857/18,
                        Nové Město, 110 00 Praha 1, zapsaná v obchodním rejstříku vedeném Městským soudem v Praze, sp.
                        zn. C 337491 („Provozovatel“).
                    </Clause>
                    <Clause n="1.2.">
                        Tyto Podmínky upravují vzájemná práva a povinnosti mezi Provozovatelem, Uživatelem a Partnerem
                        vznikající při provozu a užívání Aplikace Choice, zejména:
                    </Clause>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#e55628]">
                        <li>
                            práva a povinnosti mezi Provozovatelem a Uživatelem vznikající při přístupu a užívání
                            Aplikace Choice a uživatelského účtu;
                        </li>
                        <li>
                            práva a povinnosti týkající se kupních smluv sjednávaných ohledně Produktů, jejichž uzavření
                            zprostředkovává Provozovatel — tyto Podmínky jsou nedílnou součástí smlouvy uzavřené mezi
                            Partnerem a Uživatelem.
                        </li>
                    </ul>

                    <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5 md:p-6 mt-6">
                        <h3 className="font-playfair text-lg font-bold text-[#ede3ca] mb-3">1.3. Definice pojmů</h3>
                        <div className="space-y-3">
                            <p>
                                <span className="text-[#ede3ca] font-medium">Aplikace Choice</span> — technické řešení
                                (aplikace) umožňující Uživatelům prohlížet, objednat a koupit Produkty Partnera,
                                rezervovat místo, komunikovat s Partnerem a případně zprostředkovat doručovací služby.
                            </p>
                            <p>
                                <span className="text-[#ede3ca] font-medium">Partner</span> — provozovatel restaurace,
                                jehož Produkty jsou nabízeny prostřednictvím Aplikace Choice. Partnerem je{' '}
                                <span className="text-[#ede3ca]">HAPPY NOODLES s.r.o.</span>, ID: 07608268, VAT ID:
                                CZ07608268, Nušlova 2268/1, 158 00 Praha, provozující restauraci Miska Ramen.
                            </p>
                            <p>
                                <span className="text-[#ede3ca] font-medium">Produkty</span> — jídla, nápoje a další
                                produkty či služby Partnera nabízené a prodávané prostřednictvím Aplikace Choice za
                                účelem přímé a okamžité spotřeby.
                            </p>
                            <p>
                                <span className="text-[#ede3ca] font-medium">Uživatel</span> — fyzická nebo právnická
                                osoba uzavírající kupní smlouvu ohledně Produktu s Partnerem prostřednictvím Aplikace
                                Choice.
                            </p>
                            <p>
                                <span className="text-[#ede3ca] font-medium">Autorský zákon</span> — zákon č. 121/2000
                                Sb., v platném znění. <br />
                                <span className="text-[#ede3ca] font-medium">Občanský zákoník</span> — zákon č. 89/2012
                                Sb., v platném znění. <br />
                                <span className="text-[#ede3ca] font-medium">Zákon o ochraně spotřebitele</span> — zákon
                                č. 634/1992 Sb., v platném znění.
                            </p>
                        </div>
                    </div>

                    <Clause n="1.4.">
                        Uživatel prohlašuje, že si tyto Podmínky před zahájením využívání Aplikace Choice přečetl,
                        porozuměl jim a souhlasí s nimi. Uživatel dále prohlašuje, že je způsobilý k právnímu jednání
                        (zejména s ohledem na svůj věk) nebo je zastoupen svým zákonným zástupcem.
                    </Clause>
                </Section>

                {/* 2. Základní principy fungování */}
                <Section id="2" title="Základní principy fungování Aplikace Choice">
                    <Clause n="2.1.">
                        Provozovatel zprostředkovává nabídku Partnera Uživatelům prostřednictvím Aplikace Choice a
                        umožňuje uzavírání kupních smluv ohledně Produktů, rezervaci místa u Partnera a platby
                        prostřednictvím QR kódů. V souvislosti se zprostředkovatelskými službami účtuje Provozovatel
                        Uživateli servisní poplatek.
                    </Clause>
                    <Clause n="2.2.">
                        Pro přístup a používání Aplikace Choice je potřeba připojení k internetu a zařízení s webovým
                        prohlížečem. Funkce a kompatibilita se mohou lišit podle zařízení a čas od času se měnit.
                    </Clause>
                    <Clause n="2.3.">
                        Provozovatel není ani kupujícím, ani prodávajícím Produktů, ale pouze poskytovatelem řešení
                        usnadňujícího uzavření kupní smlouvy. Kupní smlouva ohledně Produktů se uzavírá výhradně mezi
                        Uživatelem jako kupujícím a Partnerem jako prodávajícím; Provozovatel není stranou této smlouvy
                        a neodpovídá za kvalitu, původ, úhradu ani dodání Produktů.
                    </Clause>
                    <Clause n="2.4.">
                        Odpovědnost za nabízení a prodej Produktů a za vyřizování reklamací nese Partner jako
                        prodávající. Partner odpovídá za splnění všech požadavků jako prodejce a může zavést další
                        podmínky doplňující tyto Podmínky.
                    </Clause>
                    <Clause n="2.5.">
                        Provozovatel poskytuje místo pro sjednávání transakcí mezi Uživatelem a Partnerem a zavazuje se
                        poskytnout oběma stranám nezbytnou součinnost při řešení vzájemných záležitostí.
                    </Clause>
                    <Clause n="2.6.">
                        Provozovatel neověřuje důvěryhodnost Uživatelů ani Partnera a neodpovídá za aktuálnost a
                        správnost informací zveřejněných v Aplikaci Choice, není-li si vědom jejich nezákonnosti; po
                        získání takové vědomosti urychleně jedná k odstranění nezákonného obsahu.
                    </Clause>
                    <Clause n="2.7.">
                        Do Aplikace Choice lze vstoupit více způsoby — například naskenováním QR kódu v provozovně
                        Partnera nebo kliknutím na tlačítko na webu Partnera. Při vstupu přes QR kód či tlačítko
                        konkrétního Partnera se zobrazí nabídka Produktů tohoto Partnera.
                    </Clause>
                    <Clause n="2.8.">Provozovatel je oprávněn zapojit do plnění těchto Podmínek subdodavatele.</Clause>
                </Section>

                {/* 3. Registrace a uživatelský účet */}
                <Section id="3" title="Registrace a uživatelský účet">
                    <Clause n="3.1.">
                        Uživatel může objednávat Produkty se založeným uživatelským účtem nebo bez registrace.
                    </Clause>
                    <Clause n="3.2.">
                        Při vytvoření účtu je Uživatel povinen uvést správné a pravdivé údaje a udržovat je aktuální.
                    </Clause>
                    <Clause n="3.3.">
                        Přístup k účtu je zabezpečen uživatelským jménem a heslem. Uživatel je povinen chránit své
                        přístupové údaje a odpovídá za aktivity provedené na jeho účtu. Při podezření na zneužití hesla
                        je povinen neprodleně informovat Provozovatele. Provozovatel ani Partner neodpovídají za
                        zneužití účtu třetí osobou.
                    </Clause>
                    <Clause n="3.4.">
                        Uživatel má přístup ke svým údajům v příslušné sekci Aplikace Choice, kde je může upravovat.
                        Zásady zpracování osobních údajů jsou dostupné v sekci ochrany osobních údajů v Aplikaci Choice.
                    </Clause>
                    <Clause n="3.5.">
                        Uživateli je zakázáno používat Aplikaci Choice způsobem, který by mohl narušit, poškodit nebo
                        zhoršit kvalitu jejích služeb.
                    </Clause>
                    <Clause n="3.6.">
                        Aplikace nebo účet nemusí být dostupné po dobu nutné údržby, která nesmí trvat déle než 24 hodin
                        a nesmí se provádět častěji než jednou týdně.
                    </Clause>
                    <Clause n="3.7.">
                        Při podstatném porušení Podmínek nebo právních předpisů, případně neuhrazení dlužné částky, může
                        být přístup Uživatele pozastaven nebo ukončen s 14denní výpovědní lhůtou.
                    </Clause>
                    <Clause n="3.8.">
                        Podmínky se uzavírají na dobu neurčitou. Uživatel může kdykoli bez důvodu vypovědět užívání
                        Aplikace s okamžitou účinností smazáním účtu. Každá strana má dále právo vypovědět Podmínky s
                        výpovědní dobou 30 dnů.
                    </Clause>
                </Section>

                {/* 4. Prezentace produktů */}
                <Section id="4" title="Prezentace produktů">
                    <Clause n="4.1.">
                        Nabídka Produktů v Aplikaci Choice obsahuje označení, cenu, údaje o Partnerovi a případně cenu
                        balení a dodání. Prezentace může obsahovat podrobnější popis, vlastnosti a fotografie Produktu.
                    </Clause>
                    <Clause n="4.2.">
                        Prezentace Produktů představuje výzvu k podávání nabídek — Partner není povinen uzavřít kupní
                        smlouvu s Uživatelem.
                    </Clause>
                    <Clause n="4.3.">
                        Za správnost údajů o Produktech (ceny, popisky, dostupnost, velikosti, zobrazení) odpovídá
                        výlučně Partner jako prodejce konkrétního Produktu.
                    </Clause>
                    <Clause n="4.4.">
                        Produkty mohou obsahovat alergeny. Informace o přesném složení a alergenech v jednotlivých
                        jídlech Miska Ramen poskytne Partner na adrese provozovny nebo prostřednictvím kontaktních údajů
                        uvedených v Aplikaci Choice či na webu restaurace.
                    </Clause>
                </Section>

                {/* 5. Uzavření kupní smlouvy */}
                <Section id="5" title="Uzavření kupní smlouvy">
                    <Clause n="5.1.">
                        Produkty lze objednat prostřednictvím uživatelského účtu (při registraci) nebo vyplněním
                        objednávkového formuláře (bez registrace).
                    </Clause>
                    <Clause n="5.2.">
                        Při objednávce Uživatel zvolí Produkt a počet kusů a může až do odeslání objednávky kontrolovat
                        a měnit zadané údaje nebo objednávání kdykoli přerušit.
                    </Clause>
                    <Clause n="5.3.">
                        Objednávka se stává závaznou odesláním kliknutím na tlačítko „Objednat a zaplatit“.
                    </Clause>
                    <Clause n="5.4.">
                        Podmínkou platnosti objednávky je vyplnění povinných údajů a potvrzení, že se Uživatel seznámil
                        s těmito Podmínkami a Zásadami zpracování osobních údajů.
                    </Clause>
                    <Clause n="5.5.">
                        Odesláním objednávky Uživatel potvrzuje, že mu byly poskytnuty veškeré informace dle § 1811 a §
                        1820 Občanského zákoníku.
                    </Clause>
                    <Clause n="5.6.">
                        Po obdržení objednávky zašle Partner Uživateli potvrzení na uvedenou e-mailovou adresu. Kupní
                        smlouva je uzavřena přijetím objednávky Partnerem; při platbě předem je smlouva podmíněna
                        úhradou dle bodu 6.4.
                    </Clause>
                    <Clause n="5.7.">
                        Potvrzená objednávka je archivována jako uzavřená kupní smlouva a je Uživateli přístupná po
                        přihlášení do účtu.
                    </Clause>
                    <Clause n="5.8.">
                        Po přijetí objednávky Partnerem ji lze zrušit bez důvodu pouze po dohodě s Partnerem.
                    </Clause>
                    <Clause n="5.9.">
                        U služeb dle § 1829 Občanského zákoníku má spotřebitel právo odstoupit od smlouvy uzavřené
                        distančním způsobem ve lhůtě 14 dnů, a to jednoznačným prohlášením vůči Provozovateli, např.
                        e-mailem na{' '}
                        <a
                            href="mailto:info@choiceqr.com"
                            className="text-[#e55628] hover:text-[#ede3ca] transition-colors">
                            info@choiceqr.com
                        </a>
                        .
                    </Clause>

                    <div className="bg-[#1c1508] border border-[#2b2010] rounded-2xl p-5 md:p-6">
                        <p className="text-[#6b6052] text-xs uppercase tracking-wide mb-3">
                            5.10. Vzorový formulář pro odstoupení od smlouvy
                        </p>
                        <p className="text-[#ede3ca]">Choice QR s.r.o.</p>
                        <p>Na příkopě 857/18, Nové Město, 110 00 Praha 1</p>
                        <p className="mt-2">
                            Komu:{' '}
                            <a
                                href="mailto:info@choiceqr.com"
                                className="text-[#e55628] hover:text-[#ede3ca] transition-colors">
                                info@choiceqr.com
                            </a>
                        </p>
                        <p className="mt-3 italic text-[#8a7f6a]">
                            „Tímto odstupuji od poskytování služby Aplikace Choice.“
                        </p>
                        <p className="mt-3 text-[14px]">
                            Datum uzavření: [doplnit] <br />
                            Jméno a příjmení spotřebitele: [doplnit] <br />
                            Adresa spotřebitele: [doplnit] <br />
                            Datum a podpis: [doplnit]
                        </p>
                    </div>

                    <Clause n="5.11.">
                        Od smlouvy o poskytování služeb nelze odstoupit, byly-li v plném rozsahu poskytnuty s výslovným
                        souhlasem spotřebitele.
                    </Clause>
                    <Clause n="5.12.">
                        Protože jídlo objednané v Miska Ramen podléhá rychlé zkáze ve smyslu § 1837 písm. e) Občanského
                        zákoníku, nelze od takové kupní smlouvy odstoupit dle § 1829 Občanského zákoníku. Odstoupit lze
                        pouze v případě, že Partner porušil své smluvní povinnosti.
                    </Clause>
                    <Clause n="5.13.">
                        Uživatel souhlasí s použitím prostředků komunikace na dálku při uzavírání kupní smlouvy; náklady
                        s tím spojené (internetové připojení, telefonní hovory) hradí Uživatel sám podle základní sazby.
                    </Clause>
                </Section>

                {/* 6. Kupní cena a platby */}
                <Section id="6" title="Kupní cena a způsoby platby">
                    <Clause n="6.1.">
                        Ceny Produktů v Aplikaci Choice jsou uvedeny včetně DPH. Náklady na dodání a balení se liší
                        podle zvoleného způsobu dodání a úhrady.
                    </Clause>
                    <Clause n="6.2.">
                        Celková cena zahrnuje servisní poplatek Provozovatele za zprostředkování smlouvy; o celkové ceně
                        je Uživatel informován před uzavřením smlouvy.
                    </Clause>
                    <Clause n="6.3.">Platbu lze provést způsobem dle aktuální dostupnosti v Aplikaci:</Clause>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#e55628]">
                        <li>platba předem on-line platební kartou přes platební bránu;</li>
                        <li>platba při převzetí Produktu — hotovostně nebo platební kartou u Partnera.</li>
                    </ul>
                    <Clause n="6.4.">
                        Při platbě předem je Uživatel přesměrován na platební server třetí strany. Partner není povinen
                        přijmout objednávku ani dodat Produkt před úhradou kupní ceny (popř. zálohy). Platební bránu
                        provozuje externí poskytovatel plateb, kterého si Partner najal.
                    </Clause>
                </Section>

                {/* 7. Způsoby dodání */}
                <Section id="7" title="Způsoby dodání">
                    <Clause n="7.1.">Dodání objednaného Produktu může probíhat:</Clause>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#e55628]">
                        <li>osobním vyzvednutím Uživatelem v provozovně Partnera;</li>
                        <li>dodáním ke stolu v provozovně Partnera (po naskenování QR kódu na stole);</li>
                        <li>
                            dodáním na adresu uvedenou v objednávce, případně s využitím doručovací služby (s případným
                            příplatkem za dopravu).
                        </li>
                    </ul>
                    <Clause n="7.2.">
                        Při osobním vyzvednutí obdrží Uživatel oznámení, jakmile je Produkt připraven. Partner nebo
                        Provozovatel mohou ověřit totožnost Uživatele při vyzvednutí. Produkt je třeba vyzvednout ve
                        lhůtě uvedené v oznámení, nejpozději do konce provozní doby provozovny. Pokud Uživatel Produkt
                        nevyzvedne ve stanovené lhůtě, může Partner objednávku zrušit a naúčtovat plnou cenu jako
                        náhradu nákladů na přípravu. Při platbě až při převzetí může být v takovém případě užívání
                        Aplikace pozastaveno v souladu s bodem 3.7.
                    </Clause>
                </Section>

                {/* 8. Autorské právo */}
                <Section id="8" title="Autorské právo a související ujednání">
                    <Clause n="8.1.–8.3.">
                        Aplikace Choice je chráněna Autorským zákonem; veškerá práva k jejímu obsahu (grafika,
                        fotografie, ochranné známky, logo aj.) náleží Provozovateli, resp. jeho Partnerům. Kopírování,
                        úprava nebo jiné užití Aplikace bez souhlasu Provozovatele je zakázáno. Uživateli je poskytnuto
                        pouze právo užívání v souladu s účelem Podmínek.
                    </Clause>
                    <Clause n="8.4.">
                        Bez předchozího písemného souhlasu Provozovatele je zakázáno zejména: zpětně analyzovat
                        Aplikaci; odstraňovat autorská upozornění; vytvářet konkurenční produkt na základě Aplikace;
                        získávat neoprávněný přístup; narušovat funkčnost Aplikace; jednat v rozporu s právními předpisy
                        nebo právy třetích stran; šířit škodlivý kód či spam; narušovat zabezpečení Aplikace nebo
                        nepřiměřeně zatěžovat infrastrukturu Provozovatele.
                    </Clause>
                    <Clause n="8.5.">
                        Uživatel nesmí bez souhlasu Provozovatele používat data mining, roboty ani jiné nástroje k
                        opětovnému využití obsahu Aplikace, ani vytvářet vlastní databáze zahrnující podstatné části
                        obsahu (např. seznamy Produktů a ceny).
                    </Clause>
                    <Clause n="8.6.">
                        Uživatelé mohou v Aplikaci zveřejňovat recenze a další obsah, pokud není nezákonný, v rozporu s
                        dobrými mravy, ohrožuje veřejný pořádek, je klamavý, urážlivý nebo porušuje práva třetích osob.
                        Provozovatel si vyhrazuje právo takový obsah odstranit nebo upravit.
                    </Clause>
                    <Clause n="8.7.–8.11.">
                        Uživatel prohlašuje, že je oprávněn nakládat se zveřejněným obsahem a odpovídá za jeho
                        pravdivost. Zveřejněný obsah vyjadřuje názory Uživatele, nikoli Provozovatele. Uživatel může
                        svůj obsah kdykoli upravit nebo smazat. Zveřejněním obsahu uděluje Uživatel Provozovateli
                        nevýhradní, bezúplatné právo tento obsah užívat pro marketingové účely, a zavazuje se odškodnit
                        Provozovatele za nároky třetích osob vzniklé v souvislosti s tímto obsahem.
                    </Clause>
                    <Clause n="8.12.">
                        Podezření na porušení práv duševního vlastnictví lze oznámit písemně na{' '}
                        <a
                            href="mailto:info@choiceqr.com"
                            className="text-[#e55628] hover:text-[#ede3ca] transition-colors">
                            info@choiceqr.com
                        </a>
                        .
                    </Clause>
                </Section>

                {/* 9. Další práva a povinnosti uživatele */}
                <Section id="9" title="Další práva a povinnosti uživatele">
                    <Clause n="9.1.–9.2.">
                        Uživatel je povinen užívat Aplikaci Choice v souladu s těmito Podmínkami, platnými právními
                        předpisy a dobrými mravy a počínat si tak, aby nevznikla škoda Provozovateli ani třetím osobám.
                    </Clause>
                    <Clause n="9.3.–9.4.">
                        Při porušení Podmínek, které způsobí Provozovateli škodu, je Provozovatel oprávněn požadovat
                        náhradu škody včetně ušlého zisku a chránit svá práva prostředky dle Autorského zákona.
                    </Clause>
                    <Clause n="9.5.–9.6.">
                        Práva z vadného plnění v souvislosti s kupní smlouvou uplatňuje Uživatel přímo u Partnera (v
                        provozovně Miska Ramen či prostřednictvím kontaktních údajů Partnera). Tato práva se řídí § 1914
                        až 1925, § 2099 až 2117 a § 2161 až 2174 Občanského zákoníku a Zákonem o ochraně spotřebitele, s
                        ohledem na to, že se jedná o zboží podléhající rychlé zkáze určené k bezprostřední spotřebě.
                    </Clause>
                    <Clause n="9.7.–9.11.">
                        Má-li Aplikace Choice vadu, může Uživatel požadovat její odstranění, přiměřenou slevu, nebo za
                        podmínek stanovených zákonem odstoupit od smlouvy (např. pokud vada nebyla odstraněna v
                        přiměřené době nebo jde o podstatné porušení smlouvy). Odstoupí-li Uživatel od smlouvy, zdrží se
                        dalšího užívání digitálního obsahu. Finanční částky vrácené z důvodu vadného plnění budou
                        vyplaceny bez zbytečného odkladu, nejpozději do 14 dnů.
                    </Clause>
                </Section>

                {/* 10. Ochrana osobních údajů */}
                <Section id="10" title="Ochrana osobních údajů">
                    <Clause n="10.1.–10.2.">
                        Provozovatel zpracovává osobní údaje Uživatelů za účelem provozu Aplikace Choice v souladu s
                        GDPR a zákonem č. 110/2019 Sb. Podrobnosti naleznete v sekci ochrany osobních údajů Aplikace
                        Choice.
                    </Clause>
                    <Clause n="10.3.">
                        Partner (restaurace Miska Ramen) je nezávislým správcem osobních údajů s vlastními podmínkami
                        zpracování a je oprávněn sdílet osobní údaje Uživatelů s Provozovatelem. Podrobné informace o
                        zpracování osobních údajů restaurací Miska Ramen naleznete v naší{' '}
                        <Link href="/privacy-policy" className="text-[#e55628] hover:text-[#ede3ca] transition-colors">
                            Informaci o zpracování osobních údajů
                        </Link>
                        .
                    </Clause>
                </Section>

                {/* 11. Stížnosti a oznámení */}
                <Section id="11" title="Stížnosti a oznámení">
                    <Clause n="11.1.">
                        Stížnosti týkající se služeb, včetně oznámení o nezákonném obsahu, lze zasílat na{' '}
                        <a
                            href="mailto:info@choiceqr.com"
                            className="text-[#e55628] hover:text-[#ede3ca] transition-colors">
                            info@choiceqr.com
                        </a>
                        .
                    </Clause>
                    <Clause n="11.2.">Stížnost nebo oznámení musí obsahovat zejména:</Clause>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#e55628]">
                        <li>jméno fyzické osoby nebo název právnické osoby;</li>
                        <li>e-mailovou adresu a telefonní číslo;</li>
                        <li>přesný popis nesrovnalostí a datum jejich výskytu;</li>
                        <li>u oznámení nezákonného obsahu: podložené vysvětlení důvodů a prohlášení o dobré víře.</li>
                    </ul>
                    <Clause n="11.3.–11.4.">
                        Stížnost musí být podána do jednoho měsíce od poskytnutí služby nebo doručení faktury obsahující
                        nesrovnalost. Provozovatel poskytne rozhodnutí do 30 dnů od obdržení (ve složitých případech do
                        45 dnů, dle bodu 11.6).
                    </Clause>
                    <Clause n="11.5.">
                        Při omezení viditelnosti obsahu, plateb nebo poskytování služeb z důvodu nezákonnosti či
                        nesouladu s Podmínkami poskytne Provozovatel dotčenému příjemci jasné stanovisko v souladu s čl.
                        17.3 nařízení (EU) 2022/2065 (o digitálních službách).
                    </Clause>
                    <Clause n="11.7.">
                        Proti rozhodnutí dle bodu 11.4 se lze odvolat do 14 dnů na{' '}
                        <a
                            href="mailto:info@choiceqr.com"
                            className="text-[#e55628] hover:text-[#ede3ca] transition-colors">
                            info@choiceqr.com
                        </a>{' '}
                        s předmětem „Odvolání“.
                    </Clause>
                </Section>

                {/* 12. Závěrečná ustanovení */}
                <Section id="12" title="Závěrečná ustanovení">
                    <Clause n="12.1.–12.2.">
                        Veškerá ujednání se řídí právním řádem České republiky, s výhradou kogentních ustanovení na
                        ochranu spotřebitele dle země bydliště Uživatele v EU. Soudem s nevýlučnou místní příslušností
                        je soud sídla Partnera.
                    </Clause>

                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                        <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5">
                            <h3 className="text-[#ede3ca] font-semibold mb-1.5 text-[15px]">
                                Mimosoudní řešení spotřebitelských sporů
                            </h3>
                            <p className="text-[14px]">
                                Česká obchodní inspekce, Ústřední inspektorát – oddělení ADR, Štěpánská 44, 110 00 Praha
                                1. <br />
                                E-mail:{' '}
                                <a
                                    href="mailto:adr@coi.cz"
                                    className="text-[#e55628] hover:text-[#ede3ca] transition-colors">
                                    adr@coi.cz
                                </a>{' '}
                                · Web: adr.coi.cz
                            </p>
                        </div>
                        <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5">
                            <h3 className="text-[#ede3ca] font-semibold mb-1.5 text-[15px]">
                                Spory s mezinárodním prvkem
                            </h3>
                            <p className="text-[14px]">
                                Evropské spotřebitelské centrum ČR, Gorazdova 24, 120 00 Praha 2 — kontaktní místo dle
                                nařízení (EU) č. 524/2013 o řešení spotřebitelských sporů on-line.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#1c1508] border border-[#2b2010] rounded-2xl p-5 md:p-6 mt-6">
                        <p className="text-[#6b6052] text-xs uppercase tracking-wide mb-3">
                            12.5. Kontaktní údaje Provozovatele
                        </p>
                        <p>Adresa: Na příkopě 857/18, Nové Město, 110 00 Praha 1</p>
                        <p>
                            E-mail:{' '}
                            <a
                                href="mailto:info@choiceqr.com"
                                className="text-[#e55628] hover:text-[#ede3ca] transition-colors">
                                info@choiceqr.com
                            </a>
                        </p>
                        <p>Telefon: +420 774 950 798</p>
                    </div>

                    <Clause n="12.7.–12.8.">
                        Neplatnost či neúčinnost jednotlivého ustanovení nemá vliv na platnost ostatních ustanovení.
                        Provozovatel je oprávněn Podmínky jednostranně měnit zejména z důvodu změny právních předpisů,
                        zlepšení ochrany soukromí, prevence podvodů nebo změny rozsahu poskytovaných služeb.
                    </Clause>
                    <Clause n="12.9.">
                        Změnu Podmínek oznámí Provozovatel Uživateli alespoň 14 dní před nabytím účinnosti. Nevyjádří-li
                        Uživatel nesouhlas do data účinnosti změny, platí, že se změnou souhlasí.
                    </Clause>
                    <Clause n="12.10.">
                        Při vyhotovení Podmínek ve více jazykových verzích má v případě rozporu přednost znění v
                        anglickém jazyce.
                    </Clause>
                    <Clause n="12.11.">Tyto Podmínky nabyly platnosti a účinnosti dnem 1. 6. 2025.</Clause>
                </Section>

                {/* Footer nav back */}
                <div className="pt-10 border-t border-[#2b2010] flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
                    <span
                        onClick={router.back}
                        className="inline-flex items-center gap-2 text-[#b9ad99] hover:text-[#e55628] transition-colors text-[15px] font-medium">
                        <span aria-hidden>←</span> Back
                    </span>
                    <Link
                        href="/privacy-policy"
                        className="inline-flex items-center gap-2 text-[#b9ad99] hover:text-[#e55628] transition-colors text-[15px] font-medium">
                        Privacy Policy <span aria-hidden>→</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
