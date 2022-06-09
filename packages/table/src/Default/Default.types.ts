import * as bs from 'react-bootstrap';

export interface TableRowItem {
  [key: string]: string | number | boolean;
}

export interface TableColumnItem {
  label: string;
  field: string;
}

export interface TableData {
  caption?: string;
  columns: TableColumnItem[];
  items: TableRowItem[];
}

export interface TableDefaultCommons {
  prefix?: string;
  tableData: TableData;
  theme?: 'Default' | 'Dark';
}

export type TableDefaultProps = TableDefaultCommons & bs.TableProps;
