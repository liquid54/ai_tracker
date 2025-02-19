import Button from "@/app/components/button/Button";
import {ThemedText} from "@/app/components/ThemedText";
import i18n from "@/app/i18n";

const EditSub = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-md
                          p-4 sm:p-5 md:p-6
                          bg-white rounded-lg">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div className="border-b border-[#D7DEDD]
                                  pb-2 sm:pb-3 md:pb-4">
                        <ThemedText type="heading">
                            {i18n.t('adminPanelSubscriptions.titleEdit')}
                        </ThemedText>
                    </div>

                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        <div>
                            <ThemedText type='subtext'>
                                {i18n.t('adminPanelSubscriptions.name')}
                            </ThemedText>
                            <input
                                type="text"
                                className="w-full border-b border-black py-1 sm:py-2 outline-none"
                                defaultValue="Тариф 'Місяць'"
                            />
                        </div>

                        <div>
                            <ThemedText type='subtext'>
                                {i18n.t('adminPanelSubscriptions.description')}
                            </ThemedText>
                            <textarea
                                className="w-full border-b border-black
                                         py-1 sm:py-2
                                         pt-4 sm:pt-6 md:pt-[32px]
                                         min-h-[80px] outline-none resize-none"
                                defaultValue="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                            />
                        </div>

                        <div>
                            <ThemedText type='subtext'>
                                {i18n.t('adminPanelSubscriptions.price')}
                            </ThemedText>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    className="w-full border-b border-black py-1 sm:py-2 outline-none"
                                    defaultValue="14"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 sm:pt-6 md:pt-8">
                        <Button
                            variant="primary"
                            className="w-full bg-black text-white py-2 sm:py-3"
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