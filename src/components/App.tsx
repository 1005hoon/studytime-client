import { Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';
import HomePage from '../pages/dashboard/HomePage';
import LoginPage from '../pages/login/LoginPage';
import OAuthCallbackPage from '../pages/login/OAuthCallbackPage';
import UserDetailPage from '../pages/users/UserDetailPage';
import UsersHomePage from '../pages/users/UsersHomePage';
import EventsHome from '../pages/events/EventsHome';
import { ROUTES } from '../utils/constants';
import EventDetailPage from '../pages/events/EventDetailPage';
import PopupHome from '../pages/popups/PopupHome';

function App() {
  Modal.setAppElement('#modal');

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />}></Route>
      <Route path={ROUTES.USERS} element={<UsersHomePage />}></Route>
      <Route path={ROUTES.USERS_DETAIL} element={<UserDetailPage />}></Route>
      <Route path={ROUTES.EVENTS} element={<EventsHome />}></Route>
      <Route path={ROUTES.EVENTS_DETAIL} element={<EventDetailPage />}></Route>
      <Route path={ROUTES.POPUPS} element={<PopupHome />}></Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
      <Route path={ROUTES.OAUTH} element={<OAuthCallbackPage />} />
    </Routes>
  );
}

export default App;
