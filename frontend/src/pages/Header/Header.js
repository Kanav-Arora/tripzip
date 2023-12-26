import React from 'react';

import { useLocation } from 'react-router-dom';

import InputDialog from './InputDialog';
import NavBar from '../NavBar/NavBar';

import ImageWithText from '../../modules/Header/ImageWithText';

<style>
    @import
    url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@600&display=swap');
</style>;

export default function Header() {
    const location = useLocation();
    const showInputDialog =
        location.pathname === '/' || location.pathname === '/trips/search';

    return (
        <div className="relative">
            <NavBar />
            <ImageWithText />
            {showInputDialog && <InputDialog />}
        </div>
    );
}
