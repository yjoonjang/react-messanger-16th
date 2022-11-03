import styled from 'styled-components';
import { Row, Column } from './Wrapper.style';

interface userBarProps {
  username: string;
  date?: string;
  introduction: string;
  value?: string;
  imageSrc?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const UserBar = ({ username, date, introduction, imageSrc, onClick, value }: userBarProps) => {
  return (
    <Wrapper onClick={onClick} value={value}>
      <Row width="100%" gap="12px">
        <ImageThumbnail>
          <img src={imageSrc} />
        </ImageThumbnail>
        <Column width="80%" gap="1px" style={{ fontWeight: '500' }}>
          <Row width="100%" justifyContent="space-between">
            <span style={{ fontSize: '16px' }}>{username}</span>
            <span style={{ fontSize: '12px', color: '#a6a3a3' }}>{date}</span>
          </Row>
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
    background-color: #f1f0f0;
  }
`;

const ImageThumbnail = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid black;
`;
