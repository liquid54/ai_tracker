import React from 'react';
import { ThemedText } from "@/app/components/ThemedText";
import i18n from "@/app/i18n";


interface UsersProps {
    messages: Array<{
        id: number;
        user: string;
        text: string;
        timestamp: string;
    }>;
    selectedId: number;
    onUserSelect: (userId: number) => void;
    className?: string;
}

function Users({ messages, selectedId, onUserSelect, className }: UsersProps) {
    return (
        <div className='bg-[#FDFDFF] border-2 rounded-[10px] overflow-hidden h-[calc(100vh-151px)]'>
            <div className='py-5 pl-[21px]'>
                <ThemedText type='subheading'>{i18n.t('adminPanelChats.titleUsers')}</ThemedText>
            </div>
            <div className={`flex flex-col space-y-5 w-full px-3 pt-[56px] ${className || ''}`}>
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex flex-col bg-white rounded-lg p-4 w-full border-2 cursor-pointer transition-colors
                            ${selectedId === message.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'}`}
                        onClick={() => onUserSelect(message.id)}
                    >
                        <div className="flex items-center justify-between">
                            <ThemedText
                                type='subheading'
                                className="w-2/5"
                            >
                                {message.user}
                            </ThemedText>
                            <ThemedText
                                type='textlow'
                                className="w-3/5 pr-4 truncate"
                            >
                                {message.text}
                            </ThemedText>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;