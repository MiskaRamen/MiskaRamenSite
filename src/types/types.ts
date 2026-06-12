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
    | 'ramen-hall'
    | 'vegan-ramen'
    | 'curry-don'
    | 'curry-udon'
    | 'tofu-rolls'
    | 'extra-sides'
    | 'sake'
    | 'dessert'
    | 'nigiri-2-pcs'
    | 'maki'
    | 'sashimi'
    | 'sushi-roll'
    | 'futo-maki-10-pcs'
    | 'sushi-set';
export type CategoryVinohrady = 'starters' | 'mapo-tofu' | 'ramen' | 'curry-udon' | 'curry-don' | 'dessert';

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

export interface Product<Cat> {
    id: number;
    cat: Cat;
    emoji: string;
    name: string;
    price: number;
    desc: string;
    allergens: number[];
    likes: number;
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
}
