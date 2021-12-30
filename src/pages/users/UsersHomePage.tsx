import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../../components/page-header';
import PageLayout from '../../components/page-layout';
import PaginationResult from '../../components/pagination/result';
import SearchInput from '../../components/search-input';
import BasePageLayout from '../../container/layout/BasePageLayout';
import Pagination from '../../container/layout/Pagination';
import UsersList from '../../container/users/UsersList';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { getPagingData } from '../../utils/get-paging-data';

interface UsersHomePageProps {}

const UsersHomePage: React.FC<UsersHomePageProps> = (props) => {
  const { onFetchAllUsers } = useActions();
  const { loading, data, error } = useTypedSelector((state) => state.userList);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<number[]>([]);
  const location = useLocation();

  const setPagingData = (count: number, currentPage: number) => {
    const pagingData = getPagingData(count, currentPage);
    setPages(() => pagingData);
  };

  useEffect(() => {
    const pageNumber = +location.search.split('=')[1];

    if (!pageNumber) {
      // 페이지 1로 사용자 정보 조회
      onFetchAllUsers(currentPage);
    } else {
      onFetchAllUsers(pageNumber);
    }
  }, [location.search]);

  useEffect(() => {
    setPagingData(data.count, currentPage);
  }, [data]);

  return (
    <BasePageLayout title='사용자 관리' search={SearchInput}>
      <PageHeader title='사용자 관리'>
        <SearchInput />
      </PageHeader>
      <PageLayout.Content>
        <PaginationResult
          first={data.first}
          last={data.last}
          count={data.count}
        />
        <UsersList users={data.data} />
        <Pagination
          route='users'
          currentPage={currentPage}
          paginate={setCurrentPage}
          pages={pages}
        />
      </PageLayout.Content>
    </BasePageLayout>
  );
};

export default UsersHomePage;
