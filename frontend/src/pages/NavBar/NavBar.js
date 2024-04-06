import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/Auth/useAuth';
import { Hamburger, Cross } from '../../assets/ext-icon';
import { useAuthModal } from '../../modules/ui/LoginSignupModal/hooks/useAuthModal';
import AuthContainer from '../../modules/NavBar/AuthContainer/AuthContainer';

export default function NavBar() {
    const { authStateValue, logoutAuth } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const { openAuthModal } = useAuthModal();

    const isAuth = authStateValue.isAuthenticated;


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSignOut = () => {
        logoutAuth();
    };

    const loginModalHandler = () => {
        openAuthModal({ visible: true, type: 'LOGIN' });
    };

    const signupModalHandler = () => {
        openAuthModal({ visible: true, type: 'SIGNUP' });
    };

    return (
        <nav className="absolute w-full top-0 bg-transparent py-4 flex justify-between items-center z-50 px-5 mobile:px-5">
            <div className="flex items-center text-white leading-3">
                <div className="hidden mobile:block pr-5 ">
                    <button onClick={toggleMenu}>
                        {isOpen ? <Cross /> : <Hamburger />}
                    </button>
                </div>
                TripZip
            </div>

            {/* In mobile view: SideBar is open */}
            {isOpen && (
                <div
                    class="hidden mobile:block absolute top-full text-gray-700 pt-1"
                    style={{
                        width: document.getElementById('navbar-sidebar')
                            .offsetWidth,
                    }}
                >
                    <div className="flex flex-col">
                        <Link
                            to="/"
                            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm"
                        >
                            About
                        </Link>
                        <Link
                            to="/trips/search"
                            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm"
                        >
                            Upcoming Trips
                        </Link>
                        {isAuth === true ? (
                            <>
                                <Link
                                    to="#"
                                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm"
                                >
                                    My Trips
                                </Link>
                                <Link
                                    to="#"
                                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm"
                                >
                                    Setting
                                </Link>
                                <button
                                    onClick={handleSignOut}
                                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm"
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="#"
                                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="#"
                                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}

            <div className="mobile:hidden flex justify-center w-screen absolute gap-x-6">
                <Link to="/" className="text-white">
                    Home
                </Link>
                <Link to="/about" className="text-white">
                    About
                </Link>
                <Link to="/trips/search" className="text-white">
                    Upcoming Trips
                </Link>
            </div>

            {isAuth === true ? (
                <div className="mobile:hidden flex gap-5">
                    <AuthContainer
                        authName={authStateValue.name}
                        isDark={false}
                    />
                </div>
            ) : (
                <div className="mobile:hidden flex items-center space-x-2">
                    <button
                        className="text-white bg-transparent pr-3 py-2"
                        onClick={loginModalHandler}
                    >
                        Login
                    </button>
                    <button
                        className="bg-white text-black border rounded-full px-4 py-1"
                        onClick={signupModalHandler}
                    >
                        Sign Up
                    </button>
                </div>
            )}
        </nav>
    );
}
