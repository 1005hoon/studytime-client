import React from 'react';
import LoginFormContainer from '../../container/login/LoginFormContainer';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <>
      <LoginFormContainer />
    </>
  );
};

export default LoginPage;
