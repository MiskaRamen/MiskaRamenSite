import { products } from '@/src/data/menus/menu-vinohrady';
import { CategoryVinohrady } from '@/src/types/types';
import { MenuComponent } from '@/src/components/shared';

export type Filter = 'all' | CategoryVinohrady;

export const SECTIONS: { cat: CategoryVinohrady; eyebrow: string; title: string }[] = [
    // ── Їжа ──────────────────────────────
    { cat: 'appetizers', eyebrow: '前菜', title: 'Appetizers' },
    { cat: 'hakata-tonkotsu', eyebrow: '博多豚骨', title: 'Hakata Tonkotsu' },
    { cat: 'tan-tan-ramen', eyebrow: '担々麺', title: 'Tan Tan Ramen' },
    { cat: 'kimchi-ramen', eyebrow: 'キムチラーメン', title: 'Kimchi Ramen' },
    { cat: 'sapporo-miso', eyebrow: '札幌味噌', title: 'Sapporo Miso' },
    { cat: 'gyokotsu-beef', eyebrow: '牛骨', title: 'Gyokotsu Beef' },
    { cat: 'tokyo-shoyu', eyebrow: '東京醤油', title: 'Tokyo Shoyu' },
    { cat: 'wonton-men', eyebrow: 'ワンタン麺', title: 'Wonton Men' },
    { cat: 'seafood-ramen', eyebrow: '魚介ラーメン', title: 'Seafood Ramen' },
    { cat: 'mazemen', eyebrow: 'まぜそば', title: 'Mazemen' },
    { cat: 'vegan-ramen', eyebrow: 'ヴィーガンラーメン', title: 'Vegan Ramen' },
    { cat: 'curry-don', eyebrow: 'カレー丼', title: 'Curry Don' },
    { cat: 'curry-udon', eyebrow: 'カレーうどん', title: 'Curry Udon' },
    { cat: 'mapo-tofu', eyebrow: '麻婆豆腐', title: 'Mapo Tofu' },

    // ── Десерти ──────────────────────────
    { cat: 'dessert', eyebrow: 'デザート', title: 'Desserts' },

    // ── Алкоголь та Напої ────────────────
    { cat: 'draft-beer', eyebrow: '生ビール', title: 'Draft Beer' },
    { cat: 'bottled-beer', eyebrow: '瓶ビール', title: 'Bottled Beer' },
    { cat: 'sake', eyebrow: '日本酒', title: 'Sake' },
    { cat: 'white-wine', eyebrow: '白ワイン', title: 'White Wine' },
    { cat: 'red-wine', eyebrow: '赤ワイン', title: 'Red Wine' },
    { cat: 'sparkling-wine', eyebrow: 'スパークリングワイン', title: 'Sparkling Wine' },
    { cat: 'japanese-whisky', eyebrow: 'ウイスキー', title: 'Japanese Whisky' },
    { cat: 'czech-spirits', eyebrow: 'チェコ スピリッツ', title: 'Czech Spirits' },
    { cat: 'cocktails', eyebrow: 'カクテル', title: 'Cocktails' },
    { cat: 'lemonades', eyebrow: 'レモネード', title: 'Lemonades' },
    { cat: 'tea-and-coffee', eyebrow: 'お茶とコーヒー', title: 'Tea & Coffee' },
    { cat: 'non-alcoholic-drinks', eyebrow: 'ソフトドリンク', title: 'Non-Alcoholic Drinks' },
];

export const TABS: { label: string; value: Filter }[] = [
    { label: 'All', value: 'all' },

    // ── Їжа ──────────────────────────────
    { label: 'Appetizers', value: 'appetizers' },
    { label: 'Hakata Tonkotsu', value: 'hakata-tonkotsu' },
    { label: 'Tan Tan Ramen', value: 'tan-tan-ramen' },
    { label: 'Kimchi Ramen', value: 'kimchi-ramen' },
    { label: 'Sapporo Miso', value: 'sapporo-miso' },
    { label: 'Gyokotsu Beef', value: 'gyokotsu-beef' },
    { label: 'Tokyo Shoyu', value: 'tokyo-shoyu' },
    { label: 'Wonton Men', value: 'wonton-men' },
    { label: 'Seafood Ramen', value: 'seafood-ramen' },
    { label: 'Mazemen', value: 'mazemen' },
    { label: 'Vegan Ramen', value: 'vegan-ramen' },
    { label: 'Curry Don', value: 'curry-don' },
    { label: 'Curry Udon', value: 'curry-udon' },
    { label: 'Mapo Tofu', value: 'mapo-tofu' },

    // ── Десерти ──────────────────────────
    { label: 'Desserts', value: 'dessert' },

    // ── Алкоголь та Напої ────────────────
    { label: 'Draft Beer', value: 'draft-beer' },
    { label: 'Bottled Beer', value: 'bottled-beer' },
    { label: 'Sake', value: 'sake' },
    { label: 'White Wine', value: 'white-wine' },
    { label: 'Red Wine', value: 'red-wine' },
    { label: 'Sparkling Wine', value: 'sparkling-wine' },
    { label: 'Japanese Whisky', value: 'japanese-whisky' },
    { label: 'Czech Spirits', value: 'czech-spirits' },
    { label: 'Cocktails', value: 'cocktails' },
    { label: 'Lemonades', value: 'lemonades' },
    { label: 'Tea & Coffee', value: 'tea-and-coffee' },
    { label: 'Non-Alcoholic', value: 'non-alcoholic-drinks' },
];
export default function Menu() {
    return (
        <main className="min-h-screen bg-[#120f08] text-[#ede3ca] font-sans antialiased pt-16">
            <MenuComponent TABS={TABS} SECTIONS={SECTIONS} products={products} />
        </main>
    );
}
