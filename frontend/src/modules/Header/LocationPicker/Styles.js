import styled from 'styled-components';
import { Theme } from '../../ui/Theme/theme';

export const Container = styled.div`
    background: white;
    width: 225px;
    border-radius: ${Theme.border.radius.lg};
    box-shadow: ${Theme.boxShadow.xl};
    padding: ${Theme.spacing(4)};
`;

export const LocationItem = styled.div`
    color: black;
`;
