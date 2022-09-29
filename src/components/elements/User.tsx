import styled from 'styled-components';

interface IUser {
  imageSrc?: string;
  onClick?: (e: any) => any;
  username: string;
  isSelected: boolean;
}

const UserThumbnail = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  /* border: 2px solid red; */
  background-color: ${(props) => (props.isSelected ? '#242424' : 'transparent')};

  cursor: pointer;
`;

const User = ({ onClick, imageSrc, username, isSelected }: IUser) => {
  return (
    <UserThumbnail onClick={onClick} isSelected={isSelected}>
      <img src={imageSrc} alt="프로필 사진" id={username} />
    </UserThumbnail>
  );
};

export default User;
