'use client'

import ChatMessages from "@/app/components/chat/ChatMessages";

const chatPage = () => {
    return (
        <div className="min-h-[calc(100vh-50px)] w-full flex relative">
            {/* Background layer */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `url('https://s3-alpha-sig.figma.com/img/953a/0024/d15d9b0032fc51e46441c796bcbc36e3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ppvH-Ie3IIdYehyRJVZV8mR4O3sGJEizHHPH-DxDeUuh0EFsPECzq54vL72tH9toglIwq0-AaYzkGvk5IY-l4CHHwi~k~aeB7ydPzCludlvU-J3GP35veL-QEjZP-Y8MyUGqf9pLPZIhOwqPy2x9YFWHdxd2WMJ95esMDEhkzCDfi6SCqZdgATTmjOcjkUrjtVQFJ7smaB35J8YuyIO9Zf23n7g4PXdrAUnCYwrRt-rI9qIqtMHeUq8mofMWHrs4cYkEk3O2fEKFZQpOmoldCHcAAdCEHFk6XCv1qnRBOFuz3QaV~562K2BYDJlrHIqEej927PvR7KsOPHsMJz5daA__')`,
                    backgroundSize: 'cover'
                }}
            />
            <div className="relative w-full
                          px-4 sm:px-6 md:px-4 lg:px-[208px]
                          pt-6 sm:pt-6 md:pt-4 lg:pt-[96px]
                          pb-6 sm:pb-6 md:pb-4 lg:pb-[91px]
                          border border-[#C4C4C4]">
                <div>
                    <ChatMessages
                        title="Технічна підтримка"
                        titleClassName="pl-4 sm:pl-6 md:pl-8 lg:pl-[41px] py-4 sm:py-5 md:py-6 border-b"
                        messagesContainerClassName="p-4 sm:p-6 md:p-8 lg:px-[45px] lg:pt-[48px] space-y-6 sm:space-y-7 md:space-y-8"
                        requestWrapperClassName="mb-4 sm:mb-5 md:mb-6 max-w-[300px]"
                        respondWrapperClassName="flex flex-col items-end mb-4 sm:mb-5 md:mb-6 max-w-[300px] ml-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default chatPage;