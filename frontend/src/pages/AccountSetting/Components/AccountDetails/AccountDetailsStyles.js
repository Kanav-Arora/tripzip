import styled from 'styled-components';
import { Theme } from '../../../../modules/ui/Theme/theme';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    gap: ${Theme.spacing(6)};
`;

export const FieldFlexRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${Theme.spacing(8)};
    justify-content: space-between;
    width: 100%;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: ${Theme.spacing(2)};
    width: ${(props) => (props.width ? props.width : '100%')};
`;

export const FieldTitle = styled.span`
    color: #666;
    margin-right: 10px;
`;

export const InputField = styled.input`
    outline: none !important;
    border: 1px solid ${Theme.color.gray40};
    border-radius: ${Theme.border.radius.xl};
    padding: ${Theme.spacing(1.5)} ${Theme.spacing(4)};
    width: 100%;
    &: focus {
        border: 1px solid black;
    }
`;

export const TextAreaField = styled.textarea`
    outline: none !important;
    border: 1px solid ${Theme.color.gray40};
    border-radius: ${Theme.border.radius.xl};
    padding: ${Theme.spacing(3)} ${Theme.spacing(4)};
    width: ${(props) => (props.width ? props.width : '100%')};

    &: focus {
        border: 1px solid black;
    }
`;
