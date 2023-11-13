import React from 'react'

import SectionA from './SectionA'
import SectionB from './SectionB';
import SectionC from './SectionC';

import './index.css'
import SectionD from './SectionD';

export default function Home() {
    return (
        <div className="landing" >
            <SectionA />
            <SectionB />
            <SectionD />
            <SectionC />
        </div >
    )
}
