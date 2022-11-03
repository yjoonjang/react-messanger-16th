import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router';
import { Container, MessangerBox, Header, TextShowArea, InputTextArea } from './ChattingPage.styled';
import UserProfile from '../elements/UserProfile';
import { Column } from '../elements/Wrapper.style';
import { userState, chatState, IChat } from '../../state/userState';
import { useRecoilState } from 'recoil';
import ChatBox from '../elements/ChatBox';

// TODO: 유저 프로필 이미지 선택 시 유저 이름 변경 + 메세지 띄우기

interface IMessageList {
  username: string;
  messageTime?: string;
  text?: string;
}

const ChattingPage = () => {
  const locationState = useLocation().state;
  const divRef = useRef<HTMLDivElement>(null);

  const [username, setUsername] = useState('장영준');
  const [content, setContent] = useState<string>('');
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const [userInfos, setUserInfos] = useRecoilState(userState);
  const [chatList, setChatList] = useRecoilState(chatState);

  const chattingTarget = locationState[0].username;
  const targetChatList = chatList[locationState[0].userId];

  // const targetUserInfo = userInfos.filter((userInfo: IUserInfo) => {
  //   return userInfo.username === chattingTarget;
  // });

  // const [newChatList, setNewChatList] = useState(targetUserInfo[0].chatList);

  const scrollToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [userInfos]);

  const onHandleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    if (value) {
      setIsButtonActive(true);
    }
    setContent(value);
  };

  // const onSendButtonClick = () => {
  //   let time = `${new Date().getHours()} : ${new Date().getMinutes()}`;

  //   let tempList = newChatList;
  //   if (tempList) {
  //     tempList = [
  //       ...tempList,
  //       {
  //         username: username,
  //         messageTime: time,
  //         text: content,
  //       },
  //     ];
  //   }
  //   setContent('');
  //   setIsButtonActive(false);
  // };

  // const onEnterKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
  //   if (e.key === 'Enter') {
  //     let time = `${new Date().getHours()} : ${new Date().getMinutes()}`;
  //     let tempList = newChatList;
  //     if (tempList) {
  //       tempList = [
  //         ...tempList,
  //         {
  //           username: username,
  //           messageTime: time,
  //           text: content,
  //         },
  //       ];
  //       setNewChatList(tempList);
  //     }
  //     setContent('');
  //     setIsButtonActive(false);
  //   }
  // };

  const onClickProfileImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUsername(e.currentTarget.children[0].id);
  };

  return (
    <Container>
      <MessangerBox>
        <Header>
          <Column alignItems="center" gap="4px">
            <UserProfile
              username="장영준"
              onClick={(e: any) => onClickProfileImage(e)}
              isSelected={username === '장영준'}
            />
            <span style={{ fontSize: '12px' }}>장영준</span>
          </Column>
          <Column alignItems="center" gap="4px">
            <UserProfile
              username={chattingTarget}
              onClick={(e: any) => onClickProfileImage(e)}
              isSelected={username === chattingTarget}
            />
            <span style={{ fontSize: '12px' }}>{chattingTarget}</span>
          </Column>
        </Header>
        <TextShowArea ref={divRef}>
          {targetChatList.map((chat: IChat, index: number) => {
            return (
              <ChatBox
                key={index}
                time={chat.messageTime}
                content={chat.content}
                chatOwner={chat.username}
                selectedUser={username}
              />
            );
          })}
          {/* {userInfos.map((messageInfo: IUserInfo, index: number) => {
            <chatBox cla />
          })} */}
          {/* {messageList.map((messageInfo: any, index: any) =>
            messageInfo.username === chattingTarget ? (
              username === '장영준' ? (
                messageInfo.messageList.username !== '장영준' ? (
                  messageInfo.chatList.map((chat: any, index: any) => {
                    <UserMessage
                      key={index}
                      username={chat.username}
                      text={chat.text}
                      time={chat.messageTime}
                      marginBottom="8px"
                    />;
                  })
                ) : (
                  // <UserMessage
                  //   key={index}
                  //   username={messageInfo.chatList.username}
                  //   text={messageInfo.messageList.text}
                  //   time={messageInfo.messageList.messageTime}
                  //   marginBottom="8px"
                  // />
                  <UserMessage
                    key={index}
                    username={messageInfo.messageList.username}
                    className="opponent-text"
                    text={messageInfo.text}
                    time={messageInfo.messageList.messageTime}
                    marginBottom="8px"
                  />
                )
              ) : messageInfo.messageList.username === '장영준' ? (
                <UserMessage
                  key={index}
                  username={messageInfo.messageList.username}
                  text={messageInfo.messageList.text}
                  time={messageInfo.messageList.messageTime}
                  marginBottom="8px"
                />
              ) : (
                <UserMessage
                  key={index}
                  username={messageInfo.messageList.username}
                  className="opponent-text"
                  text={messageInfo.messageList.text}
                  time={messageInfo.messageList.messageTime}
                  marginBottom="8px"
                />
              )
            ) : (
              <div>iii</div>
            )
          )} */}
        </TextShowArea>
        {/* <InputTextArea>
          <input onKeyPress={onEnterKeyPress} onChange={(e) => onHandleInputText(e)} value={content} />
          <button onClick={onSendButtonClick} disabled={!isButtonActive}>
            전송
          </button>
        </InputTextArea> */}
      </MessangerBox>
    </Container>
  );
};

export default ChattingPage;
