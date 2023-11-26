import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { logoutAction } from '../../context/Auth/authAction';
import { AuthContext } from '../../context/Auth/authContext';
import { Hamburger, Cross } from '../../assets/ext-icon';

import Dropdown from './Dropdown';
import AddTripButton from '../../modules/NavBar/AddTripButton';
import AddTripModal from '../Add Trip/AddTripModal';

import { AddTripProvider } from '../../context/Add Trip/addTripContext';
import { useAuthModal } from '../../context/AuthModal/authModalContext';
import { showModalAction } from '../../context/AuthModal/authModalAction';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const { state, dispatch } = useContext(AuthContext);
    const [addTripModalVisible, toggleAddTripModal] = useState(false);

    const { authModalDispatch } = useAuthModal();

    const isAuth = state.isAuthenticated;

    const toggleAddTripModalHandler = () => {
        toggleAddTripModal(!addTripModalVisible);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSignOut = () => {
        dispatch(logoutAction());
    };

    const loginModalHandler = () => {
        authModalDispatch(showModalAction('LOGIN'));
    };

    const signupModalHandler = () => {
        authModalDispatch(showModalAction('SIGNUP'));
    };

    return (
        <nav className="absolute w-full top-0 bg-transparent py-4 flex justify-between items-center z-50 px-5 mobile:px-5">
            <div className="flex items-center text-white leading-3">
                <div className="hidden mobile:block pr-5 ">
                    <button onClick={toggleMenu}>
                        {isOpen ? <Cross /> : <Hamburger />}
                    </button>
                </div>
                Travel Buddy
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
                            to="#"
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

            <div className="mobile:hidden flex-grow flex justify-center space-x-6">
                <Link to="/" className="text-white">
                    Home
                </Link>
                <Link to="/about" className="text-white">
                    About
                </Link>
                <Link to="#" className="text-white">
                    Upcoming Trips
                </Link>
            </div>

            {addTripModalVisible && (
                <AddTripProvider>
                    <AddTripModal onClose={toggleAddTripModalHandler} />
                </AddTripProvider>
            )}

            {isAuth === true ? (
                <div className="mobile:hidden flex gap-5">
                    <AddTripButton onClick={toggleAddTripModalHandler} />
                    <Dropdown name={state.name} />
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
