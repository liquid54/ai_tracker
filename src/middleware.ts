import { NextRequest, NextResponse } from 'next/server';

// Константи для наших шляхів
const ROUTES = {
    LOGIN: '/login',
    ADMIN_PATHS: ['/chats', '/subs'] as readonly string[], // Масив типу string[]
    PUBLIC: ['/login', '/forgetpass', '/resetpass', '/checkmail'] as readonly string[],
    USER: ['/', '/profile', '/chat'] as readonly string[]
} as const;

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Функція для редіректу
    const redirectTo = (path: string) =>
        NextResponse.redirect(new URL(path, request.url));

    const isPublicPath = ROUTES.PUBLIC.includes(pathname);
    const isAdminPath = ROUTES.ADMIN_PATHS.includes(pathname);
    const isUserPath = ROUTES.USER.includes(pathname);

    // Дозволяємо доступ, якщо шлях публічний
    if (isPublicPath || isAdminPath || isUserPath) {
        return NextResponse.next();
    }

    // Всі інші випадки - редірект на логін
    return redirectTo(ROUTES.LOGIN);
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|assets/helpcenter).*)',
    ],
};
