import React from 'react'
import { useAuth } from '../../../context/Auth/useAuth'
import styled from 'styled-components';
import { Theme } from '../../../modules/ui/Theme/theme';
import { Link } from 'react-router-dom';
import AuthContainer from '../../../modules/NavBar/AuthContainer/AuthContainer';
import AuthButtonGroup from '../../../modules/NavBar/AuthButtonGroup/AuthButtonGroup';


const StyledContainer = styled.div`
    position: ${({ isFixed }) => (isFixed ? 'fixed' : 'static')};
    top: 0;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #ccc;
    z-index: 10;
    transition: position 0.3s ease;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: ${({ isNavbarScoped }) =>
        isNavbarScoped ? 'start' : 'center'};
    margin-bottom: ${Theme.spacing(3)};
    padding: ${Theme.spacing(2)} ${Theme.spacing(5)};
`;

const StyledSection = styled.div`
    height: 100%;
    width: 20%;
`;

export default function PlainNavbar() {
    const { authStateValue } = useAuth();
    const isAuth = authStateValue.isAuthenticated;

    return (
        <StyledContainer>
            <StyledSection><Link to={'/'}>TripZip</Link> </StyledSection>
            <StyledSection>
                {isAuth === true ? (
                    <AuthContainer authName={authStateValue.name} isDark />
                ) : (
                    <AuthButtonGroup dark />
                )}
            </StyledSection>
        </StyledContainer>
    )
}
