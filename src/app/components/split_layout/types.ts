export interface SplitLayoutProps {
    children: [React.ReactNode, React.ReactNode];
    leftWidth?: string;
    rightWidth?: string;
    className?: string;
    showBackgroundOpacity?: boolean;
}