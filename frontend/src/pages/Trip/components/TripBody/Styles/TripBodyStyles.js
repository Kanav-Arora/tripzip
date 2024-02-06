import styled from 'styled-components';
import { Theme } from '../../../../../modules/ui/Theme/theme';

export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${Theme.spacing(6)};
`;
