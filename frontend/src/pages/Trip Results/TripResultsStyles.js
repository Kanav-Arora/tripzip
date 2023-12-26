import { styled } from 'styled-components';
import { Theme } from '../../modules/ui/Theme/theme';

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
    margin: ${Theme.spacing(20)} auto ${Theme.spacing(20)} auto;
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
