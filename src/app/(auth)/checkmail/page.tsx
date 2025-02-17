'use client'

import Button from "@/app/components/button/Button";
import {ThemedText} from "@/app/components/ThemedText";
import LogoBlue from "@/app/assets/icons/logoBlue";
import Link from "next/link";
import i18n from "@/app/i18n";


const CheckMail = () => {
    return (
        <>
            <div className='p-[55px]'>
                <LogoBlue/>
            </div>
            <div className="flex flex-col items-center justify-center pt-[70px]">
                <ThemedText type='heading'>{i18n.t('resetPasswordEmailMessage.title')}</ThemedText>
                <ThemedText type='subtitle'>{i18n.t('resetPasswordEmailMessage.subTitle')}</ThemedText>

                <div className='pt-[45px]'>
                    <Link href="/resetpass">
                        <Button size='large' variant='secondary'>
                            {i18n.t('resetPasswordEmailMessage.back')}
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}


export default CheckMail