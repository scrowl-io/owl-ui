import React from 'react';

export interface DropDownContentItemProps {
  map(arg0: (item: DropDownContentItemProps) => JSX.Element): React.ReactNode;
  id: string | number | undefined;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any | undefined;
}

export interface DropDownContentContainerProps {
  label: string;
  selectedItem: string;
  items: DropDownContentItemProps;
}

export interface DropdownMenuDefaultCommons {
  appearance?: 'Primary' | 'Outline';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children?: JSX.Element | JSX.Element[];
  dropdown: DropDownContentContainerProps;
  items: DropDownContentItemProps;
}

export type DropdownMenuDefaultProps = Partial<DropdownMenuDefaultCommons> &
  React.AllHTMLAttributes<HTMLDivElement>;
