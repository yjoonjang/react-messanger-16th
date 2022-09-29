import React, { useEffect, useState, useRef } from 'react';
import { Container, MessangerBox, Header, TextShowArea, InputTextArea } from './MessangerPage.styled';
import User from '../elements/User';
import { Column } from '../elements/Wrapper.style';
import Message from '../elements/Message';
import { MessageListJSON } from '../elements/Json';

// TODO: 유저 프로필 이미지 선택 시 유저 이름 변경 + 메세지 띄우기

interface IMessageList {
  username: string;
  messageTime?: string;
  text?: string;
  marginBottom?: string;
}

const MessangerPage = () => {
  const [username, setUsername] = useState<string>('장영준');
  const [text, setText] = useState('');
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const [messageList, setMessageList] = useState<IMessageList[]>(MessageListJSON);
  const divRef = useRef<HTMLUListElement>(null);

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
            <User username="장영준" onClick={(e: any) => onClickProfileImage(e)} isSelected={username === '장영준'} />
            <span style={{ fontSize: '12px' }}>장영준</span>
          </Column>
          <Column alignItems="center" gap="4px">
            <User username="박명수" onClick={(e: any) => onClickProfileImage(e)} isSelected={username === '박명수'} />
            <span style={{ fontSize: '12px' }}>박명수</span>
          </Column>
        </Header>
        <TextShowArea>
          {messageList.map((messageInfo) =>
            messageInfo.username === '장영준' ? (
              <Message
                key={messageInfo.text}
                username="장영준"
                text={messageInfo.text}
                time={messageInfo.messageTime}
                marginBottom="8px"
                ref={divRef}
              />
            ) : (
              <Message
                key={messageInfo.text}
                username="박명수"
                text={messageInfo.text}
                time={messageInfo.messageTime}
                marginBottom="8px"
                ref={divRef}
              />
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
