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
                <div className="flex justify-center pt-4 sm:pt-6 md:pt-[26px] pb-6 sm:pb-8 md:pb-[43px]">
                    <ThemedText type='heading'>{i18n.t('adminPanelSubscriptions.titleSubscriptions')}</ThemedText>
                </div>
                <Plans plans={pricingPlans} />
            </div>

            <div>
                <div className="px-4 sm:px-6 md:px-8 lg:px-[220px]
                               pt-6 sm:pt-8 md:pt-12 lg:pt-[151px]
                               content-center">
                    <EditSub/>
                </div>
            </div>
        </SplitLayout>
    );
}

export default SubsPage;