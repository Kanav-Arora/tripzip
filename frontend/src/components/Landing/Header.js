import React from 'react'
import NavBar from '../NavBar/NavBar'
import { ImgWithFallback } from '../../assets/utilities'
import InputDialog from './InputDialog'

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@600&display=swap');
</style>

export default function Header() {
    return (
        <div className='relative'>
            <ImgWithFallback className='w-full max-h-50 object-cover' style={{ maxHeight: '450px' }} src='/images/src/landing_main.webp' fallback="/images/fallback/landing_main.jpg" alt="Nature Image" />
            <NavBar />
            <div className="relative overlay-text top-1/2 left-1/2">
                <p className="text-white text-center text-3xl mobile:text-xl">Embark on Adventures Together</p>
            </div>
            <InputDialog />
        </div>
    )
}
