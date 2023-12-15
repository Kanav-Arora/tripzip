import { atom } from 'recoil';

export const DateRangeSelectorState = atom({
    key: 'DateRangeSelectorState',
    default: {
        from: null,
        to: null,
    },
});
