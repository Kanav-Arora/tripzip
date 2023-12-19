import { styled } from 'styled-components';

const IconContainer = styled.div`
    height: ${(props) => props.size}rem;
    width: ${(props) => props.size}rem;
    color: ${(props) => props.color};
    fill: ${(props) => props.fill};
`;

export const IconProvider = ({ size, Icon, color, fill, stroke }) => {
    return (
        <IconContainer size={size} color={color}>
            <Icon fill={fill} stoke={stroke} />
        </IconContainer>
    );
};
