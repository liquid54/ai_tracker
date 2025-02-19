'use client'

import { ChangeEvent, useState } from "react";
import SplitLayout from "@/app/components/split_layout";
import Bin from "@/app/assets/icons/bin";
import Button from "@/app/components/button/Button";
import { ThemedText } from "@/app/components/ThemedText";
import ScrollableContent from "../components/ScrolableContent";
import i18n from "@/app/i18n";

export default function HomePage() {
    const files = [
        { id: 1, name: 'File1.doc' },
        { id: 2, name: 'File2.doc' },
        { id: 3, name: 'File1.doc' },
        { id: 4, name: 'File2.doc' },
        { id: 5, name: 'File1.doc' },
        { id: 6, name: 'File2.doc' },
        { id: 7, name: 'File1.doc' },
        { id: 8, name: 'File2.doc' },

    ];

    const [fileName, setFileName] = useState(i18n.t('mainPage.fileNotSelected'));

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setFileName(file?.name ?? i18n.t('mainPage.fileNotSelected'));
    };

    const ListItem = ({ fileName }: { fileName: string }) => (
        <li>
            <div className="py-2">
                <div className="flex justify-between items-center p-2 pb-[1px]">
                    <ThemedText
                        type="text-medium-grey"
                        className="truncate max-w-[80%] text-sm sm:text-base"
                    >
                        {fileName}
                    </ThemedText>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Bin />  {/*className="w-4 h-4 sm:w-5 sm:h-5"*/}
                    </button>
                </div>
                <hr />
            </div>
        </li>
    );

    return (
        <SplitLayout showBackgroundOpacity={true}>
            {/* Left Column - File Upload and History */}
            <div className="p-4 sm:p-6 md:pt-12 md:px-8 lg:pt-12 lg:px-12">
                {/* File Upload Section */}
                <div className="flex flex-col items-center gap-y-4 w-full">
                    <ThemedText
                        type="heading"
                        className="text-center text-lg sm:text-xl md:text-2xl"
                    >
                        {i18n.t('mainPage.titleFile')}
                    </ThemedText>

                    <label className="flex flex-col w-full items-center gap-3
                                    sm:flex-row sm:w-auto cursor-pointer">
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                            accept="*/*"
                        />
                        <ThemedText
                            type="text-medium-grey"
                            className="border border-gray-300 rounded-[10px] px-3 sm:px-4 py-2
                                     hover:bg-gray-300 hover:text-white w-full sm:w-auto
                                     text-center transition-colors text-sm sm:text-base"
                        >
                            {i18n.t('mainPage.titleFile')}
                        </ThemedText>

                        <ThemedText
                            type="text"
                            className="truncate max-w-[150px] sm:max-w-[200px] text-sm sm:text-base"
                        >
                            {fileName}
                        </ThemedText>
                    </label>

                    <Button className="w-full sm:w-[200px] md:w-[250px] px-4 sm:px-8">
                        <ThemedText type="text-medium-white">
                            {i18n.t('mainPage.process')}
                        </ThemedText>
                    </Button>
                </div>

                {/* History Section */}
                <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16">
                    <div className="flex justify-center">
                        <h3 className="text-base sm:text-lg md:text-xl font-medium">
                            {i18n.t('mainPage.titleHistory')}
                        </h3>
                    </div>
                    <ul className="mt-3 sm:mt-4 md:mt-6
                                 max-h-[25vh] sm:max-h-[30vh] md:max-h-[40vh]
                                 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300
                                 scrollbar-track-gray-100">
                        {files.map((file) => (
                            <ListItem key={file.id} fileName={file.name} />
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Column - Analysis Section */}
            <div className="p-4 sm:p-6 md:px-8 md:py-12 lg:px-10 lg:py-16">
                <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 lg:pl-10 shadow-sm">
                    <div className="pb-3 sm:pb-4 md:pb-6 pt-3 sm:pt-4 md:pt-8">
                        <ThemedText
                            type="heading"
                            className="text-lg sm:text-xl md:text-2xl"
                        >
                            {i18n.t('mainPage.titleAnalyse')}
                        </ThemedText>
                    </div>

                    <ScrollableContent
                        className="flex flex-col pb-3 sm:pb-4 md:pb-6
                                  max-h-[25vh] sm:max-h-[30vh] md:max-h-[40vh] lg:max-h-[50vh]
                                  pr-3 sm:pr-4 md:pr-8 lg:pr-12"
                    >
                        <div className="space-y-3 sm:space-y-4">
                            {Array(12).fill(null).map((_, index) => (
                                <ThemedText
                                    key={index}
                                    type="text"
                                    className="text-sm sm:text-base"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...



                                </ThemedText>
                            ))}
                        </div>
                    </ScrollableContent>
                </div>

                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center
                              gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8 lg:mt-12">
                    <Button className="w-full sm:w-[200px] md:w-[250px] px-4 sm:px-8">
                        {i18n.t('mainPage.save')}
                    </Button>
                    <Button className="w-full sm:w-[200px] md:w-[250px] px-4 sm:px-8">
                        {i18n.t('mainPage.download')}
                    </Button>
                </div>
            </div>
        </SplitLayout>
    );
}