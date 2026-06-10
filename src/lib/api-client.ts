import { env } from '@/src/env';

export const apiClient = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    const response = await fetch(`${env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        ...options,
        headers,
        // 🔥 Змушує браузер автоматично відправляти HttpOnly-куки
        credentials: 'include',
    });

    if (!response.ok) {
        if (response.status === 401) {
            // Сесія протермінувалась — перекидаємо на логін
            // window.location.href = '/login';
        }
        throw new Error(`API Error ${response.status}: ${response.statusText}, ${await response.text()}`);
    }

    return response.json();
};