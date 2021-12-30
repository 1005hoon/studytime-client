import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListTable from '../../components/list-table';
import { IPaginatedResult } from '../../utils/types/paginated-result.interface';
import { IUser } from '../../utils/types/user.interface';

interface UsersListProps {
  users: IUser[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const navigate = useNavigate();

  const clickHandler = (e: MouseEvent, stId: string) => {
    const url = `/users/${stId}`;
    if (e.metaKey || e.ctrlKey) {
      window.open(url, '_blank');
    } else {
      navigate(`/users/${stId}`);
    }
  };

  const renderUserLists = () =>
    users.map((user) => (
      <ListTable.Row
        key={user.stId}
        onClick={(e) => clickHandler(e, user.stId)}
      >
        <ListTable.Data>{user.nickname}</ListTable.Data>
        <ListTable.Data>{user.email}</ListTable.Data>
        <ListTable.Data>{user.stId}</ListTable.Data>
        <ListTable.Data>{user.dDayName}</ListTable.Data>
        <ListTable.Data>{user.lastLeafName}</ListTable.Data>
        <ListTable.Data>{user.isActive}</ListTable.Data>
      </ListTable.Row>
    ));
  return (
    <>
      <ListTable>
        <ListTable.Header>
          <ListTable.Row>
            <ListTable.Category width='15%'>닉네임</ListTable.Category>
            <ListTable.Category width='20%'>이메일</ListTable.Category>
            <ListTable.Category width='20%'>ST_ID</ListTable.Category>
            <ListTable.Category width='15%'>공부목적</ListTable.Category>
            <ListTable.Category width='15%'>마지막 공부목록</ListTable.Category>
            <ListTable.Category width='10%'>활동여부</ListTable.Category>
          </ListTable.Row>
        </ListTable.Header>
        <ListTable.Body>{renderUserLists()}</ListTable.Body>
      </ListTable>
    </>
  );
};

export default UsersList;
