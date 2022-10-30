import styled from 'styled-components';
import { Row, Column } from '../../elements/Wrapper.style';

interface userBarProps {
  username: string;
  introduction: string;
  imageSrc?: string;
}

const UserBar = ({ username, introduction, imageSrc }: userBarProps) => {
  return (
    <Wrapper>
      <Row gap="12px">
        <ImageThumbnail />
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
  /* background-color: red; */
  display: flex;
  align-items: center;

  &:hover {
    width: 200%;
    overflow-x: visible;
    background-color: #f1f0f0;
  }
`;

const ImageThumbnail = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid black;
`;
