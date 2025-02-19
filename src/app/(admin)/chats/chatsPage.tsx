'use client'

import { useState } from 'react';
import SplitLayout from "@/app/components/split_layout";
import Users from "@/app/(admin)/chats/users";
import UserCard from "@/app/(admin)/chats/userInfo";
import ChatMessages from "@/app/components/chat/ChatMessages";
import { users, initialChats } from './mock';
import type {Chat, ChatMessage } from './types';

const ChatsPage = () => {
    const [selectedUserId, setSelectedUserId] = useState(1);
    const [chats, setChats] = useState<Chat[]>(initialChats);

    const selectedUser = users.find(user => user.id === selectedUserId);
    const currentChat = chats.find(chat => chat.userId === selectedUserId);

    const handleUserSelect = (userId: number) => {
        setSelectedUserId(userId);
    };

    const handleSendMessage = (message: ChatMessage) => {
        setChats(prevChats => {
            return prevChats.map(chat => {
                if (chat.userId === selectedUserId) {
                    return {
                        ...chat,
                        messages: [...chat.messages, message]
                    };
                }
                return chat;
            });
        });
    };

    return (
        <SplitLayout className="h-screen w-full flex">
            {/* Ліва частина - список користувачів */}
            <div className="px-[25px] pt-[70px] pb-[31px] bg-white">
                <Users
                    messages={users}
                    selectedId={selectedUserId}
                    onUserSelect={handleUserSelect}
                />
            </div>

            {/* Права частина - інформація про користувача та чат */}
            <div>
                <div className="px-4 md:px-6 lg:px-[120px] pt-[70px] pb-[23px]">
                    {/* Картка користувача */}
                    <UserCard
                        messages={users}
                        selectedId={selectedUserId}
                    />

                    {/* Чат */}
                    <div className="pt-[23px]">
                        <ChatMessages
                            title={`Чат з ${selectedUser?.user || 'User'}`}
                            messages={currentChat?.messages || []}
                            requestWrapperClassName="mb-6 max-w-[300px]"
                            respondWrapperClassName="flex flex-col items-end mb-6 max-w-[300px] ml-auto"
                            isSupportChat={true}
                            onSendMessage={handleSendMessage}
                        />
                    </div>
                </div>
            </div>
        </SplitLayout>
    );
}

export default ChatsPage;