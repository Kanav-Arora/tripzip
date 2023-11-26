import React, { useContext } from 'react';
import Modal from '../Modal/Modal';

import { GoogleIcon } from '../../../assets/ext-icon';

import {
    ModalBody,
    Image,
    ImageContainer,
    ContentContainer,
    ContentHeader,
    ContentHeading,
    ContentBody,
    AuthServiceContainer,
    ToggleText,
    ToggleButton,
} from './Styles';
import { AuthModalContext } from '../../../context/AuthModal/authModalContext';
import {
    showModalAction,
    hideModalAction,
} from '../../../context/AuthModal/authModalAction';
import AuthForm from './AuthForm';

const ThirdPartyAuth = ({ title, Icon }) => {
    return (
        <AuthServiceContainer>
            <Icon />
            <div>Continue with {title}</div>
        </AuthServiceContainer>
    );
};

const LoginContent = ({ handleToggle }) => (
    <ContentContainer>
        <ContentHeader>
            <ContentHeading>Log In</ContentHeading>
            <div className="text-gray-500 text-sm">Welcome back!</div>
        </ContentHeader>
        <ContentBody>
            <ThirdPartyAuth title="Google" Icon={GoogleIcon} />
            <AuthForm isLogin={true} />
            <ToggleText>
                <div>Don't have an account?</div>
                <ToggleButton onClick={handleToggle}>Sign Up</ToggleButton>
            </ToggleText>
        </ContentBody>
    </ContentContainer>
);

const SignupContent = ({ handleToggle }) => (
    <ContentContainer>
        <ContentHeader>
            <ContentHeading>Sign Up</ContentHeading>
            <div className="text-gray-500 text-sm">Welcome!</div>
        </ContentHeader>
        <ContentBody>
            <ThirdPartyAuth title="Google" Icon={GoogleIcon} />
            <AuthForm isLogin={false} />
            <ToggleText>
                <div>Have an account?</div>
                <ToggleButton onClick={handleToggle}>Log In</ToggleButton>
            </ToggleText>
        </ContentBody>
    </ContentContainer>
);

const LoginSignupModal = ({ isVisible, onClose, type }) => {
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
                <ImageContainer>
                    <Image src="/images/src/kanav.webp" alt="Background" />
                </ImageContainer>
                {authModalState.type === 'LOGIN' ? (
                    <LoginContent handleToggle={handleToggle} />
                ) : (
                    <SignupContent handleToggle={handleToggle} />
                )}
            </ModalBody>
        </Modal>
    );
};

export default LoginSignupModal;
