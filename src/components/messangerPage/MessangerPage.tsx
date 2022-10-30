import React, { useEffect, useState, useRef, DetailedHTMLProps } from 'react';
import { Container, MessangerBox, Header, TextShowArea, InputTextArea } from './MessangerPage.styled';
import UserProfile from '../elements/UserProfile';
import { Column } from '../elements/Wrapper.style';
import UserMessage from '../elements/UserMessage';
import MessageList from '../elements/MessageList.json';
import { useRecoilState } from 'recoil';
import { userState } from '../../state/userState';
// import { IUserState } from '../../state/userState';

// TODO: 유저 프로필 이미지 선택 시 유저 이름 변경 + 메세지 띄우기

interface IMessageList {
  username: string;
  messageTime?: string;
  text?: string;
  marginBottom?: string;
}

const MessangerPage = () => {
  const [username, setUsername] = useRecoilState(userState);
  const [text, setText] = useState<string>('');
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const [messageList, setMessageList] = useState<IMessageList[]>(MessageList.MessageList);
  const divRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  const onHandleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    if (value) {
      setIsButtonActive(true);
    }
    setText(value);
  };

  const onSendButtonClick = () => {
    let time = `${new Date().getHours()} : ${new Date().getMinutes()}`;
    let tempList = messageList;
    tempList = [
      ...tempList,
      {
        username: username,
        messageTime: time,
        text: text,
      },
    ];
    setMessageList(tempList);
    setText('');
    setIsButtonActive(false);
  };

  const onEnterKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      let time = `${new Date().getHours()} : ${new Date().getMinutes()}`;
      let tempList = messageList;
      tempList = [
        ...tempList,
        {
          username: username,
          messageTime: time,
          text: text,
        },
      ];
      setMessageList(tempList);
      setText('');
      setIsButtonActive(false);
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
              username="백짱"
              onClick={(e: any) => onClickProfileImage(e)}
              isSelected={username === '백짱'}
            />
            <span style={{ fontSize: '12px' }}>백짱 </span>
          </Column>
        </Header>
        <TextShowArea ref={divRef}>
          {messageList.map((messageInfo) =>
            username === '장영준' ? (
              messageInfo.username !== '장영준' ? (
                <UserMessage
                  key={messageInfo.text}
                  username={messageInfo.username}
                  text={messageInfo.text}
                  time={messageInfo.messageTime}
                  marginBottom="8px"
                />
              ) : (
                <UserMessage
                  key={messageInfo.text}
                  username={messageInfo.username}
                  className="opponent-text"
                  text={messageInfo.text}
                  time={messageInfo.messageTime}
                  marginBottom="8px"
                />
              )
            ) : messageInfo.username === '장영준' ? (
              <UserMessage
                key={messageInfo.text}
                username={messageInfo.username}
                text={messageInfo.text}
                time={messageInfo.messageTime}
                marginBottom="8px"
              />
            ) : (
              <UserMessage
                key={messageInfo.text}
                username={messageInfo.username}
                className="opponent-text"
                text={messageInfo.text}
                time={messageInfo.messageTime}
                marginBottom="8px"
              />
            )
          )}
        </TextShowArea>
        <InputTextArea>
          <input onKeyPress={onEnterKeyPress} onChange={(e) => onHandleInputText(e)} value={text} />
          <button onClick={onSendButtonClick} disabled={!isButtonActive}>
            전송
          </button>
        </InputTextArea>
      </MessangerBox>
    </Container>
  );
};

export default MessangerPage;
