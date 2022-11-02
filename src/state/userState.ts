import { atom } from 'recoil';
const loggedInUser = '장영준';

interface user {
  username: string;
  introduction: string;
  messageList?: Array<{
    username: string;
    messageTime: string;
    text: string;
  }>;
}

export const userListState = atom<Array<user>>({
  key: 'userListState',
  default: [
    {
      username: '프짱',
      introduction: '프론트가 미래다!',
      messageList: [
        {
          username: '프짱',
          messageTime: '12월 14일',
          text: '프론트가',
        },
        {
          username: '프짱',
          messageTime: '12월 14일',
          text: '미래다!',
        },
        {
          username: loggedInUser,
          messageTime: '12월 14일',
          text: '맞지',
        },
      ],
    },

    {
      username: '백짱',
      introduction: '백엔드가 미래다!',
      messageList: [
        {
          username: '백짱',
          messageTime: '12월 14일',
          text: '백엔드가',
        },
        {
          username: '백짱',
          messageTime: '12월 14일',
          text: '미래다!',
        },
        {
          username: loggedInUser,
          messageTime: '12월 14일',
          text: '그건 좀 ..',
        },
      ],
    },
    {
      username: '기획짱',
      introduction: '기획이 미래다!',
      messageList: [
        {
          username: '기획짱',
          messageTime: '12월 14일',
          text: '기획이',
        },
        {
          username: '기획짱',
          messageTime: '12월 14일',
          text: '미래다!',
        },
        {
          username: loggedInUser,
          messageTime: '12월 14일',
          text: '음 ..',
        },
      ],
    },
    {
      username: '디자인짱',
      introduction: '디자인이 미래다!',
      messageList: [
        {
          username: '디자인짱',
          messageTime: '12월 14일',
          text: '디자인이',
        },
        {
          username: '디자인짱',
          messageTime: '12월 14일',
          text: '미래다!',
        },
        {
          username: loggedInUser,
          messageTime: '12월 14일',
          text: 'ㅋㅋ',
        },
      ],
    },
  ],
});

export const userState = atom<string>({
  key: 'userState',
  default: '장영준',
});
