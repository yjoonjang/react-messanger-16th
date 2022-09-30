import { atom } from 'recoil';

// export interface IUserState {
//   name: string;
// }

export const userState = atom<string>({
  key: 'MessangerPage/username',
  default: '장영준',
});
