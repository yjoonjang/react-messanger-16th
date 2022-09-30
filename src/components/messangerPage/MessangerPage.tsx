import React, { useEffect, useState, useRef } from 'react';
import { Container, MessangerBox, Header, TextShowArea, InputTextArea } from './MessangerPage.styled';
import UserProfile from '../elements/UserProfile';
import { Column } from '../elements/Wrapper.style';
import UserMessage from '../elements/UserMessage';
import { MessageListJSON } from '../elements/Json';
import { useRecoilState } from 'recoil';
import { userState } from '../../state/userState';

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
  const [messageList, setMessageList] = useState<IMessageList[]>(MessageListJSON);
  const divRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
      console.log('hi');
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  const onHandleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setText(value);
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
              username="박명수"
              onClick={(e: any) => onClickProfileImage(e)}
              isSelected={username === '박명수'}
            />
            <span style={{ fontSize: '12px' }}>박명수</span>
          </Column>
        </Header>
        <TextShowArea>
          {messageList.map((messageInfo) =>
            username === '장영준' ? (
              messageInfo.username === '장영준' ? (
                <UserMessage
                  key={messageInfo.text}
                  username={messageInfo.username}
                  text={messageInfo.text}
                  time={messageInfo.messageTime}
                  marginBottom="8px"
                  // ref={divRef}
                />
              ) : (
                <UserMessage
                  key={messageInfo.text}
                  username="박명수"
                  text={messageInfo.text}
                  time={messageInfo.messageTime}
                  marginBottom="8px"
                  // ref={divRef}
                />
              )
            ) : (
              <></>
            )
          )}
        </TextShowArea>
        <InputTextArea>
          <input onKeyPress={onEnterKeyPress} onChange={(e) => onHandleInputText(e)} value={text} />
          <button>전송</button>
        </InputTextArea>
      </MessangerBox>
    </Container>
  );
};

export default MessangerPage;
