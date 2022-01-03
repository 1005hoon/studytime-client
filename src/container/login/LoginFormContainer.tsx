import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import OAuthButton from '../../components/buttons/oauth-button';
import LoginForm from '../../components/forms/login-form';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { LOGIN_OPTION } from '../../utils/constants';

interface LoginFormContainerProps {}

const LoginFormContainer: React.FC<LoginFormContainerProps> = (props) => {
  const { onKakaoLogin, isUserLoggedIn, onGoogleLogin } = useActions();
  const navigate = useNavigate();
  const { loading, data } = useTypedSelector((state) => state.userAuth);

  useEffect(() => {
    isUserLoggedIn();
    if (!loading && data.id !== 0) {
      navigate('/');
    }
  }, [data]);

  return (
    <LoginForm>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
        buttonText='Log in'
        onSuccess={onGoogleLogin}
        onFailure={onGoogleLogin}
        render={(renderProps) => (
          <OAuthButton
            provider={LOGIN_OPTION.GOOGLE}
            onClick={renderProps.onClick}
          />
        )}
      />

      <OAuthButton
        provider={LOGIN_OPTION.KAKAO}
        onClick={() => onKakaoLogin()}
      />
    </LoginForm>
  );
};

export default LoginFormContainer;
