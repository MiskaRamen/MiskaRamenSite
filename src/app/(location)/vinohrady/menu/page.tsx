import { products } from '@/src/data/menus/menu-vinohrady';
import { CategoryVinohrady } from '@/src/types/types';
import { MenuComponent } from '@/src/components/shared';

type Filter = 'all' | CategoryVinohrady;

const SECTIONS: { cat: CategoryVinohrady; eyebrow: string; title: string }[] = [
    { cat: 'starters', eyebrow: '前菜', title: 'Starters' },
    { cat: 'mapo-tofu', eyebrow: '麻婆豆腐', title: 'Mapo Tofu' },
    { cat: 'ramen', eyebrow: 'ラーメン', title: 'Ramen' },
    { cat: 'curry-udon', eyebrow: 'カレーうどん', title: 'Curry Udon' },
    { cat: 'curry-don', eyebrow: 'カレー丼', title: 'Curry Don' },
    { cat: 'dessert', eyebrow: 'デザート', title: 'Desserts' },
];

const TABS: { label: string; value: Filter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Starters', value: 'starters' },
    { label: 'Mapo Tofu', value: 'mapo-tofu' },
    { label: 'Ramen', value: 'ramen' },
    { label: 'Curry Udon', value: 'curry-udon' },
    { label: 'Curry Don', value: 'curry-don' },
    { label: 'Desserts', value: 'dessert' },
];

export default function Menu() {
    return (
        <main className="min-h-screen bg-[#120f08] text-[#ede3ca] font-sans antialiased pt-16">
            <MenuComponent TABS={TABS} SECTIONS={SECTIONS} products={products} />
        </main>
    );
}
