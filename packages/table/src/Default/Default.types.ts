import React from 'react';

export type TableDefaultCommons = {
  appearance?: 'Primary' | 'Outline';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children: React.ReactNode;
};

export type TableDefaultProps = Partial<TableDefaultCommons> &
  React.DivHTMLAttributes<HTMLDivElement>;
