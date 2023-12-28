import styled from 'styled-components';
import { Theme } from '../../ui/Theme/theme';

export const DropdownContainer = styled.div`
    position: relative;
`;

export const DropdownButton = styled.button`
    position: relative;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${Theme.border.radius.full};
    font-size: ${Theme.font.size.lg};
    color: ${({ isDark }) => (isDark ? 'white' : Theme.color.matteBlack)};
    background-color: ${({ isDark }) =>
        isDark ? Theme.color.matteBlack : Theme.color.gray50};
`;

export const DropdownList = styled.div`
    position: absolute;
    top: 120%;
    right: 10%;
    width: fit-content;
    background-color: white;
    border: 1px solid #e2e8f0;
    border-radius: ${Theme.border.radius.lg};
    padding: ${Theme.spacing(2)} 0px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: ${Theme.spacing(0.5)};
`;

export const DropdownItem = styled.button`
    text-align: left;
    color: black;
    border: none;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    padding: ${Theme.spacing(2)} ${Theme.spacing(6)};
    font-size: ${Theme.font.size.sm};
    white-space: nowrap;
    &:hover {
        background-color: ${(props) =>
            props.disabled ? 'transparent' : Theme.color.gray40};
    }
`;
