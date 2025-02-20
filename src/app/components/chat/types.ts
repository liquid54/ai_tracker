export interface Message {
    request: string;
    respond: string;
    timestamp: string;
}

export interface ChatBaseProps {
    messages?: Message[];
    title?: string;
    titleClassName?: string;
    containerClassName?: string;
    messagesContainerClassName?: string;
    requestMessageClassName?: string;
    respondMessageClassName?: string;
    requestWrapperClassName?: string;
    respondWrapperClassName?: string;
    isSupportChat?: boolean;
    onSendMessage?: (message: Message) => void;
}

export type MessagesEndRef = HTMLDivElement;