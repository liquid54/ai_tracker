import Button from "@/app/components/button/Button";
import {ThemedText} from "@/app/components/ThemedText";
import i18n from "@/app/i18n";

const EditSub = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-md p-6 bg-white rounded-lg">
                <div className="space-y-2">
                    <div className="border-b border-[#D7DEDD] py-1" >
                        <ThemedText type="heading">
                            {i18n.t('adminPanelSubscriptions.titleEdit')}
                        </ThemedText>
                    </div>

                    <div>
                        <ThemedText type='subtext'>{i18n.t('adminPanelSubscriptions.name')}</ThemedText>
                        <input
                            type="text"
                            className="w-full border-b border-black py-1"
                            defaultValue="Тариф 'Місяць'"
                        />
                    </div>

                    <div>
                        <ThemedText type='subtext'>{i18n.t('adminPanelSubscriptions.description')}</ThemedText>
                        <textarea
                            className="w-full border-b border-black py-1 pt-[32px]"
                            defaultValue="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                    </div>

                    <div>
                        <ThemedText type='subtext'>{i18n.t('adminPanelSubscriptions.price')}</ThemedText>
                        <div className="flex items-center">
                            <input
                                type="text"
                                className="w-full border-b border-black py-1"
                                defaultValue="14"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button
                            variant="primary"
                            className="w-full bg-black text-white py-3"
                        >
                            {i18n.t('adminPanelSubscriptions.save')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditSub;