import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 400px;
  height: 700px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 40px 0px;
  width: 18%;
  background-color: #efefef;
`;

export const FriendContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  font-size: 20px;
  gap: 20px;

  hr {
    width: 100%;
    border: 0.5px solid rgb(150, 150, 150);
  }
`;
