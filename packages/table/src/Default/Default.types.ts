import React from 'react';

export interface TableRowItem {
  [key: string]: string | number | boolean;
}

export type TableItems = Array<TableRowItem> | [];

export interface TableColumnItem {
  label: string;
  field: string;
}

export type TableColumns = Array<TableColumnItem> | [];

export interface TableHeaderProps
  extends React.TableHTMLAttributes<HTMLTableCellElement> {
  columns: TableColumns;
}

export interface TableBodyProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  items: TableItems;
  columns: TableColumns;
}

export interface TableRowProps
  extends React.TableHTMLAttributes<HTMLTableRowElement> {
  item: TableRowItem;
  columns: TableColumns;
}

export interface TableCellProps
  extends React.TableHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export interface TableDefaultCommons {
  appearance?: 'Default' | 'Primary' | 'Secondary';
  children: React.ReactNode;
  columns: TableColumns;
  items: TableItems;
  outline?: boolean;
  prefix?: string;
  theme?: 'Default' | 'Dark';
}

export type TableDefaultProps = Partial<TableDefaultCommons> &
  React.TableHTMLAttributes<HTMLTableElement>;
