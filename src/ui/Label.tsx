import React from 'react';

type Props = React.LabelHTMLAttributes<HTMLLabelElement> & {
    title: string;
};
export default function Label({ title }: Props) {
    return (
        <label className='block text-sm font-medium leading-6 text-gray-900'>
            {title}
        </label>
    );
}
