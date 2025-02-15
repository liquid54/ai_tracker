import React from 'react';
import type {ChatMessagesProps} from './types';
import {ThemedText} from "@/app/components/ThemedText";
import i18n from "@/app/i18n";

function Users({messages, className}: ChatMessagesProps) {
    return (
        <div className='bg-[#FDFDFF] border-2 rounded-[10px] overflow-hidden h-[calc(100vh-151px)]'>
            <div className='py-5 pl-[21px]'>
                <ThemedText type='subheading'>{i18n.t('adminPanelChats.titleUsers')}</ThemedText>
            </div>
            <div className={`flex flex-col space-y-5 w-full px-5 pt-[56px] ${className || ''}`}>
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className="flex flex-col bg-white rounded-lg shadow-sm p-4 w-full border-2 border-gray-200"
                    >
                        <div className="flex items-center space-x-4 justify-between">
                            <ThemedText
                                type='subheading'
                                className="pl-[28px]"
                            >
                                {message.user}
                            </ThemedText>
                            <ThemedText
                                type='textlow'
                                className="pr-[16px]"
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