import React from 'react';

export type textEnum =
    | 'heading'
    | 'subheading'
    | 'text'
    | 'subtext'
    | 'textlow'
    | 'text-medium-white'
    | 'text-medium-grey'
    | 'link'
    | 'title'
    | 'subtitle'
    | 'empty';

export type ThemedTextProps = React.HTMLAttributes<HTMLSpanElement> & {
    type?: textEnum;
    className?: string;
};

export function ThemedText({ type = 'text', className = '', ...rest }: ThemedTextProps) {
    return (
        <span
            className={`
        ${type === 'heading' ? 'text-xl leading-8 font-Roboto font-medium text-black/87' : ''}
        ${type === 'subheading' ? 'text-lg leading-5 font-Roboto font-bold text-black' : ''}      
        ${type === 'title' ? 'text-[24px] leading-[30px] font-Roboto font-semibold text-black' : ''}
        ${type === 'subtitle' ? 'text-[14px] leading-[20px] font-Roboto font-normal text-black' : ''}

        ${type === 'text' ? 'text-sm leading-6 font-Roboto font-normal text-black' : ''}
        ${type === 'subtext' ? 'text-[10px] leading-[13px] font-Roboto font-normal text-[#333333]' : ''}
        ${type === 'textlow' ? 'text-xs leading-5 font-Roboto font-normal text-black' : ''}
        ${type === 'text-medium-white' ? 'text-base leading-6 font-Roboto font-medium text-white/87' : ''}
        ${type === 'text-medium-grey' ? 'text-sm leading-6 font-Roboto font-normal text-black/60' : ''}
        ${type === 'link' ? 'text-sm leading-5 font-Roboto font-medium text-black/87' : ''}
        ${type === 'empty' ? '' : ''}
        ${className}`}
            {...rest}
        />
    );
}