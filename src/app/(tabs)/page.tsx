'use client'

import SplitLayout from "@/app/components/split_layout";
import Bin from "@/app/assets/icons/bin";
import Button from "@/app/components/button/Button";
import {ThemedText} from "@/app/components/ThemedText";
import ScrollableContent from "../components/ScrolableContent";
import i18n from "@/app/i18n";
import {ChangeEvent, useState} from "react";

export default function HomePage() {
    const files = [
        {id: 1, name: 'File1.doc'},
        {id: 2, name: 'File2.doc'},
        {id: 3, name: 'File3.doc'},
        {id: 4, name: 'File4.doc'},
        {id: 5, name: 'File5.doc'},
        {id: 6, name: 'File6.doc'},
        {id: 7, name: 'File7.doc'},
        {id: 8, name: 'File8.doc'},
        {id: 9, name: 'File9.doc'},
        {id: 10, name: 'File10.doc'}
    ];

    const [fileName, setFileName] = useState(i18n.t('mainPage.fileNotSelected'));

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setFileName(file?.name ?? i18n.t('mainPage.fileNotSelected'));
    };

    const ListItem = ({fileName}: {fileName: string}) => (
        <li>
            <div className="py-2">
                <div className="flex justify-between items-center p-2 pb-[1px]">
                    <ThemedText type="text-medium-grey" className="truncate">{fileName}</ThemedText>
                    <Bin/>
                </div>
                <hr/>
            </div>
        </li>
    );

    return (
        <SplitLayout showBackgroundOpacity={false}>
            {/* Ліва колонка */}
            <div className="p-4 md:pt-[49px] md:px-[51px]">
                {/* Секція завантаження файлу */}
                <div className="flex flex-col items-center gap-y-4 w-full">
                    <ThemedText type="heading" className="text-center">
                        {i18n.t('mainPage.titleFile')}
                    </ThemedText>

                    <label className="flex flex-col md:flex-row w-full md:w-auto items-center gap-3 cursor-pointer">
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                            accept="*/*"
                        />
                        <ThemedText
                            type="text-medium-grey"
                            className="border border-gray-300 rounded-[10px] px-4 py-2 hover:bg-gray-300 hover:text-white w-full md:w-auto text-center"
                        >
                            {i18n.t('mainPage.titleFile')}
                        </ThemedText>

                        <ThemedText type="text" className="truncate max-w-[200px]">
                            {fileName}
                        </ThemedText>
                    </label>

                    <Button className="w-full md:w-auto">
                        <ThemedText type="text-medium-white">
                            {i18n.t('mainPage.process')}
                        </ThemedText>
                    </Button>
                </div>

                {/* Секція історії */}
                <div className="mt-8 md:mt-[113px]">
                    <div className="flex justify-center">
                        <h3 className="text-lg font-medium">
                            {i18n.t('mainPage.titleHistory')}
                        </h3>
                    </div>
                    <ul className="mt-4 md:mt-[27px] max-h-[40vh] overflow-y-auto">
                        {files.map((file) => (
                            <ListItem key={file.id} fileName={file.name}/>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Права колонка */}
            <div className="p-4 md:px-10 md:py-[86px]">
                <div className="bg-white rounded-2xl p-4 md:pl-[45px]">
                    <div className="pb-4 md:pb-6 pt-4 md:pt-[61px]">
                        <ThemedText type="heading">
                            {i18n.t('mainPage.titleAnalyse')}
                        </ThemedText>
                    </div>

                    <ScrollableContent className="flex flex-col pb-4 md:pb-[21px] max-h-[40vh] md:max-h-[50vh] pr-4 md:pr-20">
                        <div className="space-y-4">
                            {Array(12).fill(null).map((_, index) => (
                                <ThemedText key={index} type="text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                </ThemedText>
                            ))}
                        </div>
                    </ScrollableContent>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 md:mt-12">
                    <Button className="w-full md:w-auto">
                        {i18n.t('mainPage.save')}
                    </Button>
                    <Button className="w-full md:w-auto">
                        {i18n.t('mainPage.download')}
                    </Button>
                </div>
            </div>
        </SplitLayout>
    );
}