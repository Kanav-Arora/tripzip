import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IconProvider } from '../../IconProvider/IconProvider';
import { ChevronLeft } from '../../../../assets/ext-icon';
import { useRecoilState } from 'recoil';
import { isVerificationPageOpenState } from '../states/isVerificationPageOpenState';
import { useAuth } from '../../../../context/Auth/useAuth';
import { AuthFormState } from '../states/AuthFormState';
import { Theme } from '../../Theme/theme';
import axios from 'axios';
import { backendOrigin } from '../../../../frontend.config';
import { useAuthModal } from '../hooks/useAuthModal';

const StyledContainer = styled.div`
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
    gap: ${Theme.spacing(10)};
    width: 100%;
    color: ${Theme.color.gray60};
    text-align: center;
    font-size: ${Theme.font.size.base};
`;

const DigitInputContainer = styled.div`
    display: flex;
    gap: ${Theme.spacing(2)};
`;

const DigitInput = styled.input`
    width: ${Theme.font.lineHeight['3xl']};
    height: ${Theme.font.lineHeight['3xl']};
    font-size: ${Theme.font.size['2xl']};
    text-align: center;
    border: 1px solid ${Theme.color.gray50};
    outline: none;
    border-radius: ${Theme.border.radius.md};

    &:focus {
        border: 1px solid black;
    }
`;

export const StyledButton = styled.button`
    margin-top: ${Theme.spacing(2)};
    background-color: ${(props) => (props.disabled ? 'gray' : 'black')};
    color: white;
    padding: 10px;
    border: none;
    border-radius: ${Theme.border.radius.md};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    width: 100%;
`;

export default function VerificationPage() {
    const { loginAuth } = useAuth();
    const { closeAuthModal } = useAuthModal();
    const [, setVerifyState] = useRecoilState(isVerificationPageOpenState);
    const [authFormState, setAuthFormState] = useRecoilState(AuthFormState);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const [proceedDisabled, setProceedDisabled] = useState(true);
    const handleDigitChange = (index, value) => {
        if (value && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
        const allFieldsFilled = inputRefs.every(
            (ref) => ref.current && ref.current.value
        );
        setProceedDisabled(!allFieldsFilled);
        if (allFieldsFilled) {
            handleProceed();
        }
    };

    const handleBackspace = (index, event) => {
        if (event.key === 'Backspace' && index > 0 && !event.target.value) {
            inputRefs[index - 1].current.focus();
        }
    };

    const loginRequest = async (instance, body) => {
        try {
            const result = await instance.post('/users/signin', body, {
                headers: { 'Content-Type': 'application/json' },
            });
            if (result.status === 201) {
                loginAuth(result.data);
                return 'SUCCESS';
            } else {
                console.error('Unexpected status code:', result.status);
            }
        } catch (error) {
            console.log(error);
        }
        return 'FAIL';
    };

    const signUpRequest = async (instance, body) => {
        try {
            const result = await instance.post('/users/signup', body, {
                headers: { 'Content-Type': 'application/json' },
            });
            if (result.status === 201) {
                loginAuth(result.data);
                return 'SUCCESS';
            } else {
                console.error('Unexpected status code:', result.status);
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
            } else if (error.request) {
                console.error('Request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
        }
        return 'FAIL';
    };

    const handleProceed = async () => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: backendOrigin,
        });
        let result = '';
        if (authFormState.type === 'Login') {
            result = await loginRequest(instance, {
                email: authFormState.email,
                password: authFormState.password,
            });
        } else {
            result = await signUpRequest(instance, {
                name: authFormState.name,
                email: authFormState.email,
                password: authFormState.password,
            });
        }
        if (result === 'SUCCESS') {
            closeAuthModal();
            setVerifyState(false);
            setAuthFormState({
                name: null,
                email: null,
                password: null,
                type: null,
            });
        }
    };

    return (
        <StyledContainer>
            <StyledHeader>
                <button
                    onClick={() => {
                        setVerifyState(false);
                    }}
                >
                    <IconProvider Icon={ChevronLeft} size={2} />
                </button>
            </StyledHeader>
            <StyledBody>
                We have sent a verification code to {authFormState.email}.
                Please verify your email to proceed.
                <DigitInputContainer>
                    {[0, 1, 2, 3].map((index) => (
                        <DigitInput
                            key={index}
                            ref={inputRefs[index]}
                            id={`digit-input-${index}`}
                            type="text"
                            maxLength="1"
                            onChange={(e) =>
                                handleDigitChange(index, e.target.value)
                            }
                            onKeyDown={(e) => handleBackspace(index, e)}
                        />
                    ))}
                </DigitInputContainer>
                <StyledButton
                    disabled={proceedDisabled}
                    onClick={handleProceed}
                >
                    Proceed
                </StyledButton>
            </StyledBody>
        </StyledContainer>
    );
}
