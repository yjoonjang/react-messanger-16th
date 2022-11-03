import { Row, Column } from '../elements/Wrapper.style';
import UserBar from '../elements/UserBar';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../state/userState';

const ProfilePage = () => {
  const userList = useRecoilValue(userInfoState);
  return (
    <>
      <Row width="100%" justifyContent="space-between" alignItems="start">
        <span style={{ fontWeight: '600' }}>파트짱</span>
        {/* <span>QuestionMarkIcon</span> */}
      </Row>
      <Column>
        <>
          {userList.map((user, index) => {
            return <UserBar key={index} username={user.username} introduction={user.introduction} />;
          })}
        </>
      </Column>
    </>
  );
};

export default ProfilePage;
