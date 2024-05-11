import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled Components
export const Nav = styled.nav`
    position: absolute;
    width: 100%; /* Ensure the navbar spans the full width of its container */
    top: 0;
    background-color: transparent;
    padding: 1rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 50;
    overflow-x: hidden; /* Hide horizontal overflow if any */
    white-space: nowrap; /* Prevent line breaks in child elements */

    @media (min-width: 320px) and (max-width: 480px) {
      padding: 0rem 1rem; // Adjust for mobile padding
    }
`;

export const LogoContainer = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    color: white;
    line-height: 12px;
`;

export const HamburgerCross = styled.div`
    display: none;

    @media (min-width: 320px) and (max-width: 480px) {
        display: block;
        padding-right: 20px;
    }
`;

export const SideBar = styled.div`
    display: none;

    @media (min-width: 320px) and (max-width: 480px) {
        display: block;
        position: absolute;
        top: 100%;
        --tw-text-opacity: 1;
        color: rgb(55 65 81 / var(--tw-text-opacity));
        padding-top: 4px;
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SignOut = styled.button`
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    --tw-bg-opacity: 1;
    background-color: rgb(229 231 235 / var(--tw-bg-opacity));
    padding: 0.5rem 1rem;
    display: block;
    font-size: 0.875rem;
    line-height: 1.25rem;

    &:hover {
        background-color: rgb(156 163 175 / var(--tw-bg-opacity));
    }
`;

export const SideBarStyledLink = styled(Link)`
    --tw-bg-opacity: 1;
    background-color: rgb(229 231 235 / var(--tw-bg-opacity));
    padding: 0.5rem 1rem;
    display: block;
    font-size: 0.875rem;
    line-height: 1.25rem;

    &:hover {
        background-color: rgb(156 163 175 / var(--tw-bg-opacity));
    }
`;

export const ButtonsList = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    position: absolute;
    column-gap: 1.5rem;

    @media (min-width: 320px) and (max-width: 480px) {
        display: none;
    }
`;

export const WhiteText = styled(Link)`
    color: white;
`;

export const AuthTrueStyles = styled.div`
    display: flex;
    gap: 1.25rem;
    @media (min-width: 320px) and (max-width: 480px) {
        display: none;
    }
`;

export const AuthFalseStyles = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 8px;
    @media (min-width: 320px) and (max-width: 480px) {
        display: none;
    }
`;

export const StyledLogin = styled(Link)`
    display: block;
    color: white;
    background: transparent;
    margin-right: 12px;
    padding-right: 12px;
    padding: 8px;
    padding-bottom: 8px;
    position: relative;
`;

export const StyledSignUp = styled(Link)`
    background-color: white;
    color: black;
    border-width: 1px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 9999px;
    padding: 4px 16px;
    position: relative;
`;
