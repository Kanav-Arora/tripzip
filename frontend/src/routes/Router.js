import {
    Routes, Route
} from "react-router-dom";


import Home from '../pages/Home'
import Landing from '../layout/Landing';
import PageNotFound from '../pages/PageNotFound'
import Team from '../pages/Team';

export default function Router() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Landing />}>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/team' element={<Team />} />
                </Route>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}
