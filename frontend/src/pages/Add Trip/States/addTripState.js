import { atom } from 'recoil';

export const addTripState = atom({
    key: 'AddTripState',
    default: {
        location: '',
        description: '',
        days: [],
        currentStep: 0,
    },
});
