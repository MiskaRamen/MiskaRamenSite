// Пагінація
export interface IPaginatedResponse<T> {
    data: T[];
    totalCount: number;
    page: number;
    pageSize: number;
}

// Стандартна відповідь API
export interface IApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

export interface IApiError {
    success: false;
    error: string;
}