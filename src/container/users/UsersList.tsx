import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../../components/avatar';
import ListTable from '../../components/list-table';
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
        <ListTable.Data>
          <Avatar nickname={user.nickname} src={user.thumbnail} />
        </ListTable.Data>
        <ListTable.Data>{user.email}</ListTable.Data>
        <ListTable.Data>{user.stId}</ListTable.Data>
        <ListTable.Data>{user.dDayName}</ListTable.Data>
        <ListTable.Data>{user.lastLeafName}</ListTable.Data>
        <ListTable.Data>
          {user.isActive === 0 ? '비활성화' : '활동중'}
        </ListTable.Data>
      </ListTable.Row>
    ));
  return (
    <>
      <ListTable>
        <ListTable.Header>
          <ListTable.Row>
            <ListTable.Category width='15%'>사용자 닉네임</ListTable.Category>
            <ListTable.Category width='15%'>이메일</ListTable.Category>
            <ListTable.Category width='15%'>ST_ID</ListTable.Category>
            <ListTable.Category width='15%'>공부목적</ListTable.Category>
            <ListTable.Category width='10%'>마지막 공부목록</ListTable.Category>
            <ListTable.Category width='8%'>활동여부</ListTable.Category>
          </ListTable.Row>
        </ListTable.Header>
        <ListTable.Body>{renderUserLists()}</ListTable.Body>
      </ListTable>
    </>
  );
};

export default UsersList;
