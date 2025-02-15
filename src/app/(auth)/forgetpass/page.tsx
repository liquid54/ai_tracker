'use client'


import ArrowRight from "@/app/assets/icons/arrowRight";
import CustomInput from "@/app/components/input";
import {useState} from "react";
import Button from "@/app/components/button/Button";
import LogoBlue from "@/app/assets/icons/logoBlue";
import Link from "next/link";
import {useRouter} from 'next/navigation';


const ForgetPass = () => {
    const [email, setEmail] = useState('');
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
                        <p className="text-left">Введіть свою зареєестровану пошту</p>
                    </div>

                    <form className="pb-[77px]">

                        <CustomInput
                            type="email"
                            placeholder="Email адреса"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />


                        <div className="pt-6">
                            <Button size='small' className="transition-colors flex items-center justify-center space-x-2">
                                <Link href="/resetpass">
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

export default ForgetPass;