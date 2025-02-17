export type MessageType = {
    request: string;
    respond: string;
    timestamp: string;
};

export type ChatBaseProps = {
    messages?: MessageType[];
    title?: string;
    titleClassName?: string;
    containerClassName?: string;
    messagesContainerClassName?: string;
    requestMessageClassName?: string;
    respondMessageClassName?: string;
    requestWrapperClassName?: string;
    respondWrapperClassName?: string;
    isSupportChat?: boolean;
};