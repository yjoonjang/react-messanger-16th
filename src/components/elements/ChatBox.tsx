import styled from 'styled-components';
import { Row, Column } from './Wrapper.style';

interface chatBoxProps {
  className?: string;
  marginBottom?: string;
  imageSrc?: string;
  time: string;
  content: string;
  chatOwner: string;
  // chattingTarget: string;
  selectedUser: string;
}

const ChatBox = ({ className, marginBottom, imageSrc, time, content, chatOwner, selectedUser }: chatBoxProps) => {
  return (
    <>
      {selectedUser !== chatOwner ? (
        <div className={className}>
          <Row gap="4px" marginBottom="8px">
            <UserThumbnail>
              <img src={imageSrc} alt="프로필 사진" id={chatOwner} />
            </UserThumbnail>
            <Column gap="3px" justifyContent="center">
              <span style={{ fontSize: '4px' }}>{chatOwner}</span>
              <Row alignItems="end" gap="8px">
                <TextArea>{content}</TextArea>
                <span style={{ fontSize: '11px' }}>{time}</span>
              </Row>
            </Column>
          </Row>
        </div>
      ) : (
        <div className={className}>
          <Row gap="4px" marginBottom="8px">
            <Column gap="3px" justifyContent="center" alignItems="flex-end">
              <span style={{ fontSize: '4px' }}>{chatOwner}</span>
              <Row alignItems="end" gap="8px">
                <span style={{ fontSize: '11px' }}>{time}</span>
                <TextArea>{content}</TextArea>
              </Row>
            </Column>
            <UserThumbnail>
              <img src={imageSrc} alt="프로필 사진" id={chatOwner} />
            </UserThumbnail>
          </Row>
        </div>
      )}
    </>
  );
};

export default ChatBox;

/*
로그인된 유저
채팅 타겟
선택된 사람

초기: 로그인된 유저와 채팅 타겟의 채팅
if 선택된 사람 == 로그인된 유저 {

}
*/

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
