import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> ;

export default function Button({ children, ...props }: Props) {
    return (
        <button
            {...props}
            className=' w-full rounded-md bg-orange-500 py-2 text-sm font-semibold leading-6 text-white hover:bg-orange-600 focus:outline-none transition-all'>
            {children}
        </button>
    );
}
