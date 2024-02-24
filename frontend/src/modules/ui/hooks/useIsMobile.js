import { useMediaQuery } from 'react-responsive';

const MOBILE_VIEWPORT = 768;

export const useIsMobile = () =>
    useMediaQuery({ query: `(max-width: ${MOBILE_VIEWPORT}px)` });