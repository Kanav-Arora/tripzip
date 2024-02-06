import { atom } from 'recoil';

export const LoginDataState = atom({
    key: 'LoginDataState',
    default: {
        uid: null,
        userDetailsId: null,
        name: null,
    }
})
