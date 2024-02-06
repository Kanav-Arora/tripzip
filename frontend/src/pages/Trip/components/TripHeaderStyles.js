import styled from 'styled-components';
import { Theme } from '../../../modules/ui/Theme/theme';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SubHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SubHeaderSectionA = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${Theme.font.size.sm};
    font-weight: ${Theme.font.weight.semibold};
    gap: ${Theme.spacing(2)};
`;

export const PeopleModalText = styled.button`
    cursor: ${(props) => (props.currentSize === 0 ? 'text' : 'pointer')};
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${Theme.font.size.sm};
    font-weight: ${Theme.font.weight.semibold};
    gap: ${Theme.spacing(1)};
`;

export const SubHeaderSectionB = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${Theme.font.size.sm};
    font-weight: ${Theme.font.weight.semibold};
    gap: ${Theme.spacing(4)};
`;

export const HeaderButtons = styled.button`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${Theme.font.size.sm};
    font-weight: ${Theme.font.weight.semibold};
    gap: ${Theme.spacing(1)};
`;
