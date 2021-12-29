import React, { useEffect } from 'react';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

interface UsersListProps {}

const UsersList: React.FC<UsersListProps> = (props) => {
  const { onFetchAllUsers } = useActions();
  const { loading, data, error } = useTypedSelector((state) => state.userList);
  useEffect(() => {
    onFetchAllUsers();
  }, []);

  return <div></div>;
};

export default UsersList;
