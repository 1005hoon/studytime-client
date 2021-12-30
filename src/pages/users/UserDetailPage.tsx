import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/page-header';
import BasePageLayout from '../../container/layout/BasePageLayout';

interface UserDetailPageProps {}

const UserDetailPage: React.FC<UserDetailPageProps> = (props) => {
  const params = useParams();

  useEffect(() => {}, [params]);

  return (
    <BasePageLayout>
      <PageHeader title='사용자 관리' />
    </BasePageLayout>
  );
};

export default UserDetailPage;
