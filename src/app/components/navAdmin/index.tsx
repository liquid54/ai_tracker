'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoWhite from "@/app/assets/icons/logoWhite";
import User from "@/app/assets/icons/user";
import Chat from "@/app/assets/icons/chat";

export default function NavAdmin() {
    usePathname();
    return (
        <nav className="bg-blue-600 h-[50px] px-4">
            <div className="flex justify-between px-[41px] py-[5px]">
                {/* Ліва частина - лого */}
                <Link href="/" className="flex items-center pl-2.5">
                    <LogoWhite/>
                </Link>

                {/* Права частина - іконки */}
                <div className="flex items-center py-[5px]">
                    <Link href="/chats" className="flex items-center px-2.5">
                        <User />
                    </Link>
                    <Link href="/subs" className="flex items-center px-2.5">
                        <Chat />
                    </Link>
                </div>
            </div>
        </nav>
    )
}