import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Theme } from '../../modules/ui/Theme/theme';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${Theme.spacing(4)};
`;

export const Wrapper = styled.div`
    padding: ${Theme.spacing(4)};
    width: 100%;
    height: 100%;
`;

export const ContentDiv = styled(motion.div)``;

export const ButtonBar = styled.div`
    width: 100%:
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
