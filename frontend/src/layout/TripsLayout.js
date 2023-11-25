import React from 'react'
import {
    Outlet
} from "react-router-dom";
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function TripsLayout() {

    return (
        <>
            <Outlet />
        </>

    )
}
