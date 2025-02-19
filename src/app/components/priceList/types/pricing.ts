export interface PricingPlan {
    key: number;
    title: string;
    price: string;
    description: string;
}

export interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    buttonText?: string;
    onClick?: () => void;
}