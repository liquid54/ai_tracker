'use client'

import { ChangeEvent, useState } from "react";
import SplitLayout from "@/app/components/split_layout";
import Bin from "@/app/assets/icons/bin";
import Button from "@/app/components/button/Button";
import { ThemedText } from "@/app/components/ThemedText";
import ScrollableContent from "../components/ScrolableContent";
import i18n from "@/app/i18n";
import PDFHandler from "./pdfhandler";

interface FileHistory {
    id: string;
    name: string;
    content: string;
    date: Date;
}

export default function HomePage() {
    const [fileName, setFileName] = useState(i18n.t('mainPage.fileNotSelected'));
    const [extractedText, setExtractedText] = useState('');
    const [fileHistory, setFileHistory] = useState<FileHistory[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { extractTextFromPDF } = PDFHandler({
        onTextExtracted: (text, filename) => {
            setExtractedText(text);
            // Add to history only if text was successfully extracted
            if (text && filename) {
                addToHistory(filename, text);
            }
        }
    });

    const addToHistory = (name: string, content: string) => {
        const newFile: FileHistory = {
            id: Date.now().toString(), // Using timestamp as a simple unique ID
            name,
            content,
            date: new Date()
        };
        setFileHistory(prev => [newFile, ...prev]);
    };

    const removeFromHistory = (id: string) => {
        setFileHistory(prev => prev.filter(file => file.id !== id));
    };

    const viewHistoryItem = (content: string) => {
        setExtractedText(content);
    };

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setIsLoading(true);
        try {
            if (file.type === 'application/pdf') {
                setFileName(file.name);
                await extractTextFromPDF(file);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const ListItem = ({ file }: { file: FileHistory }) => (
        <li>
            <div className="py-2">
                <div className="flex justify-between items-center p-2 pb-[1px]">
                    <button
                        onClick={() => viewHistoryItem(file.content)}
                        className="flex flex-col items-start max-w-[80%] hover:bg-gray-50 p-1 rounded"
                    >
                        <ThemedText
                            type="text-medium-grey"
                            className="truncate w-full text-sm sm:text-base"
                        >
                            {file.name}
                        </ThemedText>

                    </button>
                    <button
                        className="p-2 hover:bg-gray-100 rounded-full"
                        onClick={() => removeFromHistory(file.id)}
                    >
                        <Bin />
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

                    <label className="flex flex-col w-full items-center gap-3 sm:flex-row sm:w-auto cursor-pointer">
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                            accept="application/pdf,*/*"
                        />
                        <ThemedText
                            type="text-medium-grey"
                            className="border border-gray-300 rounded-[10px] px-3 sm:px-2 py-[1px] hover:bg-gray-300 hover:text-white w-full sm:w-auto text-center transition-colors text-sm sm:text-base"
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

                    <Button
                        className="w-full sm:w-[200px] md:w-[250px] px-4 sm:px-8"

                    >
                        <ThemedText type="text-medium-white">
                            {isLoading ? 'Processing...' : i18n.t('mainPage.process')}
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
                    <ul className="mt-3 sm:mt-4 md:mt-6 max-h-[25vh] sm:max-h-[30vh] md:max-h-[40vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        {fileHistory.map((file) => (
                            <ListItem key={file.id} file={file} />
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
                        className="flex flex-col pb-3 sm:pb-4 md:pb-6 max-h-[25vh] sm:max-h-[30vh] md:max-h-[40vh] lg:max-h-[50vh] pr-3 sm:pr-4 md:pr-8 lg:pr-12"
                    >
                        <div className="space-y-3 sm:space-y-4">
                            {isLoading ? (
                                <ThemedText type="text">
                                    Завантаження файлу PDF
                                </ThemedText>
                            ) : extractedText ? (
                                <ThemedText type="text">
                                    {extractedText}
                                </ThemedText>
                            ) : (
                                <ThemedText type="text">
                                    Файл не вибрано
                                </ThemedText>
                            )}
                        </div>
                    </ScrollableContent>
                </div>

                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8 lg:mt-12">
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