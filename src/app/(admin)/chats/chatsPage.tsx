import SplitLayout from "@/app/components/split_layout";
import Users from "@/app/(admin)/chats/users";
import UserCard from "@/app/(admin)/chats/userInfo";
import ChatMessages from "@/app/components/chat/ChatMessages";

const ChatsPage = () => {
    const demoMessages = [
        {
            id: 1,
            user: "User 1",
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            timestamp: "22.03.2025"
        },
        {
            id: 2,
            user: "User 1",
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            timestamp: "22.03.2025"
        },
        {
            id: 3,
            user: "User 1",
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            timestamp: "22.03.2025"
        },
        {
            id: 4,
            user: "User 1",
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            timestamp: "22.03.2025"
        },
        {
            id: 5,
            user: "User 1",
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            timestamp: "22.03.2025"
        }
    ];

    return (
        <SplitLayout className="h-screen w-full flex">
            <div className="px-[25px] pt-[70px] pb-[31px] bg-white">
                <Users messages={demoMessages}/>
            </div>


            <div>
                <div className='px-[120px] pt-[70px] pb-[23px]'>
                    <UserCard messages={demoMessages} selectedId={1} />

                    <div className='pt-[23px]'>
                        <ChatMessages title="Чат з Username"
                                      requestWrapperClassName="mb-6 max-w-[300px]" // Змінюємо відступ і максимальну ширину
                                      respondWrapperClassName="flex flex-col items-end mb-6 max-w-[300px] ml-auto"
                        />
                    </div>
                </div>
            </div>

        </SplitLayout>
    );
}

export default ChatsPage;