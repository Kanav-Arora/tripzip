import styled from 'styled-components';
import { Theme } from '../../../../modules/ui/Theme/theme';

export const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${Theme.spacing(2)};
`;

export const InputField = styled.input`
    outline: none !important;
    border: 1px solid ${Theme.color.gray40};
    border-radius: ${Theme.border.radius.xl};
    padding: ${Theme.spacing(1.5)} ${Theme.spacing(4)};
    width: ${(props) => (props.width ? props.width : '100%')};

    &: focus {
        border: 1px solid black;
    }
`;

export const HobbyTag = styled.div`
    display: inline-block;
    background-color: #e0e0e0;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    margin: 0px ${Theme.spacing(1)};
`;

export const RemoveTagButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: #555;
    &:hover {
        color: #333;
    }
    margin-left: ${Theme.spacing(2)};
`;

export const StyledContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: ${Theme.spacing(1)};
    justify-content: space-between;
`;

export const StyledCharCount = styled.div`
    font-size: ${Theme.font.size.sm};
    color: ${(props) => (props.isRed ? 'red' : 'gray')};
`;
