import { atom } from 'recoil';

export const userState = atom<string>({
  key: 'MessangerPage/username',
  default: '장영준',
});
