import { Row, Column } from '../elements/Wrapper.style';
import UserBar from '../elements/UserBar';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../state/userState';
import { useNavigate } from 'react-router';

const ChattingPage = () => {
  const navigate = useNavigate();
  const userList = useRecoilValue(userInfoState);

  const onClickChattingRoom = (event: React.MouseEvent<HTMLButtonElement>) => {
    const username = event.currentTarget.value;
    const userinfo = userList.filter((userInfo) => userInfo.username === username);
    navigate(`/messageRoom/:${username}`, { state: userinfo });
  };

  return (
    <>
      <Row width="100%" justifyContent="space-between" alignItems="start">
        <span style={{ fontWeight: '600' }}>채팅</span>
      </Row>
      <Column>
        <>
          {userList.map((user, index) => {
            if (user.chatList) {
              const messageListLength = user.chatList?.length;
              const lastMessage = user.chatList[messageListLength - 1];

              return (
                <UserBar
                  key={index}
                  value={user.username}
                  username={user.username}
                  introduction={lastMessage.text}
                  date={lastMessage.messageTime}
                  onClick={onClickChattingRoom}
                />
              );
            }
            return;
          })}
        </>
      </Column>
    </>
  );
};

export default ChattingPage;
