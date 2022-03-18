import React from 'react';

export type TableDefaultCommons = {
  appearance?: 'Default' | 'Primary' | 'Secondary';
  children: React.ReactNode;
  outline?: boolean;
  prefix?: string;
  theme?: 'Default' | 'Dark';
};

export type TableDefaultProps = Partial<TableDefaultCommons> &
  React.TableHTMLAttributes<HTMLTableElement>;
