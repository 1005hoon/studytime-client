import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

interface OAuthCallbackPageProps {}

const OAuthCallbackPage: React.FC<OAuthCallbackPageProps> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, loading, error } = useTypedSelector((state) => state.userAuth);
  const { onUserAuthChange } = useActions();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code') as string;
    onUserAuthChange(code);
  }, []);

  useEffect(() => {
    if (!loading && data.id !== 0) {
      navigate('/');
    } else if (!loading && error) {
      navigate('/login');
    }
  }, [data.id, error]);

  return <div></div>;
};

export default OAuthCallbackPage;
