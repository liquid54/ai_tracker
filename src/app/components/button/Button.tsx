import React from 'react';

const Button = ({
                    children,
                    className = '',
                    variant = 'primary', // 'primary' | 'secondary'
                    size = 'large',  // 'large' | 'small'
                }) => {
    const baseStyles = 'flex items-center justify-center gap-2 rounded-2xl text-white';

    const variantStyles = {
        primary: 'bg-blue-600',
        secondary: 'bg-black'
    };

    const sizeStyles = {
        large: 'w-[344px] h-[43px]',
        small: 'w-[107px] h-[42px] px-[22px] py-2' // розміри зі скріншоту
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