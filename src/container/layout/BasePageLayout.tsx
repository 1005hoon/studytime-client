import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/use-typed-selector';

interface BasePageLayoutProps {}

const BasePageLayout: React.FC<BasePageLayoutProps> = (props) => {
  const navigate = useNavigate();
  const { loading, data, error } = useTypedSelector((state) => state.userAuth);

  useEffect(() => {
    if (!loading && data.id === 0) {
      navigate('/login');
    }
  }, [data, loading]);

  return (
    <div>
      <h1>홈페이지</h1>
    </div>
  );
};

export default BasePageLayout;
