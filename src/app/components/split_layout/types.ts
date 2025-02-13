import { ReactNode } from 'react';

export type SplitLayoutProps = {
    children: [ReactNode, ReactNode];
    leftWidth?: string;
    rightWidth?: string;
    className?: string;
};