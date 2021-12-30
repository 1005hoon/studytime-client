import React from 'react';
import {
  StyledCategory,
  StyledData,
  StyledListTable,
  StyledListTableHeader,
  StyledRow,
  StyledTableBody,
} from './styles';

interface ListTableProps {}
interface ListTableComposition {
  Header: React.FC;
  Category: React.FC<ListTableCategoryProps>;
  Row: React.FC;
  Body: React.FC;
  Data: React.FC;
}

const ListTable: React.FC<ListTableProps> & ListTableComposition = (props) => {
  return <StyledListTable>{props.children}</StyledListTable>;
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

ListTable.Row = function ListTableRow(props) {
  return <StyledRow>{props.children}</StyledRow>;
};

ListTable.Data = function ListTableData(props) {
  return <StyledData>{props.children}</StyledData>;
};

export default ListTable;
