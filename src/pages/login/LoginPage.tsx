import React from 'react';
import OAuthButton from '../../components/buttons/oauth-button';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <div>
      <OAuthButton provider='구글' />
      <OAuthButton provider='카카오' />
    </div>
  );
};

export default LoginPage;
