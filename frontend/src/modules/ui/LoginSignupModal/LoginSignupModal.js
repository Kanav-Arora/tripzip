import React, { useContext } from 'react';
import Modal from '../Modal/Modal';

import { ModalBody, ContentContainer } from './Styles/Styles';
import { AuthModalContext } from '../../../context/AuthModal/authModalContext';
import {
    showModalAction,
    hideModalAction,
} from '../../../context/AuthModal/authModalAction';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import ImageSection from './Components/ImageSection';

const LoginSignupModal = ({ isVisible }) => {
    const { authModalState, authModalDispatch } = useContext(AuthModalContext);

    const handleToggle = () => {
        authModalDispatch(
            authModalState.type === 'LOGIN'
                ? showModalAction('SIGNUP')
                : showModalAction('LOGIN')
        );
    };

    const handleClose = () => {
        authModalDispatch(hideModalAction());
    };

    return (
        <Modal
            isVisible={isVisible}
            width="65%"
            height="75%"
            onClose={handleClose}
        >
            <ModalBody>
                {authModalState.type === 'LOGIN' ? (
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
