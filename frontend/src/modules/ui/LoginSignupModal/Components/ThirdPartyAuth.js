import { useEffect } from 'react';
import { AuthServiceContainer } from '../Styles/Styles';
import { GoogleAuthClientID } from '../../../../frontend.config';
import axios from 'axios';
import { backendOrigin } from '../../../../frontend.config';
import { useAuth } from '../../../../context/Auth/useAuth';
import { useAuthModal } from '../hooks/useAuthModal';

const ThirdPartyAuth = ({ title, Icon }) => {
    const { loginAuth } = useAuth();
    const { closeAuthModal } = useAuthModal();
    const handleCallbackResponse = async (response) => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: backendOrigin,
        });
        const result = await instance.post('/users/authGoogle', {
            idToken: response.credential,
        });
        if (result.status === 201) {
            loginAuth(result.data);
            closeAuthModal();
        }
    };

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: GoogleAuthClientID,
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(
            document.getElementById('googleAuthDiv'),
            {
                theme: 'outline',
                size: 'large',
                width: document.getElementById('serviceContainer')?.offsetWidth,
            }
        );
        google.accounts.id.prompt();
    }, []);
    return (
        <AuthServiceContainer id="serviceContainer">
            <div id="googleAuthDiv"></div>
        </AuthServiceContainer>
    );
};

export default ThirdPartyAuth;
