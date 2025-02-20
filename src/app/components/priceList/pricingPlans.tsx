import PricingCard from './pricingCard';
import {PricingPlansProps} from './types/pricing'
import SplitLayout from "@/app/components/split_layout";
import {ThemedText} from "@/app/components/ThemedText";
import Plans from "@/app/components/priceList/plans";
import i18n from "@/app/i18n";



const PricingPlans = ({plans}: PricingPlansProps) => {
    return (
        <SplitLayout className='flex h-[100wh]'>
            <div className="flex items-center gap-x-[37px] justify-center">
                <div className='p-[18px]'>
                    <ThemedText type='heading' className='flex justify-center pt-8 sm:pt-12 md:pt-[76px] pb-6 sm:pb-8 md:pb-[37px]'>
                        {i18n.t('profile.titleYourSubscription')}
                    </ThemedText>
                    <div >
                        {plans.map((plan, index) => (
                            plan.type === 'currently' && (
                                <PricingCard
                                    key={index}
                                    title={plan.title}
                                    price={plan.price}
                                    description={plan.description}
                                    buttonText={i18n.t('profile.extendSubscription')}
                                    visibleDesc={true}
                                    dateAmount={plan.dateAmount}
                                />
                            )
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex py-8 pt-[145px]">
                <Plans plans={plans}/>
            </div>
        </SplitLayout>
    )
}

export default PricingPlans