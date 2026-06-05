/**
 * Проходить по всіх полях об'єкта T.
 * Якщо поле — Date, міняє на string.
 * Якщо поле — Date | null, міняє на string | null.
 */
export type Serialize<T> = {
    [K in keyof T]: T[K] extends Date ? string : T[K] extends Date | null ? string | null : T[K];
};

/**
 * Перетворює будь-яке сміття з catch-блоку на нормальну строку.
 * TypeScript 4+ робить error у catch типом unknown — це правильна обробка.
 */
export const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) return error.message;
    if (typeof error === 'string') return error;
    // На випадок, якщо кинули якийсь дивний об'єкт
    return JSON.stringify(error);
};