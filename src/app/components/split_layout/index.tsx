import React from 'react';
import { SplitLayoutProps } from './types';

export default function SplitLayout({
                                        children,
                                        leftWidth = 'w-[42.22%]',
                                        rightWidth = 'w-[57.78%]',
                                        className = ''
                                    }: SplitLayoutProps) {
    const [left, right] = children;

    return (
        <div className={`flex w-full min-h-screen ${className}`}>
            <div className={`${leftWidth} bg-white`}>
                {left}
            </div>
            <div className={`${rightWidth} relative`}>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/953a/0024/d15d9b0032fc51e46441c796bcbc36e3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ppvH-Ie3IIdYehyRJVZV8mR4O3sGJEizHHPH-DxDeUuh0EFsPECzq54vL72tH9toglIwq0-AaYzkGvk5IY-l4CHHwi~k~aeB7ydPzCludlvU-J3GP35veL-QEjZP-Y8MyUGqf9pLPZIhOwqPy2x9YFWHdxd2WMJ95esMDEhkzCDfi6SCqZdgATTmjOcjkUrjtVQFJ7smaB35J8YuyIO9Zf23n7g4PXdrAUnCYwrRt-rI9qIqtMHeUq8mofMWHrs4cYkEk3O2fEKFZQpOmoldCHcAAdCEHFk6XCv1qnRBOFuz3QaV~562K2BYDJlrHIqEej927PvR7KsOPHsMJz5daA__')`,
                        backgroundSize: 'cover',
                        opacity: 0.2
                    }}
                />
                <div className="relative z-10">
                    {right}
                </div>
            </div>
        </div>
    );
}
