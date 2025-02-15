import { NextRequest, NextResponse } from 'next/server';

// Константи для наших шляхів
const ROUTES = {
    LOGIN: '/login',
    ADMIN_PATHS: ['/chats', '/subs'], // Перейменовано для ясності
    PUBLIC: ['/login', '/forgetpass', '/resetpass'],
    USER: ['/', '/profile', '/chat']
} as const;

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Функція для редіректу
    const redirectTo = (path: string) =>
        NextResponse.redirect(new URL(path, request.url));

    // Перевіряємо чи шлях публічний
    const isPublicPath = ROUTES.PUBLIC.includes(pathname);

    // Якщо шлях публічний - дозволяємо доступ
    if (isPublicPath) {
        return NextResponse.next();
    }

    // Якщо це шлях адміна - дозволяємо
    if (ROUTES.ADMIN_PATHS.includes(pathname)) { // Виправлено перевірку для масиву шляхів адміна
        return NextResponse.next();
    }

    // Перевіряємо чи це шлях звичайного користувача
    if (ROUTES.USER.includes(pathname)) {
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