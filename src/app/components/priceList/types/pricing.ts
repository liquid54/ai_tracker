// У файлі ./types/pricing.ts

export interface PricingPlan {
    title: string;
    price: string;
    description: string;
    type: string;
    dateAmount?: string;
}

export interface PricingPlansProps {
    plans: PricingPlan[];
    buttonText?: string;
    onPlanSelect?: (plan: PricingPlan) => void;
}

export interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    buttonText?: string;
    onClick?: () => void;
    dateAmount?: string;
    visibleDesc?: boolean;
}