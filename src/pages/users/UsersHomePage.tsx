import React from 'react';
import PageHeader from '../../components/page-header';
import BasePageLayout from '../../container/layout/BasePageLayout';
import UsersList from '../../container/users/UsersList';

interface UsersHomePageProps {}

const UsersHomePage: React.FC<UsersHomePageProps> = (props) => {
  return (
    <BasePageLayout>
      <PageHeader title='사용자 관리'></PageHeader>
      <UsersList />
    </BasePageLayout>
  );
};

export default UsersHomePage;
