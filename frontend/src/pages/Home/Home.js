import React from 'react'

import SectionA from './SectionA'
import SectionB from './SectionB';
import SectionC from './SectionC';
import './index.css'

export default function Home() {
    return (
        < div className="landing" >
            <SectionA />
            <SectionB />
            <SectionC />
        </div >
    )
}
