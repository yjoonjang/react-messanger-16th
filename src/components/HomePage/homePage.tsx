import { Container, Wrapper, NavigationBar, FriendContainer } from './homePage.styled';
import ProfileIcon from '../../image/emoji/ProfileIcon';
import MessageIcon from '../../image/emoji/MessageIcon';
import SettingIcon from '../../image/emoji/SettingIcon';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';

const HomePage = () => {
  const [selectedContent, setSelectedContent] = useState<string>('profile');
  const navigate = useNavigate();

  const onClickIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
    const pathName = event.currentTarget.name;
    setSelectedContent(pathName);
    navigate(`/${pathName}`);
  };

  return (
    <Container>
      <Wrapper>
        <NavigationBar>
          <ProfileIcon name="profile" isSelected={selectedContent === 'profile'} onClickIcon={onClickIcon} />
          <MessageIcon
            name="messageRoomList"
            isSelected={selectedContent === 'messageRoomList'}
            onClickIcon={onClickIcon}
          />
          <SettingIcon name="setting" isSelected={selectedContent === 'setting'} onClickIcon={onClickIcon} />
        </NavigationBar>
        <FriendContainer>
          <Outlet />
        </FriendContainer>
      </Wrapper>
    </Container>
  );
};

export default HomePage;
