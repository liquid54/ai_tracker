import React from 'react';

export type textEnum =
    | 'heading'
    | 'text'
    | 'text-medium-white'
    | 'text-medium-grey'
    | 'link'
    | 'empty';

export type ThemedTextProps = React.HTMLAttributes<HTMLSpanElement> & {
    type?: textEnum;
    className?: string;
};

export function ThemedText({ type = 'text', className = '', ...rest }: ThemedTextProps) {
    return (
        <span
            className={`
        ${type === 'heading' ? 'text-[20px] leading-[32px] font-Roboto-Medium text-black/[0.87]' : ''}       
        ${type === 'text' ? 'text-[14px] leading-[24px] font-Roboto text-black' : ''}
        ${type === 'text-medium-white' ? 'text-[15px] leading-[26px] font-Roboto-Medium text-white/[0.87]' : ''}
        ${type === 'text-medium-grey' ? 'text-[14px] leading-[24px] font-Roboto text-black/[0.60]' : ''}
        ${type === 'link' ? 'text-[14px] leading-[22px] font-Roboto-Medium text-black/[0.87]' : ''}
        ${type === 'empty' ? '' : ''}
        ${className}`}
            {...rest}
        />
    );
}