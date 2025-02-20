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
                    flex flex-col">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="text-lg font-medium">{price}$ / місяць</p>
            </div>

            <p className="mt-2 text-gray-600">{description}</p>

            {/* Додаємо відображення дати */}
            {dateAmount && visibleDesc && (
                <p className="mt-2 text-gray-600">Дійсна до: {dateAmount}</p>
            )}

            {buttonText && (
                <Button
                    variant="secondary"
                    onClick={onClick}
                    className="mt-4 w-[120px] self-end"
                    size='small'
                >
                    {buttonText}
                </Button>
            )}
        </div>
    );
};

export default PricingCard;