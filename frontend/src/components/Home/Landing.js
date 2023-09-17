import { React, useEffect } from 'react'
import SectionA from './SectionA'
import SectionB from './SectionB';
import SectionC from './SectionC';
import './index.css'

export default function Landing() {
    useEffect(() => {
        document.title = "Travel Buddy"
    }, []);
    return (
        < div className="landing" >
            <SectionA />
            <SectionB />
            <SectionC />
        </div >
    )
}
