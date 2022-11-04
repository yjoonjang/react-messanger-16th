import { Row, Column } from '../elements/Wrapper.style';
import UserBar from '../elements/UserBar';
import { useRecoilValue } from 'recoil';
import { userState } from '../../state/userState';
import SearchIcon from '../../image/emoji/SearchIcon';
import { useState } from 'react';
import { IUser } from '../../state/userState';

const ProfilePage = () => {
  const userList = useRecoilValue(userState);
  const [newUserList, setNewUserList] = useState<IUser[]>(userList);
  const [inputValue, setInputValue] = useState<string>('');
  const [isSearchIconClicked, setIsSearchIconClicked] = useState<boolean>(false);

  const onHandleInputText = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.currentTarget.value;

    setInputValue(text);
    let tempList = newUserList.filter((userList) => {
      userList.username.includes(text);
      return;
    });

    setNewUserList(tempList);
  };

  const onClickSearchIcon = () => {
    setIsSearchIconClicked(!isSearchIconClicked);
  };

  return (
    <>
      <Row width="100%" justifyContent="space-between" alignItems="start">
        <span style={{ fontWeight: '600' }}>파트짱</span>
        <SearchIcon onClick={onClickSearchIcon} />
      </Row>
      {isSearchIconClicked ? (
        <Column>
          <input onChange={onHandleInputText} style={{ width: '100%', marginBottom: '12px' }} value={inputValue} />
          <>
            {newUserList.map((user) => {
              return <UserBar key={user.userId} username={user.username} statusMessage={user.introMessage} />;
            })}
          </>
        </Column>
      ) : (
        <Column>
          <>
            {userList.map((user) => {
              return <UserBar key={user.userId} username={user.username} statusMessage={user.introMessage} />;
            })}
          </>
        </Column>
      )}
    </>
  );
};

export default ProfilePage;
