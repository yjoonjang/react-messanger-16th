import styled from 'styled-components';
import { Column } from './Wrapper.style';

interface IUser {
  imageSrc?: string;
  onClick?: Function;
  username: string;
}

const UserThumbnail = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid red;

  cursor: pointer;
`;

const Username = styled.div`
  font-size: 11px;
`;

const User = ({ onClick, imageSrc, username }: IUser) => {
  return (
    <Column alignItems="center" gap="4px">
      <UserThumbnail>
        <img src={imageSrc} alt="프로필 사진" />
      </UserThumbnail>
      <Username>{username}</Username>
    </Column>
  );
};

export default User;
