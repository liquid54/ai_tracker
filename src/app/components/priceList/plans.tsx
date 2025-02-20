'use client'

import PricingCard from "@/app/components/priceList/pricingCard";
import { PricingPlan } from "@/app/components/priceList/types/pricing";
import i18n from "@/app/i18n";

type PricingPlansProps = {
    plans: PricingPlan[]
    buttonText?: string
    onPlanSelect?: (plan: PricingPlan) => void
}

const Plans = ({ plans, buttonText = `${i18n.t('profile.buySubscription')}`, onPlanSelect }: PricingPlansProps) => {
    return (
        <div className="max-w-xl mx-auto p-4 flex flex-col items-center gap-y-[37px]">
            {plans.map((plan, index) => (
                <PricingCard
                    key={index}
                    title={plan.title}
                    price={plan.price}
                    description={plan.description}
                    buttonText={buttonText}
                    onClick={() => onPlanSelect?.(plan)}
                />
            ))}
        </div>
    )
}

export default Plans;