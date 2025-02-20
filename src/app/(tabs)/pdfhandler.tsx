// PDFHandler.tsx
'use client'

import { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface PDFHandlerProps {
    onTextExtracted: (text: string) => void;
}

const PDFHandler = ({ onTextExtracted }: PDFHandlerProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const extractTextFromPDF = async (file: File) => {
        setIsLoading(true);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            let fullText = '';

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const pageText = textContent.items
                    .map((item: any) => item.str)
                    .join(' ');
                fullText += pageText + '\n\n';
            }

            onTextExtracted(fullText);
        } catch (error) {
            console.error('Error extracting text from PDF:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return { extractTextFromPDF, isLoading };
};

export default PDFHandler;