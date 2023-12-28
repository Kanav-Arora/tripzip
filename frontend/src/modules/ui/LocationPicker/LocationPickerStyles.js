import styled from 'styled-components';
import { Theme } from '../Theme/theme';

export const Container = styled.div`
    background: white;
    width: 250px;
    max-height: 150px;
    border-radius: ${Theme.border.radius.lg};
    box-shadow: ${Theme.boxShadow.xl};
    padding: ${Theme.spacing(4)};
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const LocationItem = styled.div`
    color: black;
    font-size: ${Theme.font.size.md};
`;
