import { useUser } from '../../hooks/useUser';
import Spinner from '../../ui/Spinner';
import ProfileForm from '../components/profile/ProfileForm';

export default function ProfilePage() {
    const { user, isLoading } = useUser();

    if (isLoading)
        return (
            <div className='flex items-center justify-center '>
                <Spinner />
            </div>
        );
    if (user) return <ProfileForm user={user} />;
}
