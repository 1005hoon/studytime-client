import React from 'react';
import ListTable from '../../components/list-table';

interface UserArticlesListProps {}

const UserArticlesList: React.FC<UserArticlesListProps> = (props) => {
  return (
    <ListTable>
      <ListTable.Header>
        <ListTable.Row>
          <ListTable.Category width='15%'>제목</ListTable.Category>
          <ListTable.Category width='55%'>내용</ListTable.Category>
          <ListTable.Category width='15%'>작성일</ListTable.Category>
          <ListTable.Category width='15%'>게시중</ListTable.Category>
        </ListTable.Row>
      </ListTable.Header>
    </ListTable>
  );
};

export default UserArticlesList;
