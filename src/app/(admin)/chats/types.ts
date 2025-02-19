// Базові типи повідомлень
export type Message = {
    id: number;
    user: string;
    text: string;
    timestamp: string; // Прибрали знак питання, зробили обов'язковим
};

// Тип для повідомлення в чаті
export type ChatMessage = {
    request: string;
    respond?: string;
    timestamp: string;
};

// Тип для структури чату
export type Chat = {
    userId: number;
    messages: ChatMessage[];
};

// Пропси для компонентів
export interface UsersProps {
    messages: Message[];
    selectedId?: number;
    onUserSelect?: (userId: number) => void;
    className?: string;
}

export interface UserCardProps {
    messages: Message[];
    selectedId?: number;
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