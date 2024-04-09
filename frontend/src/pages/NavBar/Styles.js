import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    position: absolute;
    top: 0;
    width: 100%;
    background-color: transparent;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 50;
`;

export const Sidebar = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    text-align: left;
    padding-top: 1rem;
    width: ${({ width }) => width}px;
`;

export const SidebarLink = styled(Link)`
    background-color: #ccc;
    color: #333;
    padding: 0.5rem 1rem;
    display: block;
    &:hover {
        background-color: #ddd;
    }
`;

export const Button = styled.button`
    color: ${({ textColor }) => textColor};
    background-color: ${({ bgColor }) => bgColor};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: ${({ rounded }) => (rounded ? '20px' : '0')};
    &:hover {
        background-color: ${({ hoverColor }) => hoverColor};
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
`;
