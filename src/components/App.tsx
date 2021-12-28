import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
