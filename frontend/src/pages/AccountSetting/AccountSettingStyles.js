import styled from 'styled-components';
import { Theme } from '../../modules/ui/Theme/theme';

export const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const StylecContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: ${Theme.spacing(12)};
    padding: ${Theme.spacing(12)} 0;
`;

export const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Theme.spacing(10)};
`;

export const ProfileInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledSectionHeading = styled.div`
    font-weight: ${Theme.font.weight.bold};
    font-size: ${Theme.font.size['2xl']};
`;

export const StyledSaveHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const StyledSaveButton = styled.button`
    height: fit-content;
    display: flex;
    flex-direction: row;
    font-size: ${Theme.font.size.sm};
    color: ${(props) => (props.disabled ? Theme.color.gray40 : 'black')};
    align-items: center;
    justify-content: center;
    border: 1px solid
        ${(props) => (props.disabled ? Theme.color.gray40 : 'black')};
    gap: ${Theme.spacing(2)};
    padding: ${Theme.spacing(1.25)} ${Theme.spacing(2)};
    border-radius: ${Theme.border.radius.lg};
`;
