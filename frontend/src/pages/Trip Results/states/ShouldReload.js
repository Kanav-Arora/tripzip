// Create a new atom
import { atom, useRecoilState } from 'recoil';

export const ShouldReloadState = atom({
    key: 'shouldReloadState',
    default: false,
});

export const useShouldReload = () => useRecoilState(ShouldReloadState);
