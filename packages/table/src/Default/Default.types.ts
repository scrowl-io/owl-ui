import React from 'react';

export type TableDefaultCommons = {
  appearance?: 'Default' | 'Primary';
  theme?: 'Default' | 'Dark';
  prefix?: string;
  children: React.ReactNode;
};

export type TableDefaultProps = Partial<TableDefaultCommons> &
  React.TableHTMLAttributes<HTMLTableElement>;
