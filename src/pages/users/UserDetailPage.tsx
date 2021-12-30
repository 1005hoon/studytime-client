import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/page-header';
import PageLayout from '../../components/page-layout';
import BasePageLayout from '../../container/layout/BasePageLayout';
import UserDetailList from '../../container/users/UserDetailList';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

interface UserDetailPageProps {}

const UserDetailPage: React.FC<UserDetailPageProps> = (props) => {
  const [stId, setStId] = useState('');
  const params = useParams();
  const { onUpdateUserAdminStatus } = useActions();
  const { data, loading, error } = useTypedSelector(
    (state) => state.userDetail
  );

  const onChangeUserAdminStatus = () => {
    if (window.confirm(`${data.nickname}님 의 어드민 권한을 수정할까요?`)) {
      onUpdateUserAdminStatus(stId, data.isAdmin === 1 ? 0 : 1);
      window.location.reload();
    }
  };

  const { onSearchUserWithStId } = useActions();

  useEffect(() => {
    const userId = params.stId as string;
    setStId(() => userId);
    onSearchUserWithStId(userId);
  }, [params]);

  return (
    <BasePageLayout>
      <PageHeader title='사용자 관리' />
      <PageLayout.Content>
        <UserDetailList user={data} onClick={onChangeUserAdminStatus} />
      </PageLayout.Content>
    </BasePageLayout>
  );
};

export default UserDetailPage;
