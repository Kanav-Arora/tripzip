import styled from 'styled-components';
import { Theme } from '../../../ui/Theme/theme';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Container = styled.div`
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
    border-radius: ${Theme.border.radius['3xl']};
    width: fit-content;
    padding: ${Theme.spacing(2)} ${Theme.spacing(4)};
`;

export const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputSection = styled.div`
    display: flex;
    justify-content: center;
    gap: ${Theme.spacing(3)};
`;

export const InputFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: ${Theme.spacing(1)};
`;

export const InputFieldHeading = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${Theme.spacing(2)};
`;

export const InputField = styled.input`
    outline: none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;

    border: none;
    width: 100%;
    min-width: ${(props) => props.minW};

    &:focus {
        outline: none;
        border: none;
    }
`;

export const SearchButton = styled.button`
    background-color: ${Theme.color.matteBlack};
    color: white;
    border-radius: ${Theme.border.radius.lg};
    padding: ${Theme.spacing(1)} ${Theme.spacing(3)};
    margin: 0px ${Theme.spacing(1)};
`;

export const DateRangePicker = styled.div`
    position: absolute;
    left: 30%;
    top: 13%;
    color: black;
    z-index: 10;
`;

export const LocationPickerContainer = styled.div`
    position: absolute;
    left: 25%;
    top: 10%;
    color: #fff;
    z-index: 10;
`;

export const Divider = styled.div`
    width: 1px;
    height: inherit;
    background-color: ${Theme.color.gray50};
    margin-right: 8px;
`;
