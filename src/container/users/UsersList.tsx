import React, { useEffect } from 'react';
import PaginationResult from '../../components/pagination/result';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

interface UsersListProps {}

const UsersList: React.FC<UsersListProps> = (props) => {
  const { onFetchAllUsers } = useActions();
  const { loading, data, error } = useTypedSelector((state) => state.userList);

  useEffect(() => {
    onFetchAllUsers();
  }, []);

  return (
    <div>
      <PaginationResult
        first={data.first}
        last={data.last}
        count={data.count}
      />
    </div>
  );
};

export default UsersList;
