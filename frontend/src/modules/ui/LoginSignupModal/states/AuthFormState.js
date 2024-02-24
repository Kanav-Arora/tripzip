import { atom } from 'recoil';

export const AuthFormState = atom({
    key: 'AuthFormState',
    default: {
        name: null,
        email: null,
        password: null,
        type: null,
    },
});
