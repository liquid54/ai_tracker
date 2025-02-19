'use client'

import { useEffect, useState } from 'react';
import Button from "@/app/components/button/Button";
import { ThemedText } from "@/app/components/ThemedText";
import i18n from "@/app/i18n";
import type { PricingPlan } from "@/app/components/priceList/types/pricing";

interface EditSubProps {
    plan: PricingPlan | null;
}

const EditSub = ({ plan }: EditSubProps) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: ''
    });

    // Оновлюємо дані форми коли змінюється вибраний план
    useEffect(() => {
        if (plan) {
            setFormData({
                title: plan.title,
                description: plan.description,
                price: plan.price.replace('$', '').trim()
            });
        }
    }, [plan]);

    if (!plan) {
        return null;
    }

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
                                value={formData.title}
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    title: e.target.value
                                }))}
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
                                value={formData.description}
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    description: e.target.value
                                }))}
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
                                    value={formData.price}
                                    onChange={(e) => setFormData(prev => ({
                                        ...prev,
                                        price: e.target.value
                                    }))}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 sm:pt-6 md:pt-8 items-center">
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