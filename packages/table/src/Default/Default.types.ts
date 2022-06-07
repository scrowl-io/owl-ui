import * as bs from 'react-bootstrap';

export interface TableRowItem {
  [key: string]: string | number | boolean;
}

export interface TableColumnItem {
  label: string;
  field: string;
}

// export type TableColumns = Array<TableColumnItem> | [];

// export interface TableHeaderProps
//   extends React.TableHTMLAttributes<HTMLTableCellElement> {
//   columns: TableColumns;
// }

// export interface TableBodyProps
//   extends React.TableHTMLAttributes<HTMLTableElement> {
//   items: TableItems;
//   columns: TableColumns;
// }

// export interface TableRowProps
//   extends React.TableHTMLAttributes<HTMLTableRowElement> {
//   item: TableRowItem;
//   columns: TableColumnItem[];
// }

// export interface TableCellProps
//   extends React.TableHTMLAttributes<HTMLTableCellElement> {
//   children: React.ReactNode;
// }

export interface TableData {
  columns: TableColumnItem[];
  items: TableRowItem[];
}

export interface TableDefaultCommons {
  appearance?: 'Default' | 'Primary' | 'Secondary';
  prefix?: string;
  tableData: TableData;
  theme?: 'Default' | 'Dark';
}

export type TableDefaultProps = TableDefaultCommons & bs.TableProps;
