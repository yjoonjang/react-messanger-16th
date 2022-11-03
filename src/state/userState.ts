import { atom } from 'recoil';
import chatData from '../components/elements/chatData.json';
export interface IUserInfo {
  username: string;
  introduction: string;
  chatList?:
    | Array<{
        username: string;
        messageTime: string;
        text: string;
      }>
    | undefined;
}

// interface IChat {
//   target: string;
//   chatList: Array<{
//     username: string;
//     messageTime: string;
//     text: string;
//   }>;
// }

export const userInfoState = atom<Array<IUserInfo>>({
  key: 'userListState',
  default: [
    {
      username: '프짱',
      introduction: '프론트가 미래다!',
      chatList: chatData.chat1,
      // messageList: MessageList.message1,
    },
    {
      username: '백짱',
      introduction: '백엔드가 미래다!',
      chatList: chatData.chat2,
      // messageList: MessageList.message2,
    },
    {
      username: '기획짱',
      introduction: '기획이 미래다!',
      chatList: chatData.chat3,
      // messageList: MessageList.message3,
    },
    {
      username: '디자인짱',
      introduction: '디자인이 미래다!',
      chatList: chatData.chat4,
      // messageList: MessageList.message4,
    },
  ],
});

// const chatListState = atom<IChat>({
//   key: 'chatListState',
//   default: chatData.chat,
// });

// export const userState = atom<string>({
//   key: 'userState',
//   default: '장영준',
// });
