import React from 'react';
import { StyledPaginationResult, StyledPaginationTotalCount } from './styles';

interface PaginationResultProps {
  first: number;
  last: number;
  count: number;
}

const PaginationResult: React.FC<PaginationResultProps> = ({
  first,
  last,
  count,
}) => {
  return (
    <StyledPaginationResult>
      showing {first} - {last} of{' '}
      <StyledPaginationTotalCount>{count}</StyledPaginationTotalCount> results
    </StyledPaginationResult>
  );
};

export default PaginationResult;
