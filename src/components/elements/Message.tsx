import styled from 'styled-components';
import User from './User';

interface IMessage {
  imageSrc?: string;
  username: string;
  messageList: Array<number | string>;
}

const Message = ({ imageSrc, username, messageList }: IMessage) => {
  return (
    <>
      <User imageSrc={imageSrc} isSelected={false} username={username} />
      <span>{username}</span>
    </>
  );
};

export default Message;
