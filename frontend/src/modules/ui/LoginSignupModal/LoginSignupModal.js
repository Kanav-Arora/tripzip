import React from 'react';
import Modal from '../Modal/Modal';

import { ModalBody, ContentContainer } from './Styles/Styles';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import ImageSection from './Components/ImageSection';
import { useAuthModal } from './hooks/useAuthModal';
import { useRecoilValue } from 'recoil';
import { isAuthModalOpenState } from './states/isAuthModalOpenState';

const LoginSignupModal = () => {
    const { openAuthModal, closeAuthModal } = useAuthModal();
    const isAuthModalOpen = useRecoilValue(isAuthModalOpenState);

    const handleToggle = () => {
        isAuthModalOpen.type === 'LOGIN'
            ? openAuthModal({ visible: true, type: 'SIGNUP' })
            : openAuthModal({ visible: true, type: 'LOGIN' });
    };

    const handleClose = () => {
        closeAuthModal();
    };

    return (
        <Modal
            isVisible={isAuthModalOpen.visible}
            width="65%"
            height="75%"
            onClose={handleClose}
        >
            <ModalBody>
                {isAuthModalOpen.type === 'LOGIN' ? (
                    <>
                        <ImageSection position="left" />
                        <ContentContainer
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            transition={{ stiffness: 120 }}
                        >
                            <LoginForm handleToggle={handleToggle} />
                        </ContentContainer>
                    </>
                ) : (
                    <>
                        <ContentContainer
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            transition={{ stiffness: 120 }}
                        >
                            <SignupForm handleToggle={handleToggle} />
                        </ContentContainer>
                        <ImageSection position="right" />
                    </>
                )}
            </ModalBody>
        </Modal>
    );
};

export default LoginSignupModal;
