import axios from 'axios';
import { loginAction, logoutAction } from '../context/Auth/authAction.js';
import { backendOrigin } from '../frontend.config';

const instance = axios.create({
    withCredentials: true,
    baseURL: backendOrigin,
});

const initAuth = async (dispatch) => {
    try {
        const response = await instance.get('/');
        if (response.data.isAuth === true) {
            dispatch(loginAction(response.data.userData));
        } else {
            dispatch(logoutAction());
        }
    } catch (err) {
        console.error(err);
    }
};

export default initAuth;
