export type PricingPlan = {
    title: string
    price: string
    description: string
    type: string
}

export type PricingPlansProps = {
    plans: PricingPlan[]
}

