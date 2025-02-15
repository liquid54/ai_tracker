import PricingCard from './pricingCard';
import {PricingPlan} from './types/pricing'
import SplitLayout from "@/app/components/split_layout";
import {ThemedText} from "@/app/components/ThemedText";

type PricingPlansProps = {
    plans: PricingPlan[]
}

const PricingPlans = ({plans}: PricingPlansProps) => {
    return (
        <SplitLayout>
            <div className="flex items-center">
                <div>
                    <ThemedText type='heading' className='flex justify-center'>Ваша підписка</ThemedText>

                    <div className="max-w-xl mx-auto p-4 ">
                        {plans.map((plan, index) => (
                            plan.type === 'currently' && (
                                <PricingCard
                                    key={index}
                                    title={plan.title}
                                    price={plan.price}
                                    description={plan.description}
                                />
                            )
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-xl mx-auto p-4 flex flex-col items-center">
                {plans.map((plan, index) => (
                    <PricingCard
                        key={index}
                        title={plan.title}
                        price={plan.price}
                        description={plan.description}
                    />
                ))}
            </div>
        </SplitLayout>
    )
}

export default PricingPlans