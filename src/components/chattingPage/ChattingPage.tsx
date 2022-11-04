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

  const targetUsername = locationState[0].username;
  const targetUserId = locationState[0].userId;
  const [targetChatList, setTargetChatList] = useState(chatList[targetUserId]);

  const scrollToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [targetChatList]);

  useEffect(() => {
    setTargetChatList(chatList[targetUserId]);
  }, [chatList]);

  const onHandleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    if (value) {
      setIsButtonActive(true);
    }
    setContent(value);
  };

  const updateChatList = () => {
    let time = `${new Date().getHours()} : ${new Date().getMinutes()}`;

    let tempList = targetChatList;
    tempList = [
      ...tempList,
      {
        username: username,
        messageTime: time,
        content: content,
      },
    ];

    setChatList(() => {
      let tempList = chatList[targetUserId];

      tempList = [
        ...tempList,
        {
          username: username,
          messageTime: time,
          content: content,
        },
      ];

      return { ...chatList, [targetUserId]: tempList };
    });

    setContent('');
    setIsButtonActive(false);
  };

  const onEnterKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      updateChatList();
    }
  };

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
              username={targetUsername}
              onClick={(e: any) => onClickProfileImage(e)}
              isSelected={username === targetUsername}
            />
            <span style={{ fontSize: '12px' }}>{targetUsername}</span>
          </Column>
        </Header>

        <TextShowArea ref={divRef}>
          {targetChatList.map((chat: IChat, index: number) => {
            if (chat.username === username) {
              return (
                <ChatBox
                  key={index}
                  className="opponent-text"
                  time={chat.messageTime}
                  content={chat.content}
                  chatOwner={chat.username}
                  selectedUser={username}
                />
              );
            } else {
              return (
                <ChatBox
                  key={index}
                  time={chat.messageTime}
                  content={chat.content}
                  chatOwner={chat.username}
                  selectedUser={username}
                />
              );
            }
          })}
        </TextShowArea>
        <InputTextArea>
          <input onKeyPress={onEnterKeyPress} onChange={(e) => onHandleInputText(e)} value={content} />
          <button onClick={updateChatList} disabled={!isButtonActive}>
            전송
          </button>
        </InputTextArea>
      </MessangerBox>
    </Container>
  );
};

export default ChattingPage;
