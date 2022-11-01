// import MessangerPage from './components/messangerPage/MessangerPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import ProfilePage from './components/profilePage/ProfilePage';
import ChattingPage from './components/chattingPage/ChattingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="messageRoomList" element={<ChattingPage />} />
          <Route path="setting" element={<ChattingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
