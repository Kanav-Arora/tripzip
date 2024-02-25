import styled from 'styled-components';
import { Theme } from '../../../../modules/ui/Theme/theme';

export const StyledWrapper = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${Theme.spacing(6)};
`;

export const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${Theme.spacing(4)};
`;

export const StyledChangeText = styled.button`
    height: fit-content;
    display: flex;
    flex-direction: row;
    font-size: ${Theme.font.size.sm};
    color: ${(props) => (props.disabled ? Theme.color.gray40 : 'black')};
    align-items: center;
    justify-content: center;
    border: 1px solid
        ${(props) => (props.disabled ? Theme.color.gray40 : 'black')};
    gap: ${Theme.spacing(1)};
    padding: ${Theme.spacing(1.25)} ${Theme.spacing(2)};
    border-radius: ${Theme.border.radius.lg};
`;

export const StyledRemoveText = styled.button`
    color: #ef5349;
`;
