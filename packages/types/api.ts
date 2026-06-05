// import { User, Product } from '@project-meneger/database';
import type { Serialize } from './helpers';

// --- User ---
// Omit прибирає пароль, Serialize перетворює Date → string
// export type UserResponseDTO = Serialize<Omit<User, 'password'>>;

export interface UpdateUserDTO {
    email?: string;
    name?: string;
}

// --- Product ---
// export type ProductResponseDTO = Serialize<Product>;

export interface CreateProductDTO {
    title: string;
    price: number;
    description?: string;
}

export interface UpdateProductDTO {
    title?: string;
    price?: number;
    description?: string;
}

// --- Wishlist ---
export interface AddToWishlistDTO {
    productId: string;
}

// Коли api.ts переросте ~150 рядків — розбий на user.dto.ts, product.dto.ts тощо