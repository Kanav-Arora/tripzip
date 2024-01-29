import React, { useState } from 'react';

import {
    FormContainer,
    Form,
    FormField,
    Input,
    Error,
    Button,
} from '../Styles/Styles';
import {
    environment,
    testLoginId,
    testPassword,
} from '../../../../frontend.config';

import { useRecoilState } from 'recoil';
import { AuthFormState } from '../states/AuthFormState';
import { isVerificationPageOpenState } from '../states/isVerificationPageOpenState';

export default function AuthForm({ isLogin }) {
    const [authFormState, setAuthFormState] = useRecoilState(AuthFormState);
    const [, setVerifyState] = useRecoilState(isVerificationPageOpenState);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

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

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const nameField = e.target.elements.name;
        const name = nameField ? nameField.value : '';
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        if (isEmailValid && isPasswordValid) {
            const data = {
                email,
                password,
                type: isLogin ? 'Login' : 'Signup',
            };

            if (!isLogin) {
                data.name = name;
            }
            setAuthFormState({ ...authFormState, ...data });
            setVerifyState(true);
        }

        // if (isEmailValid && isPasswordValid) {
        //     let result = '';
        //     if (isLogin) {
        //         result = await loginRequest(instance, {
        //             email: email,
        //             password: password,
        //         });
        //     } else {
        //         result = await signUpRequest(instance, {
        //             name: name,
        //             email: email,
        //             password: password,
        //         });
        //     }
        //     if (result === 'SUCCESS') {
        //         closeAuthModal();
        //     }
        // }
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
                        />
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
                    {passwordError && <Error>{passwordError}</Error>}
                </FormField>

                <Button type="submit">{isLogin ? 'Login' : 'Signup'}</Button>
            </Form>
        </FormContainer>
    );
}
