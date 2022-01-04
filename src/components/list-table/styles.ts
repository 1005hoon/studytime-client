import styled from 'styled-components/macro';
import { ListTableCategoryProps } from '.';

export const StyledListTableContainer = styled.div`
  display: table;
  width: 100%;
  min-height: 770px;
`;

export const StyledListTable = styled.table`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-collapse: separate;
  border-spacing: 0 10px;
`;

export const StyledListTableHeader = styled.thead`
  color: #657177;
  line-height: 5px;
`;

export const StyledCategory = styled.th<ListTableCategoryProps>`
  letter-spacing: -0.35px;
  font-weight: 300;
  padding: 17px 0;
  font-weight: 300;
  width: ${({ width }) => (width ? width : 'auto')};
  font-size: 14px;
  border-bottom: 1px solid #31363e;
`;

export const StyledTableBody = styled.tbody`
  tr {
    td {
      &:first-child {
        border-left: 2px solid transparent;
      }
    }

    &:hover {
      cursor: pointer;
      td {
        &:first-child {
          border-left: 2px solid #adde3a;
        }
      }
    }
  }
`;

export const StyledRow = styled.tr``;

export const StyledData = styled.td`
  background-color: #2c3037;
  height: 55px;
  font-size: 14px;
  text-align: center;

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
