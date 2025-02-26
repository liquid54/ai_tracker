'use client'

import {useState} from "react";
import {useRouter} from "next/navigation";
import LogoBlue from "@/app/assets/icons/logoBlue";
import CustomInput from "@/app/components/input";
import Button from "@/app/components/button/Button";
import Link from "next/link";
import ArrowRight from "@/app/assets/icons/arrowRight";
import i18n from "@/app/i18n";

const ResetPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    return (
        <>
            <div className='p-4 md:p-8 lg:p-[55px]'>
                <LogoBlue/>
            </div>
            <div className="flex flex-col items-center justify-center pt-8 md:pt-12 lg:pt-[179px]">
                <div className="w-full max-w-md px-4 md:px-8 lg:px-0">
                    <div className="mb-6 md:mb-7 lg:mb-8">
                        <h1 className="text-left">{i18n.t('resetPassword.title')}</h1>
                        <p className="text-left">{i18n.t('resetPassword.subTitle')}</p>
                    </div>

                    <form className="pb-8 md:pb-12 lg:pb-[77px]">
                        <div className="mb-4 md:mb-5 lg:mb-[19px]">
                            <CustomInput
                                type="password"
                                placeholder="Новий пароль"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>

                        <CustomInput
                            type="password"
                            placeholder="Повторіть новий пароль"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        <div className="pt-6">
                            <Button size='small' className="transition-colors flex items-center justify-center space-x-2">
                                <Link href="/">
                                    <div className="flex flex-row">
                                        ДАЛІ<ArrowRight/>
                                    </div>
                                </Link>
                            </Button>
                        </div>
                    </form>

                    <div onClick={() => router.back()}>
                        <Button size='large' variant='secondary'>
                            Назад
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPage