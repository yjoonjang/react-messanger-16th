import React, { useEffect, useState } from 'react';
import { Container, MessangerBox, Header, TextShowArea, InputTextArea } from './MessangerPage.styled';
import User from '../elements/User';
import { Column } from '../elements/Wrapper.style';

// TODO: 유저 프로필 이미지 선택 시 유저 이름 변경 + 메세지 띄우기

interface IMessageList {
  username: string;
  messageTime?: string;
  text?: string;
}

const MessangerPage = () => {
  const [username, setUsername] = useState<string>('장영준');
  const [text, setText] = useState('');
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
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
        <TextShowArea>d</TextShowArea>
        <InputTextArea>
          <input onKeyPress={onEnterKeyPress} onChange={(e) => onHandleInputText(e)} />
          <button>전송</button>
        </InputTextArea>
      </MessangerBox>
    </Container>
  );
};

export default MessangerPage;
