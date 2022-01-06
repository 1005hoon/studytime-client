import React from 'react';
import ListTable from '../../components/list-table';
import { IArticle } from '../../utils/types/article.interface';

interface UserArticlesListProps {
  articles: IArticle[];
}

const UserArticlesList: React.FC<UserArticlesListProps> = (props) => {
  const renderArticles = () =>
    props.articles.map((article) => (
      <ListTable.Row key={article.title}>
        <ListTable.Data>{article.categoryId}</ListTable.Data>
        <ListTable.Data>
          {article.contents.length < 50
            ? article.contents
            : `${article.contents.slice(0, 50)}...`}
        </ListTable.Data>
        <ListTable.Data>{article.createdAt}</ListTable.Data>
        <ListTable.Data>{article.isDeleted ? '게시중' : '삭제'}</ListTable.Data>
      </ListTable.Row>
    ));
  return (
    <ListTable>
      <ListTable.Header>
        <ListTable.Row>
          <ListTable.Category width='15%'>카테고리</ListTable.Category>
          <ListTable.Category width='55%'>내용</ListTable.Category>
          <ListTable.Category width='15%'>작성일</ListTable.Category>
          <ListTable.Category width='15%'>게시중</ListTable.Category>
        </ListTable.Row>
      </ListTable.Header>
      <ListTable.Body>{renderArticles()}</ListTable.Body>
    </ListTable>
  );
};

export default UserArticlesList;
