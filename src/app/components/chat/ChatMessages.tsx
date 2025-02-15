import { ChatBaseProps } from './types';
import { DUMMY_MESSAGES } from './constants';

const ChatMessages = ({
                          messages = DUMMY_MESSAGES,
                          title,
                          titleClassName = "pl-[41px] py-6 border-b",
                          containerClassName = "w-full bg-white rounded-lg overflow-hidden border-[1px] border-[#C4C4C4]",
                          messagesContainerClassName = "p-4 space-y-8 px-[45px] pt-[48px]",
                          requestMessageClassName = "bg-gray-100 rounded-2xl px-4 py-2",
                          respondMessageClassName = "bg-blue-500 text-white rounded-2xl px-4 py-2",
                          requestWrapperClassName = "mb-8 max-w-xs md:max-w-md",
                          respondWrapperClassName = "flex flex-col items-end mb-8 max-w-xs md:max-w-md ml-auto"
                      }: ChatBaseProps) => {
    return (
        <div className={containerClassName}>
            <div className={titleClassName}>
                {title}
            </div>

            <div className={messagesContainerClassName}>
                {messages.map((message, index) => (
                    <div key={`message-${index}`}>
                        {/* User message */}
                        <div className={requestWrapperClassName}>
                            <div className={requestMessageClassName}>
                                <p className="text-sm">{message.request}</p>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div>
                        </div>

                        {/* Support response */}
                        <div className={respondWrapperClassName}>
                            <div className={respondMessageClassName}>
                                <p className="text-sm">{message.respond}</p>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input field */}
            <div className="p-4 px-10 pb-[42px]">
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Введіть текст"
                        disabled
                        className="flex-1 p-2 rounded-lg bg-gray-50 border"
                    />
                    <button
                        disabled
                        className="p-2 rounded-lg bg-gray-100"
                    >
                        ➜
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatMessages;