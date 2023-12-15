import axios from 'axios';
import { backendOrigin } from '../frontend.config';
const instance = axios.create({
    withCredentials: true,
    baseURL: backendOrigin,
});

const initAuth = async (loginAuth, logoutAuth) => {
    try {
        const response = await instance.get('/');
        if (response.data.isAuth === true) {
            loginAuth(response.data.userData);
        } else {
            logoutAuth();
        }
    } catch (err) {
        console.error(err);
    }
};

export default initAuth;
