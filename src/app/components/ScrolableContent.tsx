import React, { useEffect, useRef } from 'react';

type ScrollableContentProps = {
    children: React.ReactNode;
    className?: string;
    autoScroll?: boolean;
};

const ScrollableContent = ({ children, className = '', autoScroll = false }: ScrollableContentProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (autoScroll && scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [children, autoScroll]);

    return (
        <div
            ref={scrollRef}
            className={`
                overflow-y-auto
                [&::-webkit-scrollbar]:w-1
                [&::-webkit-scrollbar-track]:bg-[#0057FF4D]
                [&::-webkit-scrollbar-thumb]:bg-[#0057FF]
                [&::-webkit-scrollbar-thumb]:rounded-full
                ${className}
            `.trim()}
        >
            {children}
        </div>
    );
};

export default ScrollableContent;