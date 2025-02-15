import { CustomInputProps } from './types';

const CustomInput = ({
                         type = 'text',
                         placeholder = '',
                         value = '',
                         required = false,
                         onChange = () => {},
                         className = '',
                         ...props
                     }: CustomInputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={onChange}
            className={`w-[345px] px-4 py-2 rounded-lg border border-gray-300 ${className}`}
            {...props}
        />
    );
};

export default CustomInput;