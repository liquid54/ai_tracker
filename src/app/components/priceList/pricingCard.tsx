import { PricingCardProps } from './types/pricing';
import Button from "@/app/components/button/Button";
import {ThemedText} from "@/app/components/ThemedText";
import i18n from "@/app/i18n";

const PricingCard = ({
                         title,
                         price,
                         description,
                         buttonText,
                         onClick,
                         dateAmount,
                         visibleDesc = false
                     }: PricingCardProps) => {
    return (
        <div className="w-full px-4 sm:px-5 md:px-6 lg:px-[41px]
                    py-4 sm:py-5 md:py-6
                    bg-white rounded-lg border border-gray-300
                    flex flex-col min-h-[200px] relative">
            <div>
                <div className="flex justify-between items-center">
                    <ThemedText type='heading'>{title}</ThemedText>
                    <ThemedText type='heading'>{price}$ / {i18n.t('profile.pricePerMonth')}</ThemedText>
                </div>

                <ThemedText type='subtitle' className='text-black/60'>{description}</ThemedText>
            </div>

            <div className="mt-auto lg:pb-0 sm:pb-16 md:pb-16">
                {dateAmount && visibleDesc && (
                    <ThemedText type='subtitle' className='text-black/60'>{i18n.t('profile.yourSubscriptionExpireDate')}: {dateAmount}</ThemedText>
                )}
            </div>

            {buttonText && (
                <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 right-4 sm:right-5 md:right-6 lg:right-[41px]">
                    <Button
                        variant="secondary"
                        onClick={onClick}
                        className="max-w-[120px]"
                        size='small'
                    >
                        {buttonText}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default PricingCard;