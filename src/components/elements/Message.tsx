import styled from 'styled-components';
import User from './User';
import { Row, Column } from './Wrapper.style';

interface IMessage {
  imageSrc?: string;
  username: string;
  text: string | undefined;
  time: string | undefined;
  marginBottom?: string;
  ref?: any;
}

const TextArea = styled.div`
  padding: 4px 8px;
  background-color: #efefef;
  border-radius: 10px;
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

const Message = ({ imageSrc, username, text, time, marginBottom, ref }: IMessage) => {
  return (
    <div ref={ref}>
      <Row gap="4px" marginBottom={marginBottom}>
        <UserThumbnail>
          <img src={imageSrc} alt="프로필 사진" id={username} />
        </UserThumbnail>
        <Column gap="3px" justifyContent="center">
          <span style={{ fontSize: '4px' }}>{username}</span>
          <Row alignItems="end" gap="8px">
            <TextArea>{text}</TextArea>
            <span style={{ fontSize: '12px' }}>{time}</span>
          </Row>
        </Column>
      </Row>
    </div>
  );
};

export default Message;
