export interface ChatMessage {
    request: string;
    respond?: string;
    timestamp: string;
}

export interface ChatBaseProps {
    messages?: ChatMessage[];
    title: string;
    titleClassName?: string;
    containerClassName?: string;
    messagesContainerClassName?: string;
    requestMessageClassName?: string;
    respondMessageClassName?: string;
    requestWrapperClassName?: string;
    respondWrapperClassName?: string;
    isSupportChat?: boolean;
    onSendMessage?: (message: ChatMessage) => void;
}