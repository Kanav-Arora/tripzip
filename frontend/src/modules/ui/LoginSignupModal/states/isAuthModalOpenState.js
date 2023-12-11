import { atom } from 'recoil';

export const isAuthModalOpenState = atom({
    key: `isAuthModalOpen`,
    default: {
        visible: false,
        type: null,
    },
});
