import { Outlet } from 'react-router-dom';
import Tabs from '../components/profile/Tabs';

export default function ProfileLayout() {
    return (
        <>
           <div className='mt-14 mb-48 px-5 md:px-16 lg:px-32 xl:px-44 '>
                <Tabs />
                {/* <SidebarProfile /> */}
                <Outlet />
           </div>
        </>
    );
}
