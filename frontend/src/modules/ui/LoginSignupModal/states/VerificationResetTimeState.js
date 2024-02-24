import { atom } from 'recoil'

export const VerificationResetTimeState = atom({
    key: 'VerificationResetTimeState',
    default: {
        disable: true,
        time: 0,
    }
})