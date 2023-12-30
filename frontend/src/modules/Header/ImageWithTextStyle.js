import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../ui/Theme/theme';

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    max-height: ${({ isHome }) => (isHome ? '375px' : '250px')};
`;

export const TextContainer = styled.div`
    position: absolute;
    bottom: 50%;
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const StyledText = styled(motion.p)`
    font-size: ${Theme.font.size['2xl']};
`;
