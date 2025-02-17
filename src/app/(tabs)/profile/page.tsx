
import {PricingPlan} from "@/app/components/priceList/types/pricing";
import PricingPlans from "@/app/components/priceList/pricingPlans";


const ProfilePage = () => {
    const pricingPlans: PricingPlan[] = [
        {
            title: 'Тариф "Місяць"',
            price: '18',
            description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            type: 'currently',
            dateAmount: '22.09.2024'
        },
        {
            title: 'Тариф "Потрійний"',
            price: '16',
            description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            type: 'none',
            dateAmount: '22.09.2024'
        },
        {
            title: 'Тариф "Річний"',
            price: '14',
            description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            type: 'none',
            dateAmount: '22.09.2024'
        }
    ]

    return (
        <div >
            <PricingPlans plans={pricingPlans}/>
        </div>
    )
}

export default ProfilePage