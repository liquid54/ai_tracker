import {ThemedText} from "@/app/components/ThemedText";
import Button from "@/app/components/button/Button";
import i18n from "@/app/i18n";

type PricingCardProps = {
    title: string
    price: string
    description: string
}

const PricingCard = ({ title, price, description }: PricingCardProps) => {
    return (
        <div className="border border-gray-200 rounded-lg p-[18px] bg-white">
            <div className="flex justify-between items-center">
                <ThemedText type='heading'>{title}</ThemedText>
                <ThemedText type='heading'>{price}$ / {i18n.t('profile.pricePerMonth')}</ThemedText>
            </div>

            <div className="pt-[31px]">
                <div className='pr-[175px]'>
                    <ThemedText type='text-medium-grey' >{description}</ThemedText>
                </div>
                <div className='flex justify-end'>
                    <Button variant="secondary" size="small">{i18n.t('profile.buySubscription')}</Button>
                </div>
            </div>
        </div>
    )
}

export default PricingCard