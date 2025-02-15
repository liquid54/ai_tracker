// Імпорти
import User from "../../assets/icons/user";
import Chat from "../../assets/icons/chat";
import LogoWhite from "../../assets/icons/logoWhite";

// Інтерфейс
interface NavItem {
    position: 'left' | 'right';
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    label?: string;
}

// Дані
export const navItems: NavItem[] = [
    {
        position: 'left',
        label: 'Головна',
        href: '/',
        icon: LogoWhite,
    },
    {
        position: 'right',
        href: '/profile',
        icon: User,
    },
    {
        position: 'right',
        label: 'Можливості',
        href: '/profile',
        icon: Chat,
    },
];