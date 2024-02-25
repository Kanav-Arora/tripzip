import styled from 'styled-components';
import { Theme } from '../../../../modules/ui/Theme/theme';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${Theme.spacing(8)};
`;

export const StyledBottom = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: end;
`;

export const StyledContent = styled.div`
    font-size: ${Theme.font.size.base};
`;

export const DeleteButton = styled.button`
    color: white;
    font-weight: ${Theme.font.weight.medium};
    background: #ef5349;
    border-radius: ${Theme.border.radius.xl};
    padding: ${Theme.spacing(1)} ${Theme.spacing(3)};
`;
