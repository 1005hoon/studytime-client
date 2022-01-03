import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/loading';
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
  const { onFetchAllUsers, onSearchUserWithKeyword } = useActions();
  const { loading, data, error } = useTypedSelector((state) => state.userList);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<number[]>([]);
  const [search, setSearch] = useState('');
  const location = useLocation();

  const setPagingData = (count: number, currentPage: number) => {
    const pagingData = getPagingData(count, currentPage);
    setPages(() => pagingData);
  };

  const onUserSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      onSearchUserWithKeyword(search);
    }
  };

  useEffect(() => {
    const pageNumber = +location.search.split('=')[1];

    if (!pageNumber) {
      // 페이지 1로 사용자 정보 조회
      onFetchAllUsers(currentPage, search);
    } else {
      onFetchAllUsers(pageNumber, search);
    }
  }, [location.search]);

  useEffect(() => {
    setPagingData(data.count, currentPage);
  }, [data]);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  return (
    <BasePageLayout title='사용자 관리'>
      {loading ? <Loading /> : <Loading.ReleaseBody />}
      <PageHeader title='사용자 관리'>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={searchRef}
          onKeyPress={onUserSearch}
        />
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
