import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/page-header';
import PaginationResult from '../../components/pagination/result';
import BasePageLayout from '../../container/layout/BasePageLayout';
import UsersList from '../../container/users/UsersList';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

interface UsersHomePageProps {}

const UsersHomePage: React.FC<UsersHomePageProps> = (props) => {
  const { onFetchAllUsers } = useActions();
  const { loading, data, error } = useTypedSelector((state) => state.userList);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onFetchAllUsers();
  }, []);

  return (
    <BasePageLayout title='사용자 관리'>
      <PaginationResult
        first={data.first}
        last={data.last}
        count={data.count}
      />
      <UsersList users={data.data} />
    </BasePageLayout>
  );
};

export default UsersHomePage;
