import Home from '../components/Home'
import Team from '../components/Team';
import PageNotFound from '../components/PageNotFound'
// Layout
import Landing from '../layout/Landing';
import {
    Routes, Route
} from "react-router-dom";

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/team' element={<Team />} />
                </Route>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}
