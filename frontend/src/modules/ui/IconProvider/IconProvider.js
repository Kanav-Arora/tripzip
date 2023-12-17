import { styled } from 'styled-components';

const IconContainer = styled.div`
    height: ${(props) => props.size}rem;
    width: ${(props) => props.size}rem;
`;

export const IconProvider = ({ size, Icon }) => {
    return (
        <IconContainer size={size}>
            <Icon />
        </IconContainer>
    );
};
