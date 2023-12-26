import styled from 'styled-components';
import { Theme } from '../../ui/Theme/theme';
export const Container = styled.div`
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

export const Section = styled.div`
    height: 100%;
    width: 20%;
`;
