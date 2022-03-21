import React from 'react';
import type { TableDefaultProps } from '../Default/Default.types';

export type TableCellCommons = TableDefaultProps & {
  children: React.ReactNode;
};

export type TableCellProps = Partial<TableCellCommons>;
