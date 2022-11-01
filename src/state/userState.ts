import { atom } from 'recoil';

interface user {
  username: string;
  introduction: string;
}

export const userListState = atom<Array<user>>({
  key: 'userListState',
  default: [
    { username: '프짱', introduction: '프론트가 미래다!' },
    { username: '백짱', introduction: '백엔드가 미래다!' },
    { username: '기획짱', introduction: '기획이 미래다!' },
    { username: '디자인짱', introduction: '디자인이 미래다!' },
  ],
});

export const userState = atom<string>({
  key: 'MessangerPage/username',
  default: '장영준',
});
