import {
    Routes, Route, useLocation
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';
import Home from '../pages/Home'
import Landing from '../layout/Landing';
import Team from '../pages/Team';
import Trip from "../pages/Trip/Trip";
import { useEffect, useRef } from "react";

import PageNotFound from '../pages/PageNotFound'

export default function Router() {
    const location = useLocation();
    const ref = useRef();

    useEffect(() => {
        ref.current.continuousStart();
        setTimeout(() => {
            ref.current.complete();
        }, 500);
    }, [location.pathname]);

    return (
        <>
            <LoadingBar color="#DF6951" ref={ref} />
            <Routes>
                <Route exact path="/" element={<Landing />}>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/team' element={<Team />} />
                </Route>
                <Route path="/trips/:tripID" element={<Trip />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}
