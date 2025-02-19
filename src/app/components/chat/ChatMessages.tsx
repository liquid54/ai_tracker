'use client'

import React, { useState, KeyboardEvent } from 'react';
import { ChatBaseProps, MessageType } from './types';
import { DUMMY_MESSAGES } from './constants';
import { ThemedText } from "@/app/components/ThemedText";
import Send from "@/app/assets/icons/send";

const ChatMessages = ({
                          messages: initialMessages = DUMMY_MESSAGES,
                          title,
                          titleClassName = "pl-4 sm:pl-6 md:pl-8 lg:pl-[41px] py-4 sm:py-5 md:py-6 border-b",
                          containerClassName = "w-full bg-white rounded-lg overflow-hidden border-[1px] border-[#C4C4C4]",
                          messagesContainerClassName = "p-4 sm:p-6 md:p-8 lg:px-[45px] lg:pt-[48px] space-y-6 sm:space-y-7 md:space-y-8",
                          requestMessageClassName = "bg-gray-100 rounded-2xl px-4 py-2",
                          respondMessageClassName = "bg-blue-500 text-white rounded-2xl px-4 py-2",
                          requestWrapperClassName = "mb-4 sm:mb-5 md:mb-6 max-w-xs md:max-w-md",
                          respondWrapperClassName = "flex flex-col items-end mb-4 sm:mb-5 md:mb-6 max-w-xs md:max-w-md ml-auto",
                          isSupportChat = false
                      }: ChatBaseProps) => {
    const [messages, setMessages] = useState(initialMessages);
    const [inputText, setInputText] = useState('');

    const handleSendMessage = () => {
        if (inputText.trim()) {
            const newMessage = {
                request: inputText,
                respond: isSupportChat
                    ? "Дякую за відповідь!"
                    : "Дякуємо за запит, надамо відповідь якомога швидше",
                timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
            };

            setMessages([...messages, newMessage]);
            setInputText('');
        }
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className={containerClassName}>
            <div className={titleClassName}>
                <ThemedText type='subheading'>{title}</ThemedText>
            </div>

            <div className={messagesContainerClassName}>
                {messages.map((message, index) => (
                    <div key={`message-${index}`} className="flex flex-col space-y-4">
                        <div className={respondWrapperClassName}>
                            <div className={respondMessageClassName}>
                                <p className="text-sm">{message.request}</p>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div>
                        </div>
                        {message.respond && (
                            <div className={requestWrapperClassName}>
                                <div className={requestMessageClassName}>
                                    <p className="text-sm">{message.respond}</p>
                                </div>
                                <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="p-4 sm:px-6 md:px-8 lg:px-10 pb-6 sm:pb-8 md:pb-10 lg:pb-[42px]">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder={isSupportChat ? "Введіть відповідь користувачу" : "Введіть текст"}
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={onKeyDown}
                        className="w-full p-2 pr-12 rounded-lg bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="absolute right-0 rounded-lg p-2 hover:bg-gray-100 transition-colors"
                    >
                        <Send/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatMessages;