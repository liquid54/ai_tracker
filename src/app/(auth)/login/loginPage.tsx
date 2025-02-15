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
            router.push('/');  // Тепер користувач повинен потрапити на головну
        }
    };


    return (
        <SplitLayout showBackgroundOpacity={false} className="h-screen">
            <div className="bg-[#0057FF]">
                <div className='py-[45px] pl-[56px]'>
                    <LogoWhite/>
                </div>
                <div className="bg-white rounded-tr-[200px] overflow-hidden">
                    <div className='pt-[144px] px-[131px] '>
                        <div className='flex flex-col items-center'>
                            <ThemedText type='heading'>{i18n.t('login.title')}</ThemedText>
                            <div className='pb-[44px]'>
                                <div className='flex flex-col items-center gap-y-6'>
                                    <form className='flex flex-col items-center gap-y-6'
                                          onSubmit={handleSubmit}>
                                        <CustomInput
                                            type="email"
                                            placeholder="Email адреса *"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />

                                        <CustomInput
                                            type="password"
                                            placeholder="Пароль *"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />

                                        <Button
                                            size="medium"
                                            className='rounded-[10px]'
                                            type="submit"
                                        >
                                            УВІЙТИ<ArrowRight/>
                                        </Button>
                                    </form>

                                    <div className='flex flex-row gap-x-[114px] items-center'>
                                        <Link href="/forgetpass">
                                            <ThemedText type='link' >{i18n.t('login.forgotPassword')}</ThemedText>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-5'>
                                <Button variant="secondary" size="large">{i18n.t('login.sign-up')} </Button>
                                <Button variant="secondary" size="large">{i18n.t('login.sign-in-google')}</Button>
                                <Button variant="secondary" size="large">{i18n.t('login.sign-in-apple')}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>
        </SplitLayout>
    )
}

export default LoginPage;