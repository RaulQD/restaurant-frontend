import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    register: UseFormRegisterReturn
};

export default function Input(props: Props) {
    return (
        <input
          
            className='block w-full rounded-md border p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 '
            {...props}
            {...props.register}
        />
    );
}
