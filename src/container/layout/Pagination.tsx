import React from 'react';
import Paging from '../../components/pagination/paging';

interface PaginationProps {
  currentPage: number;
  pages: number[];
  paginate: (page: number) => void;
  route: string;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  console.log(props);

  const renderPages = () =>
    props.pages.map((page) => (
      <Paging.Page
        key={page}
        to={`/${props.route}?pages=${page}`}
        page={page}
        paginate={(page) => props.paginate(page)}
        isActive={page === props.currentPage}
      >
        {page}
      </Paging.Page>
    ));

  return <Paging>{renderPages()}</Paging>;
};

export default Pagination;
