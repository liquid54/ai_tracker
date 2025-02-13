import LogoWhite from '../assets/icons/logoWhite'
import User from '../assets/icons/user'
import Chat from '@/app/assets/icons/chat'

interface NavItem {
    position: 'left' | 'right'
    label: string
    href: string
    icon: React.ComponentType<{ className?: string }>
}

export const navItems: NavItem[] = [
    {
        position: 'left',
        label: 'Головна',
        href: '/',
        icon: LogoWhite,
    },
    {
        position: 'right',
        label: 'Чат',
        href: '/profile',
        icon: User,
    },
    {
        position: 'right',
        label: 'Можливості',
        href: '/profile',
        icon: Chat,
    },
]