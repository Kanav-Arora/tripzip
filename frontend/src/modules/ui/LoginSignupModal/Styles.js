import styled from 'styled-components';
import { Theme } from '../Theme/theme';

export const ModalBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    border-radius: ${Theme.border.radius.xl};
    padding: ${Theme.spacing(1)};
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
    border-radius: inherit;
`;

export const ContentContainer = styled.div`
    width: 60%;
    padding-left: ${Theme.spacing(20)};
    padding-right: ${Theme.spacing(20)};
    padding-top: ${Theme.spacing(12)};
    padding-bottom: ${Theme.spacing(12)};
    border-radius: inherit;
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
    gap: ${Theme.spacing(10)};
    margin-top: ${Theme.spacing(3)};
    margin-bottom: ${Theme.spacing(3)};
`;

export const AuthServiceContainer = styled.div`
    height: ${Theme.spacing(10)};
    width: 100%;
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

export const FormContainer = styled.div`
    width: 100%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${Theme.spacing(2)};
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Theme.spacing(2)};
`;

export const FieldLabel = styled.div`
    font-weight: ${Theme.font.weight.semibold};
`;

export const Input = styled.input`
    width: 100%;
    height: ${Theme.spacing(10)};
    padding: ${Theme.spacing(4)};
    border: 1px solid
        ${(props) => (props.error ? Theme.color.red : Theme.color.gray)};
    border-radius: ${Theme.border.radius.md};

    &::placeholder {
        color: ${Theme.color.gray50};
        font-size: ${Theme.font.size.sm};
    }
`;

export const Error = styled.span`
    color: red;
    font-size: 12px;
    margin-top: 5px;
`;

export const Button = styled.button`
    margin-top: ${Theme.spacing(2)};
    background-color: black;
    color: white;
    padding: 10px;
    border: none;
    border-radius: ${Theme.border.radius.md};
    cursor: pointer;
`;
