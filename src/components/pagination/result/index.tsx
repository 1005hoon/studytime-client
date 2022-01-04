import React from 'react';
import { StyledPaginationResult, StyledPaginationTotalCount } from './styles';

interface PaginationResultProps {
  first: number;
  last: number;
  count: number;
  loading?: boolean;
}

const PaginationResult: React.FC<PaginationResultProps> = ({
  first,
  last,
  count,
  loading,
}) => {
  return (
    <StyledPaginationResult>
      {loading ? (
        '데이터를 조회중입니다'
      ) : (
        <>
          showing {first} - {last} of{' '}
          <StyledPaginationTotalCount>{count}</StyledPaginationTotalCount>{' '}
          results
        </>
      )}
    </StyledPaginationResult>
  );
};

export default PaginationResult;
