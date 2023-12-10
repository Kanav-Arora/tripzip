import React, { useContext } from 'react';
import Modal from '../Modal/Modal';

import { ModalBody } from './Styles/Styles';
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
                        <LoginForm handleToggle={handleToggle} />
                    </>
                ) : (
                    <>
                        <SignupForm handleToggle={handleToggle} />
                        <ImageSection position="right" />
                    </>
                )}
            </ModalBody>
        </Modal>
    );
};

export default LoginSignupModal;
