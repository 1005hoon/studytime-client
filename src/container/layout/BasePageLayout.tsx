import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar';
import PageHeader from '../../components/page-header';
import PageLayout from '../../components/page-layout';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import SidebarContainer from './SidebarContainer';

interface BasePageLayoutProps {
  title?: string;
}

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
    <PageLayout>
      <SidebarContainer />
      <Navbar />
      {props.title && <PageHeader title={props.title} />}
      <PageLayout.Content>{props.children}</PageLayout.Content>
    </PageLayout>
  );
};

export default BasePageLayout;
