'use client'

import SplitLayout from "@/app/components/split_layout";
import LogoWhite from "@/app/assets/icons/logoWhite";
import {ThemedText} from "@/app/components/ThemedText";
import ArrowRight from "@/app/assets/icons/arrowRight";
import Button from "@/app/components/button/Button";
import CustomInput from "@/app/components/input";
import {useState} from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import i18n from "@/app/i18n";
import IconGoogle from "@/app/assets/icons/iconGoogle";
import IconApple from "@/app/assets/icons/iconApple";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (email === 'admin@admin' && password === 'admin') {
            localStorage.setItem('userRole', 'admin');
            router.push('/chats');
        } else {
            localStorage.setItem('userRole', 'user');
            router.push('/');
        }
    };

    return (
        <SplitLayout showBackgroundOpacity={true} className="min-h-screen">
            <div className="w-full h-full flex flex-col">
                {/* Шапка з логотипом */}
                <div className="bg-[#0057FF] px-4 md:px-6 lg:px-[51px] py-[5px]">
                    <LogoWhite/>
                </div>

                {/* Основний контент */}
                <div className="flex-1 bg-white px-4 md:px-6 lg:px-[51px] py-8 md:py-12 lg:py-[144px]">
                    <div className="flex flex-col items-center max-w-[320px] mx-auto">
                        <ThemedText type="heading" className="mb-8 md:mb-10 lg:mb-[44px] text-center">
                            {i18n.t('login.title')}
                        </ThemedText>

                        {/* Форма входу */}
                        <form className="w-full space-y-6 mb-8" onSubmit={handleSubmit}>
                            <CustomInput
                                type="email"
                                placeholder="Email адреса *"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full"
                            />

                            <CustomInput
                                type="password"
                                placeholder="Пароль *"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full"
                            />

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <Button
                                    size="medium"
                                    className="rounded-[10px] w-full sm:w-auto"
                                    type="submit"
                                >
                                    УВІЙТИ<ArrowRight/>
                                </Button>

                                <Link href="/forgetpass" className="text-center">
                                    <ThemedText type="link">
                                        {i18n.t('login.forgotPassword')}
                                    </ThemedText>
                                </Link>
                            </div>
                        </form>

                        {/* Додаткові кнопки */}
                        <div className="w-full space-y-5">
                            <Button
                                variant="secondary"
                                size="large"
                                className="w-full"
                            >
                                {i18n.t('login.sign-up')}
                            </Button>
                            <Button
                                variant="secondary"
                                size="large"
                                className="w-full"
                            >
                                {i18n.t('login.sign-in-google')}<IconGoogle/>
                            </Button>
                            <Button
                                variant="secondary"
                                size="large"
                                className="w-full"
                            >
                                {i18n.t('login.sign-in-apple')} <IconApple/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>
        </SplitLayout>
    );
};

export default LoginPage;