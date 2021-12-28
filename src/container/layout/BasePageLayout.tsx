import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

interface BasePageLayoutProps {}

const BasePageLayout: React.FC<BasePageLayoutProps> = (props) => {
  const navigate = useNavigate();
  const { loading, data } = useTypedSelector((state) => state.userAuth);

  const { isUserLoggedIn } = useActions();

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  useEffect(() => {
    if (!loading && data.id === 0) {
      navigate('/login');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  return (
    <div>
      <h1>홈페이지</h1>
    </div>
  );
};

export default BasePageLayout;
