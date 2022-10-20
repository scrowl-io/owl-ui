import React from 'react';
import * as bs from 'react-bootstrap';

export type TableCellContents =
  | string
  | React.ReactElement
  | JSX.Element
  | undefined;

export interface TableItem {
  [key: string]: TableCellContents;
}

export interface TableColumn {
  label: string;
  field: string;
}

export interface TableData {
  caption?: string;
  columns: Array<TableColumn>;
  items: Array<TableItem>;
}

export interface TableCellCommons {
  header: string;
}

export type TableCellProps = TableCellCommons &
  React.AllHTMLAttributes<HTMLTableCellElement>;

export interface TableRowCommons {
  columns: Array<TableColumn>;
  item: TableItem;
}

export type TableRowProps = TableRowCommons &
  React.AllHTMLAttributes<HTMLTableRowElement>;

export interface TableBodyCommons {
  columns: Array<TableColumn>;
  items: Array<TableItem>;
}

export type TableBodyProps = TableBodyCommons &
  React.AllHTMLAttributes<HTMLTableElement>;

export interface TableHeaderCommons {
  columns: Array<TableColumn>;
}

export type TableHeaderProps = TableHeaderCommons &
  React.AllHTMLAttributes<HTMLTableCellElement>;

export interface TableDefaultCommons {
  prefix?: string;
  tableData: TableData;
  theme?: 'Default' | 'Dark';
  pxScale?: 'Sm' | 'Md' | 'Lg';
}

export type TableDefaultProps = TableDefaultCommons & bs.TableProps;
