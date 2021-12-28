import { Route, Routes } from 'react-router-dom';
import BasePageLayout from '../container/layout/BasePageLayout';
import LoginPage from '../pages/login/LoginPage';
import OAuthCallbackPage from '../pages/login/OAuthCallbackPage';
import { ROUTES } from '../utils/constants';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
        <Route path={ROUTES.OAUTH} element={<OAuthCallbackPage />} />
        <Route path={ROUTES.HOME} element={<BasePageLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;
