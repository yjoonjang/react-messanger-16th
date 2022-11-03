import { Row, Column } from '../elements/Wrapper.style';
import UserBar from '../elements/UserBar';
import { useRecoilValue } from 'recoil';
import { userState } from '../../state/userState';
// import { userInfoState } from '../../state/userState';

const ProfilePage = () => {
  const userList = useRecoilValue(userState);
  return (
    <>
      <Row width="100%" justifyContent="space-between" alignItems="start">
        <span style={{ fontWeight: '600' }}>파트짱</span>
        {/* <span>QuestionMarkIcon</span> */}
      </Row>
      <Column>
        <>
          {userList.map((user) => {
            return <UserBar key={user.userId} username={user.username} statusMessage={user.introMessage} />;
          })}
        </>
      </Column>
    </>
  );
};

export default ProfilePage;
