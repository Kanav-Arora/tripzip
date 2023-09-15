import { React, useEffect } from 'react'
import SectionA from './SectionA'
import SectionB from './SectionB';
import Header from './Header';
import Footer from './Footer';

export default function Landing() {
    useEffect(() => {
        document.title = "Travel Buddy"
    }, []);
    return (
        < div className="landing" >
            <Header />
            <SectionA />
            <SectionB />
            <Footer />
        </div >
    )
}
