import React from 'react'
import NavBar from '../NavBar/NavBar'

export default function Header() {
    return (
        <div>
            <img className='w-full max-h-50 object-cover' style={{ maxHeight: '350px' }} src={'/images/landing_main.jpg'} alt="Nature Image" />
            <NavBar />
        </div>
    )
}
