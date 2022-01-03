import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OAuthButton from '../../components/buttons/oauth-button';
import LoginForm from '../../components/forms/login-form';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { LOGIN_OPTION } from '../../utils/constants';

interface LoginFormContainerProps {}

const LoginFormContainer: React.FC<LoginFormContainerProps> = (props) => {
  const { onUserLogin, isUserLoggedIn } = useActions();
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
      <OAuthButton
        provider={LOGIN_OPTION.KAKAO}
        onClick={() => onUserLogin(LOGIN_OPTION.KAKAO)}
      />
    </LoginForm>
  );
};

export default LoginFormContainer;
