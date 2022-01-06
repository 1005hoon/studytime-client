import React from 'react';
import Avatar from '../../components/avatar';
import ListTable from '../../components/list-table';
import { IUser } from '../../utils/types/user.interface';

interface UserDetailListProps {
  user: IUser;
  onClick: () => void;
}

const UserDetailList: React.FC<UserDetailListProps> = ({ user, onClick }) => {
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
            <ListTable.Category width='10%'>관리자</ListTable.Category>
          </ListTable.Row>
        </ListTable.Header>
        <ListTable.Body>
          <ListTable.Row key={user.stId} onClick={onClick}>
            <ListTable.Data>
              <Avatar src={user.thumbnail} nickname={user.nickname} />
            </ListTable.Data>
            <ListTable.Data>{user.email}</ListTable.Data>
            <ListTable.Data>{user.stId}</ListTable.Data>
            <ListTable.Data>{user.dDayName}</ListTable.Data>
            <ListTable.Data>{user.lastLeafName}</ListTable.Data>
            <ListTable.Data>
              {user.isActive === 0 ? '비활성화' : '활동중'}
            </ListTable.Data>
            <ListTable.Data>{user.isAdmin === 0 ? 'X' : 'O'}</ListTable.Data>
          </ListTable.Row>
        </ListTable.Body>
      </ListTable>
    </>
  );
};

export default UserDetailList;
