// import MessangerPage from './components/messangerPage/MessangerPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import ProfilePage from './components/profilePage/ProfilePage';
import ChattingPage from './components/chattingPage/ChattingPage';
import SettingPage from './components/settingPage/settingPage';
import MessangerPage from './components/messangerPage/MessangerPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="messageRoomList" element={<ChattingPage />} />
          <Route path="setting" element={<SettingPage />} />
        </Route>
        <Route path="messageRoom/:username" element={<MessangerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
