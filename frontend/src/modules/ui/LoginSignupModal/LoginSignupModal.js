import React, { useContext } from 'react';
import Modal from '../Modal/Modal';

import { GoogleIcon } from '../../../assets/ext-icon';

import {
    ModalBody,
    Image,
    ImageContainer,
    ImageOverlayText,
    ContentContainer,
    ContentHeader,
    ContentHeading,
    ContentBody,
    AuthServiceContainer,
    ToggleText,
    ToggleButton,
    TextDivider,
    AnimatedSideComponent,
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
    <ContentContainer
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 120 }}
    >
        <ContentHeader>
            <ContentHeading>Log In</ContentHeading>
            <div className="text-gray-500 text-sm">Welcome back!</div>
        </ContentHeader>
        <ContentBody>
            <ThirdPartyAuth title="Google" Icon={GoogleIcon} />
            <TextDivider>or</TextDivider>
            <AuthForm isLogin={true} />
            <ToggleText>
                <div>Don't have an account?</div>
                <ToggleButton onClick={handleToggle}>Sign Up</ToggleButton>
            </ToggleText>
        </ContentBody>
    </ContentContainer>
);

const SignupContent = ({ handleToggle }) => (
    <ContentContainer
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 120 }}
    >
        <ContentHeader>
            <ContentHeading>Sign Up</ContentHeading>
            <div className="text-gray-500 text-sm">Welcome!</div>
        </ContentHeader>
        <ContentBody>
            <ThirdPartyAuth title="Google" Icon={GoogleIcon} />
            <TextDivider>or</TextDivider>
            <AuthForm isLogin={false} />
            <ToggleText>
                <div>Have an account?</div>
                <ToggleButton onClick={handleToggle}>Log In</ToggleButton>
            </ToggleText>
        </ContentBody>
    </ContentContainer>
);

const elements = [
    {
        title: 'Paris',
        icon: <GoogleIcon />,
        vertical: 'top',
        verticalPercentage: '10%',
        horizontal: 'left',
        horizontalPercentage: '0%',
    },
    {
        title: 'Hawai',
        icon: <GoogleIcon />,
        vertical: 'top',
        verticalPercentage: '20%',
        horizontal: 'right',
        horizontalPercentage: '0%',
    },
    {
        title: 'Thailand',
        icon: <GoogleIcon />,
        vertical: 'bottom',
        verticalPercentage: '20%',
        horizontal: 'left',
        horizontalPercentage: '0%',
    },
    {
        title: 'Manali',
        icon: <GoogleIcon />,
        vertical: 'bottom',
        verticalPercentage: '30%',
        horizontal: 'right',
        horizontalPercentage: '0%',
    },
];

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
                        <ImageContainer
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            transition={{ stiffness: 120 }}
                        >
                            {elements.map((element, index) => {
                                return (
                                    <AnimatedSideComponent
                                        element={element}
                                        index={index}
                                    />
                                );
                            })}
                            <ImageOverlayText>
                                Find Your Travel Buddy
                            </ImageOverlayText>
                            <Image
                                src="/images/fallback/AuthModal.jpg"
                                alt="Background"
                            />
                        </ImageContainer>
                        <LoginContent handleToggle={handleToggle} />
                    </>
                ) : (
                    <>
                        <SignupContent handleToggle={handleToggle} />
                        <ImageContainer
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            transition={{ stiffness: 120 }}
                        >
                            {elements.map((element, index) => {
                                return (
                                    <AnimatedSideComponent
                                        element={element}
                                        index={index}
                                    />
                                );
                            })}
                            <ImageOverlayText>
                                Find Your Travel Buddy
                            </ImageOverlayText>
                            <Image
                                src="/images/fallback/AuthModal.jpg"
                                alt="Background"
                            />
                        </ImageContainer>
                    </>
                )}
            </ModalBody>
        </Modal>
    );
};

export default LoginSignupModal;
