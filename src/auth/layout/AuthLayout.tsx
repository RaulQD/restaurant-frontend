import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <>
            <div>
                <div className=''>
                    <div className=''>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}
