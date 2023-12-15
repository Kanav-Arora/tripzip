/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, useLocation } from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar';
import Home from '../pages/Home';
import Landing from '../layout/Landing';
import TripsLayout from '../layout/TripsLayout';
import Team from '../pages/Team';
import Trip from '../pages/Trip/Trip';
import { useEffect, useRef } from 'react';

import PageNotFound from '../pages/PageNotFound';
import { useAuth } from '../context/Auth/useAuth';
import initAuth from '../services/authService';
import LoginSignupModal from '../modules/ui/LoginSignupModal/LoginSignupModal';

export default function Router() {
    const location = useLocation();
    const ref = useRef();
    const { loginAuth, logoutAuth } = useAuth();

    useEffect(() => {
        initAuth(loginAuth, logoutAuth);
        ref.current.continuousStart();
        setTimeout(() => {
            ref.current.complete();
        }, 500);
    }, [location.pathname]);

    return (
        <>
            <LoadingBar color="#DF6951" ref={ref} />
            <LoginSignupModal />
            <Routes>
                <Route exact path="/" element={<Landing />}>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/team" element={<Team />} />
                </Route>
                <Route exact path="/trips" element={<TripsLayout />}>
                    <Route exact path="/trips/:tripID" element={<Trip />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}
