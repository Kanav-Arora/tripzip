import { Routes, Route, useLocation } from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar';
import Home from '../pages/Home';
import Landing from '../layout/Landing';
import TripsLayout from '../layout/TripsLayout';
import Team from '../pages/Team';
import Trip from '../pages/Trip/Trip';
import { useContext, useEffect, useRef } from 'react';

import PageNotFound from '../pages/PageNotFound';

import initAuth from '../services/authService';
import { useAuth } from '../context/Auth/authContext';
import { AuthModalContext } from '../context/AuthModal/authModalContext';
import LoginSignupModal from '../modules/ui/LoginSignupModal/LoginSignupModal';

export default function Router() {
    const location = useLocation();
    const ref = useRef();

    const { authDispatch } = useAuth();
    const { authModalState } = useContext(AuthModalContext);

    useEffect(() => {
        initAuth(authDispatch);
        ref.current.continuousStart();
        setTimeout(() => {
            ref.current.complete();
        }, 500);
    }, [location.pathname, authDispatch]);

    return (
        <>
            <LoadingBar color="#DF6951" ref={ref} />
            <LoginSignupModal
                isVisible={authModalState.visible}
                type={'login'}
            />
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
