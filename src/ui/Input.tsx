import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    register: UseFormRegisterReturn
};

export default function Input(props: Props) {
    return (
        <input
          
            className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2 '
            {...props}
            {...props.register}
        />
    );
}
