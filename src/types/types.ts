export type CategoryMalaStrana =
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

export type CategoryVinohrady =
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
    // ── нові категорії (з PDF) ──────────────────────────────
    | 'mapo-tofu'
    | 'draft-beer'
    | 'bottled-beer'
    | 'japanese-whisky'
    | 'white-wine'
    | 'red-wine'
    | 'sparkling-wine'
    | 'non-alcoholic-drinks'
    | 'tea-and-coffee'
    | 'lemonades'
    | 'cocktails'
    | 'czech-spirits';

export interface OptionItem {
    name: string;
    price: number;
}

export interface OptionSection {
    title: string;
    sub: string;
    items: OptionItem[];
}

export interface ProductOptions {
    sections: OptionSection[];
}

export interface Product<T extends string> {
    id: number;
    cat: T;
    emoji: string;
    image?: string;
    name: string;
    price: number;
    desc: string;
    allergens: number[];
    options: ProductOptions;
}
export interface Location {
    id: string;
    name: string;
    address: string;
    imageBg: string;
    isOpen: boolean;
    phone: string;
    workingHours: {
        mon: string;
        tue: string;
        wed: string;
        thu: string;
        fri: string;
        sat: string;
        sun: string;
    };
    directLink: string;
    imageSrc: string;
}
