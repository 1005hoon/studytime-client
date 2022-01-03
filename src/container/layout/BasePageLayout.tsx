import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/loading';
import Navbar from '../../components/navbar';
import PageLayout from '../../components/page-layout';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import SidebarContainer from './SidebarContainer';

interface BasePageLayoutProps {
  title?: string;
  search?: React.FC;
}

const BasePageLayout: React.FC<BasePageLayoutProps> = (props) => {
  const navigate = useNavigate();
  const { loading, data, error } = useTypedSelector((state) => state.userAuth);
  const { isUserLoggedIn } = useActions();

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  useEffect(() => {
    if (!loading && data.id === 0) {
      alert(error);
      navigate('/login');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  return (
    <PageLayout>
      <SidebarContainer />
      <Navbar />
      {loading ? <Loading /> : <Loading.ReleaseBody />}
      {props.children}
    </PageLayout>
  );
};

export default BasePageLayout;
