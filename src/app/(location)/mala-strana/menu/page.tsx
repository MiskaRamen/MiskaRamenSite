import { products } from '@/src/data/menus/menu-mala-strana';
import { CategoryMalaStrana } from '@/src/types/types';
import { MenuComponent } from '@/src/components/shared';

export type Filter = 'all' | CategoryMalaStrana;

export const SECTIONS: { cat: CategoryMalaStrana; eyebrow: string; title: string }[] = [
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
    { cat: 'extra-sides', eyebrow: '追加の具材', title: 'Extra Sides' },
    { cat: 'nigiri-2-pcs', eyebrow: '握り寿司', title: 'Nigiri (2 pcs)' },
    { cat: 'maki', eyebrow: '巻き寿司', title: 'Maki' },
    { cat: 'sashimi', eyebrow: '刺身', title: 'Sashimi' },
    { cat: 'sushi-roll', eyebrow: '寿司ロール', title: 'Sushi Roll' },
    { cat: 'futo-maki-10-pcs', eyebrow: '太巻き', title: 'Futo Maki' },
    { cat: 'sushi-set', eyebrow: '寿司セット', title: 'Sushi Set' },
    { cat: 'dessert', eyebrow: 'デザート', title: 'Desserts' },

    // ── Нові категорії їжі ──────────────────────────────
    { cat: 'mapo-tofu', eyebrow: '麻婆豆腐', title: 'Mapo Tofu' },
    { cat: 'salad-ramen', eyebrow: 'ラーメンサラダ', title: 'Salad Ramen' },
    { cat: 'poke', eyebrow: 'ポケ', title: 'Poke' },

    // ── Напої та алкоголь ──────────────────────────────
    { cat: 'draft-beer', eyebrow: '生ビール', title: 'Draft Beer' },
    { cat: 'bottled-beer', eyebrow: '瓶ビール', title: 'Bottled Beer' },
    { cat: 'sake', eyebrow: '日本酒', title: 'Sake' },
    { cat: 'white-wine', eyebrow: '白ワイン', title: 'White Wine' },
    { cat: 'red-wine', eyebrow: '赤ワイン', title: 'Red Wine' },
    { cat: 'sparkling-wine', eyebrow: 'スパークリングワイン', title: 'Sparkling Wine' },
    { cat: 'japanese-whisky', eyebrow: 'ウイスキー', title: 'Japanese Whisky' },
    { cat: 'czech-spirits', eyebrow: 'チェコ スピリッツ', title: 'Czech Spirits' },
    { cat: 'cocktails', eyebrow: 'カクテル', title: 'Cocktails' },
    { cat: 'matcha-drinks', eyebrow: '抹茶ドリンク', title: 'Matcha Drinks' },
    { cat: 'homemade-ice-tea', eyebrow: '自家製アイスティー', title: 'Homemade Ice Tea' },
    { cat: 'lemonades', eyebrow: 'レモネード', title: 'Lemonades' },
    { cat: 'tea-coffee', eyebrow: 'お茶とコーヒー', title: 'Tea & Coffee' },
    { cat: 'non-alcoholic', eyebrow: 'ソフトドリンク', title: 'Non-Alcoholic' },
];

export const TABS: { label: string; value: Filter }[] = [
    { label: 'All', value: 'all' },
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
    { label: 'Extra Sides', value: 'extra-sides' },
    { label: 'Nigiri', value: 'nigiri-2-pcs' },
    { label: 'Maki', value: 'maki' },
    { label: 'Sashimi', value: 'sashimi' },
    { label: 'Sushi Roll', value: 'sushi-roll' },
    { label: 'Futo Maki', value: 'futo-maki-10-pcs' },
    { label: 'Sushi Set', value: 'sushi-set' },
    { label: 'Desserts', value: 'dessert' },

    // ── Нові таби їжі ──────────────────────────────
    { label: 'Mapo Tofu', value: 'mapo-tofu' },
    { label: 'Salad Ramen', value: 'salad-ramen' },
    { label: 'Poke', value: 'poke' },

    // ── Напої та алкоголь ──────────────────────────────
    { label: 'Draft Beer', value: 'draft-beer' },
    { label: 'Bottled Beer', value: 'bottled-beer' },
    { label: 'Sake', value: 'sake' },
    { label: 'White Wine', value: 'white-wine' },
    { label: 'Red Wine', value: 'red-wine' },
    { label: 'Sparkling Wine', value: 'sparkling-wine' },
    { label: 'Japanese Whisky', value: 'japanese-whisky' },
    { label: 'Czech Spirits', value: 'czech-spirits' },
    { label: 'Cocktails', value: 'cocktails' },
    { label: 'Matcha Drinks', value: 'matcha-drinks' },
    { label: 'Ice Tea', value: 'homemade-ice-tea' },
    { label: 'Lemonades', value: 'lemonades' },
    { label: 'Tea & Coffee', value: 'tea-coffee' },
    { label: 'Non-Alcoholic', value: 'non-alcoholic' },
];

export default function Menu() {
    return (
        <main className="min-h-screen bg-[#120f08] text-[#ede3ca] font-sans antialiased pt-16">
            <MenuComponent TABS={TABS} SECTIONS={SECTIONS} products={products} />
        </main>
    );
}
