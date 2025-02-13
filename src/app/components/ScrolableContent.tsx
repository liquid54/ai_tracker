import React from 'react';

type ScrollableContentProps = {
    children: React.ReactNode;
    className?: string;
};

const ScrollableContent = ({ children, className = '' }: ScrollableContentProps) => {
    return (
        <div
            className={`
                overflow-y-auto
                [&::-webkit-scrollbar]:w-1
                [&::-webkit-scrollbar-track]:bg-[#0057FF4D]
                [&::-webkit-scrollbar-thumb]:bg-[#0057FF]
                [&::-webkit-scrollbar-thumb]:rounded-full
                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default ScrollableContent;