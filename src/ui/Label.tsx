import React from 'react';

type Props = React.LabelHTMLAttributes<HTMLLabelElement> & {
    text: string;
};
export default function Label({ text }: Props) {
    return (
        <label className='block text-sm font-medium leading-6 text-gray-900'>
            {text}
        </label>
    );
}
