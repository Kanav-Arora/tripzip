import { atom } from 'recoil';

export const ImageUpdateState = atom({
    key: 'ImageUpdateState',
    default: {
        imageFile: null,
        imageURL: null,
    },
});
