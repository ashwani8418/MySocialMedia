import HomePage from 'Pages/homePage';
import LoginPage from 'Pages/loginPage';
import ProfilePage from 'Pages/profilePage';
import{ BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

function App() {
  return <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
