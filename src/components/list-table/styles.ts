import styled from 'styled-components/macro';
import { ListTableCategoryProps } from '.';

export const StyledListTableContainer = styled.div`
  display: table;
  width: 100%;
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
  text-align: left;
`;

export const StyledCategory = styled.th<ListTableCategoryProps>`
  padding: 17px 20px;
  width: ${({ width }) => (width ? width : 'auto')};
  border-bottom: 1px solid #31363e;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: -0.35px;
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
  height: 65px;
  padding: 10px 20px;
  font-size: 14px;
  letter-spacing: -0.47px;
  text-align: left;

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    padding-right: 20px;
    border-top-right-radius: 5px;
  }
`;
