import { Row, Column } from '../elements/Wrapper.style';
import UserBar from '../elements/UserBar';
import { useRecoilValue } from 'recoil';
import { userListState } from '../../state/userState';

const ChattingPage = () => {
  const userList = useRecoilValue(userListState);
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

              return <UserBar key={index} username={user.username} introduction={lastMessage.text} />;
            }
            return;
          })}
        </>
      </Column>
    </>
  );
};

export default ChattingPage;
