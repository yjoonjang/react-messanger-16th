import React, { useEffect, useState } from 'react';
import { Container, MessangerBox, Header, TextShowArea, InputTextArea } from './MessangerPage.styled';
import User from '../elements/User';
import { url } from 'inspector';

interface IUser {
  name: string;
}

interface IMessageList {
  username: string;
  messageTime?: string;
  text?: string;
}

/*
messageList의 구성을 time : {name: name, message: message} 이런식으로 구현해야 하는 건가 ?
*/

const MessangerPage = () => {
  const [username, setUsername] = useState<IUser>({ name: '장영준' });
  const [messageList, setMessageList] = useState<IMessageList[]>([
    {
      username: '박명수',
      messageTime: `5월 5일`,
      text: '인천이',
    },
    {
      username: '박명수',
      messageTime: `5월 5일`,
      text: '천안보다 좋다',
    },
    {
      username: '장영준',
      messageTime: `5월 5일`,
      text: '천안분들 어떡해',
    },
    {
      username: '장영준',
      messageTime: `5월 5일`,
      text: '천안분들 닌리나게...',
    },
    {
      username: '박명수',
      messageTime: `5월 5일`,
      text: '다시 가!',
    },
  ]);
  const [text, setText] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

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
          username: username.name,
          messageTime: time,
          text: text,
        },
      ];
      setMessageList(tempList);
    }
  };

  const onClickProfileImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = e;
  };

  return (
    <Container>
      <MessangerBox>
        <Header>
          <User username="징영준" />
          <User username="박명수" onClick={onClickProfileImage} />
        </Header>
        <TextShowArea>d</TextShowArea>
        <InputTextArea>
          <input id={text} onKeyPress={onEnterKeyPress} onChange={(e) => onHandleInputText(e)} value={text} />
          <button>전송</button>
        </InputTextArea>
      </MessangerBox>
    </Container>
  );
};

export default MessangerPage;
