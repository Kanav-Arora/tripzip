import React, { useState } from 'react';
import {
    FormContainer,
    Form,
    FormField,
    Input,
    Error,
    Button,
    ForgotPassButton,
    FieldSubText,
} from '../Styles/Styles';
import {
    environment,
    testLoginId,
    testPassword,
} from '../../../../frontend.config';

import { useRecoilState } from 'recoil';
import { AuthFormState } from '../states/AuthFormState';
import { LoginDataState } from '../states/LoginDataState';
import { OpenedPageState } from '../states/OpenedPageState';
import axios from 'axios';
import { backendOrigin } from '../../../../frontend.config';
import { useAuth } from '../../../../context/Auth/useAuth';
import { useAuthModal } from '../hooks/useAuthModal';
import Pages from '../constants/PageStates';

export default function AuthForm({ isLogin }) {
    const { loginAuth } = useAuth();
    const { closeAuthModal } = useAuthModal();
    const [authFormState, setAuthFormState] = useRecoilState(AuthFormState);
    const [, setLoginDataState] = useRecoilState(LoginDataState);
    const [, setPageState] = useRecoilState(OpenedPageState);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');

    const validateEmail = (email) => {
        if (!email.includes('@')) {
            setEmailError('Invalid email address');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validatePassword = (password) => {
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const handleForgotPasswordClick = () => {
        setPageState(Pages.passwordReset);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const nameField = e.target.elements.name;
        const name = nameField ? nameField.value : '';
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const instance = axios.create({
            withCredentials: true,
            baseURL: backendOrigin,
        });
        const data = {
            email,
            password,
            type: isLogin ? 'Login' : 'Signup',
        };

        if (!isLogin) {
            data.name = name;
            if (name === '') {
                setNameError("Name field can't be empty");
            }
            const isEmailValid = validateEmail(email);
            const isPasswordValid = validatePassword(password);

            if (isEmailValid && isPasswordValid && data.name !== '') {
                const result = await instance.post(
                    '/users/signup',
                    {
                        name,
                        email,
                        password,
                        isVerified: false,
                    },
                    {
                        headers: { 'Content-Type': 'application/json' },
                    }
                );
                if (result.status === 201) {
                    setLoginDataState({
                        uid: result.data.uid,
                        userDetailsId: result.data.userDetailsId,
                        name: result.data.name,
                    });
                    setAuthFormState({ ...authFormState, ...data });
                    setPageState(Pages.emailVerify);
                }
            }
        } else {
            try {
                const result = await instance.post(
                    '/users/signin',
                    { email, password },
                    {
                        headers: { 'Content-Type': 'application/json' },
                    }
                );
                console.log("signin");
                console.log(result);
                if (result.status === 201) {
                    if (result.data.isVerified) {
                        loginAuth(result.data);
                        setPageState(Pages.main);
                        setAuthFormState({
                            name: null,
                            email: null,
                            password: null,
                            type: null,
                        });
                        closeAuthModal();
                    }
                    else {
                        setAuthFormState({ ...authFormState, ...data });
                        setLoginDataState({
                            uid: result.data.uid,
                            userDetailsId: result.data.userDetailsId,
                            name: result.data.name,
                        });
                        setPageState(Pages.emailVerify);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <FormContainer>
            <Form onSubmit={handleFormSubmit}>
                {!isLogin && (
                    <FormField>
                        <Input
                            name="name"
                            type="text"
                            placeholder="Name"
                            onChange={(e) => e.preventDefault()}
                            error={!!nameError}
                        />
                        {nameError && <Error>{nameError}</Error>}
                    </FormField>
                )}
                <FormField>
                    <Input
                        defaultValue={
                            environment === 'development' && isLogin
                                ? testLoginId
                                : ''
                        }
                        name="email"
                        type="email"
                        placeholder="Email"
                        error={!!emailError}
                    />
                    {emailError && <Error>{emailError}</Error>}
                </FormField>
                <FormField>
                    <Input
                        defaultValue={
                            environment === 'development' && isLogin
                                ? testPassword
                                : ''
                        }
                        name="password"
                        type="password"
                        placeholder="Password"
                        error={!!passwordError}
                    />
                    {!isLogin && !passwordError && (
                        <FieldSubText>
                            Password must of atleast 8 length and be
                            alphanumeric
                        </FieldSubText>
                    )}
                    {passwordError && <Error>{passwordError}</Error>}
                </FormField>
                {isLogin && (
                    <ForgotPassButton onClick={handleForgotPasswordClick}>
                        Forgot Password ?
                    </ForgotPassButton>
                )}
                <Button type="submit">{isLogin ? 'Login' : 'Signup'}</Button>
            </Form>
        </FormContainer>
    );
}
