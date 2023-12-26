import styled from 'styled-components';
import { useAuthModal } from '../../ui/LoginSignupModal/hooks/useAuthModal';
import { Theme } from '../../ui/Theme/theme';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: ${Theme.spacing(3)};
`;

const LoginButton = styled.button`
    color: ${(props) => (props.dark ? 'black' : 'white')};
    background: transparent;
`;

const SignupButton = styled.button`
    color: ${(props) => (props.dark ? 'white' : 'black')};
    background: ${(props) => (props.dark ? 'black' : 'white')};
    border-radius: ${Theme.border.radius.full};
    padding: ${Theme.spacing(1.5)} ${Theme.spacing(2.5)};
`;

export default function AuthButtonGroup({ dark }) {
    const { openAuthModal } = useAuthModal();
    const loginModalHandler = () => {
        openAuthModal({ visible: true, type: 'LOGIN' });
    };

    const signupModalHandler = () => {
        openAuthModal({ visible: true, type: 'SIGNUP' });
    };

    return (
        <Container>
            <LoginButton dark onClick={loginModalHandler}>
                Login
            </LoginButton>
            <SignupButton dark onClick={signupModalHandler}>
                Sign Up
            </SignupButton>
        </Container>
    );
}
