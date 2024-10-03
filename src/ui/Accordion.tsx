import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

type AccordionProps = {
    title: string;
    children: React.ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
    return (
        <Disclosure as='div' className='w-full max-w-md'>
            <DisclosureButton className='group flex w-full items-center justify-between'>
                <span className=' font-medium text-black group-data-[hover]:text-black/80'>
                    {title}
                </span>
                <ChevronDownIcon className='size-6 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180' />
            </DisclosureButton>
            <div className='overflow-hidden py-2'>
                <DisclosurePanel
                    transition
                    className='origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0'>
                    {children}
                </DisclosurePanel>
            </div>
        </Disclosure>
    );
}
