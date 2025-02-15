'use client'


import {useState} from "react";
import {useRouter} from "next/navigation";
import LogoBlue from "@/app/assets/icons/logoBlue";
import CustomInput from "@/app/components/input";
import Button from "@/app/components/button/Button";
import Link from "next/link";
import ArrowRight from "@/app/assets/icons/arrowRight";


const ResetPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();


    return (
        <>
            <div className='p-[55px]'>
                <LogoBlue/>
            </div>
            <div className="flex flex-col items-center justify-center pt-[179px]">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <h1 className="text-left">Відновлення паролю</h1>
                        <p className="text-left">Введіть новий пароль</p>
                    </div>

                    <form className="pb-[77px] ">


                        <div className="mb-[19px]">
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