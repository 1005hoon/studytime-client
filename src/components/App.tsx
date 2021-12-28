import { Route, Routes } from 'react-router-dom';
import BasePageLayout from '../container/layout/BasePageLayout';
import LoginPage from '../pages/login/LoginPage';
import { ROUTES } from '../utils/constants';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<BasePageLayout />}></Route>
        <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
