import styled from 'styled-components';
import { Theme } from '../../../../modules/ui/Theme/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: ${Theme.spacing(8)};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

export const UserName = styled.h1`
    font-size: ${Theme.font.size.lg};
    font-weight: bold;
`;

export const Email = styled.h4`
    font-size: ${Theme.font.size.sm};
`;
