import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: 'primary' | 'secondary';
    width?: string;
};


export default function Button({
    children,
    color = 'primary',
    width,
    ...props
}: Props) {
    const baseStyles =
        ' rounded-md py-2 text-sm font-semibold leading-6 focus:outline-none transition-all';
    const buttonStyles = {
        primary: 'bg-orange-500 text-white hover:bg-orange-600',
        secondary: 'border border-gray-500 text-black ',
    };
    const widthStyle = width ? width : 'w-full';

    return (
        <button {...props} className={`${baseStyles} ${buttonStyles[color]} ${widthStyle}`}>
            {children}
        </button>
    );
}
