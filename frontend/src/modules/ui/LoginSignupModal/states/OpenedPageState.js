import { atom } from 'recoil';
import Pages from '../constants/PageStates';

export const OpenedPageState = atom({
    key: `OpenedPageState`,
    default: Pages.main,
});
