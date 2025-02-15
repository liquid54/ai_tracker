import {ThemedText} from "@/app/components/ThemedText";
import Button from "@/app/components/button/Button";

type PricingCardProps = {
    title: string
    price: string
    description: string
}

const PricingCard = ({ title, price, description }: PricingCardProps) => {
    return (
        <div className="border border-gray-200 p-6 rounded-lg mb-4 w-full bg-white">
            <div className="flex justify-between items-center mb-4">
                <ThemedText type='heading'>{title}</ThemedText>
                <ThemedText type='heading'>{price}$ / місяць</ThemedText>
            </div>

            <p className="text-gray-600 mb-6">{description}</p>
            <div className='flex justify-end'>
                <Button variant="secondary" size="small">Купити</Button>
            </div>
        </div>
    )
}

export default PricingCard