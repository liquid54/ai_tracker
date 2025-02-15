import {type ReactNode} from 'react';

interface ButtonProps {
    children: ReactNode,
    className?: string,
    variant?: 'primary' | 'secondary',
    size?: 'large' | 'small' | 'medium',
    onClick?: () => void,
    type?: string
}

const Button = ({
                    children,
                    className = '',
                    variant = 'primary',
                    size = 'large',
                    type
                }: ButtonProps) => {
    const baseStyles = 'flex items-center justify-center gap-2 rounded-2xl text-white';

    const variantStyles = {
        primary: 'bg-[#0057FF]',
        secondary: 'bg-black'
    };

    const sizeStyles = {
        large: 'w-[344px] h-[42px]',
        small: 'w-[107px] h-[42px] px-[22px] py-2',
        medium: 'w-[126px] h-[42px] rounded-[10px]'
    };

    return (
        <button
            className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
        >
            {children}
        </button>
    );
};

export default Button;