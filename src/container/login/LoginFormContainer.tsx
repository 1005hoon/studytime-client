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
  const { error, loading, data } = useTypedSelector((state) => state.userAuth);

  useEffect(() => {
    isUserLoggedIn();

    if (!loading && data.id) {
      navigate('/');
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && !data.id) {
      alert('관리자 권한이 없습니다. 담당자에게 요청 해주세요');
    }
  }, [error]);

  return (
    <LoginForm>
      <OAuthButton
        provider={LOGIN_OPTION.KAKAO}
        onClick={() => onUserLogin(LOGIN_OPTION.KAKAO)}
      />
      <OAuthButton
        provider={LOGIN_OPTION.GOOGLE}
        onClick={() => onUserLogin(LOGIN_OPTION.GOOGLE)}
      />
    </LoginForm>
  );
};

export default LoginFormContainer;
