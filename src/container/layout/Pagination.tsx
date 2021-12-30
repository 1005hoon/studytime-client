import React from 'react';
import Paging from '../../components/pagination/paging';

interface PaginationProps {
  first: number;
  last: number;
  limit: number;
  count: number;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const currentPage = Math.trunc((props.first + 9) / 10);
  const pageRange = currentPage / 10 - 1;

  const onClickPreviousPage = () => {};
  const onClickNextPage = () => {};
  const onChangePage = () => {};

  return <Paging></Paging>;
};

export default Pagination;
