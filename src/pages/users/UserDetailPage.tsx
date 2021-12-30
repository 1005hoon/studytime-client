import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/page-header';
import BasePageLayout from '../../container/layout/BasePageLayout';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

interface UserDetailPageProps {}

const UserDetailPage: React.FC<UserDetailPageProps> = (props) => {
  const params = useParams();
  const {} = useTypedSelector((state) => state.userDetail);
  const { onSearchUserWithStId } = useActions();

  useEffect(() => {
    onSearchUserWithStId(params.stId as string);
  }, [params]);

  return (
    <BasePageLayout>
      <PageHeader title='사용자 관리' />
    </BasePageLayout>
  );
};

export default UserDetailPage;
