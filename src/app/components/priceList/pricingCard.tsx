import {ThemedText} from "@/app/components/ThemedText";
import Button from "@/app/components/button/Button";
import i18n from "@/app/i18n";

type PricingCardProps = {
    title: string
    price: string
    description: string
    buttonText?: string
    visibleDesc?: boolean
    dateAmount?: string
}

const PricingCard = ({
                         title,
                         price,
                         description,
                         buttonText = i18n.t('profile.buySubscription'),
                         visibleDesc = false,
                         dateAmount
                     }: PricingCardProps) => {
    return (
        <div className="border border-gray-200 rounded-lg p-[18px] bg-white">
            <div className="flex justify-between items-center">
                <ThemedText type='heading'>{title}</ThemedText>
                <ThemedText type='heading'>{price}$ / {i18n.t('profile.pricePerMonth')}</ThemedText>
            </div>

            <div className="pt-[31px]">
                <div className='pr-[175px]'>
                    <ThemedText type='text-medium-grey'>{description}</ThemedText>
                </div>
                {visibleDesc ? (
                    <div className='flex justify-between'>
                        <ThemedText type='text' className='text-[#00000099] opacity-60 self-end'>{dateAmount}</ThemedText>
                        <Button
                            variant="secondary"
                            size="medium"
                              // або яка ширина вам потрібна
                        >
                            {buttonText}
                        </Button>
                    </div>
                ) : (
                    <div className='flex justify-end'>
                        <Button variant="secondary" size="small">{buttonText}</Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PricingCard