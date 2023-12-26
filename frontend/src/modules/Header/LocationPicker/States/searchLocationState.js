import { atom } from 'recoil';

export const searchLocationState = atom({
    key: 'SearchLocation',
    default: { typing: false, search: '' },
});
