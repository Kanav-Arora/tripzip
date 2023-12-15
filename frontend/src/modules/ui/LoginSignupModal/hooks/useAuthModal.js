import { useRecoilValue, useRecoilState } from 'recoil';
import { isAuthModalOpenState } from '../states/isAuthModalOpenState';

export const useAuthModal = () => {
    const [, setAuthModalOpen] = useRecoilState(isAuthModalOpenState);
    const isAuthModalOpen = useRecoilValue(isAuthModalOpenState);

    const openAuthModal = ({ type }) => {
        setAuthModalOpen({ visible: true, type: type });
    };
    const closeAuthModal = () => {
        setAuthModalOpen({ visible: false, type: null });
    };

    return {
        openAuthModal,
        closeAuthModal,
        isAuthModalOpen,
    };
};
