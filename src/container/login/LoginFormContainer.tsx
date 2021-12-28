import React from 'react';
import OAuthButton from '../../components/buttons/oauth-button';
import LoginForm from '../../components/forms/login-form';

interface LoginFormContainerProps {}

const LoginFormContainer: React.FC<LoginFormContainerProps> = (props) => {
  return (
    <LoginForm>
      <OAuthButton provider='카카오' />
      <OAuthButton provider='구글' />
    </LoginForm>
  );
};

export default LoginFormContainer;
