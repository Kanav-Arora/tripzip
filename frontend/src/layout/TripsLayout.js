import React, { useContext, useEffect } from 'react'
import {
    Outlet
} from "react-router-dom";
import axios from 'axios';

import { AuthContext } from '../context/Auth/authContext'
import init from '../services/authService'

axios.defaults.withCredentials = true;

export default function TripsLayout() {
    const { dispatch } = useContext(AuthContext);

    useEffect(() => {
        document.title = "Travel Buddy"
        init(dispatch);
    });
    return (
        <>
            <Outlet />
        </>

    )
}
