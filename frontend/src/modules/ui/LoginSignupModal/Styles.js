import styled from 'styled-components';
import { Theme } from '../Theme/theme';

export const ModalBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    border-radius: ${Theme.border.radius.xl};
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: inherit;
`;

export const ImageContainer = styled.div`
    width: 40%;
    background: black;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
`;

export const ContentContainer = styled.div`
    width: 60%;
    padding-left: ${Theme.spacing(20)};
    padding-right: ${Theme.spacing(20)};
    padding-top: ${Theme.spacing(12)};
    padding-bottom: ${Theme.spacing(12)};
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
`;

export const ContentHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
`;

export const ContentHeading = styled.div`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
`;

export const ContentBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: ${Theme.spacing(2)};
    margin-top: ${Theme.spacing(3)};
    margin-bottom: ${Theme.spacing(3)};
`;

export const AuthServiceContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    border: 1px solid ${Theme.color.gray};
    border-radius: ${Theme.border.radius.md};
    padding-top: ${Theme.spacing(1)};
    padding-bottom: ${Theme.spacing(1)};
    padding-left: ${Theme.spacing(4)};
    padding-right: ${Theme.spacing(4)};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${Theme.spacing(2)};
    font-size: ${Theme.font.size.sm};
    font-weight: ${Theme.font.weight.semibold};
`;

export const ToggleText = styled.div`
    width: 100%;
    color: ${Theme.color.gray50};
    font-size: ${Theme.font.size.xs};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${Theme.spacing(2)};
`;

export const ToggleButton = styled.button`
    color: ${Theme.color.orange};
    font-weight: ${Theme.font.weight.semibold};
`;
