import { useParams } from 'react-router-dom';
import NewPassword from './NewPassword';

export default function NewPasswordPage() {
    const { token } = useParams<{ token: string }>();
    if (!token) {
        return <p>El token es inválido o ha expirado</p>;
    }
    return <NewPassword token={token} />;
}
