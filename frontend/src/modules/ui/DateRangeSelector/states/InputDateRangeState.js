import { atom } from 'recoil';

export const InputDateRangeState = atom({
    key: `InputDateRangeState`,
    default: {
        from: null,
        to: null,
    },
});
