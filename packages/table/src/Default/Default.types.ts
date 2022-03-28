import React from 'react';

export type TableRowItem = {
  [key: string]: string | number | boolean;
};

export type TableItems = Array<TableRowItem>;

export type TableColumnItem = {
  label: string;
  field: string;
};

export type TableColumns = Array<TableColumnItem>;

export type TableHeaderProps =
  React.TableHTMLAttributes<HTMLTableCellElement> & {
    columns: TableColumns;
  };

export type TableBodyProps = React.TableHTMLAttributes<HTMLTableElement> & {
  items: TableItems;
  columns: TableColumns;
};

export type TableRowProps = React.TableHTMLAttributes<HTMLTableRowElement> & {
  item: TableRowItem;
  columns: TableColumns;
};

export type TableCellProps = React.TableHTMLAttributes<HTMLTableCellElement> & {
  children: React.ReactNode;
};

export type TableDefaultCommons = {
  appearance?: 'Default' | 'Primary' | 'Secondary';
  children: React.ReactNode;
  columns: TableColumns;
  items: TableItems;
  outline?: boolean;
  prefix?: string;
  theme?: 'Default' | 'Dark';
};

export type TableDefaultProps = Partial<TableDefaultCommons> &
  React.TableHTMLAttributes<HTMLTableElement>;
