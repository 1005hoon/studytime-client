import React from 'react';
import PageHeader from '../../components/page-header';
import BasePageLayout from '../../container/layout/BasePageLayout';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <BasePageLayout>
      <PageHeader title='대시보드'></PageHeader>
      <h1>구현중</h1>
    </BasePageLayout>
  );
};

export default HomePage;
