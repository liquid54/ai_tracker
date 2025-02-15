import ChatMessages from "@/app/components/chat/ChatMessages";


const chatPage = () => {
    return (
        <div className="min-h-[calc(100vh-50px)] w-full flex relative">
            {/* Background layer */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url('https://s3-alpha-sig.figma.com/img/953a/0024/d15d9b0032fc51e46441c796bcbc36e3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ppvH-Ie3IIdYehyRJVZV8mR4O3sGJEizHHPH-DxDeUuh0EFsPECzq54vL72tH9toglIwq0-AaYzkGvk5IY-l4CHHwi~k~aeB7ydPzCludlvU-J3GP35veL-QEjZP-Y8MyUGqf9pLPZIhOwqPy2x9YFWHdxd2WMJ95esMDEhkzCDfi6SCqZdgATTmjOcjkUrjtVQFJ7smaB35J8YuyIO9Zf23n7g4PXdrAUnCYwrRt-rI9qIqtMHeUq8mofMWHrs4cYkEk3O2fEKFZQpOmoldCHcAAdCEHFk6XCv1qnRBOFuz3QaV~562K2BYDJlrHIqEej927PvR7KsOPHsMJz5daA__')`,
                    backgroundSize: 'cover'
                }}
            />
            <div className="relative w-full px-[208px] pt-[96px] pb-[91px] border border-[#C4C4C4] ">

                <div>

                    <ChatMessages title="Технічна підтримка"
                                  requestWrapperClassName="mb-6 max-w-[300px]" // Змінюємо відступ і максимальну ширину
                                  respondWrapperClassName="flex flex-col items-end mb-6 max-w-[300px] ml-auto"
                    />
                </div>
            </div>
        </div>
    );
}


export default chatPage;