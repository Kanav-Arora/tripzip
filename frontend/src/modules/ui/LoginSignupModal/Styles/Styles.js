import styled from 'styled-components';
import { Theme } from '../../Theme/theme';
import { motion, AnimatePresence } from 'framer-motion';

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

export const ImageContainer = styled(motion.div)`
    position: relative;
    width: 50%;
    background: black;
    border-radius: inherit;
    overflow: hidden;
`;

export const ImageOverlayText = styled.div`
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    color: white;
    margin: ${Theme.spacing(1)};
    font-size: ${Theme.font.size['3xl']};
    line-height: ${Theme.font.lineHeight['3xl']};
    font-weight: ${Theme.font.weight.bold};
    box-shadow: ${Theme.boxShadow['2xl']};
    text-align: center;
`;

const ImageOverlaySideComponent = styled(motion.div)`
    position: absolute;
    background: ${Theme.color.gray40};
    padding-right: ${Theme.spacing(2)};
    padding-left: ${Theme.spacing(1)};
    color: black;
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: ${Theme.font.size.sm};
    font-weight: ${Theme.font.weight.medium};
    ${(props) =>
        props.vertical &&
        `${props.vertical}: ${props.verticalPercentage || 0};`}
    ${(props) =>
        props.horizontal &&
        `${props.horizontal}: ${props.horizontalPercentage || 0};`}
    ${(props) => props.rotate && `transform: rotate(${props.rotate}deg);`}
    
    ${(props) =>
        props.horizontal === 'left' &&
        `border-top-right-radius: ${Theme.border.radius.lg}; border-bottom-right-radius: ${Theme.border.radius.lg}; `}
    ${(props) =>
        props.horizontal === 'right' &&
        `border-top-left-radius: ${Theme.border.radius.lg}; border-bottom-left-radius: ${Theme.border.radius.lg}; `}

    z-index: 2;
`;

export const AnimatedSideComponent = ({ index, element }) => {
    const isLeft = element.horizontal === 'left';

    return (
        <AnimatePresence>
            {element && (
                <ImageOverlaySideComponent
                    key={index}
                    initial={{
                        opacity: 0,
                        x: isLeft ? -40 : 40,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{
                        opacity: 0,
                        x: isLeft ? -40 : 40,
                    }}
                    transition={{ duration: 0.75, delay: 0.25 }}
                    vertical={element.vertical}
                    verticalPercentage={element.verticalPercentage}
                    horizontal={element.horizontal}
                    horizontalPercentage={element.horizontalPercentage}
                >
                    {element.icon}
                    {element.title}
                </ImageOverlaySideComponent>
            )}
        </AnimatePresence>
    );
};

export const ContentContainer = styled(motion.div)`
    width: 50%;
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
    align-items: center;
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

export const TextDivider = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    --text-divider-gap: ${Theme.spacing(3)};
    color: ${Theme.color.gray50};
    &::before,
    &::after {
        content: '';
        height: 1px;
        background-color: silver;
        flex-grow: 1;
    }

    &::before {
        margin-right: var(--text-divider-gap);
    }

    &::after {
        margin-left: var(--text-divider-gap);
    }
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
    &:focus {
        border-color: ${Theme.color.orange};
        outline: none;
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
