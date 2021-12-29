import React, { useEffect } from 'react';
import { useActions } from '../../hooks/use-actions';

interface UsersListProps {}

const UsersList: React.FC<UsersListProps> = (props) => {
  const { onFetchAllUsers } = useActions();

  useEffect(() => {
    onFetchAllUsers();
  }, []);

  return <div></div>;
};

export default UsersList;
