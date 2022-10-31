import { Container, Wrapper, NavigationBar, FriendContainer } from './homePage.styled';
import { Row, Column } from '../elements/Wrapper.style';
import ProfileIcon from '../../image/emoji/ProfileIcon';
import MessageIcon from '../../image/emoji/MessageIcon';
import SettingIcon from '../../image/emoji/SettingIcon';
import UserBar from './components/UserBar';
import React, { useState } from 'react';

const HomePage = () => {
  const [selectedContent, setSelectedContent] = useState<string>('profile');

  const onClickIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedContent(event.currentTarget.name);
  };

  return (
    <Container>
      <Wrapper>
        <NavigationBar>
          <ProfileIcon name="profile" onClickIcon={onClickIcon} isSelected={selectedContent === 'profile'} />
          <MessageIcon name="messageRoom" onClickIcon={onClickIcon} isSelected={selectedContent === 'messageRoom'} />
          <SettingIcon name="setting" onClickIcon={onClickIcon} isSelected={selectedContent === 'setting'} />
        </NavigationBar>
        {selectedContent === 'profile' ? (
          <FriendContainer>
            <Row width="100%" justifyContent="space-between" alignItems="start">
              <span style={{ fontWeight: '600' }}>파트짱</span>
              {/* <button>QuestionMark</button> */}
            </Row>
            {/* <hr /> */}
            <Column>
              <UserBar username="프짱" introduction="프론트가 미래다!" />
              <UserBar username="백짱" introduction="백엔드가 미래다!" />
              <UserBar username="기획짱" introduction="기획이 미래다!" />
              <UserBar username="디자인짱" introduction="디자인이 미래다!" />
            </Column>
          </FriendContainer>
        ) : (
          <></>
        )}
      </Wrapper>
    </Container>
  );
};

export default HomePage;
