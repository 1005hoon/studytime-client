import React from 'react';
import {
  StyledCategory,
  StyledData,
  StyledListTable,
  StyledListTableContainer,
  StyledListTableHeader,
  StyledRow,
  StyledTableBody,
} from './styles';

interface ListTableProps {}
interface ListTableComposition {
  Header: React.FC;
  Category: React.FC<ListTableCategoryProps>;
  Row: React.FC<ListTableRowProp>;
  Body: React.FC;
  Data: React.FC;
}

const ListTable: React.FC<ListTableProps> & ListTableComposition = (props) => {
  return (
    <StyledListTableContainer>
      <StyledListTable>{props.children}</StyledListTable>
    </StyledListTableContainer>
  );
};

ListTable.Header = function ListTableHeader(props) {
  return <StyledListTableHeader>{props.children}</StyledListTableHeader>;
};

export interface ListTableCategoryProps {
  width?: string;
}
ListTable.Category = function ListTableCategory(props) {
  return <StyledCategory width={props.width}>{props.children}</StyledCategory>;
};

ListTable.Body = function ListTableBody(props) {
  return <StyledTableBody>{props.children}</StyledTableBody>;
};

export interface ListTableRowProp {
  onClick?: (e: any) => void;
}
ListTable.Row = function ListTableRow(props) {
  return (
    <StyledRow onClick={(e) => props.onClick && props.onClick(e)}>
      {props.children}
    </StyledRow>
  );
};

ListTable.Data = function ListTableData(props) {
  return <StyledData>{props.children}</StyledData>;
};

export default ListTable;
