import styled from 'styled-components';
import User from './User';
import { Row, Column } from './Wrapper.style';

interface IMessage {
  imageSrc?: string;
  username: string;
  text: string | undefined;
  time: string | undefined;
}

const TextArea = styled.div`
  padding: 12px 4px;
  background-color: gray;
`;

const UserThumbnail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  background-color: black;
`;

const Message = ({ imageSrc, username, text, time }: IMessage) => {
  return (
    <Row gap="4px">
      <UserThumbnail>
        <img src={imageSrc} alt="프로필 사진" id={username} />
      </UserThumbnail>
      <Column>
        <span>{username}</span>
        <Row>
          <TextArea>{text}</TextArea>
          <span>{time}</span>
        </Row>
      </Column>
    </Row>
  );
};

export default Message;
