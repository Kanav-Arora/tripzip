import {
    Routes, Route
} from "react-router-dom";


import Home from '../components/Home'
import Landing from '../layout/Landing';
import PageNotFound from '../components/PageNotFound'
import Team from '../components/Team';
import { useEffect } from "react";

export default function Router() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={
                    <Landing />
                }>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/team' element={<Team />} />
                </Route>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}
