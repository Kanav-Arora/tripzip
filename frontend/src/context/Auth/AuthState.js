import { atom } from 'recoil';

export const AuthState = atom({
    key: 'AuthState',
    default: {
        isAuthenticated: false,
        uid: null,
        name: null,
        userDetailsId: null,
    },
});
