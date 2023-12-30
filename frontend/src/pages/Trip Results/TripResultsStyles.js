import { styled } from 'styled-components';
import { Theme } from '../../modules/ui/Theme/theme';

export const PaddedSection = styled.div`
margin: ${Theme.spacing(20)} auto ${Theme.spacing(20)} auto;

`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${Theme.spacing(4)};
    align-items: center;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${Theme.spacing(10)};
`;

export const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const StyledLoadButton = styled.button`
    margin-left: auto;
    margin-right: auto;
    color: white;
    background: ${Theme.color.matteBlack};
    padding: ${Theme.spacing(1)} ${Theme.spacing(2)};
    border-radius: ${Theme.border.radius.lg};
`;

export const IsEmpty = styled.p`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${Theme.color.gray};
    font-size: ${Theme.font.size.lg};
`;

export const BorderedButton = styled.button`
    display: flex;
    flex-direction: row;
    gap: ${Theme.spacing(3)};
    align-items: center;
    width: fit-content;
    border: 0.5px solid ${Theme.color.gray50};
    color: ${Theme.color.gray50};
    font-size: ${Theme.font.size.sm};
    border-radius: ${Theme.border.radius.md};
    padding: ${Theme.spacing(1)} ${Theme.spacing(2)};
`;
