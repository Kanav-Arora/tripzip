import React from 'react'
import { ImgWithFallback } from '../../assets/utilities'
import { useLocation } from 'react-router-dom'
import InputDialog from '../Home/InputDialog'
import NavBar from '../NavBar/NavBar'

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@600&display=swap');
</style>

export default function Header() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
        <div className='relative'>
            <ImgWithFallback className='w-full max-h-50 object-cover' style={{ maxHeight: isHome ? '450px' : '250px' }} src='/images/src/landing_main.webp' fallback="/images/fallback/landing_main.jpg" alt="Nature Image" />
            <NavBar />
            <div className="relative overlay-text top-1/2 left-1/2">
                <p className="text-white text-center text-3xl mobile:text-xl">Embark on Adventures Together</p>
            </div>
            <isHome InputDialog />
        </div>
    )
}
