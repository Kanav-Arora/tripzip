import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Sidebar, SidebarLink, Button, NavLink } from './Styles';
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
        <Nav>
            <div>
                <Button onClick={toggleMenu}>
                    {isOpen ? <Cross /> : <Hamburger />}
                </Button>
                TripZip
            </div>

            <Sidebar isOpen={isOpen} width={document.getElementById('navbar-sidebar').offsetWidth}>
                <div>
                    <SidebarLink to="/">Home</SidebarLink>
                    <SidebarLink to="/about">About</SidebarLink>
                    <SidebarLink to="/trips/search">Upcoming Trips</SidebarLink>
                    {isAuth === true ? (
                        <>
                            <SidebarLink to="#">My Trips</SidebarLink>
                            <SidebarLink to="#">Setting</SidebarLink>
                            <Button onClick={handleSignOut} rounded bgColor="#ccc" hoverColor="#ddd">
                                Sign Out
                            </Button>
                        </>
                    ) : (
                        <>
                            <SidebarLink to="#" onClick={loginModalHandler}>Login</SidebarLink>
                            <Button onClick={signupModalHandler} rounded bgColor="#fff" textColor="#000" hoverColor="#ddd">
                                Sign Up
                            </Button>
                        </>
                    )}
                </div>
            </Sidebar>

            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/trips/search">Upcoming Trips</NavLink>
            </div>

            {isAuth === true ? (
                <div>
                    <AuthContainer authName={authStateValue.name} isDark={false} />
                </div>
            ) : (
                <div>
                    <Button onClick={loginModalHandler} bgColor="transparent" textColor="#fff">
                        Login
                    </Button>
                    <Button onClick={signupModalHandler} bgColor="#fff" textColor="#000" rounded>
                        Sign Up
                    </Button>
                </div>
            )}
        </Nav>
    );
}