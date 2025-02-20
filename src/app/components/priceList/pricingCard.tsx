import { PricingCardProps } from './types/pricing';
import Button from "@/app/components/button/Button";

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
                    <h3 className="text-lg font-medium">{title}</h3>
                    <p className="text-lg font-medium">{price}$ / місяць</p>
                </div>

                <p className="mt-2 text-gray-600">{description}</p>
            </div>

            <div className="mt-auto lg:pb-0 sm:pb-16 md:pb-16">
                {dateAmount && visibleDesc && (
                    <p className="text-gray-600">Термін дії до: {dateAmount}</p>
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