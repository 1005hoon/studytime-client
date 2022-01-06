import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/page-header';
import PageLayout from '../../components/page-layout';
import BasePageLayout from '../../container/layout/BasePageLayout';
import UserArticlesList from '../../container/users/UserArticlesList';
import UserDetailList from '../../container/users/UserDetailList';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { isAdmin } from '../../utils/constants';

interface UserDetailPageProps {}

const UserDetailPage: React.FC<UserDetailPageProps> = (props) => {
  const [stId, setStId] = useState('');
  const params = useParams();
  const { onUpdateUserAdminStatus } = useActions();
  const { data, loading, error } = useTypedSelector(
    (state) => state.userDetail
  );

  const onChangeUserAdminStatus = () => {
    if (
      window.confirm(
        `${data.nickname}님 의 어드민 권한을 ${
          isAdmin(data.isAdmin) ? '관리자' : '사용자'
        }로 수정할까요?`
      )
    ) {
      onUpdateUserAdminStatus(stId, isAdmin(data.isAdmin) ? 0 : 1);
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
      <PageHeader title={`${data.nickname} 님 정보 관리`} />
      <PageLayout.Content>
        <PageLayout.Row>
          <UserDetailList user={data} onClick={onChangeUserAdminStatus} />
        </PageLayout.Row>
        <PageLayout.Row>
          <PageLayout.Column title='최근 작성한 글'>
            <UserArticlesList />
          </PageLayout.Column>
          <PageLayout.Column title='최근 작성한 글'>
            <UserArticlesList />
          </PageLayout.Column>
        </PageLayout.Row>
      </PageLayout.Content>
    </BasePageLayout>
  );
};

export default UserDetailPage;
