import React from 'react';
import { HeaderColumn } from './elements/Header';
import { RowItem } from './elements/Row';

export type TableDefaultCommons = {
  appearance?: 'Default' | 'Primary' | 'Secondary';
  children: React.ReactNode;
  columns: HeaderColumn[];
  items: RowItem[];
  outline?: boolean;
  prefix?: string;
  theme?: 'Default' | 'Dark';
};

export type TableDefaultProps = Partial<TableDefaultCommons> &
  React.TableHTMLAttributes<HTMLTableElement>;
