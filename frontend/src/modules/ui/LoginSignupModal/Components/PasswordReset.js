import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { OpenedPageState } from '../states/OpenedPageState';
import { AuthFormState } from '../states/AuthFormState';
import { PasswordChangeFormState } from '../states/PasswordChangeFormState';
import { Theme } from '../../Theme/theme';
import { IconProvider } from '../../IconProvider/IconProvider';
import { ChevronLeft } from '../../../../assets/ext-icon';
import Pages from '../constants/PageStates';

const StyledContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: ${Theme.spacing(6)};
`;

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
`;

const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${Theme.spacing(6)};
    width: 100%;
    color: ${Theme.color.gray60};
    text-align: center;
    font-size: ${Theme.font.size.base};
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Theme.spacing(2)};
    width: 100%;
    align-items: start;
`;

export const FieldSubText = styled.div`
    font-weight: ${Theme.font.weight.light};
    color: ${Theme.color.gray60};
    font-size: ${Theme.font.size.xs};
`;

export const Input = styled.input`
    font-size: ${Theme.font.size.base};
    width: 100%;
    height: ${Theme.spacing(10)};
    padding: ${Theme.spacing(4)};
    border: 1px solid
        ${(props) => (props.error ? Theme.color.red : Theme.color.gray)};
    border-radius: ${Theme.border.radius.md};

    &::placeholder {
        color: ${Theme.color.gray50};
        font-size: ${Theme.font.size.sm};
    }
    &:focus {
        border-color: ${Theme.color.orange};
        outline: none;
    }
`;

const StyledButton = styled.button`
    margin-top: ${Theme.spacing(2)};
    background-color: ${(props) => (props.disabled ? 'gray' : 'black')};
    color: white;
    padding: 10px;
    border: none;
    border-radius: ${Theme.border.radius.md};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    width: 100%;
`;

export const Error = styled.span`
    color: red;
    font-size: ${Theme.font.size.xs};
`;

export default function PasswordReset() {
    const [, setPageState] = useRecoilState(OpenedPageState);
    const [authFormState] = useRecoilState(AuthFormState);
    const [, passwordFormState] = useRecoilState(PasswordChangeFormState);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [rePasswordError, setRePasswordError] = useState('');

    const validateEmail = (email) => {
        if (!email.includes('@')) {
            setEmailError('Invalid email address');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validatePassword = (password) => {
        if (password === '' || password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            return false;
        }

        setPasswordError('');
        return true;
    };

    const validateRePassword = (password, repassword) => {
        if (password !== repassword) {
            setRePasswordError('Value should match your password');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const handleSubmitButtonClick = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const repassword = e.target.elements.repassword.value;

        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        const isRePasswordValid = validateRePassword(password, repassword);

        if (isEmailValid && isPasswordValid && isRePasswordValid) {
            passwordFormState({ email, password });
            setPageState(Pages.passwordVerify);
        }
    };

    return (
        <StyledContainer onSubmit={handleSubmitButtonClick}>
            <StyledHeader>
                <button
                    onClick={() => {
                        setPageState(Pages.main);
                    }}
                >
                    <IconProvider Icon={ChevronLeft} size={2} />
                </button>
            </StyledHeader>
            <StyledBody>
                <div>Reset your password</div>
                <FormField>
                    <Input
                        defaultValue={authFormState.email}
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        error={!!emailError}
                    ></Input>
                    {emailError && <Error>{emailError}</Error>}
                </FormField>
                <FormField>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Enter new password"
                        error={!!passwordError}
                    ></Input>
                    {!passwordError && <FieldSubText>
                        Password must of atleast 8 length and be alphanumeric
                    </FieldSubText>}
                    {passwordError && <Error>{passwordError}</Error>}
                </FormField>
                <FormField>
                    <Input
                        name="repassword"
                        type="password"
                        placeholder="Re-enter new password"
                        error={!!rePasswordError}
                    ></Input>
                    {rePasswordError && <Error>{rePasswordError}</Error>}
                </FormField>
            </StyledBody>
            <StyledButton type="submit">Proceed</StyledButton>
        </StyledContainer>
    );
}
