'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoWhite from "@/app/assets/icons/logoWhite";
import User from "@/app/assets/icons/user";
import Chat from "@/app/assets/icons/chat";

export default function NavAdmin() {
    usePathname();
    return (
        <nav className="bg-[#0057FF] h-[50px] px-4 w-full">
            <div className="flex justify-between lg:px-[41px] py-[5px] sm:px-0 md:px-0">
                {/* Ліва частина - лого */}
                <Link href="/" className="flex items-center pl-2.5 sm:pl-0 md:pl-0">
                    <LogoWhite/>
                </Link>

                {/* Права частина - іконки */}
                <div className="flex items-center py-[5px]">
                    <Link href="/chats" className="flex items-center px-2.5 rounded-md hover:bg-white/20 group">
                        <User />
                    </Link>
                    <Link href="/subs" className="flex items-center px-2.5 rounded-md hover:bg-white/20 group">
                        <Chat />
                    </Link>
                </div>
            </div>
        </nav>
    )
}