import styled from 'styled-components';
import { Theme } from '../../modules/ui/Theme/theme';

export const Wrappper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${Theme.spacing(12)};
    padding: ${Theme.spacing(12)} ${Theme.spacing(28)};
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${Theme.spacing(10)};
`;

export const IsEmpty = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${Theme.color.gray};
    font-size: ${Theme.font.size.lg};
`;
