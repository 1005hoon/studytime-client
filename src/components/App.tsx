import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/dashboard/HomePage';
import LoginPage from '../pages/login/LoginPage';
import OAuthCallbackPage from '../pages/login/OAuthCallbackPage';
import UserDetailPage from '../pages/users/UserDetailPage';
import UsersHomePage from '../pages/users/UsersHomePage';
import EventsHome from '../pages/events/EventsHome';
import { ROUTES } from '../utils/constants';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />}></Route>
      <Route path={ROUTES.USERS} element={<UsersHomePage />}></Route>
      <Route path={ROUTES.USERS_DETAIL} element={<UserDetailPage />}></Route>
      <Route path={ROUTES.EVENTS} element={<EventsHome />}></Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
      <Route path={ROUTES.OAUTH} element={<OAuthCallbackPage />} />
    </Routes>
  );
}

export default App;
