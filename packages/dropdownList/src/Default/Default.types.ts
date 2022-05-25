import React from 'react';

export interface DropDownContentItemProps {
  map: (item: DropDownContentItemProps, i: number) => Array<React.ReactNode>;
  length?: number;
  id: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any | undefined;
}

export interface DropDownContentContainerProps {
  label: string;
  selectedItem: string;
  items: DropDownContentItemProps;
}

export interface DropdownListDefaultCommons {
  appearance?: 'Primary' | 'Outline';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children: React.ReactNode;
  dropdown: DropDownContentContainerProps;
  items: DropDownContentItemProps;
}

export type DropdownListDefaultProps = Partial<DropdownListDefaultCommons> &
  React.AllHTMLAttributes<HTMLDivElement>;
