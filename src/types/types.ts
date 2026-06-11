export type Category = 'ramen' | 'sides' | 'drinks';

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

export interface Product {
    id: number;
    cat: Category;
    emoji: string;
    name: string;
    price: number;
    desc: string;
    allergens: number[];
    likes: number;
    options: ProductOptions;
}
