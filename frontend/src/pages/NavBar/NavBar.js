import React, { useState } from 'react';
import { useAuth } from '../../context/Auth/useAuth';
import { Hamburger, Cross } from '../../assets/ext-icon';
import { Nav, LogoContainer, HamburgerCross, SideBar, FlexContainer, SignOut, SideBarStyledLink, ButtonsList, WhiteText, AuthTrueStyles, AuthFalseStyles, StyledLogin, StyledSignUp  } from './Styles'
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
            <LogoContainer>
                <HamburgerCross>
                    <button onClick={toggleMenu}>
                        {isOpen ? <Cross /> : <Hamburger />}
                    </button>
                </HamburgerCross>
                TripZip
            </LogoContainer>

            {/* In mobile view: SideBar is open */}
            {isOpen && (
                <SideBar
                    style={{
                        width: document.getElementById('navbar-sidebar')
                            .offsetWidth,
                    }}
                >
                    <FlexContainer>
                        <SideBarStyledLink
                            to="/"
                        >
                            Home
                        </SideBarStyledLink>
                        <SideBarStyledLink
                            to="/about"
                        >
                            About
                        </SideBarStyledLink>
                        <SideBarStyledLink
                            to="/trips/search"
                        >
                            Upcoming Trips
                        </SideBarStyledLink>
                        {isAuth === true ? (
                            <>
                                <SideBarStyledLink
                                    to="#"
                                >
                                    My Trips
                                </SideBarStyledLink>
                                <SideBarStyledLink
                                    to="#"
                                >
                                    Setting
                                </SideBarStyledLink>
                                <SignOut
                                    onClick={handleSignOut}
                                >
                                    Sign Out
                                </SignOut>
                            </>
                        ) : (
                            <>
                                <SideBarStyledLink
                                    to="#"
                                >
                                    Login
                                </SideBarStyledLink>
                                <SideBarStyledLink
                                    to="#"
                                >
                                    Sign Up
                                </SideBarStyledLink>
                            </>
                        )}
                    </FlexContainer>
                </SideBar>
            )}

            <ButtonsList>
                <WhiteText to="/">
                    Home
                </WhiteText>
                <WhiteText to="/about">
                    About
                </WhiteText>
                <WhiteText to="/trips/search">
                    Upcoming Trips
                </WhiteText>
            </ButtonsList>

            {isAuth === true ? (
                <AuthTrueStyles>
                    <AuthContainer
                        authName={authStateValue.name}
                        isDark={false}
                    />
                </AuthTrueStyles>
            ) : (
                <AuthFalseStyles>
                    <StyledLogin
                        onClick={loginModalHandler}
                    >
                        Login
                    </StyledLogin>
                    <StyledSignUp
                        onClick={signupModalHandler}
                    >
                        Sign Up
                    </StyledSignUp>
                </AuthFalseStyles>
            )}
        </Nav>
    );
}
