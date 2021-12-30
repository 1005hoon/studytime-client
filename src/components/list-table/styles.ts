import styled from 'styled-components/macro';
import { ListTableCategoryProps } from '.';

export const StyledListTable = styled.table`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-collapse: collapse;
`;

export const StyledListTableHeader = styled.thead`
  color: #657177;
`;

export const StyledCategory = styled.th<ListTableCategoryProps>`
  letter-spacing: -0.35px;
  font-weight: 300;
  padding: 17px 0;
  font-weight: 500;
  width: ${({ width }) => (width ? width : 'auto')};
  font-size: 16px;
`;

export const StyledTableBody = styled.tbody`
  tr {
    border-left: 2px solid transparent;

    &:hover {
      cursor: pointer;
      border-left: 2px solid #adde3a;
    }
  }
`;

export const StyledRow = styled.tr`
  border-bottom: 5pt solid #282b30;
`;

export const StyledData = styled.td`
  background-color: #2c3037;
  padding: 22px 0;
  font-size: 14px;
  text-align: center;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
