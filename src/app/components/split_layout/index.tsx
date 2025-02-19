import React from 'react';
import { SplitLayoutProps } from './types';

export default function SplitLayout({
                                        children,
                                        leftWidth = 'w-[480px]',
                                        rightWidth = 'flex-1',
                                        className = '',
                                        showBackgroundOpacity = false
                                    }: SplitLayoutProps) {
    const [left, right] = children;

    return (
        <div className={`flex min-h-screen ${className}`}>
            {/* Ліва частина - форма входу */}
            <div className={`
                w-full 
                md:w-[400px] 
                lg:w-[480px] 
                bg-white 
                flex-shrink-0
                transition-all
                duration-300
                overflow-y-auto
            `}>
                {left}
            </div>

            {/* Права частина - фонове зображення */}
            <div className={`
                relative 
                hidden 
                md:block
                md:flex-1
            `}>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/953a/0024/d15d9b0032fc51e46441c796bcbc36e3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ppvH-Ie3IIdYehyRJVZV8mR4O3sGJEizHHPH-DxDeUuh0EFsPECzq54vL72tH9toglIwq0-AaYzkGvk5IY-l4CHHwi~k~aeB7ydPzCludlvU-J3GP35veL-QEjZP-Y8MyUGqf9pLPZIhOwqPy2x9YFWHdxd2WMJ95esMDEhkzCDfi6SCqZdgATTmjOcjkUrjtVQFJ7smaB35J8YuyIO9Zf23n7g4PXdrAUnCYwrRt-rI9qIqtMHeUq8mofMWHrs4cYkEk3O2fEKFZQpOmoldCHcAAdCEHFk6XCv1qnRBOFuz3QaV~562K2BYDJlrHIqEej927PvR7KsOPHsMJz5daA__')`,
                        opacity: showBackgroundOpacity ? 1 : 0.05
                    }}
                />
                <div className="relative z-10">
                    {right}
                </div>
            </div>
        </div>
    );
}