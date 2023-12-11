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
    backendOrigin,
    testLoginId,
    testPassword,
} from '../../../../frontend.config';

import { useAuth } from '../../../../context/Auth/authContext';
import { useAuthModal } from '../hooks/useAuthModal';
import { loginAction } from '../../../../context/Auth/authAction';

import axios from 'axios';

export default function AuthForm({ isLogin }) {
    const { authDispatch } = useAuth();
    const { closeAuthModal } = useAuthModal();
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

    const loginRequest = async (instance, body) => {
        try {
            const result = await instance.post('/users/signin', body, {
                headers: { 'Content-Type': 'application/json' },
            });
            if (result.status === 201) {
                authDispatch(loginAction(result.data));
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
            const result = await instance.post(
                backendOrigin + '/users/signup',
                body,
                { headers: { 'Content-Type': 'application/json' } }
            );
            if (result.status === 201) {
                authDispatch(loginAction(result.data));
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

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const instance = axios.create({
            withCredentials: true,
            baseURL: backendOrigin,
        });

        const nameField = e.target.elements.name;
        const name = nameField ? nameField.value : '';
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        if (isEmailValid && isPasswordValid) {
            let result = '';
            if (isLogin) {
                result = await loginRequest(instance, {
                    email: email,
                    password: password,
                });
            } else {
                result = await signUpRequest(instance, {
                    name: name,
                    email: email,
                    password: password,
                });
            }
            if (result === 'SUCCESS') {
                closeAuthModal();
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
