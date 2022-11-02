import { Row, Column } from '../elements/Wrapper.style';
import UserBar from '../elements/UserBar';
import { useRecoilValue } from 'recoil';
import { userListState } from '../../state/userState';
import { useNavigate } from 'react-router';

const ChattingPage = () => {
  const navigate = useNavigate();
  const userList = useRecoilValue(userListState);

  const onClickChattingRoom = (event: React.MouseEvent<HTMLButtonElement>) => {
    const username = event.currentTarget.value;
    navigate(`/messageRoom/:${username}`);
  };
  // console.log(userList[0].messageList[userList[0].messageList.length - 1]);

  return (
    <>
      <Row width="100%" justifyContent="space-between" alignItems="start">
        <span style={{ fontWeight: '600' }}>채팅</span>
      </Row>
      <Column>
        <>
          {userList.map((user, index) => {
            if (user.messageList) {
              const messageListLength = user.messageList?.length;
              const lastMessage = user.messageList[messageListLength - 1];

              return (
                <UserBar
                  key={index}
                  value={user.username}
                  username={user.username}
                  introduction={lastMessage.text}
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
