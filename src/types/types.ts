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
