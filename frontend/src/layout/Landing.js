import React, { useEffect } from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer'

import {
    Outlet
} from "react-router-dom";

export default function Landing() {
    useEffect(() => {
        document.title = "Travel Buddy"
    }, []);
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
