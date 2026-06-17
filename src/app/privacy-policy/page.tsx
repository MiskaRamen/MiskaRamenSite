'use client';

import { useRouter } from 'next/navigation';
import Section from '@/src/components/ui/Section';

const TOC = [
    { id: 'A', label: 'Rozsah osobních údajů' },
    { id: 'B', label: 'Účely zpracování' },
    { id: 'C', label: 'Sdílení osobních údajů' },
    { id: 'D', label: 'Vaše práva' },
    { id: 'E', label: 'Právo podat stížnost' },
    { id: 'F', label: 'Změny tohoto dokumentu' },
];

export default function PrivacyPolicyPage() {
    const router = useRouter();
    return (
        <main className="min-h-screen bg-[#120f08] text-[#ede3ca] font-sans relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2b2010_0%,#120f08_60%)] opacity-60 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 py-8 lg:px-10  md:py-12">
                {/* Header */}
                <span
                    onClick={router.back}
                    className="inline-flex items-center gap-2 my-8 text-[#b9ad99] hover:text-[#e55628] transition-colors text-[15px] font-medium">
                    <span aria-hidden>←</span> Zpět na hlavní stránku
                </span>
                <div className="mb-14 md:mb-20">
                    <p className="text-[#e55628] text-[11px] tracking-[0.2em] font-bold uppercase mb-4">プライバシー</p>
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                        Informace o zpracování
                        <br className="hidden sm:block" /> osobních údajů
                    </h1>
                    <p className="text-[#8a7f6a] text-base md:text-lg max-w-2xl">
                        Tento dokument vysvětluje, jak Miska Ramen zpracovává osobní údaje hostů v souvislosti s
                        rezervacemi, objednávkami a komunikací prostřednictvím našeho webu a platformy Choice.
                    </p>
                    <p className="text-[#6b6052] text-sm mt-6">Poslední aktualizace: 17. června 2026</p>
                </div>

                {/* Identification card */}
                <div className="bg-[#1c1508] border border-[#2b2010] rounded-3xl p-6 md:p-8 mb-14">
                    <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#ede3ca] mb-4">
                        Identifikace správce
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-[15px]">
                        <div>
                            <p className="text-[#6b6052] text-xs uppercase tracking-wide mb-1">Provozovatel</p>
                            <p className="text-[#ede3ca] font-medium">HAPPY NOODLES s.r.o.</p>
                            <p className="text-[#b9ad99]">obchodní značka Miska Ramen</p>
                        </div>
                        <div>
                            <p className="text-[#6b6052] text-xs uppercase tracking-wide mb-1">IČO</p>
                            <p className="text-[#ede3ca] font-medium">CZ07608268</p>
                        </div>
                        <div>
                            <p className="text-[#6b6052] text-xs uppercase tracking-wide mb-1">Sídlo</p>
                            <p className="text-[#ede3ca] font-medium">Nušlova 2268/1, 158 00 Praha</p>
                        </div>
                        <div>
                            <p className="text-[#6b6052] text-xs uppercase tracking-wide mb-1">Kontaktní e-mail</p>
                            <a
                                href="mailto:michal666@163.com"
                                className="text-[#e55628] font-medium hover:text-[#ede3ca] transition-colors">
                                michal666@163.com
                            </a>
                        </div>
                    </div>
                    <p className="text-[#8a7f6a] text-sm mt-5 pt-5 border-t border-[#2b2010]">
                        Provozujeme restaurace Miska Ramen na adresách{' '}
                        <span className="text-[#ede3ca]">Španělská 2, 120 00 Praha 2 (Vinohrady)</span> a{' '}
                        <span className="text-[#ede3ca]">Míšeňská 70/4, 118 00 Praha 1 (Malá Strana)</span>. (dále jen
                        „my“ nebo „restaurace“).
                    </p>
                </div>

                {/* Intro paragraph */}
                <p className="text-[#b9ad99] text-[15px] md:text-[16px] leading-relaxed mb-4">
                    Tímto dokumentem Vás informujeme, jakým způsobem zpracováváme Vaše osobní údaje jako správce
                    osobních údajů v souvislosti s návštěvou našeho webu, rezervací stolu a objednáváním v naší
                    restauraci prostřednictvím platformy Choice, provozované společností Choice QR s.r.o., IČO: 095 17
                    600, se sídlem Na příkopě 857/18, Nové Město, 110 00 Praha 1 („Choice“).
                </p>
                <p className="text-[#b9ad99] text-[15px] md:text-[16px] leading-relaxed mb-14">
                    Společnost Choice vystupuje v pozici zpracovatele osobních údajů na základě zpracovatelské smlouvy
                    uzavřené s naší restaurací a poskytuje technické řešení pro příjem a správu rezervací a objednávek.
                    Pro některé činnosti zpracování může Choice vystupovat také jako samostatný správce osobních údajů —
                    informace o tomto zpracování jsou dostupné přímo v platformě Choice. Veškeré zpracování probíhá v
                    souladu s nařízením Evropského parlamentu a Rady (EU) 2016/679 („GDPR“) a dalšími souvisejícími
                    předpisy.
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
                                    href={`#${item.id}`}
                                    className="group flex items-center gap-3 text-[#b9ad99] hover:text-[#ede3ca] transition-colors text-[15px]">
                                    <span className="text-[#e55628] font-bold text-sm w-4">{item.id}</span>
                                    <span className="group-hover:translate-x-0.5 transition-transform">
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* A. Rozsah osobních údajů */}
                <Section id="A" title="Rozsah osobních údajů">
                    <p>
                        V souvislosti s Vaší rezervací, objednávkou nebo komunikací s naší restaurací zpracováváme
                        následující kategorie osobních údajů:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#e55628]">
                        <li>
                            <span className="text-[#ede3ca]">Identifikační údaje</span> — Vaše jméno a příjmení.
                        </li>
                        <li>
                            <span className="text-[#ede3ca]">Kontaktní údaje</span> — e-mailová adresa, telefonní číslo
                            a případně adresa pro doručení.
                        </li>
                        <li>
                            <span className="text-[#ede3ca]">Informace o rezervacích a objednávkách</span> — zvolená
                            pobočka (Vinohrady / Malá Strana), datum a čas rezervace, počet osob, objednané zboží,
                            preference a případná zpětná vazba.
                        </li>
                        <li>
                            <span className="text-[#ede3ca]">Platební údaje</span> — informace související s platbou
                            (typ platby, potvrzení o platbě). Úplné údaje o platební kartě nezpracováváme — ty
                            zpracovává výhradně poskytovatel platební služby.
                        </li>
                        <li>
                            <span className="text-[#ede3ca]">Údaje o komunikaci</span> — obsah Vaší komunikace s námi
                            (dotazy, reklamace, připomínky) a technické údaje o návštěvě webu (např. typ zařízení,
                            prohlížeč) v rozsahu nezbytném pro jeho fungování.
                        </li>
                    </ul>
                </Section>

                {/* B. Účely zpracování */}
                <Section id="B" title="Účely zpracování osobních údajů">
                    <p>
                        Vaše osobní údaje zpracováváme pro níže popsané účely. U každého účelu naleznete rozsah
                        zpracovávaných údajů, právní základ a dobu uložení.
                    </p>

                    <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5 md:p-6 mt-6">
                        <h3 className="font-playfair text-lg font-bold text-[#ede3ca] mb-2">
                            B.1 Rezervace stolu a realizace objednávky
                        </h3>
                        <p>
                            Údaje zpracováváme za účelem přijetí a zpracování Vaší rezervace nebo objednávky, její
                            přípravy, případného doručení, komunikace o jejím stavu a vyřízení platby.
                        </p>
                        <p className="text-[#8a7f6a] text-[14px] mt-2">
                            Rozsah: Identifikační, Kontaktní údaje, Informace o rezervacích a objednávkách, Platební
                            údaje. <br />
                            Právní základ: plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR). <br />
                            Doba uložení: po dobu nezbytnou k vyřízení rezervace/objednávky a dále po přiměřenou dobu
                            pro případnou reklamaci, typicky po dobu zákonné záruční lhůty.
                        </p>
                    </div>

                    <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5 md:p-6 mt-4">
                        <h3 className="font-playfair text-lg font-bold text-[#ede3ca] mb-2">
                            B.2 Vedení účetnictví a plnění právních povinností
                        </h3>
                        <p>
                            Údaje zpracováváme za účelem plnění zákonných povinností, zejména v oblasti účetnictví,
                            daní, evidence tržeb a případné součinnosti s orgány veřejné moci.
                        </p>
                        <p className="text-[#8a7f6a] text-[14px] mt-2">
                            Rozsah: Identifikační, Kontaktní a Platební údaje. <br />
                            Právní základ: plnění právní povinnosti (čl. 6 odst. 1 písm. c) GDPR). <br />
                            Doba uložení: po dobu stanovenou právními předpisy (typicky až 10 let v oblasti účetnictví a
                            daní).
                        </p>
                    </div>

                    <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5 md:p-6 mt-4">
                        <h3 className="font-playfair text-lg font-bold text-[#ede3ca] mb-2">
                            B.3 Komunikace se zákazníky a vyřizování reklamací
                        </h3>
                        <p>
                            Údaje zpracováváme za účelem vyřízení Vašich dotazů, připomínek, stížností a reklamací
                            souvisejících s rezervací či objednávkou.
                        </p>
                        <p className="text-[#8a7f6a] text-[14px] mt-2">
                            Rozsah: Identifikační a Kontaktní údaje, Údaje o komunikaci. <br />
                            Právní základ: oprávněný zájem na řádné komunikaci a vyřízení reklamací (čl. 6 odst. 1 písm.
                            f) GDPR), případně plnění smlouvy. <br />
                            Doba uložení: po dobu potřebnou k vyřízení požadavku, následně typicky maximálně 1 rok.
                        </p>
                    </div>

                    <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5 md:p-6 mt-4">
                        <h3 className="font-playfair text-lg font-bold text-[#ede3ca] mb-2">
                            B.4 Ochrana práv a právních nároků
                        </h3>
                        <p>
                            Osobní údaje můžeme zpracovávat za účelem ochrany našich práv a právních nároků, včetně
                            obhajoby proti případným nárokům.
                        </p>
                        <p className="text-[#8a7f6a] text-[14px] mt-2">
                            Rozsah: údaje uvedené v části A, vždy v rozsahu nezbytném pro daný účel. <br />
                            Právní základ: oprávněný zájem na ochraně právních nároků (čl. 6 odst. 1 písm. f) GDPR).{' '}
                            <br />
                            Doba uložení: po dobu trvání promlčecích lhůt, standardně až 3 roky (v některých případech
                            až 10 let) od vzniku události.
                        </p>
                    </div>

                    <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5 md:p-6 mt-4">
                        <h3 className="font-playfair text-lg font-bold text-[#ede3ca] mb-2">
                            B.5 Obchodní sdělení a marketing
                        </h3>
                        <p>
                            Pokud jste naším zákazníkem, můžeme Vám zasílat obchodní sdělení týkající se našich služeb a
                            nabídek. Zasílání můžete kdykoli odmítnout přímo v každém e-mailu.
                        </p>
                        <p className="text-[#8a7f6a] text-[14px] mt-2">
                            Rozsah: Kontaktní údaje (e-mail). <br />
                            Právní základ: oprávněný zájem na přímém marketingu vůči stávajícím zákazníkům (čl. 6 odst.
                            1 písm. f) GDPR), případně Váš souhlas (je-li vyžadován).
                        </p>
                    </div>
                </Section>

                {/* C. Sdílení osobních údajů */}
                <Section id="C" title="Sdílení osobních údajů">
                    <p>Vaše osobní údaje mohou být sdíleny s následujícími příjemci:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#e55628]">
                        <li>
                            společnost <span className="text-[#ede3ca]">Choice QR s.r.o.</span> jako zpracovatel
                            poskytující technickou platformu pro rezervace a objednávky;
                        </li>
                        <li>poskytovatelé platebních služeb (zpracování plateb);</li>
                        <li>poskytovatelé doručovacích služeb (je-li relevantní);</li>
                        <li>poskytovatelé účetních a daňových služeb;</li>
                        <li>orgány veřejné moci a další subjekty, pokud nám tuto povinnost ukládá právní předpis.</li>
                    </ul>
                    <p>
                        Pokud sdílíme Vaše osobní údaje se zpracovateli ve třetích zemích (mimo EHP), činíme tak pouze
                        tehdy, pokud tyto osoby naplňují dostatečné záruky stanovené dle čl. 44 a násl. GDPR. Bližší
                        informace o případném předávání údajů mimo EHP v rámci platformy Choice naleznete v informacích
                        o zpracování osobních údajů společnosti Choice QR s.r.o.
                    </p>
                </Section>

                {/* D. Vaše práva */}
                <Section id="D" title="Vaše práva při zpracování">
                    <p>V souvislosti se zpracováním osobních údajů máte právo:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#e55628]">
                        <li>požadovat přístup k Vašim osobním údajům;</li>
                        <li>odvolat udělený souhlas se zpracováním;</li>
                        <li>požadovat opravu nepřesných nebo doplnění neúplných údajů;</li>
                        <li>požadovat výmaz osobních údajů („právo být zapomenut“);</li>
                        <li>požadovat omezení zpracování osobních údajů;</li>
                        <li>na přenositelnost osobních údajů;</li>
                        <li>vznést námitku proti zpracování osobních údajů;</li>
                        <li>podat stížnost u příslušného dozorového úřadu.</li>
                    </ul>

                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                        <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5">
                            <h3 className="text-[#ede3ca] font-semibold mb-1.5 text-[15px]">Právo na přístup</h3>
                            <p className="text-[14px]">
                                Máte právo získat potvrzení, zda zpracováváme Vaše osobní údaje, a pokud ano, přístup k
                                informacím o účelu, rozsahu a době zpracování, příjemcích a Vašich právech, včetně kopie
                                údajů.
                            </p>
                        </div>
                        <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5">
                            <h3 className="text-[#ede3ca] font-semibold mb-1.5 text-[15px]">Právo odvolat souhlas</h3>
                            <p className="text-[14px]">
                                Souhlas se zpracováním lze kdykoli odvolat. Odvolání souhlasu nemá vliv na oprávněnost
                                zpracování provedeného před jeho odvoláním.
                            </p>
                        </div>
                        <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5">
                            <h3 className="text-[#ede3ca] font-semibold mb-1.5 text-[15px]">Právo na opravu</h3>
                            <p className="text-[14px]">
                                Máte právo požadovat opravu nepřesných osobních údajů, případně doplnění neúplných
                                údajů.
                            </p>
                        </div>
                        <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5">
                            <h3 className="text-[#ede3ca] font-semibold mb-1.5 text-[15px]">Právo na výmaz</h3>
                            <p className="text-[14px]">
                                Máte právo na výmaz osobních údajů v případech stanovených GDPR. Toto právo nelze
                                uplatnit, pokud je zpracování nezbytné pro splnění právní povinnosti nebo obhajobu
                                právních nároků.
                            </p>
                        </div>
                        <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5">
                            <h3 className="text-[#ede3ca] font-semibold mb-1.5 text-[15px]">
                                Právo na omezení zpracování
                            </h3>
                            <p className="text-[14px]">
                                Máte právo požadovat omezení zpracování, například pokud popíráte přesnost údajů nebo
                                jste vznesli námitku proti zpracování.
                            </p>
                        </div>
                        <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5">
                            <h3 className="text-[#ede3ca] font-semibold mb-1.5 text-[15px]">Právo na přenositelnost</h3>
                            <p className="text-[14px]">
                                Máte právo získat osobní údaje, které zpracováváme automatizovaně na základě souhlasu
                                nebo smlouvy, ve strojově čitelném formátu.
                            </p>
                        </div>
                        <div className="bg-[#1c1508]/60 border border-[#2b2010] rounded-2xl p-5 sm:col-span-2">
                            <h3 className="text-[#ede3ca] font-semibold mb-1.5 text-[15px]">Právo na námitku</h3>
                            <p className="text-[14px]">
                                Máte právo vznést námitku proti zpracování, které provádíme na základě oprávněného
                                zájmu. Vaše údaje přestaneme zpracovávat, pokud neprokážeme závažné oprávněné důvody pro
                                pokračování zpracování, jež převažují nad Vašimi zájmy.
                            </p>
                        </div>
                    </div>

                    <p className="mt-6">
                        Ve všech otázkách souvisejících se zpracováním osobních údajů se na nás můžete obrátit na
                        e-mailu{' '}
                        <a
                            href="mailto:michal666@163.com"
                            className="text-[#e55628] hover:text-[#ede3ca] transition-colors">
                            michal666@163.com
                        </a>
                        .
                    </p>
                </Section>

                {/* E. Právo podat stížnost */}
                <Section id="E" title="Právo podat stížnost">
                    <p>
                        Vedle možnosti uplatnění Vašich práv přímo u naší restaurace máte právo podat stížnost u
                        příslušného dozorového úřadu, kterým je:
                    </p>
                    <div className="bg-[#1c1508] border border-[#2b2010] rounded-2xl p-5 md:p-6">
                        <p className="text-[#ede3ca] font-medium">Úřad pro ochranu osobních údajů</p>
                        <p>Pplk. Sochora 27, 170 00 Praha 7</p>
                    </div>
                </Section>

                {/* F. Změny */}
                <Section id="F" title="Změny těchto informací o zpracování">
                    <p>
                        Jsme oprávněni tyto informace o zpracování čas od času aktualizovat, proto je prosím pravidelně
                        kontrolujte. Jakékoli změny tohoto dokumentu zveřejníme na této stránce.
                    </p>
                </Section>

                {/* Footer nav back */}
                <div className="pt-10 border-t border-[#2b2010]">
                    <span
                        onClick={router.back}
                        className="inline-flex items-center gap-2 my-8 text-[#b9ad99] hover:text-[#e55628] transition-colors text-[15px] font-medium">
                        <span aria-hidden>←</span> Zpět na hlavní stránku
                    </span>
                </div>
            </div>
        </main>
    );
}
