import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/dashboard/HomePage';
import LoginPage from '../pages/login/LoginPage';
import OAuthCallbackPage from '../pages/login/OAuthCallbackPage';
import UsersHomePage from '../pages/users/UsersHomePage';
import { ROUTES } from '../utils/constants';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />}></Route>
        <Route path={ROUTES.USERS} element={<UsersHomePage />}></Route>
        <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
        <Route path={ROUTES.OAUTH} element={<OAuthCallbackPage />} />
      </Routes>
    </>
  );
}

export default App;
