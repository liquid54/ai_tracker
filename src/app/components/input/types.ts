import {ChangeEvent, InputHTMLAttributes} from 'react';

export interface CustomInputProps  extends InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    value?: string;
    className?: string;
    required?: boolean;

    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}