import { atom } from 'recoil';

export const PasswordChangeFormState = atom({
    key: 'PasswordChangeFormState',
    default: {
        email: null,
        password: null,
    },
});
