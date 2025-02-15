export type Message = {
    id: number;
    user: string;
    text: string;
    timestamp?: string;
};

export interface ChatMessagesProps {
    messages: Message[];
    className?: string;
}

export interface UserCardProps {
    messages: Message[];
    selectedId?: number;
}