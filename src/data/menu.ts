import { OptionItem, Product, ProductOptions } from '@/src/types/types';

const EXTRAS: OptionItem[] = [
    { name: 'Half an egg', price: 25 },
    { name: 'Chilli oil', price: 25 },
    { name: 'Extra fresh chili', price: 25 },
    { name: 'Vegetables', price: 50 },
    { name: 'Tofu', price: 60 },
    { name: 'Pork neck', price: 65 },
    { name: 'Belly', price: 75 },
    { name: 'Pork minced meat', price: 65 },
    { name: 'Chicken', price: 60 },
    { name: 'Beef slices', price: 69 },
    { name: 'Beef cubes', price: 79 },
    { name: 'Karaage', price: 100 },
    { name: 'Chicken cutlet', price: 100 },
    { name: 'Pork katsu', price: 100 },
    { name: 'Narutomaki', price: 15 },
    { name: 'Wonton 1 pc', price: 23 },
    { name: 'Wonton 3 pcs', price: 60 },
];

const WITHOUT: OptionItem[] = [
    { name: 'Without egg', price: 0 },
    { name: 'Without onion', price: 0 },
    { name: 'Without corn', price: 0 },
    { name: 'Without pork', price: 0 },
];

const NOODLES: OptionItem[] = [
    { name: 'Udon', price: 10 },
    { name: 'Gluten-free noodles', price: 0 },
];

const ramenOptions: ProductOptions = {
    sections: [
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

export const products: Product[] = [
    // ── RAMEN ──────────────────────────────────────────────────────────
    {
        id: 1,
        cat: 'ramen',
        emoji: '🍜',
        name: 'Hakata Tonkotsu mlete maso',
        price: 289,
        desc: 'Creamy pork broth, wheat ramen noodles, soy sauce, marinated roasted pork neck, whole marinated egg, nori seaweed, spring onion, sesame seeds',
        allergens: [1, 3, 4, 6, 11],
        likes: 87,
        options: ramenOptions,
    },
    {
        id: 2,
        cat: 'ramen',
        emoji: '🍜',
        name: 'Tan Tan shoulder of pork',
        price: 299,
        desc: 'Creamy pork broth, wheat ramen noodles, soy sauce, black sesame, chili oil, minced pork, marinated egg, mung bean sprouts, bok choy',
        allergens: [1, 3, 4, 6, 11],
        likes: 124,
        options: ramenOptions,
    },
    {
        id: 3,
        cat: 'ramen',
        emoji: '🥣',
        name: 'Kimchi ramen beef',
        price: 349,
        desc: 'Pork or vegetable broth, wheat noodles, miso paste, onion, kimchi, mung bean sprouts, perilla, bamboo shoots, beef slices',
        allergens: [1, 3, 4, 6, 9, 11],
        likes: 96,
        options: ramenOptions,
    },
    {
        id: 4,
        cat: 'ramen',
        emoji: '🍜',
        name: 'Hakata Tonkotsu pork chops',
        price: 299,
        desc: 'Creamy pork broth, wheat ramen noodles, soy sauce, marinated roasted pork neck, whole marinated egg, nori seaweed, spring onion',
        allergens: [1, 3, 4, 6, 11],
        likes: 52,
        options: ramenOptions,
    },
    {
        id: 5,
        cat: 'ramen',
        emoji: '🥗',
        name: 'Vegetarian Miso',
        price: 269,
        desc: 'Vegetable broth, white miso paste, corn, bamboo shoots, bok choy, silken tofu, soft-boiled egg, nori, sesame oil',
        allergens: [1, 3, 6, 11],
        likes: 63,
        options: {
            sections: [
                {
                    title: 'Noodle change',
                    sub: 'Choose up to 1 additional item',
                    items: NOODLES,
                },
                {
                    title: 'Extra toppings',
                    sub: 'Choose addition',
                    items: [
                        { name: 'Extra tofu', price: 50 },
                        { name: 'Half an egg', price: 25 },
                        { name: 'Narutomaki', price: 15 },
                        { name: 'Chilli oil', price: 25 },
                    ],
                },
                { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
            ],
        },
    },
    {
        id: 6,
        cat: 'ramen',
        emoji: '🌶️',
        name: 'Spicy Chicken Ramen',
        price: 319,
        desc: 'Chicken broth, wheat noodles, chili oil, marinated chicken thigh, soft-boiled egg, mung bean sprouts, spring onion, sesame seeds',
        allergens: [1, 3, 4, 6],
        likes: 78,
        options: ramenOptions,
    },

    // ── SIDES ──────────────────────────────────────────────────────────
    {
        id: 7,
        cat: 'sides',
        emoji: '🥟',
        name: 'Gyoza (5 pcs)',
        price: 129,
        desc: 'Pan-fried pork and cabbage dumplings served with ponzu dipping sauce and chili oil',
        allergens: [1, 3, 6],
        likes: 108,
        options: {
            sections: [
                {
                    title: 'Sauce',
                    sub: 'Choose dipping sauce',
                    items: [
                        { name: 'Ponzu', price: 0 },
                        { name: 'Soy + ginger', price: 0 },
                        { name: 'Spicy miso', price: 0 },
                    ],
                },
            ],
        },
    },
    {
        id: 8,
        cat: 'sides',
        emoji: '🍗',
        name: 'Karaage',
        price: 149,
        desc: 'Japanese fried chicken marinated in soy, ginger and sake, served with kewpie mayo and fresh lemon',
        allergens: [1, 3, 6, 10],
        likes: 91,
        options: { sections: [] },
    },
    {
        id: 9,
        cat: 'sides',
        emoji: '🫛',
        name: 'Edamame',
        price: 79,
        desc: 'Steamed young soybeans with sea salt and sesame oil',
        allergens: [11],
        likes: 44,
        options: { sections: [] },
    },
    {
        id: 10,
        cat: 'sides',
        emoji: '🐙',
        name: 'Takoyaki (6 pcs)',
        price: 139,
        desc: 'Osaka-style octopus balls topped with takoyaki sauce, Japanese mayo, bonito flakes and nori powder',
        allergens: [1, 2, 3, 4, 7],
        likes: 69,
        options: { sections: [] },
    },

    // ── DRINKS ─────────────────────────────────────────────────────────
    {
        id: 11,
        cat: 'drinks',
        emoji: '🍵',
        name: 'Matcha Latte',
        price: 89,
        desc: 'Ceremonial-grade matcha whisked with steamed oat milk. Available hot or iced',
        allergens: [],
        likes: 57,
        options: {
            sections: [
                {
                    title: 'Temperature',
                    sub: 'Choose one',
                    items: [
                        { name: 'Hot', price: 0 },
                        { name: 'Iced', price: 0 },
                    ],
                },
                {
                    title: 'Milk',
                    sub: 'Choose one',
                    items: [
                        { name: 'Oat milk', price: 0 },
                        { name: 'Whole milk', price: 0 },
                        { name: 'Soy milk', price: 10 },
                    ],
                },
            ],
        },
    },
    {
        id: 12,
        cat: 'drinks',
        emoji: '🍋',
        name: 'Yuzu Lemonade',
        price: 69,
        desc: 'Japanese yuzu juice with fresh citrus, honey and sparkling water. Refreshing and bright',
        allergens: [],
        likes: 38,
        options: { sections: [] },
    },
    {
        id: 13,
        cat: 'drinks',
        emoji: '🍺',
        name: 'Asahi Super Dry',
        price: 79,
        desc: '330 ml cold Japanese lager. Crisp, dry finish — the perfect pair for spicy ramen',
        allergens: [1],
        likes: 112,
        options: { sections: [] },
    },
];
