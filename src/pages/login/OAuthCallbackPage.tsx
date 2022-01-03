import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/loading';
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
    if (!loading && error) {
      alert(error);
      navigate('/login');
    }

    if (!loading && data.id) {
      navigate('/');
    }
  }, [loading, data, error]);
  return <div>{loading ? <Loading /> : <Loading.ReleaseBody />}</div>;
};

export default OAuthCallbackPage;
