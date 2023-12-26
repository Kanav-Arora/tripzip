import { atom } from 'recoil'

export const LoadingStatusStates = atom({
    key: 'LoadingStatusStates',
    default: { loading: false, page: 1 }
})