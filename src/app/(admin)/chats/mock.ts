import type { Message } from './types';

export const users: Message[] = [
    {
        id: 1,
        user: "User 1",
        text: "Lorem Ipsum has been the industry's standard dummy text",
        timestamp: "22.03.2025",
    },
    {
        id: 2,
        user: "User 2",
        text: "Another sample message here",
        timestamp: "23.03.2025",
    },
    {
        id: 3,
        user: "User 3",
        text: "Third user's sample message",
        timestamp: "24.03.2025",
    }
];

export const initialChats = [
    {
        userId: 1,
        messages: [
            {
                request: "Добрий день, у мене питання щодо підписки",
                respond: "Вітаю! Так, звичайно, я допоможу вам з цим питанням",
                timestamp: "8:00 PM"
            },
            {
                request: "Як я можу продовжити термін?",
                respond: "Ви можете це зробити в особистому кабінеті",
                timestamp: "8:05 PM"
            }
        ]
    },
    {
        userId: 2,
        messages: [
            {
                request: "Привіт, не можу увійти в систему",
                respond: "Добрий день! Давайте перевіримо ваші дані",
                timestamp: "9:15 PM"
            }
        ]
    },
    {
        userId: 3,
        messages: [
            {
                request: "Є питання щодо оплати",
                respond: "Добрий день! Яка саме інформація вас цікавить?",
                timestamp: "10:30 PM"
            }
        ]
    }
];