import { BiChevronRight } from "react-icons/bi";

export default function EmployeesPages() {
    return (
        <>
            <div className='mb-6 px-4 md:px-6 xl:px-8 pt-8'>
                <h1 className='text-lg font-medium mb-2'>Empleados</h1>
                <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <span>Inicio</span>
                    <BiChevronRight />
                    <span>Empleados</span>
                </div>
            </div>
        </>
    );
}
