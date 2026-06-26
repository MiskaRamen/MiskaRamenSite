import { CategoryVinohrady, OptionItem, Product, ProductOptions } from '@/src/types/types';

// ── Extras (updated prices from PDF) ─────────────────────────
const EXTRAS: OptionItem[] = [
    { name: 'Half an egg', price: 25 },
    { name: 'Extra fresh chili', price: 25 },
    { name: 'Chilli oil', price: 25 },
    { name: 'Sauce', price: 15 },
    { name: 'Narutomaki', price: 15 },
    { name: 'Vegetables', price: 50 },
    { name: 'Rice', price: 50 },
    { name: 'Pork neck', price: 50 }, // was 65 → PDF: 50
    { name: 'Pork minced meat', price: 50 }, // was 65 → PDF: 50
    { name: 'Chicken', price: 50 }, // was 60 → PDF: 50
    { name: 'Ramen noodles', price: 60 },
    { name: 'Gluten-free noodles', price: 60 },
    { name: 'Tofu', price: 60 },
    { name: 'Belly', price: 60 }, // was 75 → PDF: 60
    { name: 'Wonton 1 pc', price: 23 },
    { name: 'Wonton 3 pcs', price: 60 },
    { name: 'Udon noodles', price: 70 },
    { name: 'Beef slices', price: 80 }, // was 69 → PDF: 80
    { name: 'Beef cubes', price: 80 }, // was 79 → PDF: 80
    { name: 'Karaage', price: 100 },
    { name: 'Chicken cutlet', price: 100 },
    { name: 'Pork katsu', price: 100 },
];

// ── Vegan-safe extras (no meat, no egg) ──────────────────────
const VEGAN_EXTRAS: OptionItem[] = [
    { name: 'Extra fresh chili', price: 25 },
    { name: 'Chilli oil', price: 25 },
    { name: 'Sauce', price: 15 },
    { name: 'Narutomaki', price: 15 },
    { name: 'Vegetables', price: 50 },
    { name: 'Rice', price: 50 },
    { name: 'Ramen noodles', price: 60 },
    { name: 'Gluten-free noodles', price: 60 },
    { name: 'Tofu', price: 60 },
    { name: 'Udon noodles', price: 70 },
];

// ── Noodle swap ───────────────────────────────────────────────
const NOODLES: OptionItem[] = [
    { name: 'Udon', price: 10 }, // +10 CZK surcharge
    { name: 'Gluten-free noodles', price: 0 },
];

// ── Removals ─────────────────────────────────────────────────
const WITHOUT: OptionItem[] = [
    { name: 'Without egg', price: 0 },
    { name: 'Without onion', price: 0 },
    { name: 'Without corn', price: 0 },
    { name: 'Without pork', price: 0 },
];

// ── Spiciness (Tan Tan / Gyokotsu / Mazemen) ─────────────────
const SPICINESS: OptionItem[] = [
    { name: 'Not spicy', price: 0 },
    { name: 'Mild', price: 0 },
    { name: 'Medium', price: 0 },
    { name: 'Hot', price: 0 },
];

// ── Per-piece appetizer extras ────────────────────────────────
const GYOZA_PIECE: OptionItem[] = [{ name: 'Extra piece', price: 28 }];
const WONTON_APP_PIECE: OptionItem[] = [{ name: 'Extra piece', price: 23 }];
const TAKOYAKI_PIECE: OptionItem[] = [{ name: 'Extra piece', price: 30 }];
const SPRING_ROLL_PIECE: OptionItem[] = [{ name: 'Extra piece', price: 15 }];
const EBI_FRY_PIECE: OptionItem[] = [{ name: 'Extra piece', price: 30 }];

// ── Extra wonton for Wonton Men ramen ────────────────────────
const EXTRA_WONTON: OptionItem[] = [{ name: 'Extra wonton', price: 23 }];

// ============================================================
// PRODUCT OPTIONS (reusable presets)
// ============================================================

// Standard ramen
const ramenOptions: ProductOptions = {
    sections: [
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

// Ramen with spiciness selector
const spicyRamenOptions: ProductOptions = {
    sections: [
        { title: 'Spiciness', sub: 'Choose spiciness level', items: SPICINESS },
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

// Wonton Men — has extra-wonton add-on
const wontonRamenOptions: ProductOptions = {
    sections: [
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra wonton', sub: 'Add extra wontons (23 CZK each)', items: EXTRA_WONTON },
        { title: 'Extra side dishes', sub: 'Choose addition', items: EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

// Vegan ramen (no meat in extras)
const veganRamenOptions: ProductOptions = {
    sections: [
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: VEGAN_EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

// Spicy vegan ramen (Vegan Tantan, Vegan Mazemen)
const spicyVeganRamenOptions: ProductOptions = {
    sections: [
        { title: 'Spiciness', sub: 'Choose spiciness level', items: SPICINESS },
        { title: 'Noodle change', sub: 'Choose up to 1 additional item', items: NOODLES },
        { title: 'Extra side dishes', sub: 'Choose addition', items: VEGAN_EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

// Mazemen (dry, no noodle swap — no broth)
const mazemenOptions: ProductOptions = {
    sections: [
        { title: 'Spiciness', sub: 'Choose spiciness level', items: SPICINESS },
        { title: 'Extra side dishes', sub: 'Choose addition', items: EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

// Vegan Mazemen (dry, vegan extras)
const veganMazemenOptions: ProductOptions = {
    sections: [
        { title: 'Spiciness', sub: 'Choose spiciness level', items: SPICINESS },
        { title: 'Extra side dishes', sub: 'Choose addition', items: VEGAN_EXTRAS },
        { title: 'Without', sub: 'Choose up to 4 additional items', items: WITHOUT },
    ],
};

// Gyoza / Gyoza Fried appetizers (extra pieces)
const gyozaOptions: ProductOptions = {
    sections: [{ title: 'Extra pieces', sub: 'Add extra pieces (28 CZK each)', items: GYOZA_PIECE }],
};

// Wonton appetizer (extra pieces)
const wontonAppOptions: ProductOptions = {
    sections: [{ title: 'Extra pieces', sub: 'Add extra pieces (23 CZK each)', items: WONTON_APP_PIECE }],
};

// Takoyaki (extra pieces)
const takoyakiOptions: ProductOptions = {
    sections: [{ title: 'Extra pieces', sub: 'Add extra pieces (30 CZK each)', items: TAKOYAKI_PIECE }],
};

// Spring Rolls (extra pieces)
const springRollOptions: ProductOptions = {
    sections: [{ title: 'Extra pieces', sub: 'Add extra pieces (15 CZK each)', items: SPRING_ROLL_PIECE }],
};

const ebiFryOptions: ProductOptions = {
    sections: [{ title: 'Extra pieces', sub: 'Add extra pieces (30 CZK each)', items: EBI_FRY_PIECE }],
};

const noOptions: ProductOptions = { sections: [] };

export const products: Product<CategoryVinohrady>[] = [
    // ──────────────────────────────────────────────────────────
    // APPETIZERS  (id 1–13)
    // ──────────────────────────────────────────────────────────
    {
        id: 1,
        cat: 'appetizers',
        emoji: '🫛',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/xVleOFb-EHaJFyz-SbzVibv.webp',
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
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/DHkHKLt-OCTfKLn-ZPHkJbb.webp',

        name: 'Shiitake',
        price: 95,
        desc: 'Sweet and sour pickled shiitake mushrooms in soy sauce with vinegar and ginger',
        allergens: [],
        options: noOptions,
    },
    {
        id: 3,
        cat: 'appetizers',
        emoji: '🥬',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/IuIfGOx-FNkeVDg-UPNJdHr.webp',

        name: 'Kimchi',
        price: 89,
        desc: 'Homemade fermented Chinese cabbage with chili and fish sauce (mildly spicy)',
        allergens: [],
        options: noOptions,
    },
    {
        id: 4,
        cat: 'appetizers',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1781815028/719812998_1813528069612783_8369397924761640886_n_mkztzq.png',
        emoji: '🥟',
        name: 'Gyoza 5 pcs',
        price: 155,
        desc: 'Japanese boiled dumplings with pork and Chinese cabbage or vegan with soy beans, peas and carrots',
        allergens: [],
        options: gyozaOptions,
    },
    {
        id: 5,
        cat: 'appetizers',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/a_-90/v1781815364/721994979_1407067354588091_4335460321582144382_n_xqbpaf.jpg',
        emoji: '🥟',
        name: 'Gyoza Fried 5 pcs',
        price: 155,
        desc: 'Japanese fried dumplings with pork and Chinese cabbage or vegan with soy beans, peas and carrots',
        allergens: [],
        options: gyozaOptions,
    },
    {
        id: 6,
        cat: 'appetizers',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/csrbigp-GwQDGmZ-IYeImHB.webp',
        emoji: '🥟',
        name: 'Wonton 5 pcs',
        price: 129,
        desc: 'Boiled dumplings with pork and shrimp in chicken broth with spices, seaweed and cilantro',
        allergens: [],
        options: wontonAppOptions,
    },
    {
        id: 7,
        cat: 'appetizers',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/ebHbjdE-UFXHTcU-yJhqGfH.webp',
        emoji: '🎋',
        name: 'Bamboo',
        price: 89,
        desc: 'Steamed bamboo shoots',
        allergens: [],
        options: noOptions,
    },
    {
        id: 8,
        cat: 'appetizers',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/WckfJsm-xkWoGZe-hieBaXG.webp',
        emoji: '🐙',
        name: 'Takoyaki 6 pcs',
        price: 179,
        desc: 'Octopus fried in batter, served with slices of dried tuna or a vegan version',
        allergens: [],
        options: takoyakiOptions,
    },
    {
        id: 9,
        cat: 'appetizers',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/OclQtsp-WdMayMJ-DIzybOD.webp',
        emoji: '🌯',
        name: 'Spring Rolls 5 pcs',
        price: 68,
        desc: 'Traditional fried spring rolls with sweet chili sauce',
        allergens: [],
        options: springRollOptions,
    },
    {
        id: 10,
        cat: 'appetizers',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/mkebtIe-IKjtbJI-AHIHDFH.webp',
        emoji: '🍗',
        name: 'Karaage',
        price: 129,
        desc: 'Traditional Japanese fried chicken pieces',
        allergens: [],
        options: noOptions,
    },
    {
        id: 11,
        cat: 'appetizers',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/UreaLkI-mmIElSm-ynYjFHu.webp',
        emoji: '🦐',
        name: 'Ebi Fry 5 pcs',
        price: 159,
        desc: 'Shrimp fried in batter and panko breadcrumbs',
        allergens: [],
        options: ebiFryOptions,
    },
    {
        id: 12,
        cat: 'appetizers',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/rZnEXTI-zbZUFpW-EmWdzMz.webp',
        emoji: '🥗',
        name: 'Wakame',
        price: 99,
        desc: 'Seaweed salad',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // HAKATA TONKOTSU  (id 14–20)
    // Creamy pork broth, wheat ramen noodles, dashi fish broth,
    // soy sauce, marinated egg, bamboo shoots, mung bean sprouts,
    // nori seaweed, green onions, black garlic oil, sesame
    // ──────────────────────────────────────────────────────────
    {
        id: 14,
        cat: 'hakata-tonkotsu',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/xhrNQkI-avsFCHJ-lroQagE.webp',
        emoji: '🍜',
        name: 'Hakata Tonkotsu – Pork Neck',
        price: 289,
        desc: 'Creamy pork broth, wheat ramen noodles, dashi fish broth, soy sauce, marinated egg, bamboo shoots, mung bean sprouts, nori seaweed, green onions, black garlic oil, sesame',
        allergens: [],
        options: ramenOptions,
    },
    {
        id: 15,
        cat: 'hakata-tonkotsu',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/SJNMCFI-DLglUbw-tyGmQKN.webp',
        emoji: '🍜',
        name: 'Hakata Tonkotsu – Pork Belly',
        price: 299,
        desc: 'Creamy pork broth, wheat ramen noodles, dashi fish broth, soy sauce, marinated egg, bamboo shoots, mung bean sprouts, nori seaweed, green onions, black garlic oil, sesame',
        allergens: [],
        options: ramenOptions,
    },
    {
        id: 16,
        cat: 'hakata-tonkotsu',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/kiGrjeD-WtzKsPz-GjyGhCx.webp',
        emoji: '🍜',
        name: 'Hakata Tonkotsu – Chicken',
        price: 289,
        desc: 'Creamy pork broth, wheat ramen noodles, dashi fish broth, soy sauce, marinated egg, bamboo shoots, mung bean sprouts, nori seaweed, green onions, black garlic oil, sesame',
        allergens: [],
        options: ramenOptions,
    },
    {
        id: 17,
        cat: 'hakata-tonkotsu',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/mvDdqsk-JYfPSaZ-GerHBQc.webp',
        emoji: '🍜',
        name: 'Hakata Tonkotsu – Beef',
        price: 329,
        desc: 'Creamy pork broth, wheat ramen noodles, dashi fish broth, soy sauce, marinated egg, bamboo shoots, mung bean sprouts, nori seaweed, green onions, black garlic oil, sesame',
        allergens: [],
        options: ramenOptions,
    },

    // ──────────────────────────────────────────────────────────
    // TAN TAN RAMEN  (id 21–25)
    // Spiciness: mild / medium / hot / not spicy
    // Creamy pork broth, wheat ramen noodles, soy sauce,
    // black sesame sauce, chili oil, marinated egg,
    // mung bean sprouts, bok choy, green onions, sesame
    // ──────────────────────────────────────────────────────────
    {
        id: 22,
        cat: 'tan-tan-ramen',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/fgKxqBb-CrMCZbe-NrPhqeL.webp',
        emoji: '🌶️',
        name: 'Tan Tan Ramen – Pork Belly',
        price: 299,
        desc: 'Spiciness: mild/medium/hot/not spicy. Creamy pork broth, wheat ramen noodles, soy sauce, black sesame sauce, chili oil, marinated egg, mung bean sprouts, bok choy, green onions, sesame',
        allergens: [],
        options: spicyRamenOptions,
    },
    {
        id: 23,
        cat: 'tan-tan-ramen',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/hxksOFH-lSQaioE-NDGbzgE.webp',
        emoji: '🌶️',
        name: 'Tan Tan Ramen – Chicken',
        price: 289,
        desc: 'Spiciness: mild/medium/hot/not spicy. Creamy pork broth, wheat ramen noodles, soy sauce, black sesame sauce, chili oil, marinated egg, mung bean sprouts, bok choy, green onions, sesame',
        allergens: [],
        options: spicyRamenOptions,
    },
    {
        id: 25,
        cat: 'tan-tan-ramen',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/GdzbbFy-SLEbdWU-rItCchU.webp',
        emoji: '🌶️',
        name: 'Tan Tan Ramen – Ground Meat',
        price: 289,
        desc: 'Spiciness: mild/medium/hot/not spicy. Creamy pork broth, wheat ramen noodles, soy sauce, black sesame sauce, chili oil, marinated egg, mung bean sprouts, bok choy, green onions, sesame',
        allergens: [],
        options: spicyRamenOptions,
    },

    // ──────────────────────────────────────────────────────────
    // KIMCHI RAMEN  (id 26–30)
    // Mildly spicy pork broth, wheat noodles, miso paste,
    // onions, kimchi, mung bean sprouts, perilla,
    // bamboo shoots, sesame, marinated egg, fish sauce
    // ──────────────────────────────────────────────────────────
    {
        id: 26,
        cat: 'kimchi-ramen',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/FkDRGWN-QHkcYkS-bnrnnmk.webp',
        emoji: '🥬',
        name: 'Kimchi Ramen – Pork Belly',
        price: 305,
        desc: 'Mildly spicy pork broth, wheat noodles, miso paste, onions, kimchi, mung bean sprouts, perilla, bamboo shoots, sesame, marinated egg, fish sauce',
        allergens: [],
        options: ramenOptions,
    },
    {
        id: 27,
        cat: 'kimchi-ramen',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/JJDpfsl-BleIynH-xRDjxie.webp',
        emoji: '🥬',
        name: 'Kimchi Ramen – Chicken',
        price: 299,
        desc: 'Mildly spicy pork broth, wheat noodles, miso paste, onions, kimchi, mung bean sprouts, perilla, bamboo shoots, sesame, marinated egg, fish sauce',
        allergens: [],
        options: ramenOptions,
    },

    // ──────────────────────────────────────────────────────────
    // SAPPORO MISO  (id 31–35)
    // Pork broth, wheat noodles, miso, onions, Chinese cabbage,
    // mung bean sprouts, spinach, wakame, corn, butter, sesame
    // ──────────────────────────────────────────────────────────
    {
        id: 35,
        cat: 'sapporo-miso',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/rcmAebj-JDeXkCW-ymItbMb.webp',
        emoji: '🍜',
        name: 'Sapporo Miso – Ground Meat',
        price: 299,
        desc: 'Pork broth, wheat noodles, miso, onions, Chinese cabbage, mung bean sprouts, spinach, wakame, corn, butter, sesame',
        allergens: [],
        options: ramenOptions,
    },

    // ──────────────────────────────────────────────────────────
    // GYOKOTSU BEEF  (id 36–40)
    // Spiciness: mild / medium / hot / not spicy
    // Beef bone broth, wheat noodles, Chinese cabbage, carrot,
    // wakame seaweed, bok choy, butter, onions, sesame
    // ──────────────────────────────────────────────────────────
    {
        id: 36,
        cat: 'gyokotsu-beef',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/kVCsdbW-VsTpJUK-XZbHdPc.webp',
        emoji: '🥩',
        name: 'Gyokotsu Beef – Pork Neck',
        price: 319,
        desc: 'Spiciness: mild/medium/hot/not spicy. Beef bone broth, wheat noodles, Chinese cabbage, carrot, wakame seaweed, bok choy, butter, onions, sesame',
        allergens: [],
        options: spicyRamenOptions,
    },
    {
        id: 37,
        cat: 'gyokotsu-beef',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/hukkckA-HCeIQNl-sVyoyrA.webp',
        emoji: '🥩',
        name: 'Gyokotsu Beef – Pork Belly',
        price: 329,
        desc: 'Spiciness: mild/medium/hot/not spicy. Beef bone broth, wheat noodles, Chinese cabbage, carrot, wakame seaweed, bok choy, butter, onions, sesame',
        allergens: [],
        options: spicyRamenOptions,
    },
    {
        id: 38,
        cat: 'gyokotsu-beef',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/wIHfoXL-lcHmEFB-bGVAIHa.webp',
        emoji: '🥩',
        name: 'Gyokotsu Beef – Chicken',
        price: 319,
        desc: 'Spiciness: mild/medium/hot/not spicy. Beef bone broth, wheat noodles, Chinese cabbage, carrot, wakame seaweed, bok choy, butter, onions, sesame',
        allergens: [],
        options: spicyRamenOptions,
    },
    {
        id: 39,
        cat: 'gyokotsu-beef',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/ulFGDOq-JdilJTa-lHGzNRH.webp',
        emoji: '🥩',
        name: 'Gyokotsu Beef – Beef',
        price: 349,
        desc: 'Spiciness: mild/medium/hot/not spicy. Beef bone broth, wheat noodles, Chinese cabbage, carrot, wakame seaweed, bok choy, butter, onions, sesame',
        allergens: [],
        options: spicyRamenOptions,
    },

    // ──────────────────────────────────────────────────────────
    // TOKYO SHOYU  (id 41–45)
    // Clear chicken broth, wheat noodles, dashi fish broth,
    // soy sauce, whole marinated egg, arugula,
    // wakame seaweed, spinach, green onions, sesame
    // ──────────────────────────────────────────────────────────
    {
        id: 41,
        cat: 'tokyo-shoyu',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/BRZyneG-oeAQpAM-lEeWlyV.webp',
        emoji: '🍜',
        name: 'Tokyo Shoyu – Pork Neck',
        price: 289,
        desc: 'Clear chicken broth, wheat noodles, dashi fish broth, soy sauce, whole marinated egg, arugula, wakame seaweed, spinach, green onions, sesame',
        allergens: [],
        options: ramenOptions,
    },
    {
        id: 42,
        cat: 'tokyo-shoyu',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/QaNMubr-aDUBbbh-hfqMHCI.webp',
        emoji: '🍜',
        name: 'Tokyo Shoyu – Pork Belly',
        price: 299,
        desc: 'Clear chicken broth, wheat noodles, dashi fish broth, soy sauce, whole marinated egg, arugula, wakame seaweed, spinach, green onions, sesame',
        allergens: [],
        options: ramenOptions,
    },
    {
        id: 43,
        cat: 'tokyo-shoyu',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/eEqYFVz-NrBSBat-PbINsdF.webp',
        emoji: '🍜',
        name: 'Tokyo Shoyu – Chicken',
        price: 289,
        desc: 'Clear chicken broth, wheat noodles, dashi fish broth, soy sauce, whole marinated egg, arugula, wakame seaweed, spinach, green onions, sesame',
        allergens: [],
        options: ramenOptions,
    },
    {
        id: 44,
        cat: 'tokyo-shoyu',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/FxcWxnH-bJtQHmy-jXfoezC.webp',
        emoji: '🍜',
        name: 'Tokyo Shoyu – Beef',
        price: 329,
        desc: 'Clear chicken broth, wheat noodles, dashi fish broth, soy sauce, whole marinated egg, arugula, wakame seaweed, spinach, green onions, sesame',
        allergens: [],
        options: ramenOptions,
    },

    // ──────────────────────────────────────────────────────────
    // WONTON MEN  (id 46–50)
    // Chicken and pork broth, wheat noodles, wonton 3 pcs
    // (each extra 23 CZK), marinated egg, onions,
    // wakame, bok choy, narutomaki
    // ──────────────────────────────────────────────────────────
    {
        id: 46,
        cat: 'wonton-men',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/wBxBvch-JRfSVwI-mniFumO.webp',
        emoji: '🥟',
        name: 'Wonton Men – Pork Neck',
        price: 349,
        desc: 'Chicken and pork broth, wheat noodles, wonton 3 pcs (each extra 23 CZK), marinated egg, onions, wakame, bok choy, narutomaki',
        allergens: [],
        options: wontonRamenOptions,
    },
    {
        id: 47,
        cat: 'wonton-men',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/GdMXXgl-BlePleC-bHKtBtI.webp',
        emoji: '🥟',
        name: 'Wonton Men – Pork Belly',
        price: 358,
        desc: 'Chicken and pork broth, wheat noodles, wonton 3 pcs (each extra 23 CZK), marinated egg, onions, wakame, bok choy, narutomaki',
        allergens: [],
        options: wontonRamenOptions,
    },
    {
        id: 48,
        cat: 'wonton-men',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/GhbHkPi-RxxrtGo-JbUgKYe.webp',
        emoji: '🥟',
        name: 'Wonton Men – Chicken',
        price: 349,
        desc: 'Chicken and pork broth, wheat noodles, wonton 3 pcs (each extra 23 CZK), marinated egg, onions, wakame, bok choy, narutomaki',
        allergens: [],
        options: wontonRamenOptions,
    },
    {
        id: 49,
        cat: 'wonton-men',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/bUaFHuQ-QaIclnc-vlqmIWC.webp',
        emoji: '🥟',
        name: 'Wonton Men – Beef',
        price: 379,
        desc: 'Chicken and pork broth, wheat noodles, wonton 3 pcs (each extra 23 CZK), marinated egg, onions, wakame, bok choy, narutomaki',
        allergens: [],
        options: wontonRamenOptions,
    },

    // ──────────────────────────────────────────────────────────
    // SEAFOOD RAMEN  (id 51)
    // ──────────────────────────────────────────────────────────
    {
        id: 51,
        cat: 'seafood-ramen',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/ufwleew-krsOmBv-cbnUlAJ.webp',
        emoji: '🦞',
        name: 'Seafood Ramen',
        price: 358,
        desc: 'Chicken broth, dashi, wheat ramen noodles, ship tare (salty sauce), shrimp, clams, crab sticks, mussels, octopus, bamboo shoots, seaweed, green onions, baked tomato',
        allergens: [],
        options: ramenOptions,
    },

    // ──────────────────────────────────────────────────────────
    // MAZEMEN  (id 52–54)
    // Spiciness: mild / medium / hot / not spicy
    // Dry ramen without broth, wheat ramen noodles,
    // ground pork, sesame sauce, chili oil, roasted peanuts,
    // half a marinated egg, pak choi, cucumber,
    // cherry tomatoes, green onions
    // ──────────────────────────────────────────────────────────
    {
        id: 54,
        cat: 'mazemen',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/RmMluwz-ilCJeIM-wWrutUJ.webp',
        emoji: '🥣',
        name: 'Mazemen – Ground Meat',
        price: 289,
        desc: 'Spiciness: mild/medium/hot/not spicy. Dry ramen without broth, wheat ramen noodles, ground pork, sesame sauce, chili oil, roasted peanuts, half a marinated egg, pak choi, cucumber, cherry tomatoes, green onions',
        allergens: [],
        options: mazemenOptions,
    },

    // ──────────────────────────────────────────────────────────
    // VEGAN RAMEN  (id 55–59)
    // ──────────────────────────────────────────────────────────
    {
        id: 55,
        cat: 'vegan-ramen',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/UgFiSJB-JiQhmGw-GuBGAKG.webp',
        emoji: '🌱',
        name: 'Vegan Tantan Ramen',
        price: 269,
        desc: 'Spiciness: mild/medium/hot/not spicy. Vegetable broth, wheat noodles, soy sauce, black sesame, chili oil, onions, cabbage, bok choy, bean sprouts, corn, bamboo shoots, tofu',
        allergens: [],
        options: spicyVeganRamenOptions,
    },
    {
        id: 56,
        cat: 'vegan-ramen',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1781817782/723330744_1312183977747898_3249690003944033741_n_kgr5wr.png',
        emoji: '🌱',
        name: 'Vegan Sapporo Miso Ramen',
        price: 288,
        desc: 'Vegetable broth, wheat noodles, miso sauce, onions, cabbage, mung bean sprouts, wakame, corn, arugula, bamboo shoots, tofu',
        allergens: [],
        options: veganRamenOptions,
    },
    {
        id: 57,
        cat: 'vegan-ramen',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/zFLbYec-CUhDpfK-bBJfwHv.webp',
        emoji: '🌱',
        name: 'Vegan Shoyu Ramen',
        price: 279,
        desc: 'Vegetable broth, wheat noodles, soy sauce, onions, cabbage, mung bean sprouts, wakame, corn, arugula, bamboo shoots, tofu',
        allergens: [],
        options: veganRamenOptions,
    },
    {
        id: 58,
        cat: 'vegan-ramen',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/dQAQelp-nCcGEkh-seLrnuq.webp',
        emoji: '🌱',
        name: 'Vegan Mazemen',
        price: 269,
        desc: 'Spiciness: mild/medium/hot/not spicy. Dry ramen without broth, ramen noodles, sesame sauce, bamboo shoots, garlic, ginger, bok choy, cucumber, mung bean sprouts, green onions, tofu',
        allergens: [],
        options: veganMazemenOptions,
    },
    {
        id: 59,
        cat: 'vegan-ramen',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/GXYLIeH-sEAiPJH-SegmjbF.webp',
        emoji: '🌿',
        name: 'Vegan Kimchi Ramen (not pure vegan)',
        price: 299,
        desc: 'Mildly spicy. Vegetable broth, wheat noodles, miso sauce, onions, homemade fermented kimchi with chili, mung bean sprouts, perilla, corn, bamboo shoots, fish sauce, tofu',
        allergens: [],
        options: veganRamenOptions,
    },

    // ──────────────────────────────────────────────────────────
    // CURRY UDON  (id 60–65)
    // Japanese curry, potatoes, carrots, onion, egg, udon
    // ──────────────────────────────────────────────────────────
    {
        id: 60,
        cat: 'curry-udon',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/Qpxeukb-krXIiuN-maDMRYO.webp',
        emoji: '🍛',
        name: 'Curry Udon with Beef',
        price: 358,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, udon noodles with beef',
        allergens: [],
        options: noOptions,
    },
    {
        id: 61,
        cat: 'curry-udon',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/tZjemIy-RfWIgHQ-HLnGfUf.webp',
        emoji: '🍛',
        name: 'Karaage Curry Udon',
        price: 318,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, udon noodles with karaage chicken',
        allergens: [],
        options: noOptions,
    },
    {
        id: 62,
        cat: 'curry-udon',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/fLeDFxQ-LbSAHoJ-FtlHYJO.webp',
        emoji: '🍛',
        name: 'Ebi Fry Curry Udon',
        price: 338,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, udon noodles with fried shrimp',
        allergens: [],
        options: noOptions,
    },
    {
        id: 63,
        cat: 'curry-udon',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/YDlCzZq-bemUbUP-feYEonv.webp',
        emoji: '🍛',
        name: 'Chicken Katsu Curry Udon',
        price: 329,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, udon noodles with chicken katsu',
        allergens: [],
        options: noOptions,
    },
    {
        id: 65,
        cat: 'curry-udon',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/BhysnJH-CYCkHHk-FEcFkRN.webp',
        emoji: '🍛',
        name: 'Pork Katsu Curry Udon',
        price: 329,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, udon noodles with pork katsu',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // CURRY DON  (id 66–71)
    // Japanese curry, potatoes, carrots, onion, egg, rice
    // ──────────────────────────────────────────────────────────
    {
        id: 66,
        cat: 'curry-don',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/XXkkecc-flubGfF-JGmdBZW.webp',
        emoji: '🍚',
        name: 'Curry Don with Beef',
        price: 348,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, rice with beef',
        allergens: [],
        options: noOptions,
    },
    {
        id: 67,
        cat: 'curry-don',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/SeODWYc-ehwIBBI-JxbXecU.webp',
        emoji: '🍚',
        name: 'Karaage Curry Don',
        price: 308,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, rice with karaage chicken',
        allergens: [],
        options: noOptions,
    },
    {
        id: 68,
        cat: 'curry-don',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/xGgJNNV-IuzwHJx-wTEjOsY.webp',
        emoji: '🍚',
        name: 'Ebi Fry Curry Don',
        price: 328,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, rice with fried shrimp',
        allergens: [],
        options: noOptions,
    },
    {
        id: 69,
        cat: 'curry-don',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/qIfORAW-bidzbWp-yRXGFQM.webp',
        emoji: '🍚',
        name: 'Chicken Katsu Curry Don',
        price: 319,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, rice with chicken katsu',
        allergens: [],
        options: noOptions,
    },
    {
        id: 71,
        cat: 'curry-don',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/c_crop,ar_3:4/v1781815948/721733458_971085382367286_1561839934742810759_n_bnmn5m.jpg',
        emoji: '🍚',
        name: 'Pork Katsu Curry Don',
        price: 319,
        desc: 'Japanese curry, potatoes, carrots, onion, egg, rice with pork katsu',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // MAPO TOFU  (id 72–75) — NEW CATEGORY
    // Traditional Sichuan specialty – tofu in spicy bean sauce
    // ──────────────────────────────────────────────────────────
    {
        id: 72,
        cat: 'mapo-tofu',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/ebVPedb-GUTaBns-JKWceel.webp',
        emoji: '🫕',
        name: 'Vegan Mapo Tofu with Rice',
        price: 268,
        desc: 'Traditional Sichuan specialty – tofu in spicy bean sauce, served with rice',
        allergens: [],
        options: noOptions,
    },
    {
        id: 73,
        cat: 'mapo-tofu',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/FDRtTGs-HzGCDTH-GeFelzh.webp',
        emoji: '🫕',
        name: 'Vegan Mapo Tofu with Udon',
        price: 278,
        desc: 'Traditional Sichuan specialty – tofu in spicy bean sauce, served with udon',
        allergens: [],
        options: noOptions,
    },
    {
        id: 74,
        cat: 'mapo-tofu',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/rKnIQMm-nacIxEb-fSzMgLe.webp',
        emoji: '🫕',
        name: 'Mapo Tofu with Ground Meat, Rice',
        price: 328,
        desc: 'Traditional Sichuan specialty – tofu in spicy bean sauce with ground meat, served with rice',
        allergens: [],
        options: noOptions,
    },
    {
        id: 75,
        cat: 'mapo-tofu',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/KKkkDsu-bHQCTeC-JbpkMzr.webp',
        emoji: '🫕',
        name: 'Mapo Tofu with Ground Meat, Udon',
        price: 338,
        desc: 'Traditional Sichuan specialty – tofu in spicy bean sauce with ground meat, served with udon',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // SAKE  (id 98–105)
    // ──────────────────────────────────────────────────────────
    {
        id: 98,
        cat: 'sake',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1782476326/Screenshot_20260626_141602_Instagram_axstqz.jpg',
        emoji: '🍶',
        name: 'Shochikubai Gokai Karakuchi 0.1l',
        price: 165,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 99,
        cat: 'sake',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1782476326/Screenshot_20260626_141602_Instagram_axstqz.jpg',
        emoji: '🍶',
        name: 'Shochikubai Gokai Karakuchi 0.2l',
        price: 319,
        desc: '',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // DESSERT  (id 106–109)
    // ──────────────────────────────────────────────────────────
    {
        id: 106,
        cat: 'dessert',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/BszDMDu-HCaRORn-rdgRkve.webp',
        emoji: '🍡',
        name: 'Dorayaki',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 107,
        cat: 'dessert',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/hoBSVDa-OaxFewE-aqvIxqK.webp',
        emoji: '🍡',
        name: 'Daifuku Matcha',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 108,
        cat: 'dessert',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/bkmAHFk-MKlkbxl-cQFzlIl.webp',
        emoji: '🍈',
        name: 'Lichi',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 109,
        cat: 'dessert',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramen/menu/dHOqIHr-iDTWYPy-HxAKkFo.webp',
        emoji: '🍦',
        name: 'Matcha Ice Cream',
        price: 99,
        desc: '',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // DRAFT BEER  (id 110–111) — NEW CATEGORY
    // ──────────────────────────────────────────────────────────
    {
        id: 110,
        cat: 'draft-beer',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1781903732/unnamed_lofavl.jpg',
        emoji: '🍺',
        name: 'Únětická 10,7° draft 0.33l',
        price: 55,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 111,
        cat: 'draft-beer',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1781903732/unnamed_lofavl.jpg',
        emoji: '🍺',
        name: 'Únětická 10,7° draft 0.5l',
        price: 69,
        desc: '',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // BOTTLED BEER & CIDER  (id 112–116) — NEW CATEGORY
    // ──────────────────────────────────────────────────────────
    {
        id: 112,
        cat: 'bottled-beer',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1781968105/5b4cdff8-2e17-41a3-acc7-bf5ff8eadafa_555837012_i5lc4r.jpg',
        emoji: '🍺',
        name: 'BIRELL Non-Alcoholic 0.33l',
        price: 50,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 113,
        cat: 'bottled-beer',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/yIeJkie-ApjDmTg-ImDMpXc.webp',
        emoji: '🍺',
        name: 'Asahi Super Dry 0.33l',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 114,
        cat: 'bottled-beer',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/hJMYmZg-PZFnCHt-GFOqnIJ.webp',
        emoji: '🍺',
        name: 'Sapporo 0.33l',
        price: 95,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 115,
        cat: 'bottled-beer',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/wkjjuFZ-GNVJtnH-JewllIU.webp',
        emoji: '🍺',
        name: 'Kirin Ichiban 0.33l',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 116,
        cat: 'bottled-beer',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/lHTtJgZ-kTOllsQ-hXFTPJB.webp',
        emoji: '🍺',
        name: 'Tátův Sad Dry Cider 0.33l',
        price: 95,
        desc: '',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // JAPANESE WHISKY  (id 117–122)
    // ──────────────────────────────────────────────────────────
    {
        id: 117,
        cat: 'japanese-whisky',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/bBsCbGx-IHiNUyI-dJXWdYj.webp',
        emoji: '🥃',
        name: 'Akashi 0.04l',
        price: 169,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 118,
        cat: 'japanese-whisky',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/MlWqmMx-HoAibFG-bdLsPfr.webp',
        emoji: '🥃',
        name: 'Nobushi 0.04l',
        price: 288,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 119,
        cat: 'japanese-whisky',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/lkSmyFS-kjoChJx-UfpybNI.webp',
        emoji: '🥃',
        name: 'The Barrel 0.04l',
        price: 308,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 120,
        cat: 'japanese-whisky',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/IILdoWU-mTxlgCb-wfccQFB.webp',
        emoji: '🥃',
        name: 'The Chita 0.04l',
        price: 308,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 121,
        cat: 'japanese-whisky',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/oGFbGkJ-IVaeMtF-KUzaInw.webp',
        emoji: '🥃',
        name: 'Toki Whisky 0.04l',
        price: 288,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 122,
        cat: 'japanese-whisky',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/CwnZqQc-ADJTiLO-dFChbHF.webp',
        emoji: '🥃',
        name: 'Hibiki 0.04l',
        price: 469,
        desc: '',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // WHITE WINE  (id 123–129)
    // ──────────────────────────────────────────────────────────
    {
        id: 123,
        cat: 'white-wine',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/rsEUnGZ-AuGbDgY-itzwfRh.webp',
        emoji: '🍷',
        name: 'White Wine glass 0.1l',
        price: 66,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 124,
        cat: 'white-wine',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/kgHZyYQ-EQXTGrd-oGSDMKU.webp',
        emoji: '🍷',
        name: 'White Wine glass 0.2l',
        price: 99,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 125,
        cat: 'white-wine',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1781968100/zonin-limoneto-spritz-6630862aa0d04-scaled_kzdjiz.jpg', // ПОВЕРНУТО З CLOUDINARY
        emoji: '🍷',
        name: 'White Wine with Soda 0.2l',
        price: 70,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 126,
        cat: 'white-wine',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/xJJdSox-QzbseAI-gwlhEkz.webp',
        emoji: '🍷',
        name: 'White Wine bottle 0.75l',
        price: 369,
        desc: '',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // RED WINE  (id 130–137)
    // ──────────────────────────────────────────────────────────
    {
        id: 130,
        cat: 'red-wine',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/gUlvGuW-ShsDvwG-GitCjxx.webp',
        emoji: '🍷',
        name: 'Red Wine glass 0.1l',
        price: 65,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 131,
        cat: 'red-wine',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/AbldoID-yMThDGM-wtanOok.webp',
        emoji: '🍷',
        name: 'Red Wine glass 0.2l',
        price: 99,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 132,
        cat: 'red-wine',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/WvJYdku-ottaEto-XYlRfeY.webp',
        emoji: '🍷',
        name: 'Red Wine bottle 0.75l',
        price: 369,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 135,
        cat: 'red-wine',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/quDjCyA-aTvmCGe-NzphhCM.webp',
        emoji: '🍷',
        name: 'Saga Bordeaux LAFITE France 0.75l',
        price: 838,
        desc: '',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // SPARKLING WINE  (id 138–141)
    // ──────────────────────────────────────────────────────────
    {
        id: 138,
        cat: 'sparkling-wine',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/PJbfubY-fgRwLkH-WDXlGLJ.webp',
        emoji: '🥂',
        name: 'Mionetto Prosecco Italy 0.75l',
        price: 588,
        desc: '',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // CZECH SPIRITS  (id 142–143)
    // ──────────────────────────────────────────────────────────
    {
        id: 142,
        cat: 'czech-spirits',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/IbVbFHO-DPvpnbD-QsgWIwa.webp',
        emoji: '🥃',
        name: 'Žufánek Pear Brandy 0.04l',
        price: 95,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 143,
        cat: 'czech-spirits',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/PAevZQz-BBeIJby-LLgExoB.webp',
        emoji: '🥃',
        name: 'Žufánek Apricot Brandy 0.04l',
        price: 95,
        desc: '',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // NON-ALCOHOLIC DRINKS  (id 144–158)
    // ──────────────────────────────────────────────────────────
    {
        id: 145,
        cat: 'non-alcoholic-drinks',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1782476327/Screenshot_20260626_141553_Instagram_iae2dm.jpg',
        emoji: '💧',
        name: 'Mattoni Sparkling Water 0.33l',
        price: 59,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 146,
        cat: 'non-alcoholic-drinks',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1782476326/Screenshot_20260626_141543_Instagram_a0riau.jpg',
        emoji: '💧',
        name: 'Mattoni Sparkling Water 0.75l',
        price: 99,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 147,
        cat: 'non-alcoholic-drinks',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1781968112/8ec0b747-58f2-4fe6-b666-8c927f057610_rwo9kr.jpg',
        emoji: '💧',
        name: 'Aquila Still Water 0.75l',
        price: 99,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 148,
        cat: 'non-alcoholic-drinks',
        image: '', // Залишено пустим
        emoji: '💧',
        name: 'Bottle of Tap Water 0.3l',
        price: 30,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 149,
        cat: 'non-alcoholic-drinks',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/NJpjMks-vyVwvMc-PlcbKqT.webp', // Залишено без змін
        emoji: '💧',
        name: 'Bottle of Tap Water 0.5l',
        price: 39,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 150,
        cat: 'non-alcoholic-drinks',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1782477825/coca-cola-bottle-png--1_ldisqp.png',
        emoji: '🥤',
        name: 'Coca Cola 0.33l',
        price: 65,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 151,
        cat: 'non-alcoholic-drinks',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/fykyRfs-cEqCBoM-alOUbID.webp',
        emoji: '🥤',
        name: 'Cola Zero 0.33l',
        price: 65,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 152,
        cat: 'non-alcoholic-drinks',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/lxJYJCB-eFpHQkX-jVUgRzs.webp',
        emoji: '🥤',
        name: 'Fanta 0.33l',
        price: 65,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 153,
        cat: 'non-alcoholic-drinks',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/WgvPmpk-iUFkfmi-ZwWUxCG.webp',
        emoji: '🥤',
        name: 'Sprite 0.33l',
        price: 65,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 154,
        cat: 'non-alcoholic-drinks',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1781968101/1281_kinley-ginger-sklo-0-25l_m0hv0g.jpg',
        emoji: '🥤',
        name: 'Kinley Ginger 0.25l',
        price: 65,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 156,
        cat: 'non-alcoholic-drinks',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1782476327/Screenshot_20260626_141558_Instagram_wi76dg.jpg',
        emoji: '🥤',
        name: 'Ramune Strawberry 0.25l',
        price: 95,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 157,
        cat: 'non-alcoholic-drinks',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/WCLDJIo-XpIYNOR-aRnEhcY.webp',
        emoji: '🥤',
        name: 'Ramune Melon 0.25l',
        price: 95,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 158,
        cat: 'non-alcoholic-drinks',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/HbDvufe-eCVEsQC-AHmsaqM.webp',
        emoji: '🥤',
        name: 'Ramune Blueberry 0.25l',
        price: 95,
        desc: '',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // TEA AND COFFEE  (id 159–167)
    // ──────────────────────────────────────────────────────────
    {
        id: 159,
        cat: 'tea-and-coffee',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/mvYDVGU-dmkUYhC-VkIpCfo.webp',
        emoji: '🍵',
        name: 'Sencha Green Tea 0.3l',
        price: 95,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 160,
        cat: 'tea-and-coffee',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1781968096/921133_8_bqa4cp.jpg', // ПОВЕРНУТО З CLOUDINARY
        emoji: '🍵',
        name: 'Black Tea 0.3l',
        price: 79,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 161,
        cat: 'tea-and-coffee',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1781968097/900550_1_deiqii.jpg', // ПОВЕРНУТО З CLOUDINARY
        emoji: '🍵',
        name: 'Fruit Tea 0.3l',
        price: 79,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 162,
        cat: 'tea-and-coffee',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/RmhlDeg-Djjlmsb-HbLfVCF.webp',
        emoji: '🍵',
        name: 'Genmaicha Tea with Rice 0.3l',
        price: 95,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 163,
        cat: 'tea-and-coffee',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/slHNCNx-YbqExNF-LemAQHl.webp',
        emoji: '☕',
        name: 'Espresso',
        price: 60,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 165,
        cat: 'tea-and-coffee',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/zEnvsxD-JhKUVJA-GGDQOie.webp',
        emoji: '☕',
        name: 'Cappuccino',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 166,
        cat: 'tea-and-coffee',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/pDkBbDb-aeHjOdl-rMUiiDR.webp',
        emoji: '☕',
        name: 'Caffè Latte',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // LEMONADES  (id 168–172)
    // ──────────────────────────────────────────────────────────
    {
        id: 168,
        cat: 'lemonades',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1782478088/722203859_1863833437618917_260906786226667229_n_udc4jq.jpg',
        emoji: '🍹',
        name: 'Raspberry Lemonade 0.4l',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 169,
        cat: 'lemonades',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1782478041/718597025_996709606450564_5405362396763238295_n_h0zsb3.jpg',
        emoji: '🍹',
        name: 'Ginger Lemonade 0.4l',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 170,
        cat: 'lemonades',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1782477998/723624533_1778260233616630_5923588734961299132_n_use4f1.jpg',
        emoji: '🍹',
        name: 'Lichi Lemonade 0.4l',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 171,
        cat: 'lemonades',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1782477937/727124233_1544778993719164_3767381871771052863_n_th3cly.jpg',
        emoji: '🍹',
        name: 'Kiwi & Pineapple Lemonade 0.4l',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },
    {
        id: 172,
        cat: 'lemonades',
        image: 'https://res.cloudinary.com/deiaqixyd/image/upload/v1782477902/726781900_1312397687695836_3460599475364847962_n_jglvb7.jpg',
        emoji: '🍹',
        name: 'Mango & Maracuja Lemonade 0.4l',
        price: 89,
        desc: '',
        allergens: [],
        options: noOptions,
    },

    // ──────────────────────────────────────────────────────────
    // COCKTAILS  (id 173–175)
    // ──────────────────────────────────────────────────────────
    {
        id: 173,
        cat: 'cocktails',
        image: 'https://cdn-media.choiceqr.com/prod-eat-miskaramenmalastrana/menu/IuEWqeD-WJKHGGb-WnskdfE.webp',
        emoji: '🍸',
        name: 'Aperol Spritz 0.4l',
        price: 165,
        desc: '',
        allergens: [],
        options: noOptions,
    },
];
