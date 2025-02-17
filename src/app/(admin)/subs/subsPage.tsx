import SplitLayout from "@/app/components/split_layout";
import Plans from "@/app/components/priceList/plans";
import {pricingPlans} from "@/app/components/priceList/types/pricingData";
import {ThemedText} from "@/app/components/ThemedText";
import EditSub from "@/app/(admin)/subs/editSub";
import i18n from "@/app/i18n";




const SubsPage = () => {





    return (
        <SplitLayout className="flex h-[100wh]">
            <div>
                <div className="flex justify-center pt-[26px] pb-[43px]" >
                    <ThemedText type='heading'>{i18n.t('adminPanelSubscriptions.titleSubscriptions')}</ThemedText>
                </div>
                <Plans plans={pricingPlans} />
            </div>


            <div>
                <div className='px-[220px] pt-[151px] content-center'>
                    <EditSub/>
                </div>
            </div>
        </SplitLayout>
    );
}


export default SubsPage;