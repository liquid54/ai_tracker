import React from 'react';
import type { UserCardProps } from './types';
import {ThemedText} from "@/app/components/ThemedText";
import Button from "@/app/components/button/Button";
import i18n from "@/app/i18n";

function UserCard({ messages, selectedId }: UserCardProps) {
    const selectedUser = messages.find(message => message.id === selectedId);

    if (!selectedUser) {
        return null;
    }

    return (
        <div className="bg-white rounded-[10px] flex flex-col border border-gray-200">
            <div className="flex justify-between items-center px-[27px] py-[21px]">
                <ThemedText type='subheading' className="font-bold text-gray-900">{selectedUser.user}</ThemedText>
                <Button className="w-[156px]" variant='secondary'>
                    {i18n.t('adminPanelChats.block')}
                </Button>
            </div>
            <div className="flex justify-between items-center px-[27px] py-[21px]">
                <ThemedText type='text' className="text-[#00000099]">
                    {i18n.t('adminPanelChats.yourSubscriptionExpireDate')}: {selectedUser.timestamp}
                </ThemedText>
                <Button className="w-[229px]" variant='secondary'>
                    {i18n.t('adminPanelChats.extendSubscription')}
                </Button>
            </div>
        </div>
    );
}

export default UserCard;