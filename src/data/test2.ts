// ============================================================
// OPTION TYPES
// ============================================================

interface OptionItem {
    name: string;
    price: number;
}

interface OptionSection {
    title: string;
    sub: string;
    items: OptionItem[];
}

interface ProductOptions {
    sections: OptionSection[];
}

// ============================================================
// CATEGORY TYPE
// ============================================================

type CategoryMalaStrana =
    | 'appetizers'
    | 'hakata-tonkotsu'
    | 'tan-tan-ramen'
    | 'kimchi-ramen'
    | 'sapporo-miso'
    | 'gyokotsu-beef'
    | 'tokyo-shoyu'
    | 'wonton-men'
    | 'seafood-ramen'
    | 'mazemen'
    | 'vegan-ramen'
    | 'curry-don'
    | 'curry-udon'
    | 'extra-sides'
    | 'sake'
    | 'dessert'
    | 'nigiri-2-pcs'
    | 'maki'
    | 'sashimi'
    | 'sushi-roll'
    | 'futo-maki-10-pcs'
    | 'sushi-set'
    // New categories added from PDF
    | 'mapo-tofu'
    | 'salad-ramen'
    | 'poke'
    | 'draft-beer'
    | 'bottled-beer'
    | 'white-wine'
    | 'red-wine'
    | 'sparkling-wine'
    | 'japanese-whisky'
    | 'czech-spirits'
    | 'non-alcoholic'
    | 'cocktails'
    | 'matcha-drinks'
    | 'homemade-ice-tea'
    | 'lemonades'
    | 'tea-coffee';

// ============================================================
// PRODUCT TYPE
// ============================================================

interface Product<T extends string> {
    id: number;
    cat: T;
    emoji: string;
    name: string;
    price: number;
    desc: string;
    allergens: number[];
    options: ProductOptions;
}

// ============================================================
// EXTRAS & OPTIONS CONSTANTS
// NOTE: Prices updated from PDF (pork neck 50, belly 60, chicken 50,
// beef slices 80, beef cubes 80, ground meat 50, ramen noodles extra 60)
// ============================================================

const EXTRAS: OptionItem[] = [
    { name: 'Half an egg', price: 25 },
    { name: 'Chilli oil', price: 25 },
    { name: 'Extra fresh chili', price: 25 },
    { name: 'Vegetables', price: 50 },
    { name: 'Rice', price: 50 },
    { name: 'Tofu', price: 60 },
    { name: 'Pork neck', price: 50 },
    { name: 'Belly', price: 60 },
    { name: 'Pork minced meat', price: 50 },
    { name: 'Chicken', price: 50 },
    { name: 'Beef slices', price: 80 },
    { name: 'Beef cubes', price: 80 },
    { name: 'Karaage', price: 100 },
    { name: 'Chicken katsu', price: 100 },
    { name: 'Pork katsu', price: 100 },
    { name: 'Narutomaki', price: 15 },
    { name: 'Wonton 1 pc', price: 23 },
    { name: 'Wonton 3 pcs', price: 60 },
    { name: 'Ramen noodles', price: 60 },
    { name: 'Sauce', price: 15 },
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

// Appetizer extras (gyoza, wonton, takoyaki, ebi fry, spring rolls, chicken skewers)
const APPETIZER_EXTRAS_GYOZA: OptionItem[] = [{ name: 'Extra 1 pc', price: 28 }];

const APPETIZER_EXTRAS_WONTON: OptionItem[] = [{ name: 'Extra 1 pc', price: 23 }];

const APPETIZER_EXTRAS_TAKOYAKI: OptionItem[] = [{ name: 'Extra 1 pc', price: 30 }];

const APPETIZER_EXTRAS_SPRING_ROLLS: OptionItem[] = [{ name: 'Extra 1 pc', price: 15 }];

const APPETIZER_EXTRAS_EBI_FRY: OptionItem[] = [{ name: 'Extra 1 pc', price: 30 }];

const APPETIZER_EXTRAS_CHICKEN_SKEWER: OptionItem[] = [{ name: 'Extra 1 pc', price: 20 }];

// Ramen protein options
const RAMEN_PROTEINS_HAKATA: OptionItem[] = [
    { name: 'Pork neck', price: 289 },
    { name: 'Pork belly', price: 299 },
    { name: 'Chicken', price: 289 },
    { name: 'Beef', price: 329 },
    { name: 'Ground meat', price: 289 },
];

const RAMEN_PROTEINS_KIMCHI: OptionItem[] = [
    { name: 'Pork belly', price: 305 },
    { name: 'Chicken', price: 299 },
    { name: 'Beef', price: 339 },
    { name: 'Pork neck', price: 299 },
    { name: 'Pork neck and pork belly', price: 315 },
];

const RAMEN_PROTEINS_SAPPORO: OptionItem[] = [
    { name: 'Pork belly', price: 305 },
    { name: 'Chicken', price: 299 },
    { name: 'Beef', price: 339 },
    { name: 'Pork neck', price: 299 },
    { name: 'Ground meat', price: 299 },
];

const RAMEN_PROTEINS_GYOKOTSU: OptionItem[] = [
    { name: 'Pork neck', price: 319 },
    { name: 'Pork belly', price: 329 },
    { name: 'Chicken', price: 319 },
    { name: 'Beef', price: 349 },
    { name: 'Ground meat', price: 319 },
];

const RAMEN_PROTEINS_WONTON: OptionItem[] = [
    { name: 'Pork neck', price: 349 },
    { name: 'Pork belly', price: 358 },
    { name: 'Chicken', price: 349 },
    { name: 'Beef', price: 379 },
    { name: 'Ground meat', price: 349 },
];

const RAMEN_PROTEINS_MAZEMEN: OptionItem[] = [
    { name: 'Beef', price: 319 },
    { name: 'Chicken', price: 289 },
    { name: 'Ground meat', price: 289 },
];

// Ramen options with protein selection
const hakataTonkotsuOptions: ProductOptions = {
    sections: [
        { title: 'Choose protein', sub: 'Select one protein', items: RAMEN_PROTEINS_HAKATA },
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

const tanTanRamenOptions: ProductOptions = {
    sections: [
        { title: 'Choose protein', sub: 'Select one protein', items: RAMEN_PROTEINS_HAKATA },
        {
            title: 'Spiciness',
            sub: 'Choose spice level',
            items: [
                { name: 'Mild', price: 0 },
                { name: 'Medium', price: 0 },
                { name: 'Hot', price: 0 },
                { name: 'Not spicy', price: 0 },
            ],
        },
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

const kimchiRamenOptions: ProductOptions = {
    sections: [
        { title: 'Choose protein', sub: 'Select one protein', items: RAMEN_PROTEINS_KIMCHI },
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

const sapporoMisoOptions: ProductOptions = {
    sections: [
        { title: 'Choose protein', sub: 'Select one protein', items: RAMEN_PROTEINS_SAPPORO },
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

const gyokotsuBeefOptions: ProductOptions = {
    sections: [
        { title: 'Choose protein', sub: 'Select one protein', items: RAMEN_PROTEINS_GYOKOTSU },
        {
            title: 'Spiciness',
            sub: 'Choose spice level',
            items: [
                { name: 'Mild', price: 0 },
                { name: 'Medium', price: 0 },
                { name: 'Hot', price: 0 },
                { name: 'Not spicy', price: 0 },
            ],
        },
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

const tokyoShoyuOptions: ProductOptions = {
    sections: [
        { title: 'Choose protein', sub: 'Select one protein', items: RAMEN_PROTEINS_HAKATA },
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

const wontonMenOptions: ProductOptions = {
    sections: [
        { title: 'Choose protein', sub: 'Select one protein', items: RAMEN_PROTEINS_WONTON },
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

const mazemenOptions: ProductOptions = {
    sections: [
        { title: 'Choose protein', sub: 'Select one protein', items: RAMEN_PROTEINS_MAZEMEN },
        {
            title: 'Spiciness',
            sub: 'Choose spice level',
            items: [
                { name: 'Mild', price: 0 },
                { name: 'Medium', price: 0 },
                { name: 'Hot', price: 0 },
                { name: 'Not spicy', price: 0 },
            ],
        },
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

// Vegan ramen options (no meat extras)
const VEGAN_EXTRAS: OptionItem[] = [
    { name: 'Half an egg', price: 25 },
    { name: 'Chilli oil', price: 25 },
    { name: 'Extra fresh chili', price: 25 },
    { name: 'Vegetables', price: 50 },
    { name: 'Tofu', price: 60 },
    { name: 'Ramen noodles', price: 60 },
];

const veganRamenOptions: ProductOptions = {
    sections: [
        {
            title: 'Spiciness',
            sub: 'Choose spice level',
            items: [
                { name: 'Mild', price: 0 },
                { name: 'Medium', price: 0 },
                { name: 'Hot', price: 0 },
                { name: 'Not spicy', price: 0 },
            ],
        },
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: VEGAN_EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

// No options (simple items)
const noOptions: ProductOptions = { sections: [] };

// ============================================================
// PRODUCTS ARRAY
// ============================================================

export const products: Product<CategoryMalaStrana>[] = [
    // ─── APPETIZERS ───────────────────────────────────────────

    {
        id: 1,
        cat: 'appetizers',
        emoji: '🫛',
        name: 'Edamame',
        price: 89,
        desc: 'Boiled soybeans served with coarse salt',
        allergens: [],
        options: noOptions,
    },
    {
        id: 2,
        cat: 'appetizers',
        emoji: '🍄',
        name: 'Shiitake',
        price: 95,
        desc: 'Sweet and sour pickled shiitake mushrooms in soy sauce with vinegar and ginger',
        allergens: [6],
        options: noOptions,
    },
    {
        id: 3,
        cat: 'appetizers',
        emoji: '🥬',
        name: 'Kimchi',
        price: 89,
        desc: 'Homemade fermented Chinese cabbage with chili and fish sauce (mildly spicy)',
        allergens: [4],
        options: noOptions,
    },
    {
        id: 4,
        cat: 'appetizers',
        emoji: '🥟',
        name: 'Gyoza 5 pcs / extra 1 pc 28,-',
        price: 155,
        desc: 'Japanese boiled dumplings with pork and Chinese cabbage or vegan with soy beans, peas and carrots',
        allergens: [1, 6],
        options: {
            sections: [{ title: 'Extra pieces', sub: 'Add extra gyoza', items: APPETIZER_EXTRAS_GYOZA }],
        },
    },
    {
        id: 5,
        cat: 'appetizers',
        emoji: '🥟',
        name: 'Gyoza Fried 5 pcs / extra 1 pc 28,-',
        price: 155,
        desc: 'Japanese fried dumplings with pork and Chinese cabbage or vegan with soy beans, peas and carrots',
        allergens: [1, 6],
        options: {
            sections: [{ title: 'Extra pieces', sub: 'Add extra gyoza', items: APPETIZER_EXTRAS_GYOZA }],
        },
    },
    {
        id: 6,
        cat: 'appetizers',
        emoji: '🥟',
        name: 'Wonton 5 pcs / extra 1 pc 23,-',
        price: 129,
        desc: 'Boiled dumplings with pork and shrimp in chicken broth with spices, seaweed, and cilantro',
        allergens: [1, 2, 4],
        options: {
            sections: [{ title: 'Extra pieces', sub: 'Add extra wonton', items: APPETIZER_EXTRAS_WONTON }],
        },
    },
    {
        id: 7,
        cat: 'appetizers',
        emoji: '🌿',
        name: 'Bamboo',
        price: 89,
        desc: 'Steamed bamboo shoots',
        allergens: [],
        options: noOptions,
    },
    {
        id: 8,
        cat: 'appetizers',
        emoji: '🐙',
        name: 'Takoyaki 6 pcs / extra 1 pc 30,-',
        price: 179,
        desc: 'Octopus fried in batter, served with slices of dried tuna or a vegan version',
        allergens: [1, 3, 4, 14],
        options: {
            sections: [{ title: 'Extra pieces', sub: 'Add extra takoyaki', items: APPETIZER_EXTRAS_TAKOYAKI }],
        },
    },
    {
        id: 9,
        cat: 'appetizers',
        emoji: '🌯',
        name: 'Spring Rolls 5 pcs / extra 1 pc 15,-',
        price: 68,
        desc: 'Traditional fried spring rolls with sweet chilli sauce',
        allergens: [1, 6],
        options: {
            sections: [{ title: 'Extra pieces', sub: 'Add extra spring rolls', items: APPETIZER_EXTRAS_SPRING_ROLLS }],
        },
    },
    {
        id: 10,
        cat: 'appetizers',
        emoji: '🍗',
        name: 'Karaage',
        price: 129,
        desc: 'Traditional Japanese fried chicken pieces',
        allergens: [1, 6],
        options: noOptions,
    },
    {
        id: 11,
        cat: 'appetizers',
        emoji: '🍤',
        name: 'Ebi Fry 5 pcs / extra 1 pc 30,-',
        price: 159,
        desc: 'Shrimp fried in batter and panko breadcrumbs',
        allergens: [1, 2],
        options: {
            sections: [{ title: 'Extra pieces', sub: 'Add extra ebi fry', items: APPETIZER_EXTRAS_EBI_FRY }],
        },
    },
    {
        id: 12,
        cat: 'appetizers',
        emoji: '🥗',
        name: 'Wakame',
        price: 99,
        desc: 'Seaweed salad',
        allergens: [],
        options: noOptions,
    },
    {
        id: 13,
        cat: 'appetizers',
        emoji: '🍢',
        name: 'Chicken Skewers 3 pcs / extra 1 pc 20,-',
        price: 109,
        desc: 'Fried chicken, salad',
        allergens: [1],
        options: {
            sections: [{ title: 'Extra pieces', sub: 'Add extra skewer', items: APPETIZER_EXTRAS_CHICKEN_SKEWER }],
        },
    },

    // ─── HAKATA TONKOTSU ────────────────────────────────────

    {
        id: 14,
        cat: 'hakata-tonkotsu',
        emoji: '🍜',
        name: 'Hakata Tonkotsu',
        price: 289,
        desc: 'Creamy pork broth, wheat ramen noodles, dashi fish broth, soy sauce, whole marinated egg, bamboo shoots, mung bean sprouts, nori seaweed, green onions, black oil of garlic and sesame',
        allergens: [1, 3, 4, 6, 11],
        options: hakataTonkotsuOptions,
    },

    // ─── TAN TAN RAMEN ──────────────────────────────────────

    {
        id: 15,
        cat: 'tan-tan-ramen',
        emoji: '🌶️',
        name: 'Tan Tan Ramen',
        price: 289,
        desc: 'Creamy pork broth, wheat ramen noodles, soy sauce, black sesame sauce, chili oil, marinated egg, mung bean sprouts, bok choy, green onions, sesame. Spiciness: mild/medium/hot/not spicy',
        allergens: [1, 3, 5, 6, 11],
        options: tanTanRamenOptions,
    },

    // ─── KIMCHI RAMEN ───────────────────────────────────────

    {
        id: 16,
        cat: 'kimchi-ramen',
        emoji: '🥬',
        name: 'Kimchi Ramen',
        price: 299,
        desc: 'Pork broth, wheat noodles, miso paste, onions, kimchi, mung bean sprouts, perilla, bamboo shoots, sesame, marinated egg, fish sauce (mildly spicy)',
        allergens: [1, 3, 4, 6, 11],
        options: kimchiRamenOptions,
    },

    // ─── SAPPORO MISO ───────────────────────────────────────

    {
        id: 17,
        cat: 'sapporo-miso',
        emoji: '🫙',
        name: 'Sapporo Miso',
        price: 299,
        desc: 'Pork broth, wheat noodles, miso, onions, Chinese cabbage, mung bean sprouts, spinach, wakame, corn, sesame, butter',
        allergens: [1, 3, 6, 7, 11],
        options: sapporoMisoOptions,
    },

    // ─── GYOKOTSU BEEF ──────────────────────────────────────

    {
        id: 18,
        cat: 'gyokotsu-beef',
        emoji: '🥩',
        name: 'Gyokotsu Beef',
        price: 319,
        desc: 'Beef bone broth, wheat noodles, Chinese cabbage, carrot, wakame seaweed, bok choy, butter, onions, sesame. Spiciness: mild/medium/hot/not spicy',
        allergens: [1, 3, 7, 11],
        options: gyokotsuBeefOptions,
    },

    // ─── TOKYO SHOYU ────────────────────────────────────────

    {
        id: 19,
        cat: 'tokyo-shoyu',
        emoji: '🍜',
        name: 'Tokyo Shoyu',
        price: 289,
        desc: 'Clear chicken broth, dashi fish broth, wheat noodles, soy sauce, whole marinated egg, arugula (rocket salad), wakame seaweed, spinach, green onions',
        allergens: [1, 3, 4, 6, 11],
        options: tokyoShoyuOptions,
    },

    // ─── WONTON MEN ─────────────────────────────────────────

    {
        id: 20,
        cat: 'wonton-men',
        emoji: '🥟',
        name: 'Wonton Men',
        price: 349,
        desc: 'Chicken and pork broth, wheat noodles, wonton 3 pcs (each extra for 23,-), marinated egg, onions, wakame, bok choy, narutomaki',
        allergens: [1, 2, 3, 4, 6],
        options: wontonMenOptions,
    },

    // ─── SEAFOOD RAMEN ──────────────────────────────────────

    {
        id: 21,
        cat: 'seafood-ramen',
        emoji: '🦐',
        name: 'Seafood Ramen',
        price: 358,
        desc: 'Chicken broth, dashi, wheat ramen noodles, ship tare (salty sauce), shrimp, clams, crab sticks, mussels, octopus, bamboo shoots, seaweed, green onions, roasted tomato',
        allergens: [2, 4, 14],
        options: ramenOptions,
    },

    // ─── MAZEMEN ────────────────────────────────────────────

    {
        id: 22,
        cat: 'mazemen',
        emoji: '🥢',
        name: 'Mazemen',
        price: 289,
        desc: '"Dry ramen" without broth, wheat ramen noodles, ground pork, sesame sauce, chili oil, roasted peanuts, half a marinated egg, pak choi, cucumber, cherry tomatoes, green onions. Spiciness: mild/medium/hot/not spicy',
        allergens: [1, 3, 5, 6, 11],
        options: mazemenOptions,
    },

    // ─── VEGAN RAMEN ────────────────────────────────────────

    {
        id: 23,
        cat: 'vegan-ramen',
        emoji: '🌱',
        name: 'Vegan Tantan Ramen',
        price: 269,
        desc: 'Vegetable broth, wheat noodles, soy sauce, black sesame, chili oil, onions, cabbage, bok choy, bean sprouts, corn, bamboo shoots, tofu. Spiciness: mild/medium/hot/not spicy',
        allergens: [1, 6, 11],
        options: veganRamenOptions,
    },
    {
        id: 24,
        cat: 'vegan-ramen',
        emoji: '🌱',
        name: 'Vegan Sapporo Miso Ramen',
        price: 288,
        desc: 'Vegetable broth, wheat noodles, miso sauce, onions, cabbage, mung bean sprouts, wakame, corn, arugula, bamboo shoots, tofu',
        allergens: [1, 6],
        options: veganRamenOptions,
    },
    {
        id: 25,
        cat: 'vegan-ramen',
        emoji: '🌱',
        name: 'Vegan Shoyu Ramen',
        price: 279,
        desc: 'Vegetable broth, wheat noodles, soy sauce, onions, cabbage, mung bean sprouts, wakame, corn, arugula, bamboo shoots, tofu',
        allergens: [1, 6],
        options: veganRamenOptions,
    },
    {
        id: 26,
        cat: 'vegan-ramen',
        emoji: '🌱',
        name: 'Vegan Mazemen',
        price: 269,
        desc: '"Dry ramen" without broth, ramen noodles, sesame sauce, bamboos, garlic, ginger, bok choy, cucumber, mung bean sprouts, green onions, tofu. Spiciness: mild/medium/hot/not spicy',
        allergens: [1, 6, 11],
        options: veganRamenOptions,
    },
    {
        id: 27,
        cat: 'vegan-ramen',
        emoji: '🌱',
        name: 'Vegan Kimchi Ramen (no pure vegan)',
        price: 299,
        desc: 'Vegetable broth, wheat noodles, miso sauce, onions, homemade fermented kimchi with chili, mung bean sprouts, perilla, corn, bamboo shoots, fish sauce, tofu (mildly spicy)',
        allergens: [1, 4, 6],
        options: veganRamenOptions,
    },

    // ─── CURRY UDON ─────────────────────────────────────────

    {
        id: 28,
        cat: 'curry-udon',
        emoji: '🍛',
        name: 'Curry Udon with Beef',
        price: 358,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, udon',
        allergens: [1, 3],
        options: noOptions,
    },
    {
        id: 29,
        cat: 'curry-udon',
        emoji: '🍛',
        name: 'Karaage Curry Udon',
        price: 318,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, udon with karaage chicken',
        allergens: [1, 3],
        options: noOptions,
    },
    {
        id: 30,
        cat: 'curry-udon',
        emoji: '🍛',
        name: 'Ebi Fry Curry Udon',
        price: 338,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, udon with fried shrimp',
        allergens: [1, 2, 3],
        options: noOptions,
    },
    {
        id: 31,
        cat: 'curry-udon',
        emoji: '🍛',
        name: 'Chicken Katsu Curry Udon',
        price: 329,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, udon with chicken katsu',
        allergens: [1, 3],
        options: noOptions,
    },
    {
        id: 32,
        cat: 'curry-udon',
        emoji: '🍛',
        name: 'Tofu Curry Udon',
        price: 308,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, udon with tofu',
        allergens: [1, 3, 6],
        options: noOptions,
    },

    // ─── CURRY DON ──────────────────────────────────────────

    {
        id: 33,
        cat: 'curry-don',
        emoji: '🍛',
        name: 'Curry Don with Beef',
        price: 348,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, rice',
        allergens: [3],
        options: noOptions,
    },
    {
        id: 34,
        cat: 'curry-don',
        emoji: '🍛',
        name: 'Karaage Curry Don',
        price: 308,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, rice with karaage chicken',
        allergens: [1, 3],
        options: noOptions,
    },
    {
        id: 35,
        cat: 'curry-don',
        emoji: '🍛',
        name: 'Ebi Fry Curry Don',
        price: 328,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, rice with fried shrimp',
        allergens: [1, 2, 3],
        options: noOptions,
    },
    {
        id: 36,
        cat: 'curry-don',
        emoji: '🍛',
        name: 'Chicken Katsu Curry Don',
        price: 319,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, rice with chicken katsu',
        allergens: [1, 3],
        options: noOptions,
    },
    {
        id: 37,
        cat: 'curry-don',
        emoji: '🍛',
        name: 'Tofu Curry Don',
        price: 298,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, rice with tofu',
        allergens: [3, 6],
        options: noOptions,
    },

    // ─── MAPO TOFU ──────────────────────────────────────────

    {
        id: 38,
        cat: 'mapo-tofu',
        emoji: '🫕',
        name: 'Vegan Mapo Tofu, Rice',
        price: 268,
        desc: 'Traditional Sichuan speciality – tofu in spicy bean sauce, served with rice',
        allergens: [6],
        options: noOptions,
    },
    {
        id: 39,
        cat: 'mapo-tofu',
        emoji: '🫕',
        name: 'Vegan Mapo Tofu, Udon',
        price: 278,
        desc: 'Traditional Sichuan speciality – tofu in spicy bean sauce, served with udon noodles',
        allergens: [1, 6],
        options: noOptions,
    },
    {
        id: 40,
        cat: 'mapo-tofu',
        emoji: '🫕',
        name: 'Mapo Tofu with Ground Meat, Rice',
        price: 328,
        desc: 'Traditional Sichuan speciality – tofu in spicy bean sauce with ground meat, served with rice',
        allergens: [6],
        options: noOptions,
    },
    {
        id: 41,
        cat: 'mapo-tofu',
        emoji: '🫕',
        name: 'Mapo Tofu with Ground Meat, Udon',
        price: 338,
        desc: 'Traditional Sichuan speciality – tofu in spicy bean sauce with ground meat, served with udon noodles',
        allergens: [1, 6],
        options: noOptions,
    },

    // ─── SALAD RAMEN ────────────────────────────────────────

    {
        id: 42,
        cat: 'salad-ramen',
        emoji: '🥗',
        name: 'Salad Ramen – Chicken',
        price: 299,
        desc: 'Ramen noodles, sesame sauce, mixed salad, arugula, cherry tomatoes, lime',
        allergens: [1, 6, 11],
        options: noOptions,
    },
    {
        id: 43,
        cat: 'salad-ramen',
        emoji: '🥗',
        name: 'Salad Ramen – Shrimp',
        price: 349,
        desc: 'Ramen noodles, sesame sauce, mixed salad, arugula, cherry tomatoes, lime',
        allergens: [1, 2, 6, 11],
        options: noOptions,
    },
    {
        id: 44,
        cat: 'salad-ramen',
        emoji: '🥗',
        name: 'Vegan Salad Ramen',
        price: 289,
        desc: 'Ramen noodles, sesame sauce, salad, arugula, cherry tomatoes, avocado, cucumber, corn, mung bean sprouts, lime',
        allergens: [1, 6, 11],
        options: noOptions,
    },
    {
        id: 45,
        cat: 'salad-ramen',
        emoji: '🥗',
        name: 'Mixed Salad (Vegan)',
        price: 239,
        desc: 'Avocado, cucumber, arugula, radish, cherry tomatoes, corn, apple salad juice',
        allergens: [],
        options: noOptions,
    },
    {
        id: 46,
        cat: 'salad-ramen',
        emoji: '🐟',
        name: 'Fried Salmon with Salads',
        price: 299,
        desc: 'Fried salmon, mixed salad, arugula, corn, cherry tomatoes, lemon, apple salad sauce, unagi sauce',
        allergens: [4],
        options: noOptions,
    },
    {
        id: 47,
        cat: 'salad-ramen',
        emoji: '🦐',
        name: 'Shrimp with Salads',
        price: 279,
        desc: 'Fried shrimp, mixed salad, arugula, corn, cherry tomatoes, lemon, eel sauce, apple salad sauce',
        allergens: [2],
        options: noOptions,
    },
    {
        id: 48,
        cat: 'salad-ramen',
        emoji: '🐍',
        name: 'Eels with Salads',
        price: 339,
        desc: 'Grilled eel, mixed salad, arugula, corn, cherry tomatoes, lemon, eel sauce, apple salad sauce',
        allergens: [4],
        options: noOptions,
    },
    {
        id: 49,
        cat: 'salad-ramen',
        emoji: '🍗',
        name: 'Chicken with Salads',
        price: 259,
        desc: 'Fried chicken, mixed salad, arugula, corn, cherry tomatoes, lemon, eel sauce, apple salad sauce',
        allergens: [4],
        options: noOptions,
    },

    // ─── POKE ───────────────────────────────────────────────

    {
        id: 50,
        cat: 'poke',
        emoji: '🥑',
        name: 'Poke Vegan',
        price: 319,
        desc: 'Sushi rice, Japanese mayonnaise, fried onion, mango, avocado, cucumber, edamame, arugula, tomatoes, Tornado, ginger',
        allergens: [3, 6, 11],
        options: noOptions,
    },
    {
        id: 51,
        cat: 'poke',
        emoji: '🐟',
        name: 'Poke Salmon',
        price: 369,
        desc: 'Sushi rice, salmon, Japanese mayonnaise, fried onion, mango, avocado, cucumber, edamame, arugula, tomatoes, Tornado, ginger',
        allergens: [3, 4, 6, 11],
        options: noOptions,
    },
    {
        id: 52,
        cat: 'poke',
        emoji: '🐟',
        name: 'Poke Tuna',
        price: 399,
        desc: 'Sushi rice, tuna, Japanese mayonnaise, fried onion, mango, avocado, cucumber, edamame, rocket, tomatoes, Tornado, ginger',
        allergens: [3, 4, 6, 11],
        options: noOptions,
    },
    {
        id: 53,
        cat: 'poke',
        emoji: '🦐',
        name: 'Poke Shrimp',
        price: 389,
        desc: 'Sushi rice, shrimp, Japanese mayonnaise, fried onion, mango, avocado, cucumber, edamame, arugula, tomatoes, Trumpet, ginger',
        allergens: [2, 3, 6, 11],
        options: noOptions,
    },
    {
        id: 54,
        cat: 'poke',
        emoji: '🐍',
        name: 'Poke Eel',
        price: 429,
        desc: 'Sushi rice, eel, Japanese mayonnaise, fried onion, mango, avocado, cucumber, edamame, rocket, tomatoes, Trumpet, ginger',
        allergens: [3, 4, 6, 11],
        options: noOptions,
    },
    {
        id: 55,
        cat: 'poke',
        emoji: '🐍',
        name: 'Unagi Don',
        price: 379,
        desc: 'Eel, avocado, red tobiko, Japan mayonnaise, unagi sauce',
        allergens: [3, 4, 6],
        options: noOptions,
    },
    {
        id: 56,
        cat: 'poke',
        emoji: '🐟',
        name: 'Salmon Don',
        price: 349,
        desc: 'Salmon, avocado, sushi rice, Japan mayonnaise, unagi sauce',
        allergens: [3, 4, 6],
        options: noOptions,
    },

    // ─── EXTRA SIDES ────────────────────────────────────────

    {
        id: 57,
        cat: 'extra-sides',
        emoji: '🍳',
        name: 'Half an egg',
        price: 25,
        desc: '',
        allergens: [3],
        options: noOptions,
    },
    {
        id: 58,
        cat: 'extra-sides',
        emoji: '🌶️',
        name: 'Chilli oil',
        price: 25,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 59,
        cat: 'extra-sides',
        emoji: '🌶️',
        name: 'Extra chilli fresh',
        price: 25,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 60,
        cat: 'extra-sides',
        emoji: '🥦',
        name: 'Vegetables',
        price: 50,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 61,
        cat: 'extra-sides',
        emoji: '🍚',
        name: 'Rice',
        price: 50,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 62,
        cat: 'extra-sides',
        emoji: '🍜',
        name: 'Ramen noodles',
        price: 60,
        desc: '',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 63,
        cat: 'extra-sides',
        emoji: '🍜',
        name: 'Udon noodles',
        price: 70,
        desc: '',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 64,
        cat: 'extra-sides',
        emoji: '🍜',
        name: 'Gluten-free noodles',
        price: 60,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 65,
        cat: 'extra-sides',
        emoji: '🫘',
        name: 'Tofu',
        price: 60,
        desc: '',
        allergens: [6],
        options: noOptions,
    },
    {
        id: 66,
        cat: 'extra-sides',
        emoji: '🥩',
        name: 'Pork neck',
        price: 50,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 67,
        cat: 'extra-sides',
        emoji: '🥓',
        name: 'Pork belly',
        price: 60,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 68,
        cat: 'extra-sides',
        emoji: '🍗',
        name: 'Chicken meat',
        price: 50,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 69,
        cat: 'extra-sides',
        emoji: '🥩',
        name: 'Beef slices',
        price: 80,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 70,
        cat: 'extra-sides',
        emoji: '🥩',
        name: 'Beef cubes',
        price: 80,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 71,
        cat: 'extra-sides',
        emoji: '🥩',
        name: 'Ground meat',
        price: 50,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 72,
        cat: 'extra-sides',
        emoji: '🍗',
        name: 'Karaage',
        price: 100,
        desc: '',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 73,
        cat: 'extra-sides',
        emoji: '🍗',
        name: 'Chicken katsu',
        price: 100,
        desc: '',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 74,
        cat: 'extra-sides',
        emoji: '🥩',
        name: 'Pork katsu',
        price: 100,
        desc: '',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 75,
        cat: 'extra-sides',
        emoji: '🍥',
        name: 'Narutomaki',
        price: 15,
        desc: '',
        allergens: [4],
        options: noOptions,
    },
    {
        id: 76,
        cat: 'extra-sides',
        emoji: '🫙',
        name: 'Sauce',
        price: 15,
        desc: '',
        allergens: [],
        options: noOptions,
    },

    // ─── DESSERTS ────────────────────────────────────────────

    {
        id: 77,
        cat: 'dessert',
        emoji: '🥞',
        name: 'Dorayaki',
        price: 89,
        desc: '',
        allergens: [1, 3, 7],
        options: noOptions,
    },
    {
        id: 78,
        cat: 'dessert',
        emoji: '🍡',
        name: 'Daifuku Matcha',
        price: 89,
        desc: '',
        allergens: [1, 7],
        options: noOptions,
    },
    {
        id: 79,
        cat: 'dessert',
        emoji: '🍈',
        name: 'Lichi',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 80,
        cat: 'dessert',
        emoji: '🍦',
        name: 'Matcha Ice Cream',
        price: 99,
        desc: '',
        allergens: [3, 7],
        options: noOptions,
    },

    // ─── NIGIRI (2 pcs) ─────────────────────────────────────

    {
        id: 81,
        cat: 'nigiri-2-pcs',
        emoji: '🍣',
        name: 'Sake Nigiri (salmon) 2 pcs',
        price: 119,
        desc: 'Salmon nigiri',
        allergens: [4, 11],
        options: noOptions,
    },
    {
        id: 82,
        cat: 'nigiri-2-pcs',
        emoji: '🍣',
        name: 'Maguro Nigiri (tuna) 2 pcs',
        price: 129,
        desc: 'Tuna nigiri',
        allergens: [4, 11],
        options: noOptions,
    },
    {
        id: 83,
        cat: 'nigiri-2-pcs',
        emoji: '🍣',
        name: 'Unagi Nigiri (eel) 2 pcs',
        price: 139,
        desc: 'Eel nigiri',
        allergens: [4, 11],
        options: noOptions,
    },
    {
        id: 84,
        cat: 'nigiri-2-pcs',
        emoji: '🍣',
        name: 'Avocado Nigiri 2 pcs',
        price: 89,
        desc: 'Avocado nigiri',
        allergens: [11],
        options: noOptions,
    },
    {
        id: 85,
        cat: 'nigiri-2-pcs',
        emoji: '🍣',
        name: 'Ebi Nigiri (shrimp) 2 pcs',
        price: 109,
        desc: 'Shrimp nigiri',
        allergens: [2, 11],
        options: noOptions,
    },
    {
        id: 86,
        cat: 'nigiri-2-pcs',
        emoji: '🍣',
        name: 'Sushi Nigiri 8 pcs',
        price: 419,
        desc: 'Assorted nigiri: salmon, tuna, eel, shrimp',
        allergens: [2, 4, 11],
        options: noOptions,
    },

    // ─── MAKI ───────────────────────────────────────────────

    {
        id: 87,
        cat: 'maki',
        emoji: '🌀',
        name: 'Avocado Maki',
        price: 109,
        desc: 'Avocado maki roll',
        allergens: [1, 11],
        options: noOptions,
    },
    {
        id: 88,
        cat: 'maki',
        emoji: '🌀',
        name: 'Kappa Maki (cucumber)',
        price: 99,
        desc: 'Cucumber maki roll',
        allergens: [1, 11],
        options: noOptions,
    },
    {
        id: 89,
        cat: 'maki',
        emoji: '🌀',
        name: 'Oshinko Maki (radish)',
        price: 99,
        desc: 'Radish maki roll',
        allergens: [1, 11],
        options: noOptions,
    },
    {
        id: 90,
        cat: 'maki',
        emoji: '🌀',
        name: 'Kani Maki (crab)',
        price: 109,
        desc: 'Crab maki roll',
        allergens: [1, 2, 11],
        options: noOptions,
    },
    {
        id: 91,
        cat: 'maki',
        emoji: '🌀',
        name: 'Sake Maki (salmon)',
        price: 149,
        desc: 'Salmon maki roll',
        allergens: [1, 4, 11],
        options: noOptions,
    },
    {
        id: 92,
        cat: 'maki',
        emoji: '🌀',
        name: 'Ebi Maki (shrimp)',
        price: 129,
        desc: 'Shrimp maki roll',
        allergens: [1, 2, 11],
        options: noOptions,
    },
    {
        id: 93,
        cat: 'maki',
        emoji: '🌀',
        name: 'Ebiten Maki (tempura shrimp)',
        price: 149,
        desc: 'Tempura shrimp maki roll',
        allergens: [1, 2, 11],
        options: noOptions,
    },
    {
        id: 94,
        cat: 'maki',
        emoji: '🌀',
        name: 'Maguro Maki (tuna)',
        price: 159,
        desc: 'Tuna maki roll',
        allergens: [1, 4, 11],
        options: noOptions,
    },
    {
        id: 95,
        cat: 'maki',
        emoji: '🌀',
        name: 'Oilfish Tobiko Maki',
        price: 159,
        desc: 'Oilfish fillet, red tobiko maki roll',
        allergens: [1, 4, 11],
        options: noOptions,
    },

    // ─── SASHIMI ────────────────────────────────────────────

    {
        id: 96,
        cat: 'sashimi',
        emoji: '🍣',
        name: 'Sashimi Sake 4 pcs (salmon)',
        price: 199,
        desc: 'Fresh salmon sashimi, 4 pieces',
        allergens: [4],
        options: noOptions,
    },
    {
        id: 97,
        cat: 'sashimi',
        emoji: '🍣',
        name: 'Sashimi Maguro 4 pcs (tuna)',
        price: 209,
        desc: 'Fresh tuna sashimi, 4 pieces',
        allergens: [4],
        options: noOptions,
    },
    {
        id: 98,
        cat: 'sashimi',
        emoji: '🍣',
        name: 'Sashimi Oilfish Fillet 4 pcs',
        price: 199,
        desc: 'Oilfish fillet sashimi, 4 pieces',
        allergens: [4],
        options: noOptions,
    },
    {
        id: 99,
        cat: 'sashimi',
        emoji: '🍣',
        name: 'Sashimi Mix 8 pcs',
        price: 319,
        desc: '4 pcs salmon, 2 pcs tuna, 2 pcs shrimp, 2 pcs eel',
        allergens: [2, 4],
        options: noOptions,
    },
    {
        id: 100,
        cat: 'sashimi',
        emoji: '🍣',
        name: 'Sashimi Set 16 pcs',
        price: 729,
        desc: 'Salmon, tuna, oilfish fillet, octopus, red tobiko',
        allergens: [4, 14],
        options: noOptions,
    },

    // ─── SUSHI ROLLS ────────────────────────────────────────

    {
        id: 101,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'California Sezam',
        price: 309,
        desc: 'Avocado, cucumber, salmon, Philadelphia cheese, sesame',
        allergens: [4, 7, 11],
        options: noOptions,
    },
    {
        id: 102,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'Spicy Maguro Roll',
        price: 389,
        desc: 'Tuna, avocado, cucumber, eel sauce, hot sauce',
        allergens: [4],
        options: noOptions,
    },
    {
        id: 103,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'California Tobiko Red',
        price: 349,
        desc: 'Avocado, cucumber, salmon, red tobiko, Japanese mayonnaise',
        allergens: [3, 4, 6],
        options: noOptions,
    },
    {
        id: 104,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'Sake Roll',
        price: 389,
        desc: 'Avocado, mango, salmon, Philadelphia, unagi sauce',
        allergens: [4, 7],
        options: noOptions,
    },
    {
        id: 105,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'Pink Roll',
        price: 349,
        desc: 'Salmon, avocado, cucumber, crab salad, red tobiko, Japanese mayonnaise',
        allergens: [2, 3, 4, 6],
        options: noOptions,
    },
    {
        id: 106,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'Rainbow Roll',
        price: 399,
        desc: 'Salmon, tuna, shrimp, eel, avocado, cucumber, Japanese mayonnaise, unagi sauce',
        allergens: [2, 3, 4, 6],
        options: noOptions,
    },
    {
        id: 107,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'Avocado Roll',
        price: 339,
        desc: 'Avocado, salmon, cucumber, Philadelphia, Japan mayonnaise, unagi sauce, sesame',
        allergens: [3, 4, 6, 7, 11],
        options: noOptions,
    },
    {
        id: 108,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'French Kiss Roll',
        price: 389,
        desc: 'Tempura shrimp, salmon, tuna, crab, avocado, cucumber, Philadelphia cheese, red tobiko, Japan mayonnaise, unagi sauce',
        allergens: [1, 2, 3, 4, 6, 7],
        options: noOptions,
    },
    {
        id: 109,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'Tempura Roll',
        price: 289,
        desc: 'Avocado, cucumber, tempura shrimp, sesame, unagi sauce',
        allergens: [1, 2, 11],
        options: noOptions,
    },
    {
        id: 110,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'Fusion Mix',
        price: 319,
        desc: 'Avocado, cucumber, crab, shrimp tempura, salmon, red tobiko, Japan mayonnaise, eel sauce',
        allergens: [1, 2, 3, 4, 6],
        options: noOptions,
    },
    {
        id: 111,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'Unagi Roll',
        price: 389,
        desc: 'Eel, shrimp tempura, avocado, cucumber, red tobiko, Japanese mayonnaise, eel sauce, sesame',
        allergens: [1, 2, 3, 4, 6, 11],
        options: noOptions,
    },
    {
        id: 112,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'Ebimayo Roll',
        price: 419,
        desc: 'Salmon, avocado, cucumber, tempura shrimp, Philadelphia, shrimp mayonnaise, curry sauce, eel sauce, tempura, red tobiko',
        allergens: [1, 2, 3, 4, 6, 7],
        options: noOptions,
    },
    {
        id: 113,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'Maguro Roll',
        price: 389,
        desc: 'Avocado, cucumber, tuna, mayonnaise, teriyaki sauce',
        allergens: [3, 4, 6],
        options: noOptions,
    },
    {
        id: 114,
        cat: 'sushi-roll',
        emoji: '🍱',
        name: 'Miska Roll',
        price: 409,
        desc: 'Salmon, avocado, cucumber, tempura shrimp, Philadelphia, shrimp mayonnaise, curry sauce, eel sauce, red tobiko, black tobiko',
        allergens: [1, 2, 3, 4, 6, 7],
        options: noOptions,
    },

    // ─── FUTO MAKI (10 pcs) ─────────────────────────────────

    {
        id: 115,
        cat: 'futo-maki-10-pcs',
        emoji: '🌀',
        name: 'Futo Maki 10 pcs',
        price: 359,
        desc: 'Avocado, cucumber, salmon, crab, radish',
        allergens: [1, 2, 4, 11],
        options: noOptions,
    },
    {
        id: 116,
        cat: 'futo-maki-10-pcs',
        emoji: '🌀',
        name: 'Fried Futo Maki 10 pcs',
        price: 389,
        desc: 'Avocado, cucumber, salmon, Philadelphia, arugula, green tobiko, red tobiko, unagi sauce',
        allergens: [1, 4, 7],
        options: noOptions,
    },

    // ─── SUSHI SETS ─────────────────────────────────────────

    {
        id: 117,
        cat: 'sushi-set',
        emoji: '🍱',
        name: 'Salmon Sushi Set 18 pcs',
        price: 409,
        desc: 'Salmon, avocado, cucumber, Japan mayonnaise',
        allergens: [3, 4, 6, 11],
        options: noOptions,
    },
    {
        id: 118,
        cat: 'sushi-set',
        emoji: '🍱',
        name: 'Tuna Sushi Set 18 pcs',
        price: 479,
        desc: 'Tuna, avocado, cucumber',
        allergens: [4, 11],
        options: noOptions,
    },
    {
        id: 119,
        cat: 'sushi-set',
        emoji: '🍱',
        name: 'Roll Maki Set 16 pcs',
        price: 309,
        desc: '4 pcs salmon maki, 4 pcs tuna maki, 4 pcs California sesame, 4 pcs California tobiko',
        allergens: [1, 4, 11],
        options: noOptions,
    },
    {
        id: 120,
        cat: 'sushi-set',
        emoji: '🍱',
        name: 'Vegan Sushi Set 15 pcs',
        price: 329,
        desc: 'Avocado, cucumber, octopus, arugula, salads, Philadelphia',
        allergens: [7, 11, 14],
        options: noOptions,
    },
    {
        id: 121,
        cat: 'sushi-set',
        emoji: '🍱',
        name: 'Gunkan Tobiko Sushi Set 4 pcs',
        price: 469,
        desc: 'Salmon, black tobiko, red tobiko',
        allergens: [4, 11],
        options: noOptions,
    },
    {
        id: 122,
        cat: 'sushi-set',
        emoji: '🍱',
        name: 'Maki Set 24 pcs',
        price: 499,
        desc: 'Salmon, tuna, tempura shrimp, cucumber',
        allergens: [1, 2, 4, 11],
        options: noOptions,
    },
    {
        id: 123,
        cat: 'sushi-set',
        emoji: '🍱',
        name: 'Salmon Sushi Maki Set 12 pcs',
        price: 299,
        desc: '8 pcs salmon maki, 4 pcs salmon nigiri',
        allergens: [1, 4, 11],
        options: noOptions,
    },
    {
        id: 124,
        cat: 'sushi-set',
        emoji: '🍱',
        name: 'Tuna & Salmon Sushi Maki Set 18 pcs',
        price: 319,
        desc: '8 pcs salmon maki, 8 pcs tuna maki, 1 pc salmon nigiri, 1 pc tuna nigiri',
        allergens: [1, 4, 11],
        options: noOptions,
    },
    {
        id: 125,
        cat: 'sushi-set',
        emoji: '🍱',
        name: 'Miska Sushi Set 48 pcs',
        price: 1589,
        desc: 'Salmon, tuna, shrimp, red tobiko, avocado, sesame, hot sauces',
        allergens: [2, 4, 11],
        options: noOptions,
    },
    {
        id: 126,
        cat: 'sushi-set',
        emoji: '🍱',
        name: 'Family Sushi Set 96 pcs',
        price: 3529,
        desc: 'Salmon, tuna, eel, shrimp, tempura shrimp, octopus, red tobiko, Japanese mayonnaise, cucumber, avocado, sesame, wakame salad, arugula',
        allergens: [1, 2, 3, 4, 6, 11, 14],
        options: noOptions,
    },
    {
        id: 127,
        cat: 'sushi-set',
        emoji: '🍱',
        name: 'Sushi Set 44 pcs',
        price: 1799,
        desc: '16 pcs nigiri, 8 pcs maki, 4 pcs California tobiko, 6 pcs futo maki, 10 pcs sashimi',
        allergens: [1, 2, 4, 7, 11],
        options: noOptions,
    },
    {
        id: 128,
        cat: 'sushi-set',
        emoji: '🍱',
        name: 'Sushi Set 47 pcs',
        price: 1499,
        desc: '24 pcs maki, 10 pcs nigiri, 10 pcs sushi roll, 3 pcs salmon sashimi',
        allergens: [1, 4, 11],
        options: noOptions,
    },
    {
        id: 129,
        cat: 'sushi-set',
        emoji: '🍱',
        name: 'Sushi Set 65 pcs',
        price: 1999,
        desc: '32 pcs maki, 16 pcs California roll, 5 pcs futo maki, 8 pcs salmon nigiri, 4 pcs salmon sashimi',
        allergens: [1, 4, 7, 11],
        options: noOptions,
    },

    // ─── SAKE ───────────────────────────────────────────────

    {
        id: 130,
        cat: 'sake',
        emoji: '🍶',
        name: 'Shochikubai Gokai Karakuchi 0.1l',
        price: 165,
        desc: 'Japanese sake 0.1l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 131,
        cat: 'sake',
        emoji: '🍶',
        name: 'Shochikubai Gokai Karakuchi 0.2l',
        price: 319,
        desc: 'Japanese sake 0.2l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 132,
        cat: 'sake',
        emoji: '🍶',
        name: 'Zaku Sake Negumi 0.1l',
        price: 175,
        desc: 'Japanese sake Negumi 0.1l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 133,
        cat: 'sake',
        emoji: '🍶',
        name: 'Zaku Sake Negumi 0.2l',
        price: 329,
        desc: 'Japanese sake Negumi 0.2l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 134,
        cat: 'sake',
        emoji: '🍶',
        name: 'Zaku Sake Kanade 0.1l',
        price: 185,
        desc: 'Japanese sake Kanade 0.1l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 135,
        cat: 'sake',
        emoji: '🍶',
        name: 'Zaku Sake Kanade 0.2l',
        price: 339,
        desc: 'Japanese sake Kanade 0.2l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 136,
        cat: 'sake',
        emoji: '🍶',
        name: 'Zaku Sake Miyabi 0.1l',
        price: 195,
        desc: 'Japanese sake Miyabi 0.1l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 137,
        cat: 'sake',
        emoji: '🍶',
        name: 'Zaku Sake Miyabi 0.2l',
        price: 369,
        desc: 'Japanese sake Miyabi 0.2l',
        allergens: [1],
        options: noOptions,
    },

    // ─── DRAFT BEER ─────────────────────────────────────────

    {
        id: 138,
        cat: 'draft-beer',
        emoji: '🍺',
        name: 'Budvar Výčepní 0.33l',
        price: 52,
        desc: 'Draft Budvar beer 0.33l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 139,
        cat: 'draft-beer',
        emoji: '🍺',
        name: 'Budvar Výčepní 0.5l',
        price: 67,
        desc: 'Draft Budvar beer 0.5l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 140,
        cat: 'draft-beer',
        emoji: '🍺',
        name: 'Budvar 33 0.33l',
        price: 50,
        desc: 'Budvar 33 draft beer 0.33l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 141,
        cat: 'draft-beer',
        emoji: '🍺',
        name: 'Budvar 33 0.5l',
        price: 65,
        desc: 'Budvar 33 draft beer 0.5l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 142,
        cat: 'draft-beer',
        emoji: '🍺',
        name: 'Budvar Dark 0.33l',
        price: 51,
        desc: 'Budvar dark lager 0.33l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 143,
        cat: 'draft-beer',
        emoji: '🍺',
        name: 'Budvar Dark 0.5l',
        price: 66,
        desc: 'Budvar dark lager 0.5l',
        allergens: [1],
        options: noOptions,
    },

    // ─── BOTTLED BEER & CIDER ────────────────────────────────

    {
        id: 144,
        cat: 'bottled-beer',
        emoji: '🍺',
        name: 'Budvar Non-Alcoholic 0.33l',
        price: 50,
        desc: 'Budvar non-alcoholic beer 0.33l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 145,
        cat: 'bottled-beer',
        emoji: '🍺',
        name: 'Asahi Super Dry 0.33l',
        price: 89,
        desc: 'Japanese Asahi Super Dry beer 0.33l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 146,
        cat: 'bottled-beer',
        emoji: '🍺',
        name: 'Sapporo 0.33l',
        price: 95,
        desc: 'Japanese Sapporo beer 0.33l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 147,
        cat: 'bottled-beer',
        emoji: '🍺',
        name: 'Kirin Ichiban 0.33l',
        price: 89,
        desc: 'Japanese Kirin Ichiban beer 0.33l',
        allergens: [1],
        options: noOptions,
    },
    {
        id: 148,
        cat: 'bottled-beer',
        emoji: '🍺',
        name: 'Tátův Sad Dry Cider 0.33l',
        price: 95,
        desc: 'Czech dry cider 0.33l',
        allergens: [],
        options: noOptions,
    },

    // ─── WHITE WINE ─────────────────────────────────────────

    {
        id: 149,
        cat: 'white-wine',
        emoji: '🥂',
        name: 'White Wine 0.1l',
        price: 66,
        desc: 'House white wine 0.1l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 150,
        cat: 'white-wine',
        emoji: '🥂',
        name: 'White Wine 0.2l',
        price: 99,
        desc: 'House white wine 0.2l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 151,
        cat: 'white-wine',
        emoji: '🥂',
        name: 'White Wine with Soda 0.2l',
        price: 70,
        desc: 'White wine spritzer 0.2l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 152,
        cat: 'white-wine',
        emoji: '🥂',
        name: 'White Wine Bottle 0.75l',
        price: 369,
        desc: 'House white wine bottle 0.75l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 153,
        cat: 'white-wine',
        emoji: '🥂',
        name: 'Cotes-du-Rhone France 0.75l',
        price: 655,
        desc: 'Cotes-du-Rhone France 0.75l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 154,
        cat: 'white-wine',
        emoji: '🥂',
        name: 'Luna Argenta Italy 0.75l',
        price: 618,
        desc: 'Luna Argenta Italy 0.75l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 155,
        cat: 'white-wine',
        emoji: '🥂',
        name: 'Borgo alla Terra Italy 0.75l',
        price: 618,
        desc: 'Borgo alla Terra Italy 0.75l',
        allergens: [12],
        options: noOptions,
    },

    // ─── RED WINE ───────────────────────────────────────────

    {
        id: 156,
        cat: 'red-wine',
        emoji: '🍷',
        name: 'Red Wine 0.1l',
        price: 65,
        desc: 'House red wine 0.1l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 157,
        cat: 'red-wine',
        emoji: '🍷',
        name: 'Red Wine 0.2l',
        price: 99,
        desc: 'House red wine 0.2l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 158,
        cat: 'red-wine',
        emoji: '🍷',
        name: 'Red Wine Bottle 0.75l',
        price: 369,
        desc: 'House red wine bottle 0.75l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 159,
        cat: 'red-wine',
        emoji: '🍷',
        name: 'Primitivo di Manduria Italy 0.75l',
        price: 698,
        desc: 'Primitivo di Manduria Italy 0.75l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 160,
        cat: 'red-wine',
        emoji: '🍷',
        name: 'Primitivo 365 D.O.P. Italy 0.75l',
        price: 898,
        desc: 'Primitivo 365 D.O.P. Italy 0.75l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 161,
        cat: 'red-wine',
        emoji: '🍷',
        name: 'Saga Bordeaux LAFITE France 0.75l',
        price: 838,
        desc: 'Saga Bordeaux LAFITE France 0.75l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 162,
        cat: 'red-wine',
        emoji: '🍷',
        name: 'Chateau Rozier France 0.75l',
        price: 1340,
        desc: 'Chateau Rozier France 0.75l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 163,
        cat: 'red-wine',
        emoji: '🍷',
        name: 'Bernard Magrez France 0.75l',
        price: 988,
        desc: 'Bernard Magrez France 0.75l',
        allergens: [12],
        options: noOptions,
    },

    // ─── SPARKLING WINE ─────────────────────────────────────

    {
        id: 164,
        cat: 'sparkling-wine',
        emoji: '🥂',
        name: 'Mionetto Prosecco Italy 0.75l',
        price: 588,
        desc: 'Mionetto Prosecco Italy 0.75l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 165,
        cat: 'sparkling-wine',
        emoji: '🥂',
        name: 'Voga Rosé Prosecco Italy 0.75l',
        price: 895,
        desc: 'Voga Rosé Prosecco Italy 0.75l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 166,
        cat: 'sparkling-wine',
        emoji: '🥂',
        name: 'G.H.Mumm Champagne France 0.75l',
        price: 2606,
        desc: 'G.H.Mumm champagne France 0.75l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 167,
        cat: 'sparkling-wine',
        emoji: '🥂',
        name: 'Freixenet Asti DOCG Italy 0.75l',
        price: 682,
        desc: 'Freixenet Asti DOCG Italy 0.75l',
        allergens: [12],
        options: noOptions,
    },

    // ─── JAPANESE WHISKY ────────────────────────────────────

    {
        id: 168,
        cat: 'japanese-whisky',
        emoji: '🥃',
        name: 'Akashi 0.04l',
        price: 169,
        desc: 'Akashi Japanese whisky 0.04l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 169,
        cat: 'japanese-whisky',
        emoji: '🥃',
        name: 'Nobushi 0.04l',
        price: 288,
        desc: 'Nobushi Japanese whisky 0.04l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 170,
        cat: 'japanese-whisky',
        emoji: '🥃',
        name: 'The Barrel 0.04l',
        price: 308,
        desc: 'The Barrel Japanese whisky 0.04l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 171,
        cat: 'japanese-whisky',
        emoji: '🥃',
        name: 'The Chita 0.04l',
        price: 308,
        desc: 'The Chita Japanese whisky 0.04l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 172,
        cat: 'japanese-whisky',
        emoji: '🥃',
        name: 'Toki Whisky 0.04l',
        price: 288,
        desc: 'Toki Japanese whisky 0.04l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 173,
        cat: 'japanese-whisky',
        emoji: '🥃',
        name: 'Hibiki 0.04l',
        price: 469,
        desc: 'Hibiki Japanese whisky 0.04l',
        allergens: [],
        options: noOptions,
    },

    // ─── CZECH SPIRITS ──────────────────────────────────────

    {
        id: 174,
        cat: 'czech-spirits',
        emoji: '🥃',
        name: 'Žufánek Pear Brandy 0.04l',
        price: 95,
        desc: 'Žufánek pear brandy 0.04l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 175,
        cat: 'czech-spirits',
        emoji: '🥃',
        name: 'Žufánek Apricot Brandy 0.04l',
        price: 95,
        desc: 'Žufánek apricot brandy 0.04l',
        allergens: [],
        options: noOptions,
    },

    // ─── NON-ALCOHOLIC ──────────────────────────────────────

    {
        id: 176,
        cat: 'non-alcoholic',
        emoji: '💧',
        name: 'Römerquelle Still Water 0.33l',
        price: 59,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 177,
        cat: 'non-alcoholic',
        emoji: '💧',
        name: 'Römerquelle Sparkling Water 0.33l',
        price: 59,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 178,
        cat: 'non-alcoholic',
        emoji: '💧',
        name: 'Römerquelle Still Water 0.75l',
        price: 99,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 179,
        cat: 'non-alcoholic',
        emoji: '💧',
        name: 'Römerquelle Sparkling Water 0.75l',
        price: 99,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 180,
        cat: 'non-alcoholic',
        emoji: '💧',
        name: 'Bottle of Tap Water 0.5l',
        price: 39,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 181,
        cat: 'non-alcoholic',
        emoji: '💧',
        name: 'Bottle of Tap Water 1l',
        price: 59,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 182,
        cat: 'non-alcoholic',
        emoji: '🥤',
        name: 'Coca Cola 0.33l',
        price: 65,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 183,
        cat: 'non-alcoholic',
        emoji: '🥤',
        name: 'Cola Zero 0.33l',
        price: 65,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 184,
        cat: 'non-alcoholic',
        emoji: '🥤',
        name: 'Fanta 0.33l',
        price: 65,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 185,
        cat: 'non-alcoholic',
        emoji: '🥤',
        name: 'Sprite 0.33l',
        price: 65,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 186,
        cat: 'non-alcoholic',
        emoji: '🫧',
        name: 'Ramune Strawberry 0.25l',
        price: 95,
        desc: 'Japanese Ramune soda – strawberry',
        allergens: [],
        options: noOptions,
    },
    {
        id: 187,
        cat: 'non-alcoholic',
        emoji: '🫧',
        name: 'Ramune Melon 0.25l',
        price: 95,
        desc: 'Japanese Ramune soda – melon',
        allergens: [],
        options: noOptions,
    },
    {
        id: 188,
        cat: 'non-alcoholic',
        emoji: '🫧',
        name: 'Ramune Blueberry 0.25l',
        price: 95,
        desc: 'Japanese Ramune soda – blueberry',
        allergens: [],
        options: noOptions,
    },

    // ─── COCKTAILS ──────────────────────────────────────────

    {
        id: 189,
        cat: 'cocktails',
        emoji: '🍹',
        name: 'Aperol Spritz 0.3l',
        price: 165,
        desc: 'Aperol Spritz cocktail 0.3l',
        allergens: [12],
        options: noOptions,
    },
    {
        id: 190,
        cat: 'cocktails',
        emoji: '🍹',
        name: 'Mojito 0.3l',
        price: 119,
        desc: 'Classic Mojito cocktail 0.3l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 191,
        cat: 'cocktails',
        emoji: '🍹',
        name: 'Virgin Mojito 0.3l',
        price: 85,
        desc: 'Non-alcoholic Mojito 0.3l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 192,
        cat: 'cocktails',
        emoji: '🍹',
        name: 'Cuba Libre 0.3l',
        price: 109,
        desc: 'Cuba Libre cocktail 0.3l',
        allergens: [],
        options: noOptions,
    },

    // ─── MATCHA DRINKS ──────────────────────────────────────

    {
        id: 193,
        cat: 'matcha-drinks',
        emoji: '🍵',
        name: 'Matcha Strawberry 0.3l',
        price: 109,
        desc: 'Matcha with strawberry 0.3l',
        allergens: [7],
        options: noOptions,
    },
    {
        id: 194,
        cat: 'matcha-drinks',
        emoji: '🍵',
        name: 'Matcha Mango 0.3l',
        price: 109,
        desc: 'Matcha with mango 0.3l',
        allergens: [7],
        options: noOptions,
    },
    {
        id: 195,
        cat: 'matcha-drinks',
        emoji: '🍵',
        name: 'Matcha Ice Latte 0.3l',
        price: 95,
        desc: 'Iced matcha latte 0.3l',
        allergens: [7],
        options: noOptions,
    },

    // ─── HOMEMADE ICE TEA ───────────────────────────────────

    {
        id: 196,
        cat: 'homemade-ice-tea',
        emoji: '🧊',
        name: 'Ice Tea Yuzu 0.4l',
        price: 89,
        desc: 'Homemade yuzu ice tea 0.4l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 197,
        cat: 'homemade-ice-tea',
        emoji: '🧊',
        name: 'Ice Tea Peach 0.4l',
        price: 89,
        desc: 'Homemade peach ice tea 0.4l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 198,
        cat: 'homemade-ice-tea',
        emoji: '🧊',
        name: 'Ice Tea Elderberry 0.4l',
        price: 89,
        desc: 'Homemade elderberry ice tea 0.4l',
        allergens: [],
        options: noOptions,
    },

    // ─── LEMONADES ──────────────────────────────────────────

    {
        id: 199,
        cat: 'lemonades',
        emoji: '🍋',
        name: 'Lemonade Raspberry 0.4l',
        price: 89,
        desc: 'Homemade raspberry lemonade 0.4l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 200,
        cat: 'lemonades',
        emoji: '🍋',
        name: 'Lemonade Ginger 0.4l',
        price: 89,
        desc: 'Homemade ginger lemonade 0.4l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 201,
        cat: 'lemonades',
        emoji: '🍋',
        name: 'Lemonade Lichi 0.4l',
        price: 89,
        desc: 'Homemade lychee lemonade 0.4l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 202,
        cat: 'lemonades',
        emoji: '🍋',
        name: 'Lemonade Kiwi & Pineapple 0.4l',
        price: 89,
        desc: 'Homemade kiwi and pineapple lemonade 0.4l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 203,
        cat: 'lemonades',
        emoji: '🍋',
        name: 'Lemonade Mango & Maracuja 0.4l',
        price: 89,
        desc: 'Homemade mango and passion fruit lemonade 0.4l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 204,
        cat: 'lemonades',
        emoji: '🍋',
        name: 'Lemonade Cucumber 0.4l',
        price: 89,
        desc: 'Homemade cucumber lemonade 0.4l',
        allergens: [],
        options: noOptions,
    },

    // ─── TEA & COFFEE ───────────────────────────────────────

    {
        id: 205,
        cat: 'tea-coffee',
        emoji: '🍵',
        name: 'Sencha Green Tea 0.3l',
        price: 95,
        desc: 'Japanese Sencha green tea 0.3l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 206,
        cat: 'tea-coffee',
        emoji: '🍵',
        name: 'Black Tea 0.3l',
        price: 79,
        desc: 'Black tea 0.3l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 207,
        cat: 'tea-coffee',
        emoji: '🍵',
        name: 'Fruit Tea 0.3l',
        price: 79,
        desc: 'Fruit tea 0.3l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 208,
        cat: 'tea-coffee',
        emoji: '🍵',
        name: 'Genmaicha Tea with Rice 0.3l',
        price: 95,
        desc: 'Japanese Genmaicha tea with roasted rice 0.3l',
        allergens: [],
        options: noOptions,
    },
    {
        id: 209,
        cat: 'tea-coffee',
        emoji: '☕',
        name: 'Espresso',
        price: 60,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 210,
        cat: 'tea-coffee',
        emoji: '☕',
        name: 'Espresso Macchiato',
        price: 65,
        desc: '',
        allergens: [7],
        options: noOptions,
    },
    {
        id: 211,
        cat: 'tea-coffee',
        emoji: '☕',
        name: 'Double Espresso',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 212,
        cat: 'tea-coffee',
        emoji: '☕',
        name: 'Cappuccino',
        price: 89,
        desc: '',
        allergens: [7],
        options: noOptions,
    },
    {
        id: 213,
        cat: 'tea-coffee',
        emoji: '☕',
        name: 'Flat White',
        price: 89,
        desc: '',
        allergens: [7],
        options: noOptions,
    },
    {
        id: 214,
        cat: 'tea-coffee',
        emoji: '☕',
        name: 'Caffé Latté',
        price: 89,
        desc: '',
        allergens: [7],
        options: noOptions,
    },
    {
        id: 215,
        cat: 'tea-coffee',
        emoji: '☕',
        name: 'Caffé Lungo',
        price: 65,
        desc: '',
        allergens: [],
        options: noOptions,
    },
];
