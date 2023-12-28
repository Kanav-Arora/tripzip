import { atom } from 'recoil';

export const SearchState = atom({
    key: 'SearchState',
    default: {
        location: null,
        startDate: null,
    },
});
