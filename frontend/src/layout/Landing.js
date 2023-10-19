import React, { useContext, useEffect } from 'react'
import {
    Outlet
} from "react-router-dom";
import axios from 'axios';

import { AuthContext } from '../context/Auth/authContext'
import { loginAction, logoutAction } from '../context/Auth/authAction.js';
import { backendOrigin } from '../frontend.config';
import Footer from '../pages/Footer'
import Header from '../pages/Header';

axios.defaults.withCredentials = true;

export default function Landing() {
    const { state, dispatch } = useContext(AuthContext);
    const instance = axios.create({
        withCredentials: true,
        baseURL: backendOrigin
    })
    const init = async () => {
        await instance.get("/")
            .then(response => {
                console.log(response);
                response.data.isAuth == true ?
                    dispatch(loginAction(response.data.userData))
                    :
                    dispatch(logoutAction());
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        document.title = "Travel Buddy"
        init();
    }, []);
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}
