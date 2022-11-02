import styled from 'styled-components';
import { Row, Column } from './Wrapper.style';

interface userBarProps {
  username: string;
  introduction: string;
  value?: string;
  imageSrc?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const UserBar = ({ username, introduction, imageSrc, onClick, value }: userBarProps) => {
  return (
    <Wrapper onClick={onClick} value={value}>
      <Row gap="12px">
        <ImageThumbnail>
          <img src={imageSrc} />
        </ImageThumbnail>
        <Column style={{ fontWeight: '500' }}>
          <span style={{ fontSize: '16px' }}>{username}</span>
          <span style={{ fontSize: '12px', color: '#7b7878' }}>{introduction}</span>
        </Column>
      </Row>
    </Wrapper>
  );
};

export default UserBar;

const Wrapper = styled.button`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;

  &:hover {
    width: 1000%;
    background-color: #f1f0f0;
  }
`;

const ImageThumbnail = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid black;
`;
