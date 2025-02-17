export type PricingPlan = {
    title: string
    price: string
    description: string
    type: string
    visibleDesc?: boolean
    dateAmount?: string
}

export type PricingPlansProps = {
    plans: PricingPlan[]
}

