import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 97vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessangerBox = styled.div`
  width: 30vw;
  height: 90%;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 5px 5px 5px gray;
`;

export const Header = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 15%;
  /* background-color: aqua; */
  padding: 20px;
`;

export const TextShowArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 65%;
  background-color: #ff5a0080;
  padding: 20px;
  overflow-y: scroll;

  & .opponent-text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const InputTextArea = styled.div.attrs<{ isButtonActive: boolean }>((props) => ({
  isButtonActive: props.isButtonActive,
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  /* background-color: blue; */
  padding: 12px;
  gap: 20px;

  input {
    width: 70%;
    height: 100%;
    border: none;
    /* background-color: red; */
    padding-left: 12px;
    vertical-align: top;
  }

  button {
    height: 100%;
    width: 25%;
    padding: 10px;
    background-color: #f9e000;

    &:disabled {
      background-color: #ffe68e;
    }
  }
`;
