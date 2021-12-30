import React from 'react';
import {
  StyledPageItem,
  StyledPageLink,
  StyledPaginationContainer,
  StyledPaging,
} from './styles';

interface PagingProps {}
interface PagingComposition {
  Page: React.FC<PagingPageProps>;
}

const Paging: React.FC<PagingProps> & PagingComposition = (props) => {
  return (
    <StyledPaginationContainer>
      <StyledPaging>{props.children}</StyledPaging>
    </StyledPaginationContainer>
  );
};

export interface PagingPageProps {
  to: string;
  paginate: (page: number) => void;
  page: number;
  isActive: boolean;
}
Paging.Page = function PagingPage(props) {
  return (
    <StyledPageLink to={props.to} onClick={() => props.paginate(props.page)}>
      <StyledPageItem isActive={props.isActive}>
        {props.children}
      </StyledPageItem>
    </StyledPageLink>
  );
};

export default Paging;
